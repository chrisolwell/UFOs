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