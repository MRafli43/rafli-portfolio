---
title: LSTM-based Sentiment Analysis
---

## Problem

Social media text data is inherently noisy, unstructured, and sequential, making sentiment classification a challenging task.  
This project aimed to build a robust sentiment analysis model capable of classifying tweets into **positive**, **neutral**, and **negative** sentiment categories.

## Data

The dataset consists of **27,481 tweets** collected from Twitter (X), labeled into three sentiment classes.  
After initial inspection, missing values were removed, and text data was cleaned through lowercasing, removal of non-alphabetic characters, and stopword elimination.

![Sentiment Distribution](/images/projects/lstm-sentiment/distribution.png)

The sentiment distribution shows a moderate class imbalance, with positive sentiment dominating the dataset, followed by neutral and negative classes.

## Methodology

The workflow began with **data preprocessing**, including tokenization and sequence padding to standardize input length.  
Sentiment labels were transformed using **one-hot encoding**, enabling multi-class classification.

For feature representation, cleaned text sequences were converted into numerical form using tokenization, followed by padding based on the 95th percentile of sequence length to preserve most contextual information.

## Model Architecture & Training

A deep learning model based on **Long Short-Term Memory (LSTM)** was implemented using TensorFlow.  
The dataset was split into **80% training** and **20% validation** data.

The LSTM architecture was designed to capture long-range dependencies in textual sequences, making it suitable for sentiment analysis tasks involving contextual understanding.

The model was trained for **20 epochs**, with accuracy and loss monitored on both training and validation sets.

![Model Accuracy Curve](/images/projects/lstm-sentiment/accuracy.png)

![Model Loss Curve](/images/projects/lstm-sentiment/loss.png)

## Evaluation & Results

The trained LSTM model achieved an overall accuracy of **93.34%** on the validation set.  
Evaluation using precision, recall, and F1-score demonstrated balanced performance across all sentiment classes, indicating strong generalization capability.

While both LSTM and CNN architectures were explored during experimentation, the LSTM model produced slightly superior overall accuracy and was selected as the final model.

## Key Takeaways

- Effective text preprocessing significantly impacts model performance in NLP tasks.
- LSTM models are well-suited for sequential text classification problems.
- Proper evaluation using multiple metrics is essential to assess model reliability beyond accuracy alone.
