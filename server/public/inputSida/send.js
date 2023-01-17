class Template {
    constructor(duration, templateID, content, username, password, foodSchedule, countdown) {
        this.duration = duration;
        this.templateID = templateID;
        this.content = content;
        this.username = username;
        this.password = password;
        this.foodSchedule = foodSchedule;
        this.countdown = countdown;
    }
}

const socket = new WebSocket('ws://infotavla.te4projekt.se')
let tmp4 = [];

function addX() { // Test function??
    let jsonObject = {
        "content":
        {
            "text1": "Hej Linn, Text 1",

            "text2": "detta är text 2",

            "countdown":
            {
                "text": "Studentetn",
                "date": "2023-06-10"
            }
        }
    }
    let mall1 = new Template('2', 1, jsonObject)

    tmp4.push(mall1);
    Send(JSON.stringify(tmp4));
}


function Send(data) {
    const val = socket.readyState == WebSocket.OPEN;
    if (val) {
        console.log(data);
        socket.send(data);
        console.log("I think the info was sent //H");
    }
    return val;
}





//Note to self
//KÖR FUNCTIONEN addX() OM DEN RETURNAR UNDEFINEN SKA DEN HA FUNKAT, KOLLA SEN SERVERN GENOM PUTTY OM DET KOM FRAM