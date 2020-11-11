$(document).ready(function () {
    // // each hour needs a variable to get from local storage //

    // var nineAl = localStorage.getItem("hour9");
    // var tenAl = localStorage.getItem("hour10");
    // var elevenAl = localStorage.getItem("hour11");
    // var noonl = localStorage.getItem("hour12");
    // var onePl = localStorage.getItem("hour13");
    // var twoPl = localStorage.getItem("hour14");
    // var threePl = localStorage.getItem("hour15");
    // var fourPl = localStorage.getItem("hour16");
    // var fivePl = localStorage.getItem("hour17");

    // each div needs an id to use the L.S//

    // probably could use an array for these//
    // .data gives numerical value to div//





    var currentTime = moment().format("H");

    function changeTimeBlocks() {

        for (var i = 9; i < 18; i++) {

            if (i > currentTime) {
                $("#hour" + i).children(".description").addClass("future");
            } else if (i < currentTime) {
                $("#hour" + i).children(".description").addClass(" past");
            } else {
                $("#hour" + i).children(".description").addClass("present");

            }
            var gettingLS = localStorage.getItem("text" + i);
            $("#hour" + i).children(".description").val(gettingLS);
        }
    }
    changeTimeBlocks();
    $(".saveBtn").on("click", function () {
        var hour = $(this).parent().attr("data-hour");
        console.log(hour)
        var text = $("#hour" + hour).children(".description").val().trim()
        localStorage.setItem("text" + hour, text)
    })
})