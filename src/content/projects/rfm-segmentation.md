---
title: RFM Customer Segmentation
description: Customer segmentation using RFM analysis
github: https://github.com/MRafli43/
---

## Problem  

Understanding customer behavior is critical for designing effective marketing and retention strategies.  
This project focuses on **segmenting customers based on purchasing behavior** using **RFM analysis (Recency, Frequency, Monetary)** to distinguish active and inactive customers and support data-driven business decisions.

## Data

The analysis was conducted on **50,705 customer transaction records**, combining customer and transaction datasets.

Key preprocessing steps included:
- Handling missing values and duplicate records
- Converting transaction dates into datetime format
- Aggregating transaction data at the customer level

RFM features were engineered as follows:
- **Recency**: Number of days since the last transaction
- **Frequency**: Total number of transactions
- **Monetary**: Total transaction value

All numerical features were normalized using **Min-Max Scaling** to ensure balanced clustering.

## Exploratory Data Analysis

Exploratory analysis revealed clear behavioral patterns:
- **Frequency and Monetary** show a strong positive correlation
- **Recency** is negatively correlated with both spending and transaction frequency

Customer acquisition trends indicate steady growth from 2016 to 2021, followed by a decline in 2022, suggesting potential changes in external factors or business strategy.

![New User Growth Distribution](/images/projects/rfm-segmentation/user-growth.png)

## Modeling Approach

Two clustering algorithms were evaluated:
- **K-Means** as a baseline approach
- **K-Medoids** for improved robustness against outliers

Model performance was evaluated using multiple clustering metrics:
- Silhouette Score
- Calinski-Harabasz Index
- Davies-Bouldin Index

Based on overall performance and cluster stability, **K-Medoids** was selected as the final model.

## Cluster Visualization

Customer clusters were visualized in a **3D RFM space**, illustrating clear separation between segments based on recency, frequency, and monetary value.

![RFM Cluster Distribution](/images/projects/rfm-segmentation/rfm-cluster.png)

## Evaluation & Results

The final clustering model achieved the following performance metrics:

| Metric | Value |
|------|------|
| Number of Observations | 50,705 |
| Silhouette Score | **0.6965** |
| Calinski-Harabasz Score | **89,795.16** |
| Davies-Bouldin Score | **0.5705** |

These results indicate **well-separated and cohesive customer clusters**, suitable for business interpretation and decision-making.

## Business Interpretation

The model segmented customers into two primary groups:

- **Active Customers**  
  Customers with recent purchases, high transaction frequency, and high monetary value.

- **Inactive Customers**  
  Customers with longer recency periods, lower transaction frequency, and lower total spending.

This segmentation enables:
- Targeted loyalty programs for high-value customers
- Reactivation campaigns for inactive users
- More efficient allocation of marketing and promotional budgets

## Key Takeaways

- RFM-based clustering effectively captures customer purchasing behavior
- K-Medoids provides robust segmentation for transactional data with outliers
- Customer segmentation can directly inform marketing, retention, and personalization strategies
