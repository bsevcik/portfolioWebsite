/*eslint-env browser*/


// This array stores all the inputted data. Is gets output as a table body when running function displayArray()
var checkedInArray = [];

            
//This function is meant to clear the table after the form is submitted. It wasn't reliable when using tableRow.length, so I set it to delete as many items as are in the array. The form data is pushed to the array before clearTable() is run
function clearTable() {
    "use strict";
    for (var i = 0; i < checkedInArray.length; i++)
        document.getElementById("checkedIn").deleteRow(-1);
  }


//This function writes the checkedInArray[] into an HTML table body, the table heading is hardcoded into the html file
function displayArray() {
    "use strict";
    var i = 0
    for (clearTable(); i < checkedInArray.length; i++) {
        document.getElementById("checkedIn").innerHTML += "<tr><td>" + checkedInArray[i][0] + "</td> <td>" + checkedInArray[i][1] + "</td> <td>" + checkedInArray[i][2] + "</td><td>" + checkedInArray[i][3] + "</td><td>" + checkedInArray[i][4] + "</td></tr>";
    }
}

/*This part of the code simply wrote the user typed data into a table, but did not write it to an array. It is now deprecated.
            document.getElementById("checkedIn").innerHTML += "<tr><td>" + name + "</td> <td>" + badge + "</td> <td>" + badgeNum + "</td><td>" + timeNow + '</td><td><input type="button" class="return" value="Click to Return Badge"></td>';
*/

//This function validates that something was typed into all three input boxes, capitolizes the first letter of writes all the data typed in by the user to checkedInArray[], runs clearTable() to clear the table, and then runs displayArray() to write a the updated array into the table body
document.getElementById("checkIn").addEventListener("click",
    function () {
        "use strict";
        var time = new Date();
        var timeNow = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
        if (document.getElementById("nameTyped").value === "" || document.getElementById("badgeTyped").value === "" || document.getElementById("badgeNumTyped").value === "") {
            window.alert("You need to fill out all three forms");
        } else {
            var name = document.getElementById("nameTyped").value;
            var nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
            checkedInArray.push([nameCapitalized, document.getElementById("badgeTyped").value, document.getElementById("badgeNumTyped").value, timeNow, "<input onclick='returnBadge(this)' type='button' class='tableButton' value='Click to Return Badge'>"]);
            clearTable();
            displayArray();
//    optionally call the function to export data to Csv. It was annoying so I turned it off.
//            exportToCsv();
//            window.console.log(checkedInArray);


//This clears the written input forms after the information is written to checkedInArray and focuses back on nameTyped at the top of the form
            document.getElementById("nameTyped").value = "";
            document.getElementById("badgeTyped").value = "";
            document.getElementById("badgeNumTyped").value = "";
            document.getElementById("nameTyped").focus();
        }
        
    }
);

function returnBadge(r) {
    var i = r.parentElement.parentElement.rowIndex - 1;
//    window.console.log(i);
    var time = new Date();
    var timeNow = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
//    window.console.log(r.parentElement);
    r.parentElement.innerHTML = timeNow;
//    window.console.log(checkedInArray[i]);
    checkedInArray[i][4] = timeNow;
//    This would let you delete the row of the HTML table clicked on
//    document.getElementById("checkedIn").deleteRow(i);

//    document.getElementById("checkedIn").rows[i].childNodes[6].innerHTML = timeNow;
// This lets you change the button of the first html table row into "testing"
// document.getElementById("checkedIn").childNodes[5].childNodes[0].childNodes[6].innerHTML = "testing"
//
//    optionally call the function to export data to Csv. It was annoying so I turned it off.
//    exportToCsv();
}




document.getElementById("dropbtn").addEventListener("click",
    function () {document.getElementById("myDropdown").classList.toggle("show");
})


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
document.getElementsByClassName("dropbtn").addEventListener("click", function () {
    document.getElementById("myDropdown").classList.toggle("show");
})

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}















function exportToCsv() {
    var time = new Date();
    var dateNow = time.getMonth() + "-" + time.getDate() + "-" + time.getFullYear();    
    var csvString = "";
    checkedInArray.forEach(function(RowItem, RowIndex) {
        RowItem.forEach(function(ColItem, ColIndex) {
            csvString += ColItem + ',';
        });
        csvString += "\r\n";
        });
        csvString = "data:application/csv," + encodeURIComponent(csvString);
        var x = document.createElement("A");
            x.setAttribute("href", csvString );
            x.setAttribute("download", dateNow + " Security Check Out Log.csv");
            document.body.appendChild(x);
            x.click();
}

document.getElementById("exportToCsv").addEventListener("click", exportToCsv);


// This sorts checkedInArray alphabetically by First name
document.getElementById("firstNameSortClick").addEventListener("click",
//document.getElementById("nameButton").addEventListener("click",
    function nameSort() {
        checkedInArray.sort();
        clearTable();
        displayArray();
    })
                                           

// This sorts checkedInArray alphabetically by Badge Type
document.getElementById("badgeTypeSortClick").addEventListener("click", function badgeTypeSort () {
    checkedInArray.sort(compareSecondColumn);
    function compareSecondColumn(a, b) {
        if (a[1] === b[1]) {
            return 0;
        } else {
            return (a[1] < b[1]) ? -1 : 1;
        }
    }
        clearTable();
        displayArray();
}
)
// This sorts checkedInArray alphabetically by Badge Number
document.getElementById("badgeNumberSortClick").addEventListener("click", function badgeTypeSort () {
    checkedInArray.sort(compareThirdColumn);
    function compareThirdColumn(a, b) {
        if (a[2] === b[2]) {
            return 0;
        } else {
            return (a[2] < b[2]) ? -1 : 1;
        }
    }
        clearTable();
        displayArray();
}
)
// This sorts checkedInArray in chronological order of when checked out
document.getElementById("timeCheckedOutSortClick").addEventListener("click", function badgeTypeSort () {
    checkedInArray.sort(compareFourthColumn);
    function compareFourthColumn(a, b) {
        if (a[3] === b[3]) {
            return 0;
        } else {
            return (a[3] < b[3]) ? -1 : 1;
        }
    }
        clearTable();
        displayArray();
}
)
// This sorts checkedInArray in chronological order of when returned
document.getElementById("timeReturnedSortClick").addEventListener("click", function badgeTypeSort () {
    checkedInArray.sort(compareFifthColumn);
    function compareFifthColumn(a, b) {
        if (a[4] === b[4]) {
            return 0;
        } else {
            return (a[4] < b[4]) ? -1 : 1;
        }
    }
        clearTable();
        displayArray();
}
)