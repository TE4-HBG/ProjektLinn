 
 // Set the date we're counting down to
 var countDownDate = new Date("december 22, 2023").getTime();
 var message = "";

 function InitDate() {  

    // Update the count down every 43200 seconds
    var getNewDate = setInterval(function() {

    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = days + " Dagar till " + message;
    //if the date has passed
    if (distance < 0) {
        clearInterval(getNewDate);
        document.getElementById("demo").innerHTML = "You have reached your destination.";
        }
    }, 43200000);
}





function UpdateClock(){
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
    
        hou = now.getHours(),
        min = now.getMinutes();

        Number.prototype.pad = function(digits){
            for(var n = this.toString(); n.length < digits; n = 0 + n);
            return n;
        }

    var months = ["Januari", "Februari", "Mars", "April", "Maj", "juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
    var week = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
    var ids = ["dayname", "month", "daynum", "hour", "minutes"];
    var values = [week[dname], months[mo], dnum.pad(2), hou.pad(2), min.pad(2)];
    for(var i = 0; i < ids.length; i++)
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function InitClock(){
UpdateClock();
window.setInterval("UpdateClock()", 30000);
}


function InitClockAndDate () {
    InitClock();
    InitDate();
}   