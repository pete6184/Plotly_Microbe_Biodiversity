// Create function for plot graphs
// function init(sample) {

    // Use the D3 library to read in samples.json.
    let dataSet = d3.json('data/samples.json').then(data => {
        console.log(data);
    });

    // Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    // Use sample_values as the values for the bar chart.
    // Use otu_ids as the labels for the bar chart.
    // Use otu_labels as the hovertext for the chart.

//     Object.entries(sample).forEach(function ([key, value]) {
        
//     })

    let values = dataSet.samples.sample_values.slice(0,10);
    let labels = dataSet.samples.otu_ids.slice(0,10);
    let hovertext = dataSet.samples.otu_labels.slice(0,10);

//     const trace1 = {
//         x: values,
//         y: labels,
//         text: hovertext,
//         type: 'bar',
//         orientation: 'h'
//     };

//     const barData = [trace1];

//     const layout = {
//         title: "Top 10 OTUs found",
//         // xaxis:
//         // yaxis:
//     };

//     // plot out bar chat
//     Plotly.newPlot('bar', barData, layout);



//     });

// };


    // Create a bubble chart that displays each sample.
    // Use otu_ids for the x values.
    // Use sample_values for the y values.
    // Use sample_values for the marker size.
    // Use otu_ids for the marker colors.
    // Use otu_labels for the text values.






    // Display the sample metadata, i.e., an individual's demographic information.










    // Display each key-value pair from the metadata JSON object somewhere on the page.







    // Update all of the plots any time that a new sample is selected.
    // function updatePlotly() {
    //     console.log('Testing button')
    // }
    // d3.select('#selDataset').on('change', updatePlotly);






    // init();