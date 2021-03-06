# Plot.ly Homework - Belly Button Biodiversity

## Requirements & Summary

This project required the use of HTML, CSS, and Javascript. 

In this assignment, we built an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

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

4. To display the sample metadata, i.e., an individual's demographic information. I used each key-value pair from the metadata JSON object.

![hw](Images/hw03.png)

6. Lastly, I had to update all of the plots and demographic information any time that a new sample is selected from the dropdown menu.


### About the Data

Hulcr, J. et al.(2012) _A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable_. Retrieved from: [http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/](http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/)
