---
title: Customer Segmentation Based on RFM
description: Segmenting 50,000+ e-commerce customers using RFM analysis and unsupervised clustering (K-Means, DBSCAN, Agglomerative, K-Medoids) to identify active vs. inactive customer groups
github: https://github.com/MRafli43/rfm-customer-segmentation
---

<img src="/images/projects/rfm-segmentation/rfm-hero.png" alt="Customer segmentation illustration" style="display: block; margin: 1.5rem auto; width: 70%; max-width: 700px; height: auto; border-radius: 12px;" />

## Overview

This project segments an e-commerce platform's customers using **RFM (Recency, Frequency, Monetary) analysis** combined with unsupervised clustering, to separate active, revenue-driving customers from inactive ones — so the business can act with targeted retention strategies instead of one-size-fits-all campaigns.

Built as a 6-person team capstone project (Team Hermes) during the **MSIB Startup Campus Independent Study program, Data Science Track**. I worked on the **Data Modelling team**, responsible for based modelling, hyperparameter tuning, and final model selection.

### Outline Overview Project:
- Business Understanding
- Result Summary of the Project
- Key Takeaways
- Process
- More Insights & Business Recommendation
- The Project

---

## Business Understanding

**Problem:**
The company operates an e-commerce platform and was seeing fluctuation in transaction-related variables, raising concern over an unstable revenue stream if the underlying customer behavior wasn't understood.

**Objective:**
Perform RFM (Recency, Frequency, Monetary) analysis to represent customer purchasing characteristics over a given period, then use this as the basis for segmenting customers by loyalty and value.

**Specific Questions:**
1. What customer segments emerge from the analysis?
2. Which clustering approach best separates customers in a way that's stable and business-interpretable?
3. What business treatment fits each resulting segment?

---

## Result Summary of the Project

**Data:** ±100,000 raw visitor/transaction observations (Aug 2016 – Jul 2022), aggregated into RFM features for **50,705 unique customers**.

**Approach:** 4 clustering algorithms were tested — K-Means, DBSCAN, Agglomerative Clustering, and K-Medoids — each evaluated with Silhouette Score, Calinski-Harabasz Score, and Davies-Bouldin Score.

| Model | Silhouette | Calinski-Harabasz | Davies-Bouldin |
|---|---|---|---|
| K-Means | 0.8259 | 84,571 | 1.0471 |
| DBSCAN | 0.8447 | 79,613 | 0.1569 |
| Agglomerative | 0.8507 | 43,115 | 0.1109 |
| **K-Medoids (selected)** | 0.6965 | **89,795** | 0.5705 |

**K-Medoids** was selected as the final model — it produced the highest Calinski-Harabasz score, and its 2-cluster output gave the clearest, most business-interpretable separation between customer types, even though its Silhouette score was lower than the alternatives.

**Segmentation Result — 2 clusters:**

| Segment | Customers | Recency | Frequency | Monetary |
|---|---|---|---|---|
| **Active Customers** | 41,862 | 0–540 days | 1–550 transactions | Rp 27K – 320M |
| **Inactive Customers** | 8,843 | 538–2,221 days | 1–4 transactions | Rp 30K – 14M |

The **Active Customers** segment dominates, accounting for ~82.6% of the customer base, and is responsible for the vast majority of transaction frequency and monetary value.

---

## Key Takeaways

**What did I learn?**
- How to translate raw transaction and customer data into RFM features usable for behavior-based segmentation
- How to compare multiple unsupervised clustering algorithms fairly using label-free evaluation metrics, and that the "best" score isn't always the most useful model for the business question at hand

**What mistakes or deficiencies were there?**
- Silhouette Score was the most commonly cited metric, but the final model choice (K-Medoids) didn't have the highest Silhouette Score among candidates — better documentation of *why* Calinski-Harabasz and cluster interpretability were prioritized over Silhouette would strengthen the analysis
- The 2-cluster result, while clean, is fairly coarse — it doesn't capture finer-grained loyalty tiers (e.g. new vs. champion customers) that a more granular segmentation could reveal

**What would I do differently next time?**
- Try scoring/tiering approaches (e.g. classic RFM quintile scoring) alongside clustering, to cross-validate whether the same active/inactive split holds
- Explore a higher cluster count with clearer business framing for each segment, rather than settling on 2 broad groups

---

## Process

- Import required libraries and load the customer & transaction datasets
- Data understanding and initial inspection of both datasets
- Data preparation: cleaning, handling missing values/duplicates/outliers, and feature engineering to build the RFM features
- Exploratory Data Analysis (EDA) on demographics and RFM distributions
- Based modelling: run K-Means, DBSCAN, Agglomerative, and K-Medoids without tuning to get a baseline read on the data
- Modelling: hyperparameter tuning per algorithm (Elbow Method for K-Means, grid search for K-Medoids, parameter search for DBSCAN & Agglomerative)
- Model evaluation and selection using Silhouette, Calinski-Harabasz, and Davies-Bouldin scores
- Model interpretation: profiling each resulting cluster by Recency, Frequency, and Monetary ranges

---

## More Insights & Business Recommendation

**For Inactive Customers (8,843 customers):**
1. Identify the reasons behind inactivity through research or direct outreach
2. Refresh marketing strategy with more personalized, relevant promotions
3. Offer targeted incentives to encourage customers back into transacting
4. Send special notifications/offers timed to trigger repeat purchases

**For Active Customers (41,862 customers):**
1. Focus on retention through loyalty rewards or recognition programs
2. Introduce new products/services based on this segment's high engagement
3. Sharpen marketing targeting around this segment's specific preferences
4. Ensure a consistently strong, responsive customer experience
5. Offer exclusive loyalty or membership programs to keep this segment engaged
