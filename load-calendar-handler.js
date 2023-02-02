function getTheMonth(num, str) {
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var arg = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    return {
        month: month[num],
        monthNum: arg[str] + 1
    }
}

//Get This Month
function daysInMonth(dimMonth, dimYear) {
    return new Date(dimYear, dimMonth, 0).getDate();
}
var today = new Date();
var dayPosition = today.getDay(); //display the position of day in week mon-sun (0-6)
var day = today.getDate(); // display day
var monthDay = today.getMonth(); //display month in number
var thisMonth = today.getMonth();
var month = getTheMonth(monthDay).month; //display month in word
var year = today.getFullYear(); //display year
var thisYear = today.getFullYear();
$("#monthYear").html(month + ", " + year);
displayDays(monthDay, year);
//+ 
function displayDays(ddMonth, ddYear) {
    var x = 0;
    var y = 1;
    var blanks = 0;
    var firstDay = new Date(ddYear, ddMonth, 1);
    var firstDayPosition = firstDay.getDay();
    var lastDay = daysInMonth(ddMonth + 1, ddYear); //get last day of month  
    var currrentMonth = (new Date()).getMonth();
    var currrentYear = (new Date()).getFullYear();
    while (x != (lastDay + blanks)) {
        var date = (ddYear + "/" + (ddMonth + 1) + '/' + y).replace('-', '');
        if (x >= firstDayPosition) {
            if (y === day && ddMonth == thisMonth && ddYear == thisYear) {

                $(`<div class='one-day'><p class='number today ${getTheMonth(ddMonth).month + " " + ddYear} activedays' id='${date}'>` + y + "</p></div>").appendTo(".days");
                y++;
            } else if ((new Date()).getFullYear() === ddYear) {
                console.log((new Date()).getFullYear(), ddYear)
                if ((new Date()).getMonth() === ddMonth) {
                    if (y < day) {
                        $(`<div class='one-day'><p class='number ${getTheMonth(ddMonth).month + " " + ddYear} pastday' id='${date}'>` + y + "</p></div>").appendTo(".days");
                        y++;
                    } else {
                        $(`<div class='one-day'><p class='number ${getTheMonth(ddMonth).month + " " + ddYear} activedays' id='${date}'>` + y + "</p></div>").appendTo(".days");
                        y++;
                    }

                } else if (currrentMonth > ddMonth) {
                    $(`<div class='one-day'><p class='number ${getTheMonth(ddMonth).month + " " + ddYear} pastday' id='${date}'>` + y + "</p></div>").appendTo(".days");
                    y++;
                } else {
                    $(`<div class='one-day'><p class='number ${getTheMonth(ddMonth).month + " " + ddYear} activedays' id='${date}'>` + y + "</p></div>").appendTo(".days");
                    y++;
                }
            } else {
                $(`<div class='one-day'><p class='number ${getTheMonth(ddMonth).month + " " + ddYear} activedays' id='${date}'>` + y + "</p></div>").appendTo(".days");
                y++;
            }
        } else {
            $("<div class='one-day'></div>").appendTo(".days");
            blanks++;
        }
        x++;
    }
}

$("#prev").click(function() {
    console.log('clicked')
    if (monthDay == 0) {
        monthDay = 11;
        year--;
    } else {
        monthDay = monthDay - 1;
    }
    month = getTheMonth(monthDay, year).month;
    $("#monthYear").html(month + ", " + year);
    $(".days").empty();
    displayDays(monthDay, year);
    getDaysApi();
});
$("#next").click(function() {
    if (monthDay == 11) {
        monthDay = 0;
        year++;
    } else {
        monthDay = monthDay + 1;
    }
    month = getTheMonth(monthDay).month;
    $("#monthYear").html(month + ", " + year);
    $(".days").empty();
    displayDays(monthDay, year);
    getDaysApi();
});