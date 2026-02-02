---
title: Batik Motif Classification
description: Batik motif identification system using deep learning with systematic hyperparameter tuning and deployment
github: https://github.com/MRafli43/
---

## Overview
This project focuses on identifying Indonesian batik motifs from images using deep learning.  
The core objective was to **systematically compare multiple optimizers and hyperparameter tuning methods**, then deploy the best-performing model as a usable identification system.

The final model was trained in **two phases** (transfer learning + fine-tuning) and deployed as an interactive web application.

---

# What I Built
- A batik image classification model using **MobileNetV2** with transfer learning  
- Comparison of **4 hyperparameter tuning methods** (Grid Search, Random Search, Bayesian Optimization, PSO)  
- Evaluation of multiple optimizers to find the most stable and accurate configuration  
- A **two-phase training strategy** to improve generalization and performance  
- An end-to-end **batik motif identification system** deployed for real-world usage  

---

## Tools & Technologies

- **TensorFlow / Keras** — model development and training  
- **MobileNetV2** — transfer learning backbone  
- **Python** — data processing and modeling  
- **Streamlit** — interactive web application for deployment  

---

## Live Demo:  
[**SIBIMO**](https://app-app-dkgt3s4zmwem8sfk8flbva.streamlit.app/) - Try ur batik!

![User Interface](/images/projects/batik/SIBIMO.png)
