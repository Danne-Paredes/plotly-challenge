// Use d3.json() to fetch data from JSON file
// Incoming data is internally referred to as incomingData


// Questions:
// 1 why doesnt event.preventDefault() work?
// 2 Layouts with plotly, I know i can add them but not sure how they work. Its probably why my graphs looks slightly different
// 3 metadata, i have the info but need to be able to loop through the (whatever JS's version of a python dictionary is called) and get the key/value pairs. im thinking i need d3
// 4 uploading to github


function optionChanged(id) {
    // d3.event.preventDefault(); 
    d3.json("data/samples.json").then((incomingData) => {

        // filter sample values by id 
        var samples = incomingData.samples.filter(s => s.id === id)[0];
        console.log(incomingData) 

        var sampleID = samples.otu_ids.slice(0, 10).reverse().map(d => "OTU " + d);
        var sampleValues = samples.sample_values.slice(0, 10).reverse();
        var sampleLabels = samples.otu_labels.slice(0, 10).reverse();
        // console.log(sampleID)

        var trace = {
            x: sampleValues,
            y: sampleID,
            text: sampleLabels,
            
            type:"bar",
            orientation: "h",
        }

        data = [trace];

        Plotly.newPlot("bar", data);



        var bubbleID  = samples.otu_ids;
        var bubbleValues = samples.sample_values;
        var bubbleLabels = samples.otu_labels;

        var trace = {
            x: bubbleID,
            y: bubbleValues,
            text: bubbleLabels,
            mode: 'markers',
            marker: {
                size: bubbleValues,
                color: bubbleID
            }
            
        };

        var data = [trace];

        Plotly.newPlot("bubble", data);



        // console.log(typeof incomingData.metadata[0].id)
        var meta = incomingData.metadata.filter(m => m.id.toString() === id)[0];
        console.log(meta)
        metaData = d3.select('#sample-metadata')
        Object.entries(meta).forEach((key)=>{
            metaData.append('h5').text(`${key[0]} : ${key[1]}`)
            console.log(key)
        })


    });
        
};


function init() {
    d3.json("data/samples.json").then((incomingData) => {
        var dataSelect = d3.select('#selDataset').on("change",optionChanged);
        incomingData.names.forEach(function(name){
            dataSelect.append("option").text(name)
        });
    optionChanged(incomingData.names[0])
    });
}
init();