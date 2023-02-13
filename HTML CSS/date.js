// ----------------Current Date Function-----------------
function get_date() {
    var today = new Date();
    var month = today.getMonth();
    month++;
    var date = today.getDate();
    var fullyear = today.getFullYear();
    var hour = today.getHours();
    var mint = today.getMinutes();
    var sec = today.getSeconds();
    var day = today.getDay();
    var arrDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    if ((hour >= 12 && mint >= 1) && (hour <= 11 && mint <= 59)) {

        if (mint >= 0 && mint <= 9) {
            alert("Today's date: " + month + '/' + date + '/' + fullyear + '\n'+ "Day: " + arrDays[day] + "\n"  +'Time: ' + hour + ':0' + mint + ":" + sec + ' AM');
        } else {
            alert("Today's date: " + month + '/' + date + '/' + fullyear + '\n'+ "Day: " + arrDays[day] + "\n"  + 'Time: ' + hour + ':' + mint + ":" + sec + ' AM');
        }

    } else if ((hour >= 12 && mint >= 0) && (hour <= 23 && mint <= 59)) {

        if (mint >= 0 && mint <= 9) {
            alert("Today's date: " + month + '/' + date + '/' + fullyear + '\n' + "Day: " + arrDays[day] + "\n"  + 'Time: ' + hour + ':0' + mint + ":" + sec + ' PM');
        } else {
            alert("Today's date: " + month + '/' + date + '/' + fullyear + '\n'+ "Day: " + arrDays[day] + "\n" + 'Time: ' + hour + ':' + mint + ":" + sec + ' PM');
        }

    } else {
        alert("Wrong Date/Time");
    }
}




// ----------------Future Date Function-------------------

function future_date(f_year,f_month,f_date){
    var future = new Date();
    var f_year = prompt("Enter year")
    var f_month = prompt("Enter month")
    f_month++;
    var f_date = prompt("Enter date")
    f_date++;
    future.setFullYear(f_year,f_month,f_date);
    alert(future.toDateString())
}
