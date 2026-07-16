---
title: Twitter Sentiment Classification with LSTM & CNN
description: Comparing LSTM and CNN deep learning models to classify sentiment in 27,481 tweets as part of content moderation research on Twitter/X
---

<img src="/images/projects/lstm-sentiment/sentiment-hero.png" alt="Twitter sentiment analysis" style="display: block; margin: 1.5rem auto; width: 60%; max-width: 700px; height: auto; border-radius: 12px;" />

## Overview

Twitter/X sees millions of posts a day, and a meaningful share of that content leans negative — from casual complaints to language that can escalate into harassment or hate speech. This project builds and compares two deep learning approaches, **LSTM** and **CNN**, to automatically classify tweet sentiment (positive, neutral, negative), as a step toward automated content moderation and negative-content filtering.

Built as a 6-member team project (Batch MBKM 6) during the **Hacktiv8 IBM SkillsBuild for AI & Cybersecurity** program under Kampus Merdeka.

### Outline:
- Problem Statement & Background
- Result Summary of the Project
- Key Takeaways
- Process
- Tools & Technologies
- The Project

---

## Problem Statement & Background

**Background:** Twitter/X had over 18.45 million users as of 2022, and hate speech / abusive language on the platform is a recurring concern — left unchecked, it can normalize discrimination and fuel social conflict. Detecting this kind of content early helps keep the platform safer, especially for younger users.

**Problem Statement:** Apply NLP techniques to build a classification model that can identify and categorize tweet sentiment, as a building block toward automatically flagging negative content on Twitter/X.

**Dataset:** [Twitter Tweets Sentiment Dataset](https://www.kaggle.com/datasets/yasserh/twitter-tweets-sentiment-dataset) (Kaggle) — 27,481 tweets, each labeled positive, neutral, or negative.

---

## Result Summary of the Project

Two architectures were built and compared under identical preprocessing and an 80:20 train/validation split, trained for 20 epochs:

| Model | Accuracy | Weighted Precision | Weighted Recall | Weighted F1 |
|---|---|---|---|---|
| **LSTM** | **93.34%** | 0.93 | 0.93 | 0.93 |
| CNN | 92.85% | 0.93 | 0.93 | 0.93 |

**LSTM** came out on top overall, with especially strong performance on the neutral and positive classes (F1-score 0.94 each), though it was slightly weaker than CNN on negative-class precision. This tracks with what you'd expect architecturally — LSTM is built to capture longer-range context and word dependencies, while CNN is stronger at picking up local features in short text, which is why CNN edged out LSTM specifically on the negative class.

Both models cleared 92%+ accuracy, which was enough to validate that either architecture could realistically support a content-filtering pipeline — with LSTM as the stronger default choice.

---

## Key Takeaways

**What we learned:**
- How to build a complete NLP pipeline from raw tweet text to a working sentiment classifier, including tokenization, padding, and one-hot label encoding
- Head-to-head, LSTM and CNN aren't just "better vs. worse" — each has a class-level strength (LSTM on neutral/positive, CNN on negative precision) worth considering depending on what a content-moderation system needs to catch

**What could be improved:**
- The dataset (27,481 tweets) is moderate in size and English-only, which limits how well the model would generalize to Indonesian tweets or more recent slang/informal language
- No pretrained word embeddings (e.g. GloVe) were used — the embedding layer was trained from scratch, which likely left some performance on the table given the modest average tweet length (7.24 words)

**What we'd do differently next time:**
- Try transformer-based approaches (e.g. IndoBERT/DistilBERT) as a stronger baseline to compare against LSTM/CNN
- Incorporate pretrained embeddings to improve generalization on shorter, sparser tweets

---

## Process

- Load the dataset and clean it — drop missing values, lowercase text, strip non-alphabetic characters via regex, remove stopwords
- Exploratory Data Analysis — average word count per tweet (7.24 words), vocabulary size (27,770 unique words), word cloud, and sentiment class distribution
- Feature engineering — one-hot encode the 3 sentiment labels, tokenize text, and pad sequences to a uniform length
- Split data 80:20 into training and validation sets
- Build and train both an LSTM model (Embedding → LSTM → LSTM → Dense) and a CNN model (Embedding → Conv1D → MaxPooling1D → Conv1D → GlobalMaxPooling1D → Dense → Dense) for 20 epochs
- Evaluate both models using precision, recall, F1-score, and accuracy, and compare results class-by-class

---

## Tools & Technologies

- **Python** — data preprocessing and experimentation
- **TensorFlow / Keras** — LSTM and CNN model development and training
- **NLTK** — stopword removal and text preprocessing
- **NLP techniques** — tokenization, sequence padding, one-hot encoding
