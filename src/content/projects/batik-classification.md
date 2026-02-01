---
title: Batik Motif Classification (MobileNetV2)
---

## Problem

Batik motifs exhibit complex visual patterns with high inter-class similarity, making image-based classification a challenging task.  
This project aims to build an accurate and efficient **batik motif classification system** capable of recognizing traditional Indonesian batik patterns from images.

## Dataset

The dataset consists of **2,462 batik images** categorized into **13 motif classes**, including Kawung, Parang, Mega Mendung, and others.

The class distribution is relatively balanced, with several dominant classes.

![Batik Class Distribution](/images/projects/batik/distribution.png)

Understanding this distribution is crucial to prevent class bias during training and evaluation.

## Data Preprocessing

Key preprocessing steps include:
- Resizing images to **224×224**
- Pixel normalization
- Data augmentation (rotation, zoom, shift, horizontal flip)
- Stratified train-test split to preserve class proportions

These steps improve robustness and generalization to unseen batik patterns.

## Model Architecture

The model is based on **MobileNetV2**, pretrained on ImageNet, leveraging **transfer learning** for efficient feature extraction.

Architecture highlights:
- MobileNetV2 backbone
- Global Average Pooling
- Batch Normalization
- Dropout regularization
- Softmax output layer (13 classes)

MobileNetV2 was selected due to its strong performance-to-efficiency ratio, making it suitable for lightweight deployment.

## Training & Hyperparameter Optimization

Training was conducted in two phases:
1. Training the classification head with frozen backbones
2. Fine-tuning the last layers for domain adaptation

Multiple optimizers and tuning strategies were evaluated:
- Adam, Adagrad, RMSprop, SGD
- Grid Search, Random Search, Bayesian Optimization, Particle Swarm Optimization (PSO)

![Validation Accuracy by Optimizer & Tuning Method](/images/projects/batik/optimizer-tuning.png)

Bayesian Optimization combined with **Adam optimizer** produced the most stable and highest validation accuracy.

## Evaluation & Results

The best-performing model achieved a **test accuracy of ~92%**, demonstrating strong generalization performance.

### Classification Report (Test Set)

The classification report shows balanced precision and recall across most motif classes, with misclassifications primarily occurring between visually similar patterns.

![Classification Report](/images/projects/batik/classification-report.png)

Key observations:
- High weighted F1-score indicates consistent performance across classes
- Minority classes are still classified reliably
- Errors are concentrated in motifs with subtle visual differences

## Deployment

The final model was deployed as an interactive **Streamlit web application**, allowing users to upload batik images and receive real-time predictions with confidence scores.

![User Interface](/images/projects/batik/SIBIMO.png)

**Live Demo:**  
[**SIBIMO**](https://app-app-dkgt3s4zmwem8sfk8flbva.streamlit.app/)

## Key Takeaways

- Transfer learning significantly improves image classification with limited data
- Hyperparameter optimization has a substantial impact on model performance
- MobileNetV2 enables efficient and deployable computer vision systems
- The project demonstrates a complete ML pipeline from data to deployment
