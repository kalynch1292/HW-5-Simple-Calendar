$(document).ready(function () {
    var todaysDate = moment().format('MMM Do YYYY');
        $("#currentDay").text(todaysDate)



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
        var text = $("#hour" + hour).children(".description").val().trim()
        localStorage.setItem("text" + hour, text)
    })
})