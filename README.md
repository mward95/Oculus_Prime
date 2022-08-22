# Myopia in Children
![](images/josh-calabrese-glasses-unsplash.jpg)
## Background

### What is Myopia? 
Myopia is nearsightedness, or the condition when the eye can see objects clearly up close but objects further away appear blurry. Myopia is a common condition that affects an estimated 25% of Americans. It is an eye focusing disorder, not an eye disease.

Myopia occurs when the light entering the eye does not align properly with the retina and the light rays focus in front of the retina instead of on it. This can be due to a couple of different factors including the length of the eye or the shape of the cornea. 

Myopia is often discovered in children when they are between ages 8 and 12 years old. Many children in this age bracket have an onset of eyestrain, headaches, squinting, and inability to see distant objects such as the smartboard at school. Myopia can peak during the teenage years when the body grows rapidly, but usually has little to no change during middle adulthood.

Mild myopia is called low myopia. Severe myopia is called high myopia. High myopia will usually stabilize between the ages of 20-30 years old. People with myopia have a higher risk of detached retina and those that suffer from high myopia have a higher risk of developing eye diseases such as glaucoma and cataracts. 

https://www.aao.org/eye-health/diseases/myopia-nearsightedness

### Dataset

The dataset we use in our exploratory data analysis is a subset from the Orinda Longitudinal Study of Myopia (OLSM). This dataset is specifically focusing on the development of myopia in children. Study and data collection began in the school year of 1989-1990 and concluded in 2000-2001. There are 618 participants (rows) and 17 variables (columns) excluding the ID (primary key) or index. For each year listed in the data, it is the year observations for the participant began. The MYOPIC column indicates a 0 for a participant that did not develop myopia and a 1 for participants who developed myopia within a 5-year re-check of their original exam. The age range for participants is from 5 years old to 9 years old. Each participant’s gender is specified by a 0 for male and a 1 for female. 

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

SOURCE: Hosmer, D.W., Lemeshow, S. and Sturdivant, R.X. (2013) Applied Logistic Regression: Third Edition

![](images\human-eye2.jpg)

## Table of Contents

- [Background](#background)
- [Installation](#installation)
- [Getting Started](#getting)
- [Extract, Transform, Load](#extract,transform,load)
- [Features](#features)
- [Credits](#credits)
- [Badges](#badges)

## Installation:

To be able to run the jupyter notebook and VS Code you will need the following imports

- BeautifulSoup
- Matplotlib
- Numpy
- Pandas
- Scipy.stats
- Seaborn
- Splinter
- Sqlachemy
- Plotly

## Installation:

To be able to run the jupyter notebook and VS Code you will need the following imports

- BeautifulSoup
- Matplotlib
- Numpy
- Pandas
- Scipy.stats
- Seaborn
- Splinter
- Sqlachemy
- Plotly

## Getting Started
You will need to run dashboard on your local server

1. Download the repo in your preferred manner.

2. In the folder app.py you will open the Inigrated terminal and use the following commands one at a time:

```
$ conda activate PythonData
```
```
$ python app.py
```
3. Click on the local server to bring up the website

![image]()


## Resources

Sources:

Data:

https://github.com/evagian/Myopia-study-classification-logistic-regression-R

Images:

https://unsplash.com/photos/qmnpqDwla_E?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink

https://www.freepik.com/free-vector/realistic-eye-anatomy-infographics_6405883.htm#page=3&query=human%20eye%20anatomy&position=0&from_view=search




Tools & languages: JavaScript, HTML, Python Flask, Jupyter Notebook, MongoDB


## Extract, Transform, Load:
1 – Extraction:
 

2 – Transformation:

3- Load:




 mongodb import and export data
 
 ![image]()
    
 Flask routes
 
 ![image]()
 

## Features


![image]()

scrape

![image]()

plotly graph

![image]()

## Future Considerations

In the future, we would implement

## Credits
Team members:

Mariama Diallo https://github.com/diallomt193

Matthew Ward https://github.com/mward95

Harshad Patil https://github.com/harsh-env

Stefanie Gagnon https://github.com/skgag1216

## Badges
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/mward95/Team_project_2/blob/main/MIT%20License/MIT%20License.txt)
