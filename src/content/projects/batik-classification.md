---
title: Batik Motif Classification
description: Comparing hyperparameter tuning methods and optimizers on MobileNetV2 to classify 13 Indonesian batik motifs, deployed as a Streamlit app
github: https://github.com/MRafli43/batik-motif-classification
---

![SIBIMO Interface](https://mraflisampurna.vercel.app/images/projects/batik/SIBIMO.png)

## Overview

Batik motif recognition is a tricky computer vision problem — patterns like Kawung, Parang, and Mega Mendung can share similar textures, colors, and geometric structures, making manual identification inconsistent even for enthusiasts. This project builds an image classification system that identifies **13 Indonesian batik motifs** using **MobileNetV2** transfer learning, with a heavy focus on finding the *right* training configuration rather than just throwing a model at the data.

The core of the project is a systematic comparison of **4 hyperparameter tuning methods** across **4 optimizers** (16 combinations total), followed by a **two-phase training strategy** (transfer learning → fine-tuning) and deployment as a working web app.

---

## The Problem

Standard CNN architectures (VGG16, ResNet50, GoogLeNet) perform well on batik classification but are computationally heavy — slow inference, large parameter counts, and high hardware requirements. That's a real constraint if the end goal is a tool people can actually use, not just a notebook result.

On top of that, model performance for lightweight architectures like MobileNetV2 is highly sensitive to *how* they're trained. Learning rate, batch size, dropout rate, and optimizer choice can make or break convergence — yet most projects tune these somewhat arbitrarily. This project treats that tuning process as the main research question, not an afterthought.

**Research questions:**
1. What's the optimal hyperparameter tuning method + optimizer combination for training MobileNetV2 on batik motifs?
2. How well does the resulting model actually perform — accuracy, stability, and computational cost?
3. Can that model be packaged into something usable by non-technical users?

---

## Dataset

2,462 batik images across 13 classes, combined from two Kaggle datasets (BatikSnap, Batik Indonesia) and supplementary images scraped from Google Images to fill in gaps.

| Class | From Google | From Kaggle | Total |
|---|---|---|---|
| Parang | 215 | 419 | 634 |
| Mega Mendung | 132 | 470 | 602 |
| Kawung | 200 | 438 | 638 |
| Betawi, Bokor Kencor, Buketan, Dayak, Jlamprang, Liong, Singo Barong, Sekar Jagad, Sido Luhur, Sido Mukti | – | ~57–60 each | 588 |

The three main motifs (Kawung, Parang, Mega Mendung) are noticeably overrepresented — a class imbalance that's addressed later through stratified sampling.

---

## Methodology

**Preprocessing**
- Resize all images to 224×224 (matching MobileNetV2's ImageNet-pretrained input) and keep them in RGB — color is a defining feature of batik motifs, so no grayscale conversion.
- Data augmentation: rotation, horizontal flip, width/height shift, and zoom to improve generalization and reduce overfitting risk on the smaller motif classes.

**Iterative stratified sampling**
- Test set locked upfront and held out completely.
- On each training iteration, 75% of the remaining train-validation pool is stratified-sampled, then split 80:20 into train/validation — repeated across iterations to check how consistent the model's performance is, not just a single lucky split.

**Two-phase training**
- Phase 1 (transfer learning): MobileNetV2 initialized with ImageNet weights, base layers frozen, only the new classification head (Global Average Pooling → Dense/ReLU → Batch Norm → Dropout → Softmax) trained.
- Phase 2 (fine-tuning): selected base layers unfrozen and trained at a lower learning rate to adapt learned features specifically to batik textures.

**Hyperparameter tuning — 4 methods × 4 optimizers**
Search space: learning rate {0.001, 0.01}, batch size {16, 32}, dropout rate {0.2, 0.3, 0.5}, tested against Adam, SGD, RMSprop, and Adagrad.

- **Grid Search** — exhaustively tests every combination in the search space.
- **Random Search** — samples a fixed number of random combinations; cheaper, often competitive.
- **Bayesian Optimization** (via Keras Tuner) — builds a surrogate probabilistic model of validation accuracy to intelligently pick the next configuration to try.
- **Particle Swarm Optimization (PSO)** — treats the search space as continuous, with a swarm of particles converging toward the best-performing region based on personal-best and swarm-best positions.

---

## Results

**Best configuration: Bayesian Optimization + Adam**
- Learning rate 0.001, batch size 32, dropout 0.2
- Mean validation accuracy: **90.85%**, mean validation loss: **0.3812**

Bayesian Optimization consistently converged on low learning rates (0.001) and a batch size of 32 as the most stable setup — larger batches produced more consistent results across iterations than batch size 16.

**Final test set evaluation:**
- Accuracy: **92.05%**
- Weighted precision: 0.925 · weighted recall: 0.920 · weighted F1: 0.919

The gap between train and test performance stayed reasonably tight, suggesting the model generalized rather than memorized. Minor classes like Bokor Kencor, Liong, Sekar Jagad, Sido Mukti, and Singo Barong actually hit perfect precision/recall — likely because they're visually distinct. The main error sources were **Betawi**, **Dayak**, and **Jlamprang**, which share more structural similarity with other motifs, dragging their recall down to the 0.50–0.89 range.

---

## Deployment — SIBIMO

The final model is wrapped in a Streamlit app (**SIBIMO**) so anyone can upload a batik photo and get an instant prediction — no code required.

- Drag-and-drop image upload (JPG/PNG)
- Real-time motif prediction with confidence score
- Per-class confidence breakdown chart, so the prediction isn't a black box

[**Try SIBIMO →**](https://app-app-dkgt3s4zmwem8sfk8flbva.streamlit.app/)

---

## Tools & Technologies

- **TensorFlow / Keras** — model development and training
- **MobileNetV2** — transfer learning backbone
- **Keras Tuner** — Bayesian Optimization implementation
- **Python** — data processing and experimentation
- **Streamlit** — deployment as an interactive web app

---

## What I'd Explore Next

- Expand beyond 13 classes / add more images per minor class to strengthen generalization on visually similar motifs
- Investigate why Betawi, Dayak, and Jlamprang are harder to separate — possibly attention-based visualization (Grad-CAM) to see what the model is actually keying on
- Compare inference latency across tuning methods, since Bayesian Optimization's better accuracy comes at a noticeably higher search cost than Random Search