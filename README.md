# Myopia in Children
![](images/josh-calabrese-glasses-unsplash.jpg)

## Live Website
https://mward95.github.io/Oculus_Prime/

## Table of Contents

- [Background](#background)
- [Dataset](#dataset)
- [Purpose and Predictions](#purpose)
- [Installation](#installation)
- [Extract, Transform, Load](#extract-transform-load)
- [Machine Learning](#machine-learning)
- [Findings](#findings)
- [Features](#features)
- [Presentation](#presentation)
- [Future Considerations](#future-considerations)
- [Credits](#credits)
- [Badges](#badges)


## Background

### What is Myopia? 
Myopia is nearsightedness, or the condition when the eye can see objects clearly up close but objects further away appear blurry. Myopia is a common condition that affects an estimated 25% of Americans. It is an eye focusing disorder, not an eye disease.

Myopia occurs when the light entering the eye does not align properly with the retina and the light rays focus in front of the retina instead of on it. This can be due to a couple of different factors including the length of the eye or the shape of the cornea. 

Myopia is often discovered in children when they are between ages 8 and 12 years old. Many children in this age bracket have an onset of eyestrain, headaches, squinting, and inability to see distant objects such as the smartboard at school. Myopia can peak during the teenage years when the body grows rapidly, but usually has little to no change during middle adulthood.

Mild myopia is called low myopia. Severe myopia is called high myopia. High myopia will usually stabilize between the ages of 20-30 years old. People with myopia have a higher risk of detached retina and those that suffer from high myopia have a higher risk of developing eye diseases such as glaucoma and cataracts. 

https://www.aao.org/eye-health/diseases/myopia-nearsightedness

## Dataset

The dataset we use in our exploratory data analysis is a subset from the Orinda Longitudinal Study of Myopia (OLSM). This dataset is specifically focusing on the development of myopia in children. Observations and ocular details of each participant is from his or her right eye. 

Study and data collection began in the school year of 1989-1990 and concluded in 2000-2001. There are 618 participants (rows) and 17 variables (columns) excluding the ID (primary key) or index. For each year listed in the data, it is the year observations for the participant began. The MYOPIC column indicates a 0 for a participant that did not develop myopia and a 1 for participants who developed myopia within a 5-year re-check of their original exam. The age range for participants is from 5 years old to 9 years old. Each participant’s gender is specified by a 0 for male and a 1 for female. 

Columns of data about eye shape, size and anatomy include:

- SPHEQ - Spherical Equivalent Refraction which is a measure of the eye's effective focusing power. 

- AL – Axial Length measured in millimeters (mm) it is the length of the eye from front to back

- ACD - Anterior Chamber Depth measured in millimeters (mm) the length from front to back of the aqueous-containing space of the eye between the cornea and the iris

- LT - Lens Thickness measured in millimeters (mm) the length from front to back of the crystalline lens.

- VCD - Vitreous Chamber Depth measured in millimeters (mm) it’s the length from front to back of the aqueous-containing space of the eye in front of the retina. 

The number of hours per week a child spent doing physical activity including sports or outdoor activities outside of school is listed under SPORTHR. READHR is the number of hours per week a child spent reading for enjoyment outside of school. COMPHR is the number of hours per week a child spent playing computer and/or video games or working on a computer outside of school. STUDYHR is the number of hours a child spent studying or reading for school assignments outside of school. TVHR is the number of hours a child spent watching television per week. 
DIOPTERHR is the composite of near-sight/near-work activities in hours per week calculated as DIOPTERHR = 3× (READHR + STUDYHR) + 2 × COMPHR + TVHR

MOMMY indicates a 0 if the child’s mother did not have myopia and 1 if the child’s mother had myopia.
DADMY indicates a 0 if the child’s father did not have myopia and a 1 if the child’s father had myopia.

Information on family history and visual activities were collected yearly in a survey completed by a parent or guardian.

Source: Hosmer, D.W., Lemeshow, S. and Sturdivant, R.X. (2013) Applied Logistic Regression: Third Edition

![](images/human-eye2.jpg)

[back to top](#table-of-contents)

## Purpose

The purpose of the exploration of this medical dataset is to get as close to FDA accuracy standards as possible with our machine learning models. Our experiments will use supervised and unsupervised machine learning to build and test models with the goal of getting an accuracy from 90-95%

## Predictions

We have two predictions for supervised machine learning models. We hypothesize that Random Forest Classification and Logistic Regression models will perform with high accuracies. A Random Forest model should be able to correctly bin the data due to uncorrelated features categorizing the input. Also, for unsupervised machine learning, we hypothesize that a Neural Network model will perform with the highest accuracy and provide the best model since we will be able to fit and hypertune it.

![](images/david-travis-glasses-unsplash.jpg)

## Installation

A few programs, accounts, setups, dependencies and libraries need to be created and in place before running code

Programs:
- VS Code (or similar code editing software)

Accounts needed:
- Amazon AWS account
- Google 

Setups:
- AWS:
    - S3
- Google:
    - Google Colaboratory (open through Google Drive)

Tools & languages: PySpark, Google Colab, SQL, JavaScript, Plotly, HTML, pandas, pathlib, matplotlib, Seaborn, Sci-Kit Learn

[back to top](#table-of-contents)

## Extract-Transform-Load

1. Clone this repository to your machine 

Create your S3 bucket

2. Open AWS (https://aws.amazon.com/) and sign in to your account (make sure you have root user selected)
3. Find and click S3 in the the Services or search for S3 in the search bar and select it
4. Click 'Create bucket'

General Configuration

5. Name your bucket (anything you like but we chose 'myopia' for this project) under 'Bucket name' it has to be a name that is not in use
6. Leave 'AWS Region' as is do not reset (only reset if it does not match what you chose when you created your account)

Object Ownership

7. ACLs disabled

Block Public Access settings for this bucket

8. Uncheck 'Block *all* public access'
9. It will pop up with a small warning symbol underneath, read the contents 
10. Check the box for 'I acknowledge that the current settings might result in this bucket and the objects within becoming public.' to continue 

Bucket Versioning

11. Disable

Tags

12. Tags are optional

Default encryption

13. Disable

Advanced settings

14. Object lock - Disable

15. Click Create Bucket

Upload CSV to bucket

1. Click the name of your bucket and then click Upload

2. Click Add files

3. Add the CSV from its location on your machine

4. Click Upload and it will display an upload status and then you can click Close

5. Now the bucket is up and running in the AWS cloud and ready to be accessed

Google Colaboratory

1. Through your Google Drive open a new page in Google Colaboratory (Google Colab for short) 

2. Click the '+ New' --> Scroll to 'More' --> Click Google Colaboratory or if you do not have it added go to 'Connect More Apps' and you can type it in the search bar and add it to your list from there

3. After opening a new page in Google Colab go to 'File' --> 'Upload notebook' --> 'Choose File'

4. Find where you saved the repository and click to add the Myopia.ipynb then click 'Open'

5. All libraries and dependencies are loaded, run the cells until you get to cell 4 where you see we are reading in the CSV file from our S3 bucket

Our code looks like the following 
```
url = "https://myopia.s3.amazonaws.com/Copy_of_myopia.csv"
```
It is possible you will need to change where we have 'myopia' to the specific name of your S3 bucket, also you may need to change where it says 'Copy_of_myopia.csv' to the name of the CSV you loaded into your bucket

After altering the names (if you need to) run the code and the first 10 rows of the CSV will appear in dataframe form.

6. Running the next line will inpect the data to look to drop duplicates and incomplete rows

7. Running the next cell ``` df.printSchema() ``` will examine the schema

8. After looking at the data we conclude that we don't need to drop any additional rows or columns from here

9. We can now save it as a JSON file by running the next line
```
df.write.json("users_json.json")
```
10. There is additional code below this line you can run if you wish to save this data into a database through AWS. Ultimately we did not need this step but it is available and works with the postgres option and will run on PgAdmin

11. You can change the name of the JSON file after saving it, also it may need to be cleaned and/or corrected in VS Code, you can use the 'Find and Replace' tool to find all of the ``` } ``` and replace with ``` }, ``` also you will need an opening bracket ```  [   ``` and a closing bracket ```  ]  ``` at the beginning and end of the JSON 

12. Now you are ready to start machine learning!

[back to top](#table-of-contents)

## Machine Learning

- Start with the 'Machine_Learning' folder
- We will run all of the .ipynb files in Google Colab
- Order to run notebooks: Supervisedlearning0, SupervisedLearning, SupervisedLearning-LR-hp, SupervisedLearning-RF-hp, UnsupervisedLearning, Myopia_nn1, Unsupervised_Learn-KMeans-hp, Unsupervised_Learn-KMeans-hp1, Unsupervised_Learn-DBSCAN-hp

<!-- - Supervised Learning 

1. 
-->

## Findings

### Supervised:

Logistic Regression:

- The model score was 92.7% accurate when using the Logistic Regression model.

- From what the model predicted, the confusion matrix validated the accuracy of the model.

Random Forest:

- This model gave the highest accuracy score of 93.5%.

- We iterated an n_estimater(number of trees in the random forest) we found that 30 was the best number for this model to get the best model score.The confusion matrix validated the accuracy of the model.

- The feature importance graph shows the most important relivant feature shows SPHEQ as the most important feature affecting the myopic outcome.

### Unsupervised:

- We tried 3 different models first k_means with PCA, then DBSCAN(Density-Based Spatial Clustering of Applications with Noise) and HDBSCAN(Hierarchical Density-Based Spatial Clustering of Applications with Noise)

- Since there was no score, the results are up to how the vizulation of the clustering looks

- From the elbow curve it resulted in 3 clusters

- DBSCAN - but this graph uses KNN (Nearest Neighbor- model) to estimate the best epsilon value to run DBSCAN

- Once we found the eps value through the knee estimation - we developed a for loop to see how min_samples varied the clustering for DBSCAN

- HDBSCAN - we made a loop to find out the best min_cluster_size visually

### Deep Learning with Neural Network

- First what was built manually was layers and neurons, that resulted in 87.7% accuracy.

- USE Keras-Tuner to optimize layers, neurons and activation model to improve model accuracy

- This was the result after using Keras-Tuner to optimize the layers:

    - val_accuracy: 87.1%
    - Best val_accuracy So Far: 89.7%
    - After another execution of code with hypertuning with tensorflow and tensorboard a final val_accuracy of 90.3% was attained

### Overall outcome for model accuracies:

Random Forest had the highest actual accuracy but overfit the data, Random Forest would be our secondary top choice for model use with future data

Logistic Regression had the highest accuracy score without overfitting and would be a primary candidate to use with more current and future myopia data

Neural Networks performed well but even after optimization and tuning it did not get above 90% accuracy score.


## Features

Interactive Plotly Graphs

![](images/algraph.png)
![](images/algraphboth.png)
![](images/algraphmomdad.png)

Tableau Dashboard

<div class='tableauPlaceholder' id='viz1661814434387' style='position: relative'><noscript><a href='#'><img alt='Dashboard 1 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;pr&#47;project4_16613880701480&#47;Dashboard1&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='project4_16613880701480&#47;Dashboard1' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;pr&#47;project4_16613880701480&#47;Dashboard1&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /></object></div>                

<!-- <script type='text/javascript'>                    var divElement = document.getElementById('viz1661814434387');                    var vizElement = divElement.getElementsByTagName('object')[0];                    if ( divElement.offsetWidth > 800 ) { vizElement.style.width='100%';vizElement.style.maxWidth='1320px';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';vizElement.style.maxHeight='887px';} else if ( divElement.offsetWidth > 500 ) { vizElement.style.width='100%';vizElement.style.maxWidth='1320px';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';vizElement.style.maxHeight='887px';} else { vizElement.style.width='100%';vizElement.style.height='1177px';}                     var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);               
</script>
-->

https://public.tableau.com/app/profile/matthew7863/viz/project4_16613880701480/Dashboard1

Live Website

https://mward95.github.io/Oculus_Prime/

![](images/website_screencap.png)

## Presentation

Presentation link:
https://docs.google.com/presentation/d/1qJccpOSY6FG3RJnVb3g6MI5MzRsUbIHjSul75_lc4Nc/edit?usp=sharing


## Future Considerations

In the future we would like to implement our code on a more current dataset. We would be interested in reusing, and recycling our machine learning code again on a larger, recent dataset. We think that using a larger dataset with not only more data points but also a higher percentage of positive outcomes, like a dataset with more outcomes of myopia being present, would help train our machine learning algorithms to have higher accuracy scores. A larger dataset might also remedy the overfitting that we were experiencing when running the Random Forest model. 

Since we were technically working with medical data, our future goal would be to aim for accuracy outcomes even higher than our goal during this run of our project. The FDA requires extremely high accuracy since predictions would be tied to a person's medical diagnosis and possible treatment options.

## Credits
Team members:

Mariama Diallo https://github.com/diallomt193 - Supervised, Unsupervised, and Neural Network coding, AWS, S3 bucket set up, set up Google Colab notebooks, executed visualizations for machine learning, researched and explains Logistic Regression and Random Forest, colaborated on final findings of machine learning algorithms

Matthew Ward https://github.com/mward95 - Field expertise in dataset content, gathered dataset information, HTML/CSS code wizardry, set up links and deployed live website, created and embedded Tableau data visualizations, colaborated on final findings of machine learning algorithms

Harshad Patil https://github.com/harsh-env - Machine Learning enthusiast, gathered extensive information on supervised and unsupervised machine learning alongside other deep learning techniques like neural networks and using keras tuner and tensorflow. Executed coding and notebooks for all machine learning algorithms. Javascript coding wizardry for bubble graphs and data visualizations

Stefanie Gagnon https://github.com/skgag1216 - Expert level README content builder, organized sequence of project, support for HTML coding, support with machine learning coding, created visual presentation with Google Slides, analyze final outcomes and future considerations for explanation 

## Resources

### Data:

Hosmer, D.W., Lemeshow, S. and Sturdivant, R.X. (2013) Applied Logistic Regression: Third Edition

Publisher: Wiley, Hoboken, New Jersey, 2013
These data are copyrighted by John Wiley & Sons Inc. and must be acknowledged and 
used accordingly. 

https://github.com/evagian/Myopia-study-classification-logistic-regression-R

### Images: 

(including images in slides)

https://unsplash.com/photos/qmnpqDwla_E?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink

https://www.freepik.com/free-vector/realistic-eye-anatomy-infographics_6405883.htm#page=3&query=human%20eye%20anatomy&position=0&from_view=search

https://unsplash.com/photos/aVvZJC0ynBQ?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink 

https://unsplash.com/photos/RdaKT5RtUk8

https://www.healthychildren.org/English/tips-tools/ask-the-pediatrician/Pages/avoid-eye-and-back-strain-from-the-computer.aspx

https://www.healthychildren.org/English/family-life/Media/Pages/Unhealthy-Video-Gaming.aspx

https://unsplash.com/photos/_kdTyfnUFAc (light bulb) 

https://unsplash.com/photos/qzgN45hseN0 (forest)

### Information:

https://www.aao.org

https://www.aao.org/eye-health/diseases/myopia-nearsightedness

https://www.healthychildren.org/English/tips-tools/ask-the-pediatrician/Pages/avoid-eye-and-back-strain-from-the-computer.aspx

https://www.healthychildren.org/English/family-life/Media/Pages/Unhealthy-Video-Gaming.aspx

https://www.geeksforgeeks.org/difference-between-supervised-and-unsupervised-learning/

https://towardsdatascience.com/silhouette-coefficient-validating-clustering-techniques-e976bb81d10c

https://towardsdatascience.com/understanding-random-forest-58381e0602d2

https://www.w3schools.com/python/python_ml_confusion_matrix.asp

https://www.youtube.com/watch?v=2NEu9dbM4A8&t=2s PCA

https://www.youtube.com/watch?v=JxgmHe2NyeY&t=21834s Complete Machine Learning

### Coding:

https://www.w3schools.com/

https://scikit-learn.org

https://scikit-learn.org/stable/modules/generated/sklearn.metrics.confusion_matrix.html


## Badges
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/mward95/Team_project_2/blob/main/MIT%20License/MIT%20License.txt)

[back to top](#myopia-in-children)
