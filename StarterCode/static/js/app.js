// from data.js
var tableData = data;

// YOUR CODE HERE!
var table=d3.select('#ufo-table');
var tbody=table.select('tbody');
// var td=tr.append('td').text('1/1/21');
// tr.append('td').text('los angeles');
// tr.append('td').text('some value');

for (var i=0; i<tableData.length; i++){
    var tr=tbody.append('tr');
    var oneData=tableData[i];
    var valueList=Object.values(oneData);

    for (var j=0; j<valueList.length; j++){
        tr.append('td').text(valueList[j]);
    };
};

var filter= d3.select('#datetime');
var filterBtn=d3.select('#filter-btn')
var filterTable=[];

function handleClick(){
    filterTable=[];
    tbody.html('');
    for (var i=0; i<tableData.length; i++){
        if (tableData[i]['datetime']==filter.property('value')){
            filterTable.push(tableData[i]);
        };
    };
    for (var i=0; i<filterTable.length; i++){
        var tr=tbody.append('tr');
        var oneData=filterTable[i];
        var valueList=Object.values(oneData);
    
        for (var j=0; j<valueList.length; j++){
            tr.append('td').text(valueList[j]);
        };
    };
};

filterBtn.on('click', handleClick)
// console.log(filter.property('value'))




// var tr=tbody.append('tr');
// var oneData=tableData[1];
// var valueList=Object.values(oneData);

// // console.log(Object.values(oneData))
// for (var i=0; i<valueList.length; i++){
//     tr.append('td').text(valueList[i]);
// };

// var tr=tbody.append('tr');
// var oneData=tableData[2];
// var valueList=Object.values(oneData);

// for (var i=0; i<valueList.length; i++){
//     tr.append('td').text(valueList[i]);
// };

// var tr=tbody.append('tr');
// for (var i=0; i<valueList.length; i++){
//     tr.append('td').text(valueList[i]);
// };