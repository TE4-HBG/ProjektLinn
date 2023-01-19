function CalculateCountdown() {
    var savedCountdown = fs.readFileSync('countdown.txt', 'utf8');
    var [countdownDateString, countdownText] = savedCountdown.split(':');

    let countdownDate = new Date(countdownDateString);

    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; 
    let yyyy = today.getFullYear();
    if(dd<10) 
    {
        dd='0'+dd;
    } 
    if(mm<10) 
    {
        mm='0'+mm;
    }

    let todaysDateString = yyyy+'-'+mm+'-'+dd;
    let todaysDate = new Date(todaysDateString);

    let timeDiff = countdownDate.getTime() - todaysDate.getTime();
    let diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    console.log("todays date: " + todaysDate);
    console.log("countdown date: " + countdownDate);
    console.log("Antal dagar: " + diffDays);
}