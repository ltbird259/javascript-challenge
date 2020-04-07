// from data.js
var tableData = data;

// YOUR CODE HERE!
//all console logging is for debugging
//declare variables
var showdata = d3.select("filter-btn");
var table = d3.select("tbody");
var inputField = d3.select("input")
var clickbutton = d3.select("button")

function filldata(datefilter) {
    table.html("");
    var tableDatafiltered = tableData.filter(thing => thing.datetime == datefilter)
    console.log(datefilter, "2")
    tableDatafiltered.forEach(line => {
        //row must be defined iteratively
        var currentrow = table.append("tr");
        // console.log(Object.entries(line));
        Object.entries(line).forEach(function([key,value]) {
            currentrow.append("td").text(value);
        })

    })
}


// function filterfunction(thing){
//     return thing.datetime == getdate
// }

clickbutton.on("click", function() {
    var datebox = d3.select("#datetime");
    var dateinput = datebox.property("value");
    console.log(dateinput, "1");
    filldata(dateinput)
  });
  
// tableData.array.forEach(element => {
    
// });
// var newentry = newrow.append("td");

// newrow.text(tableData[0][1]);
