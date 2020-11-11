
// each hour needs a variable to get from local storage //

var nineAl = localStorage.getItem("hour9");
var tenAl = localStorage.getItem("hour10");
var elevenAl = localStorage.getItem("hour11");
var noonl = localStorage.getItem("hour12");
var onePl = localStorage.getItem("hour13");
var twoPl = localStorage.getItem("hour14");
var threePl = localStorage.getItem("hour15");
var fourPl = localStorage.getItem("hour16");
var fivePl = localStorage.getItem("hour17");

// each div needs an id to use the L.S//

// probably could use an array for these//
// .data gives numerical value to div//

var saveNine = $("#hour9").data("hour");
var saveTen = $("#hour10").data("hour");
var saveEleven = $("#hour11").data("hour");
var saveNoon = $("#hour12").data("hour");
var saveOne = $("#hour13").data("hour");
var saveTwo = $("#hour14").data("hour");
var saveThree = $("#hour15").data("hour");
var saveFour = $("#hour16").data("hour");
var saveFive = $("#hour17").data("hour");


var totalTimes = [
    saveNine, saveTen, saveEleven, saveNoon, saveOne, saveTwo, saveThree, saveFour, saveFive
]

var currentTime = moment().hour();

// .style //

for (var i = 0; i < totalTimes.length; i++) {
    console.log(totalTimes[i])
    console.log(currentTime)
    if (totalTimes[i] > currentTime) {
        totalTimes[i].addClass(".future");
    } if (totalTimes[i] < currentTime) {
        totalTimes[i].addClass(".past");
    } else (totalTimes[i] = currentTime) 
        totalTimes[i].addClass(".present");

}


// save button //
$(".saveBtn").on("click", function (event) {
    event.preventDefault();


})