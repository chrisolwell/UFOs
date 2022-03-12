// import the data from data.js
const tableData = data;
// reference the HTML table using D3
var tbody = d3.select("tbody");
// simple JS console.log statment
// function printHello() {
//     console.log("Hello World!");
// }
// // Takes two numbers and adds them
// function addition(a,b) {
//     return a+b;
// }
// function doubleAddition(c,d){
//     var total = addition(c,d)*2;
//     return total;
// }
// console.log(total)
function buildTable(data) {
    //first clear out existing data
    tbody.html("");
    //next loop through each object in the data
    //and append a row and cells for each calue in the row
    data.forEach((dataRow)=>{
        //append a row to the table body
        let row = tbody.append("tr");

        //loop through each filed in the dataRow and add
        //each value as a table cell (td)
        Object.values(dataRow).forEach((val)=>{
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}
//if we are to listen for a click, we must first create a button to be clicked
function handleClick(){
    //Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    //check to see if a date was entered and filder the data using that date.
    //apply a humble filter aka if then statement
    if (date) {
        //Apply `filter` to the table data to only keep the 
        //rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row =>row.datetime===date);
    };

    //rebuild the table using the filtered data
    //@NOTE: if no date was enderted, then filterData will
    //just be the original tableData.
    buildTable(filteredData);
};

//attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

//Build the table when the page loads
buildTable(tableData);

