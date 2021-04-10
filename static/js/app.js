// Create function for plot graphs
function plotData(otu_id) {

    // Use the D3 library to read in samples.json.
    d3.json('data/samples.json').then(data => {
        console.log(data);
        
        
        // Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
        // Use sample_values as the values for the bar chart.
        // Use otu_ids as the labels for the bar chart.
        // Use otu_labels as the hovertext for the chart.

       
        
        var result = data.samples.filter(item => item.id == otu_id);
        let values = data.samples.map(d => d.sample_values.slice(0,10).reverse());
        let labels = data.samples.map(d => d.otu_ids.slice(0,10).reverse());
        let hovertext = data.samples.map(d => d.otu_labels.slice(0,10).reverse());
        console.log(values[0]);
        console.log(labels[0]);
        console.log(hovertext[0]);

    

            const trace1 = {
                x: result[0].sample_values.slice(0, 10).reverse(),
                y: result[0].otu_ids.slice(0, 10).reverse().map(label => 'OTU ' + label),
                text: result[0].otu_labels.slice(0,10).reverse(),
                type: 'bar',
                orientation: 'h'
            };

            const barData = [trace1];

            const layout = {
                title: "Top 10 OTUs found",
                // xaxis:
                yaxis: {tickangle: 0},
                margin: { t:30, l:150 }
            };

            // plot out bar chat
            Plotly.newPlot('bar', barData, layout);
       


        // Create a bubble chart that displays each sample.
        // Use otu_ids for the x values.
        // Use sample_values for the y values.
        // Use sample_values for the marker size.
        // Use otu_ids for the marker colors.
        // Use otu_labels for the text values.

        let values2 = result.map(d => d.sample_values);
        let labels2 = result.map(d => d.otu_ids);
        let hovertext2 = result.map(d => d.otu_labels);

        const trace2 = {
            x: labels2[0],
            y: values2[0],
            marker: {
                size: values2[0],
                color: labels2[0]
            },
            //markerSize: values,
            //markerColor: labels,
            text: hovertext[0],
            type: 'bubble',
            mode: 'markers',
        };

        const bubbleData = [trace2];

        const layout2 = {
            xaxis: { title: "Bubble Title" },


        };

        Plotly.newPlot('bubble', bubbleData, layout2);
    });
};
plotData();

        // Display the sample metadata, i.e., an individual's demographic information.
        // Display each key-value pair from the metadata JSON object somewhere on the page.
function metaData(otu_id) {
    var metadataDiv = d3.select('#sample-metadata')
    metadataDiv.html('');

    d3.json('data/samples.json').then(data => {

        let metaData = data.metadata.filter(item => item.id == otu_id);
        //console.log(metaData);
        let subject = metaData[0];
        console.log(subject); 

        metadataDiv
            .append('h3').text(`ID: ${subject.id}`)
            .append('h3').text(`Age: ${subject.age}`);
            


    })
};
metaData();




    // Update all of the plots any time that a new sample is selected.
    // // Call updatePlotly function when a change takes place to the DOM
  

function optionChanged(info) {
    plotData(info);
    metaData(info);
}

// Call updatePlotly() when a change takes place to the DOM
//d3.select('#selDataset').on("change", updatePlotly);

function updatePlotly() {
    // Use D3 to select the dropdown menu
    let dropMenu = d3.select('#selDataset');

    d3.json('data/samples.json').then(data => {
        console.log(data);

        data.names.forEach(function(name) {
            dropMenu.append('option').text(name).property('value')
        });
        
        plotData(data.names[0]);
        metaData(data.names[0]);
    
    });

// d3.select('#selDataset').on("change", updatePlotly);
};
updatePlotly();