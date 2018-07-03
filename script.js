/************************
 * HW Assignment: DOM and events
 * Name: Mark Piccirilli
 * email: piccirim@oregonstate.edu
 * Date: 5/4/18
 * Description: This code creates a table and buttons allowing the user to
 * navigate the table and mark cells.
 *********************************/

//create table
var newTable = document.createElement("table");

var cells = [];

for(var i = 0; i < 5; i++) {
    var newRow = document.createElement("tr");
    if(i === 0) {
        for(var j = 0; j < 4; j++) {
            var newHeaderCell = document.createElement("th");
            newHeaderCell.textContent = "Header" + j;
            newHeaderCell.style.borderStyle = 'solid';
            newRow.appendChild(newHeaderCell);
        }
    }
    else {
        for(var j = 1; j < 5; j++) {
            var newCell = document.createElement("td");
            newCell.textContent = i + ", " + j;
            newCell.style.borderStyle = 'solid';
            newRow.appendChild(newCell);
            cells.push(newCell);
        }
    }
    newTable.appendChild(newRow);
}

document.body.appendChild(newTable);

//set first cell to be bold
var cell = newTable; //table
cell = cell.firstElementChild; //header row
cell = cell.nextElementSibling; //first data row
cell = cell.firstElementChild; //first cell in data row
cell.style.borderWidth = 'thick';

//create buttons
var buttonList = document.createElement("div");

var newButton1 = document.createElement("button");
newButton1.textContent = "Up";
newButton1.addEventListener("click", function(){moveSelector("Up");});
buttonList.appendChild(newButton1);

var newButton2 = document.createElement("button");
newButton2.textContent = "Right";
newButton2.addEventListener("click", function(){moveSelector("Right");});
buttonList.appendChild(newButton2);

var newButton3 = document.createElement("button");
newButton3.textContent = "Down";
newButton3.addEventListener("click", function(){moveSelector("Down");});
buttonList.appendChild(newButton3);

var newButton4 = document.createElement("button");
newButton4.textContent = "Left";
newButton4.addEventListener("click", function(){moveSelector("Left");});
buttonList.appendChild(newButton4);

document.body.appendChild(buttonList);

var markCellButton = document.createElement("button");
markCellButton.textContent = "Mark Cell";
markCellButton.addEventListener("click", function() {changeColor();});
document.body.appendChild(markCellButton);

//function to move selected cell
function moveSelector(direction) {
    if(direction == "Up" && cell.parentNode.previousElementSibling.previousElementSibling != null) {
        cell.style.borderWidth = 'medium';
        var count = 0;
        while(cell.previousElementSibling != null) {
            cell = cell.previousElementSibling;
            count++;
        }

        cell = cell.parentNode;
        cell = cell.previousElementSibling;
        cell = cell.firstElementChild;

        for(var i = 0; i < count; i++) {
            cell = cell.nextElementSibling;
        }
        cell.style.borderWidth = 'thick';
    }
    else if(direction == "Right" && cell.nextElementSibling != null) {
        cell.style.borderWidth = 'medium';
        cell = cell.nextElementSibling;
        cell.style.borderWidth = 'thick';
    }
    else if(direction == "Down" && cell.parentNode.nextElementSibling != null) {
        cell.style.borderWidth = 'medium';
        var count = 0;
        while(cell.previousElementSibling != null) {
            cell = cell.previousElementSibling;
            count++;
        }

        cell = cell.parentNode;
        cell = cell.nextElementSibling;
        cell = cell.firstElementChild;

        for(var i = 0; i < count; i++) {
            cell = cell.nextElementSibling;
        }
        cell.style.borderWidth = 'thick';
    }
    else if(direction == "Left" && cell.previousElementSibling != null) {
        cell.style.borderWidth = 'medium';
        cell = cell.previousElementSibling;
        cell.style.borderWidth = 'thick';
    }
}

function changeColor() {
    cell.style.backgroundColor = 'yellow';
}
