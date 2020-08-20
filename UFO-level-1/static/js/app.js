// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// YOUR CODE HERE!
// Display UFO Sighting Data on Webpage
function main(){
    tbody.selectAll("tr").remove(); 
    tableData.forEach(function(ufoSighting){
        var row = tbody.append("tr");
        Object.values(ufoSighting).forEach(function(value){
            row.append("td").text(value);
        });
    });
}

// Take a User Input Date to Filter Data
var button = d3.select("#filter-btn");
var form = d3.select("form");

function runFilter(){
    d3.event.preventDefault();
    var userInputElement = d3.select("#datetime");
    var userInputValue = userInputElement.property("value");
    var filteredData = tableData.filter(tableData => tableData.datetime === userInputValue)
    if (userInputValue !== "") {
        tbody.selectAll("tr").remove(); 

        filteredData.forEach(function(ufoSighting){
            var row = tbody.append("tr");
            Object.values(ufoSighting).forEach(function(value){
                row.append("td").text(value);
            });
        });
    }else{
        main()
    }
}
main()
form.on("submit", runFilter);
button.on("click", runFilter);