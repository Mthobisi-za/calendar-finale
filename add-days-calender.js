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

    return {
        month: month[num],
        monthNum: month.indexOf(str)
    }
}

function getDaysApi() {

    function getDates(startDate, stopDate) {
        var dateArray = [];
        var currentDate = moment(startDate);
        var stopDate = moment(stopDate);
        while (currentDate <= stopDate) {
            dateArray.push(moment(currentDate).format('YYYY-MM-DD'))
            currentDate = moment(currentDate).add(1, 'days');
        }
        return dateArray;
    }

    function shadeDay(date) {
        var dates = Number(date.split('/')[1]);
        var newDate = date.split('/')[0] + '/' + dates + '/' + date.split('/')[2];
        try {
            console.log(document.querySelector(`[id='${newDate}']`).classList.add('booked'));
        } catch (error) {

        }

    }
    fetch('https://calendar-api-latest.herokuapp.com/MIKE/BARNWELL').then(res => res.json()).then(data => {
        // var days = getDays();
        console.log(data.list);
        if (data.list.length > 1) {
            var fullDates = [];
            data.list.forEach(ele => {
                var num = ele.date_booked.split('-');
                fullDates.push(getDates(num[0], num[1]));
            });
            console.log(fullDates);
            fullDates.forEach(dates => {
                dates.forEach(date => {
                    var t = date.replace('-', '/').replace('-', '/').replace('-', '/');
                    shadeDay(t);
                })
            })
        } else {
            var fullDates = [];
            var num = data.list[0].date_booked.split('-');
            fullDates.push(getDates(num[0], num[1]));
            console.log(fullDates)
            fullDates[0].forEach(dates => {
                var t = (dates.replace('-', '/').replace('-', '/').replace('-', '/')).split('/');
                var day = t[0] + '/' + Number(t[1]) + '/' + Number(t[2]);
                console.log(day);
                shadeDay(day);
            })
        }
    });
};
getDaysApi();