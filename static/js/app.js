// Create function for plot graphs
function plotsData() {

    // Use the D3 library to read in samples.json.
    d3.json('./data/samples.json').then(data => {
        console.log(data);
        
        
        // Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
        // Use sample_values as the values for the bar chart.
        // Use otu_ids as the labels for the bar chart.
        // Use otu_labels as the hovertext for the chart.

        // Object.entries(sample).forEach(function ([key, value]))

        const values = data.samples.map(d => d.sample_values);
        let labels = data.samples.map(d => d.otu_ids);
        let hovertext = data.samples.map(d => d.otu_labels);
        console.log(values);
        console.log(labels);
        // console.log(hovertext);

    

            const trace1 = {
                x: values,
                y: labels,
                // text: hovertext,
                type: 'bar',
                orientation: 'h'
            };

            const barData = [trace1];

            const layout = {
                title: "Top 10 OTUs found",
                // xaxis:
                yaxis: { tickmode: 'linear'}
            };

            // plot out bar chat
            Plotly.newPlot('bar', barData, layout);
        });
};
plotsData();

        // Create a bubble chart that displays each sample.
        // Use otu_ids for the x values.
        // Use sample_values for the y values.
        // Use sample_values for the marker size.
        // Use otu_ids for the marker colors.
        // Use otu_labels for the text values.

        // const trace2 = {
        //     x: ,
        //     y: ,
        //     markerSize: ,
        //     markerColor: ,
        //     text:
        // };

        // const bubbleData = [trace2];

        // const layout2 = {
        //     xaxis: { title: "Bubble Title" }        
        // };

        // Plotly.newPlot('bubble', bubbleData, layout2);


        // Display the sample metadata, i.e., an individual's demographic information.
        // Display each key-value pair from the metadata JSON object somewhere on the page.
// function metaData(meta) {

    d3.json('data/samples.json').then(data => {

        let metaData = data.metadata;
        // console.log(metaData);
    

    })
// };





    // Update all of the plots any time that a new sample is selected.

    // // Call updatePlotly function when a change takes place to the DOM
    // d3.select('#selDataset').on('change', updatePlotly)

    // function updatePlotly() {

    //     let barChart = d3.event.target.value;
    //     console.log(barChart);

    //     if (barChart === 'default') {
    //         Plotly.restyle('bar', 'x', [defaultData]);
    //         Plotly.restyle('bar', 'y', [defaultData]);
    //     } else {
    //         Plotly.restyle('bar', 'x', [barCharts.filter(set => set.names === barChart).x]);
    //         Plotly.restyle('bar', 'y', [barCharts.filter(set => set.names === barChart).y]);
    //     }



    // init();