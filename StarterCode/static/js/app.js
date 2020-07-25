// Use d3.json() to fetch data from JSON file
// Incoming data is internally referred to as incomingData
d3.json("data/samples.json")
    // .then((incomingData) => {
    // function filterData(sample) {
    //   return sample.samples > 8.9;
    // }

    // // Use filter() to pass the function as its argument
    // var filteredData = incomingData.filter(filterData);

    // //  Check to make sure your are filtering your Data.
    // console.log(filteredData);

    // Use the map method with the arrow function to return all the filtered sample titles.
    // var otu_ids = filteredData.map(Data =>  Data.title);

    // // Use the map method with the arrow function to return all the filtered sample metascores.
    // var ratings = filteredData.map(Data => Data.metascore);

    // // Check your filtered metascores.
    // console.log(ratings);

    // // Create your trace.
    // var trace = {
    //     x: titles,
    //     y: ratings,
    //     type: "bar"
    // };

    // // Create the data array for our plot
    // var data = [trace];

    // // Define the plot layout
    // var layout = {
    //     title: "The highest critically acclaimed Data.",
    //     xaxis: { title: "Title" },
    //     yaxis: { title: "Metascore (Critic) Rating"}
    // };

    // // Plot the chart to a div tag with id "bar-plot"
    // Plotly.newPlot("bar-plot", data, layout);
// });
