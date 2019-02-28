/*eslint-env browser*/
var data, arrData;
var closestDistances;

var siteNames = [
    "Colombia, SC",
    "Columbus, OH",
    "Des Moines, IA",
    "Hartford, CT",
    "Jacksonville, FL",
    "Salt Lake City, UT",
    "San Jose, CA",
    "Tulsa, OK"
];
var distance, arrDistance;
//This function will delete part of an array by value. Example code below
//removeA(siteNames, "Colombia, SC")
function removeA(arr) {
    "use strict";
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax = arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}

$.getJSON('data/data2-26-19.json',
    function (data) {
        "use strict";
        window.data = data;
        window.console.log(data);
        window.arrData = Object.keys(data).map((key) => [key, data[key]]);
    //    console.log(arrData);    
    //    return data;
});

//setTimeout so that the json data loads before calling the function
function closestDistances() {setTimeout(function() {
//Empty the body tag, then add an ISU Button before writing the code
    $('#table').empty();
//    $('body').append("<input type='button' id='changeIsuRank' value='Change ISU Ranking'> <br>");
    var table = 
            '<table id="siteTable">' +
                '<tr>' +
                    '<th>Rank</th>' +
                    '<th>Team</th>' +
                    '<th>Site</th>' +
                    '<th>Distance (Miles)</th>' +
                '</tr>';
    var Columbus = 0;
    var Colombia = 0;
    var DSM = 0;
    var Hartford = 0;
    var Jacksonville = 0;
    var SLC = 0;
    var SJ = 0;
    var Tulsa = 0;
    window.arrData = Object.keys(data).map((key) => [key, data[key]]);
    for (var i = 0; i < arrData.length; i++) {

        var team = Object.values(arrData)[i][1]["Team"];
//distances is an array of the distances to sites, it gets looped through for each team
        window.arrDistance = [
                ["Colombia, SC", Object.values(arrData)[i][1]["Colombia, SC"]], 
                ["Columbus, OH", Object.values(arrData)[i][1]["Columbus, OH"]], 
                ["Des Moines, IA", Object.values(arrData)[i][1]["Des Moines, IA"]],
                ["Hartford, CT", Object.values(arrData)[i][1]["Hartford, CT"]],  
                ["Jacksonville, FL", Object.values(arrData)[i][1]["Jacksonville, FL"]],
                ["Salt Lake City, UT", Object.values(arrData)[i][1]["Salt Lake City, UT"]],
                ["San Jose, CA", Object.values(arrData)[i][1]["San Jose, CA"]],
                ["Tulsa, OK", Object.values(arrData)[i][1]["Tulsa, OK"]]
        ];
        
/*        var distances = [
                Object.values(arrData)[i][1]["Colombia, SC"], 
                Object.values(arrData)[i][1]["Columbus, OH"], 
                Object.values(arrData)[i][1]["Des Moines, IA"],
                Object.values(arrData)[i][1]["Hartford, CT"],  
                Object.values(arrData)[i][1]["Jacksonville, FL"],
                Object.values(arrData)[i][1]["Salt Lake City, UT"],
                Object.values(arrData)[i][1]["San Jose, CA"],
                Object.values(arrData)[i][1]["Tulsa, OK"]
        ];*/
//Ensure no site has more than 2 teams
        if (Colombia >= 2) {
            for (var j2 = 0; j2 < arrDistance.length; j2++) {
                if (arrDistance[j2][0] == "Colombia, SC") {
                    arrDistance.splice(j2, 1);
                }
            }
        };
        if (Columbus >= 2) {
            for (var j3 = 0; j3 < arrDistance.length; j3++) {
                if (arrDistance[j3][0] == "Columbus, OH") {
                    arrDistance.splice(j3, 1);
                }
            }
        };
        if (DSM >= 2) {
            for (var j4 = 0; j4 < arrDistance.length; j4++) {
                if (arrDistance[j4][0] == "Des Moines, IA") {
                    arrDistance.splice(j4, 1);
                }
            }
        };
        if (Hartford >= 2) {
            for (var j5 = 0; j5 < arrDistance.length; j5++) {
                if (arrDistance[j5][0] == "Hartford, CT") {
                    arrDistance.splice(j5, 1);
                }
            }
        };
        if (Jacksonville >= 2) {
            for (var j6 = 0; j6 < arrDistance.length; j6++) {
                if (arrDistance[j6][0] == "Jacksonville, FL") {
                    arrDistance.splice(j6, 1);
                }
            }
        };
        if (SLC >= 2) {
            for (var j7 = 0; j7 < arrDistance.length; j7++) {
                if (arrDistance[j7][0] == "Salt Lake City, UT") {
                    arrDistance.splice(j7, 1);
                }
            }
        };
        if (SJ >= 2) {
            for (var j8 = 0; j8 < arrDistance.length; j8++) {
                if (arrDistance[j8][0] == "San Jose, CA") {
                    arrDistance.splice(j8, 1);
                }
            }
        };
        if (Tulsa >= 2) {
            for (var j9 = 0; j9 < arrDistance.length; j9++) {
                if (arrDistance[j9][0] == "Tulsa, OK") {
                    arrDistance.splice(j9, 1);
                }
            }
        };
        

// The Meat and Potatoes of the sorting and writing of closest regions
        if (arrDistance.length === 0) {
            var listPlaceholder =
                '<tr>' +
                    '<td>' + (i+1) + '</td>' +
                    '<td>' + team + '</td>' +
                    '<td>' + '</td>' +
                    '<td>' + '</td>' +
                '</tr>';
//            $('main').append(i + 1 + ". " + team + "<br>");
            table += listPlaceholder;
//            $('main').append(listPlaceholder);
        } else {
            var minIndex = 0;
            var min = arrDistance[0][1];
            var closestSite;
            for (var j = 0; j < arrDistance.length; j++) {
                if (arrDistance[j][1] < min) {
                    minIndex = j;
                    min = arrDistance[j][1];
                    closestSite = arrDistance[minIndex][0];
                }
            }
            console.log(typeof(closestSite));
            var listPlaceholder =
    /*        '<table> +
                '<tr>' +
                    '<th>Rank</th>'
                    '<th>Team</th>' +
                    '<th>Site</th>' +
                    '<th>Distance</th>' +
                '</tr>' +*/
                '<tr>' +
                    '<td>' + (i + 1) + '</td>' +
                    '<td>' + team + '</td>' +
                    '<td>' + arrDistance[minIndex][0] + '</td>' +
                    '<td>' + min + '</td>' +
    //                '<td>Duke</td>' +
    //                '<td>Colombia, SC</td>' +
    //                '<td>182.44</td>' +
                '</tr>';
                '<tr>' +
                    '<td>' + (33 - i) + '</td>' +
                    '<td>' + data[i + 1]["Team"] + '</td>' +
                    '<td>' + arrDistance[minIndex][0] + '</td>' +
//                    '<td>' + data[33 - i][closestSite] + ' Miles</td>' +
    //                '<td>Duke</td>' +
    //                '<td>Colombia, SC</td>' +
    //                '<td>182.44</td>' +
                '</tr>';
    /*        '</table>';*/

//            var listPlaceholder = i + 1 + ". " + team + ": " + arrDistance[minIndex] + "<br>";
//            
            table += listPlaceholder;
//            console.log(listPlaceholder);
//            $('main').append(listPlaceholder);
//            document.write(i + 1 + ". " + team + ": " + arrDistance[minIndex] + "<br>");
    // add to each region when a team fills it
            if (arrDistance[minIndex][0] == "Colombia, SC") {
                Colombia += 1;
            } else if (arrDistance[minIndex][0] == "Columbus, OH") {
                Columbus += 1;
            } else if (arrDistance[minIndex][0] == "Des Moines, IA") {
                DSM += 1;
            } else if (arrDistance[minIndex][0] == "Hartford, CT") {
                Hartford += 1;
            } else if (arrDistance[minIndex][0] == "Jacksonville, FL") {
                Jacksonville += 1;
            } else if (arrDistance[minIndex][0] == "Salt Lake City, UT") {
                SLC += 1;
            } else if (arrDistance[minIndex][0] == "San Jose, CA") {
                SJ += 1;
            } else if (arrDistance[minIndex][0] == "Tulsa, OK") {
                Tulsa += 1;
            } 
        }
    }
    table += '</table>';

    $('#table').append(table);
//Go back and match up the teams 17-32 with their 1-16 opponent
    for (var i = 17; i <= 32; i++) {
        document.getElementById("siteTable").rows[i].cells[2].innerHTML = document.getElementById("siteTable").rows[33 - i].cells[2].innerHTML;
        var matchedSiteDistance = data[i][(document.getElementById("siteTable").rows[33 - i].cells[2].innerHTML)];
        document.getElementById("siteTable").rows[i].cells[3].innerHTML += matchedSiteDistance;
    }
}, 800);}
closestDistances();

/*data[6] = data[13];
delete data[13];

for (var i = 1; i < arrData.length; i++) {
    if (data[i] == null) {
            data[i] = data[i + 1];
            data[i + 1] = null;
    }
}*/
function isuRank() {
    var pickedTeamCurrentRank = parseInt(prompt("what is the rank of the team you want to change?"));
    var newRank = parseInt(prompt("What rank will that team end up?"));
    var placeholder = data[pickedTeamCurrentRank];
    if (isNaN(pickedTeamCurrentRank) || isNaN(newRank) || pickedTeamCurrentRank < 1 || pickedTeamCurrentRank > 32 || newRank > 32 || newRank < 1) {
        alert("You must type numbers between 1 and 32 for both prompts");
        } else {
            if (newRank < pickedTeamCurrentRank) {
                for (var i = pickedTeamCurrentRank; i > newRank - 1; i--) {
                    console.log("changing from " + pickedTeamCurrentRank + " to " + newRank);
                    data[i] = data[i -1];
                }
            } else if(newRank == pickedTeamCurrentRank) {
                console.log("Same rank as before");
                console.log(pickedTeamCurrentRank);
            } else if (newRank > pickedTeamCurrentRank) {
                console.log("changing from " + pickedTeamCurrentRank + " to " +newRank);
                for (var i = pickedTeamCurrentRank; i < newRank + 1 && i < 33; i++) {
                    data[i] = data[i + 1];
                }
            } else {
                console.log(pickedTeamCurrentRank, newRank, placeholder, data)
            }
            data[newRank] = placeholder;
            console.log("finished changing ranks, starting closestDistances()");
            closestDistances();
        }
}

//document.getElementById("currentRank").addEventListener()

