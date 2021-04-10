# Plot.ly Homework - Belly Button Biodiversity

## Requirements & Summary

This project required me to use HTML, CSS, and Javascript. The biggest challenge with this challenge was getting all of the elements to fire when a new drop down selection was chosen.  I was able to get all of the graphs to display properly but had to rework the code to reflect the change in test subject. 

In this assignment, we buildt an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Step 1: Plotly

1. First I used the D3 library to read in `samples.json`.

2. Then created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

* I used `sample_values`, `otu_ids`, and `otu_labels` as the data for the chart.

  ![bar Chart](Images/hw01.png)

3. Next, I created a bubble chart that displays each sample using:
 
  * `otu_ids` for the x values.

  * `sample_values` for the y values.

  * `sample_values` for the marker size.

  * `otu_ids` for the marker colors.

  * `otu_labels` for the text values.

![Bubble Chart](Images/bubble_chart.png)

4. In order to display the sample metadata, i.e., an individual's demographic information. I used each key-value pair from the metadata JSON object.

![hw](Images/hw03.png)

6. Lastly I had to pdate all of the plots and demographic information any time that a new sample is selected from the dropdown menu.

![hw](Images/hw02.png)
