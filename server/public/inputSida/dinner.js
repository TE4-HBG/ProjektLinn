class DinnerSchedule {
  constructor(week, monday, tuesday, wednesday, thursday, friday) {
    this.week = week;
    this.monday = monday;
    this.tuesday = tuesday;
    this.wednesday = wednesday;
    this.thursday = thursday;
    this.friday = friday;
  }
}

let weekList = [];
function SaveDinnerSchedule() { // Lägg till kod för att spara till databas
  if (CheckForms()) {
    const input = ['week', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
    for (let i = 0; i < input.length; i++) {
      input[i] = document.getElementById(input[i]).value
    }

    const dinnerSchedule = new DinnerSchedule(input[0], input[1], input[2], input[3], input[4], input[5]);
    weekList.push(dinnerSchedule);
    dinnerList += "<tr><td>" + (weekList[(weekList.length - 1)].week).toString() + "</td>" +  // Only adds the latest dinnerSchedule
      "<td>" + (weekList[(weekList.length - 1)].monday).toString() + "</td>" +
      "<td>" + (weekList[(weekList.length - 1)].tuesday).toString() + "</td>" +
      "<td>" + (weekList[(weekList.length - 1)].wednesday).toString() + "</td>" +
      "<td>" + (weekList[(weekList.length - 1)].thursday).toString() + "</td>" +
      "<td>" + (weekList[(weekList.length - 1)].friday).toString() + "</td>" +
      "<td style='text-align: center'><button class='delBtn' type='button' onclick=DeleteWeek(" + weekList[(weekList.length - 1)].week + ")><a>x</a></button></td></tr>";
    document.getElementById('dinner').innerHTML = dinnerList;
  }
}

function ShowDinnerSchedule() { // body onload + update dinner schedule table
  dinnerList = "<tr>" +
    "<td id='weekTableRow'>Vecka</td>" +
    "<td class='dinnerTableRow'>Måndag</td>" +
    "<td class='dinnerTableRow'>Tisdag</td>" +
    "<td class='dinnerTableRow'>Onsdag</td>" +
    "<td class='dinnerTableRow'>Torsdag</td>" +
    "<td class='dinnerTableRow'>Fredag</td>" +
    "<td id='tableRemoveWeek'>Ta bort</td></tr>";
  if (weekList.length === 0) {
    console.log("Updating dinner schedule, no weeks exist");
    document.getElementById('dinner').innerHTML = dinnerList;
  }
  else {
    console.log("Updating dinner schedule, weeks exist");
    for (let i = 0; i < weekList.length; i++) {
      dinnerList += "<tr><td>" + (weekList[i].week).toString() + "</td>" +
        "<td>" + (weekList[i].monday).toString() + "</td>" +
        "<td>" + (weekList[i].tuesday).toString() + "</td>" +
        "<td>" + (weekList[i].wednesday).toString() + "</td>" +
        "<td>" + (weekList[i].thursday).toString() + "</td>" +
        "<td>" + (weekList[i].friday).toString() + "</td>" +
        "<td style='text-align: center'><button type='button' onclick=DeleteWeek(" + weekList[i].week + ")><a>x</a></button></td></tr>";
      document.getElementById('dinner').innerHTML = dinnerList;
    }

  }
}



function CheckForms() { // True if correct input
  const input = ['week', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

  let isFormsFilled = true;
  for (let i = 0; i < input.length; i++) { // Check if all forms are filled
    if (document.getElementById(input[i]).value === "") {
      console.log("Incorrect input");
      document.getElementById(input[i]).style.borderColor = "red";     // Add text that tells user to put no dinner days as blankspace? 
      ShowPopup("Om det ej serveras mat en dag så skriv bara ett mellanrum!");
      isFormsFilled = false;
    } else {
      document.getElementById(input[i]).style.borderColor = "";
    }
  }

  let isWeekUnique = true;
  for (let i = 0; i < input.length; i++) { // Check if week already exists in weekList
    input[i] = document.getElementById(input[i]).value
    for (let w = 0; w < weekList.length; w++) {
      if (input[0] === weekList[w].week) {
        console.log("Week already exists in weekList");
        ShowPopup("Denna veckan finns redan i matsedeln");
        isWeekUnique = false;
      }
    }
  }

  if (isFormsFilled && isWeekUnique) { return true; } else { return false; }
}



function ShowPopup(message) {
  document.getElementById('popup').style.display = "block";
  document.getElementById('popupText').innerHTML = message;
  setTimeout(() => document.getElementById('popup').style.display = "none", 4500);
}

function DeleteWeek(weeknr) {
  for (let i = 0; i < weekList.length; i++) {
    if (parseInt(weekList[i].week) === weeknr) {
      console.log("Week " + weeknr + " removed");
      weekList.splice(i, 1);
      ShowDinnerSchedule();
    }
  }
}

