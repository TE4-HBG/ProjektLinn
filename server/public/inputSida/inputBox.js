
//Attempts to retrieve localStorage file
let allSaveInputs = JSON.parse(localStorage.getItem("savedInputs"));

if (!allSaveInputs) {
    allSaveInputs = [];
}

function PrintInputBorder(Arr) {
    let Text = "";
    console.log(Arr[0]);
    localStorage.setItem(Arr[0], Arr);
    Text += '<div name="' + Arr + '" id="' + Arr[0] + '">' +
        '<div class="UpdateForms">' +
        '<button type="button" class="delBtn" onclick=DeleteInputBorder("' + Arr[0] + '")>X</button>' +
        '<h4>' + Arr[0] + '</h4>' +
        '<input id="seconds' + Arr[0] + '" onchange="limit(10, 999, seconds' + Arr[0] + ')" type="number" class="quantity" name="quantity" min="10" max="999" value="15">' +
        '<label> Hur många sekunder ska sidan visas?</label>' +
        '<br>';

    let textAmount = 0;
    let imgAmount = 0;
    for (let index = 0; index < Arr.length; index++) {
        if (Arr[index] === 'IMG') {
            imgAmount++;
            Text += GetImgInput(imgAmount);
        }
        if (Arr[index] === 'TEXT') {
            textAmount++;
            Text += GetTextInput(Arr[0], textAmount);
        }
    }


    Text += '<button type="button" onclick=Save("' + Arr[0] + '")><a>Spara</a></button>' +
        '</div>' +
        '</div>';

    document.getElementById('FormsEditable').innerHTML = Text;
}
function GetTextInput(template, spec, readable = true, value = "") {
    let maxCharacters = 0;
    switch (template) {
        case 'Template1':
            maxCharacters = 765;
            break;
        case 'Template2':
            console.log(spec + " template 2");
            if (spec == 1) {
                maxCharacters = 765;
            }
            else if (spec == 2) {
                maxCharacters = 1800;
            }
            else {
                console.log("Spec is " + spec + "\nError when selecting max charakter lenght for template 2, contact Hugo/Developer");
            }
            break;

        case 'Template4':
            maxCharacters = 1800;
            break;
        case 'Template5':

            maxCharacters = 1800;
            break;

        default:
            console.log("Något gick fel vid generationen av SKITEN");
            break;
    }

    if (readable) {
        const tmp = ['charakterLable' + spec, maxCharacters]; //tmp array. Kan inte skicka variablarna direkt in i funktionen för jag måste separera dem med ett , vilket förstår för stringen
        return '<label> Text ' + spec + ': </label>' +
            '<textarea oninput="checkRemaningCharakters([' + tmp + '])" maxlength="' + maxCharacters + '" type="text" class="TEXT" id="TEXT' + spec + '" value=""></textarea>' +
            '<lable id="charakterLable' + spec + '"></lable><br>';
    }
    else {
        return '<label> Text ' + spec + ': </label>' +
            '<textarea readonly type="text" class="TEXT" name="' + spec + '">' + value + '</textarea><br>';
    }
}
function GetImgInput(spec, readonly = true, value = "") {
    if (readonly) {
        let id = specialRNG();
        return '<label> Bild ' + spec + ': </label>' +

        '<input id=' + id + ' onchange="checkImageSize(' + id + ')" type="file" class="IMG" name="' + spec + '" accept="image/*">' +
        '<br>';
    }
    else {
        return '<label>Bild ' + spec + ': ' + value + '</label>' +
            '<br>';
    }
}

function GetCountdownInput() {
    return '<label> Countdown: </label>' +
        '<input type="text"  value="">' +
        '<label> Tid: </label>' +
        '<input type="date" class="start" name="trip-start" value="2018-07-22">' +
        '<br></br>';
}

function _arrayBufferToBase64(blob) {
    return new Promise((resolve, _) => {
        const reader = new FileReader();
        reader.onloadend = () => { resolve(reader.result); console.log(reader.result) };
        reader.readAsDataURL(blob);
    });
}

function specialRNG() {
    var today = new Date();
    var today_abs = new Date();
    today_abs.setHours(0);
    today_abs.setMinutes(0);
    today_abs.setSeconds(0);
    today_secs = (today.getTime() - today_abs.getTime()) / 1000;
    return today_secs;

}


async function Save(x) {
    console.log(x);
    let inputBox = document.getElementById(x);
    let allTextInput;
    let minutes;
    let jsonObject;
    let allImgInput;

    switch (x) {
        /*case 'formInCountdown':
            allTextInput = inputBox.getElementsByClassName("TEXT");
            let dateInput = inputBox.getElementsByClassName("DATE");
            jsonObject = {
                    "text": allTextInput,
                    "date": dateInput
                }
                allSaveInputs.push(new Template(0, x, jsonObject));
                console.log("hi");

            break;*/
        case 'food':
            allSaveInputs.push(new Template(null, null, null, username, password, JSON.stringify(weekList), null));
            break;
        case 'countdown': 
            countdownDate = document.getElementById('CountdownDATE').value;
            countdownText = document.getElementById('CountdownTEXT').value;

            allSaveInputs.push(new Template(null, null, null, username, password, null, [countdownDate, countdownText]));
            break;
        case 'Template1':
            allTextInput = inputBox.getElementsByClassName("TEXT");
            allImgInput = inputBox.getElementsByClassName("IMG");
            minutes = inputBox.getElementsByClassName('quantity');
            var newText1 = ParagraphDivision(allTextInput[0], "paragraph")
            jsonObject = {
                "text1": newText1,
                "image1": await _arrayBufferToBase64(allImgInput[0].files[0])
            };


            allSaveInputs.push(new Template(minutes[0].value, x, jsonObject, username, password, null, null));
            PrintSavedInputs(minutes[0].value, x, [allTextInput[0].value, allImgInput[0].files[0].name]);

            break;
        case 'Template2':
            allTextInput = inputBox.getElementsByClassName("TEXT");
            minutes = inputBox.getElementsByClassName('quantity');
            var newText1 = ParagraphDivision(allTextInput[0], "paragraph")
            var newText2 = ParagraphDivision(allTextInput[1], "paragraph")
            jsonObject = {
                "text1": newText1,
                "text2": newText2
            }

            allSaveInputs.push(new Template(minutes[0].value, x, jsonObject, username, password, null, null));
            PrintSavedInputs(minutes[0].value, x, [allTextInput[0].value, allTextInput[1].value]);

            break;
        case 'Template3':
            allImgInput = inputBox.getElementsByClassName("IMG");
            minutes = inputBox.getElementsByClassName('quantity');
            jsonObject = {
                "image1": await _arrayBufferToBase64(allImgInput[0].files[0])
            };


            allSaveInputs.push(new Template(minutes[0].value, x, jsonObject, username, password, null, null));
            PrintSavedInputs(minutes[0].value, x, [allImgInput[0].value]);

            break;
        case 'Template4':
            allTextInput = inputBox.getElementsByClassName("TEXT");
            allImgInput = inputBox.getElementsByClassName("IMG");
            minutes = inputBox.getElementsByClassName('quantity');
            var newText1 = ParagraphDivision(allTextInput[0], "paragraph")
            jsonObject = {
                "text1": newText1,
                "image1": await _arrayBufferToBase64(allImgInput[0].files[0])
            };


            allSaveInputs.push(new Template(minutes[0].value, x, jsonObject, username, password, null, null));
            PrintSavedInputs(minutes[0].value, x, [allTextInput[0].value, allImgInput[0].files[0].name]);

            break;
        case 'Template5':
            allTextInput = inputBox.getElementsByClassName("TEXT");
            minutes = inputBox.getElementsByClassName('quantity');
            var newText1 = ParagraphDivision(allTextInput[0], "paragraph")
            var newText2 = ParagraphDivision(allTextInput[1], "paragraph")
            jsonObject = {
                "text1": newText1,
                "text2": newText2
            }


            allSaveInputs.push(new Template(minutes[0].value, x, jsonObject, username, password, null, null));
            PrintSavedInputs(minutes[0].value, x, [allTextInput[0].value, allTextInput[1].value]);
            console.log("hello");
            break;
        case 'Template6':
            break;
        default:
            break;
    }
    //Localstorage works
    localStorage.setItem("savedInputs", JSON.stringify(allSaveInputs));
}

function Publish(type) {
    if (allSaveInputs != null && allSaveInputs.length === 0 && type === 'templates') {
        alert("Du måste välja en template innan du kan publicera");
    }
    else {
        if (type === "food" || type === "countdown") {
            Save(type);
            localStorage.clear();
            allSaveInputs = [];
        }
        
        if (Send(JSON.stringify(allSaveInputs))) {
            alert("Data Skickad!");
        }
        else {
            alert("Något gick fel. All sparad data borttagen, pröva igen senare.");
            localStorage.clear();
            allSaveInputs = [];
        } 
    }
}

function DeleteInputBorder(LinnInputID, index) {
    console.log('trying to removed ' + LinnInputID);
    document.getElementById(LinnInputID).remove();
    if (index != null) {
        allSaveInputs.splice(index, 1);
        PrintAllSavedInputs(true);
        localStorage.setItem("savedInputs", JSON.stringify(allSaveInputs));
    }
}
function test(x) {
    for (let index = 0; index < allSaveInputs.length; index++) {
        const element = allSaveInputs[index];
        console.log(element);
        
    }
}
function PrintAllSavedInputs(clear = false) { //call the function with the argument true to clear the saved inputs and then reprint it, in practice you print only the things that are in allSavedInputs[] 
    if  (!clear) {
        for (let i = 0; i < allSaveInputs.length; i++) {
            const element = allSaveInputs[i];  
    
            let tmpArray = Object.values(element.content).map(val => val.match(/<p>(.*?)<\/p>/)[1]);;
            
            console.log(tmpArray);
            PrintSavedInputs(element.duration, element.templateID, tmpArray, i)
        }
    }
    else { document.getElementById('savedInputs').innerHTML = ""; } 
}
function PrintSavedInputs(minutes, x, newArray, index = null) {
    let container = document.getElementById('savedInputs').innerHTML;
    let inputBox = document.getElementById(x);
    let textAmount = 0;
    let imgAmount = 0;
    let Arr = localStorage.getItem(x);
    Arr = Arr.split(",");

    console.log(newArray);

    container += '<div name="' + Arr + '" id="' + Arr[0] + '-saved">' +
        '<div class="UpdateForms-saved">' +
        '<button type="button" class="delBtn" onclick="DeleteInputBorder(\'' + Arr[0] + '-saved\', ' + index +  ')">X</button>' +
        '<h4>' + Arr[0] + '</h4>' +
        '<input readonly type="number" class="quantity" name="quantity" min="0" max="15" value="' + minutes + '">' +
        '<br>';



    for (let index = 0; index < Arr.length; index++) {
        console.log(1);

        if (Arr[index] === 'IMG') {
            imgAmount++;
            container += GetImgInput(imgAmount, false, newArray[index - 1]);
        }
        if (Arr[index] === 'TEXT') {
            textAmount++;
            container += GetTextInput(Arr[0], textAmount, false, newArray[index - 1]);
        }
    }
    container += '</div>' +
        '</div>'

    document.getElementById('savedInputs').innerHTML = container;

}

function ParagraphDivision(text, className) {
    /*
    This code converts strings to paragraphs. Example blow:
    Denna veckan gör vi:
    Sak 1
    Sak 2

    Det var allt hejdå
    
    To:
    <p>Denna veckan gör vi:</p>
    <p>Sak 1</p>
    <p>Sak 2</p>
    <p class='paragraph'>Det var allt hejdå</p>
    */
    var paragraphs = text.value.split(/(\n\n|\n)/);
    var result = "";
    for (var i = 0; i < paragraphs.length; i++) {
        if (paragraphs[i] === "\n\n" || paragraphs[i] === "\n") {
            continue;
        }
        if (className && paragraphs[i - 1] === "\n\n") {
            result += "<p class='" + className + "'>" + paragraphs[i] + "</p>";
        } else {
            result += "<p>" + paragraphs[i] + "</p>";
        }
    }
    return result;
}




/* LOGIN SYSTEM
    Our plan with this login system is to send username and password input to the server and on the server validate these credentials.
    The username and password is sent to the server with the "jsonObject" object. Seeing as every template saved has a jsonObject attached to it the password and username data 
    will be present on all templates. This is not really an issue as you can simply only look at the first templates data on the server... :D
*/
function DisplayLoginPopup() {
    popup = document.getElementById("loginPopup");
    popup.style.display = "block";

}
function HideLoginPopup() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    popup.style.display = "none";
    ShowDinnerSchedule();
    PrintAllSavedInputs();
}



function checkRemaningCharakters(arr) {
    let spec = arr[0].id; //arr[0] blir magiskt ett <labl> object, men datan som vi vill ha ligger sparat i dens id
    let maxCharacters = arr[1]
    let lable = arr[0];
    let textArea = document.getElementsByClassName('TEXT')[spec.slice(-1) - 1]; //ett dåligt sätt att få motsvarande textArea för lablen som ska redigeras
    lable.innerHTML = maxCharacters - textArea.value.length + " tecken återstår";

}


function limit(min, max, object) {  
    object.value = Math.max(Math.min(object.value, max), min);
}


function checkImageSize(id) {
    let object = document.getElementById(id);
    let file = object.files[0];
    let reader = new FileReader();


    reader.onload = function() {
        console.log(file.size + " bytes");
        if (file.size > 2000000) {
            
            object.value = ""; // remove the image
            alert("Bilden du la upp är " + parseFloat((file.size / 1048576).toFixed(3)) + "MB, Max 2MB");
        }
        else {
            console.log("AlloweD!");
        }
    };
    reader.readAsArrayBuffer(file);
}
