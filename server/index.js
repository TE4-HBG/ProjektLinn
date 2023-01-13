const express = require('express');
const jsdom = require('jsdom');
const fs = require('fs');

const { fileURLToPath } = require('url');
const { dirname } = require('path');
const { WebSocketServer } = require('ws');
const { readFile, writeFile } = require('fs/promises');
//const __filename = fileURLToPath(import.meta.url);
//const __dirname = dirname(__filename);

const app = express();
const address = "http://infotavla.te4projekt.se";
const port = 80;

//Here skanetrafiken data is read from ther journeys json file.
//Next step involves filtering the data to be read and used.
try {
    let rawdata = fs.readFileSync('../SkaneWidget/journeys.json');
    let jsonData = JSON.parse(rawdata);
    console.log("traffic data acquired:" + jsonData[0].routeLongName)
}
catch {

}
// string array
let displayTemplates = "";
{

    //Create Websocket Server
    const wsServer = new WebSocketServer({ noServer: true });
    wsServer.on('connection', function connection(ws) {
        ws.on('message', async (message) => {
            console.log("writing!")
            await writeFile("currentDisplayInfo.json", message);
            UpdateDisplayInfo();
        });
    });



    app.use(express.static(__dirname + '/public'));

    app.get('/display/events', async (req, res) => {
        console.log(`${new Date().toISOString()}: ${req.ip} connecting to event site!`);
        res.set({
            'Cache-Control': 'no-cache',
            'Content-Type': 'text/event-stream',
            'Connection': 'keep-alive'
        });
        res.flushHeaders();

        let counter = 0;
        let interValID = setInterval(() => {
            counter++;
            console.log(`${new Date().toISOString()}: sent event to ${req.ip}.`)
            console.log(displayTemplates.length);
            if(res.write(`data: ${displayTemplates}\n\n`, (error) => {console.log(error)})) {
                console.log("it be worken");
            }
            
        }, 4000);

        // If client closes connection, stop sending events
        res.on('close', () => {
            console.log('client dropped me');
            clearInterval(interValID);
            res.end();
        });
    });


    
    async function UpdateDisplayInfo() {
        //Assign all traffic elements with json data

        //#region 
        const trainName1 = document.getElementsByClassName("trainName1");
        const trainName2 = document.getElementsByClassName("trainName2");
        const trainName3 = document.getElementsByClassName("trainName3");
        const trainName4 = document.getElementsByClassName("trainName4");
        const trainName5 = document.getElementsByClassName("trainName5");
        const trainName6 = document.getElementsByClassName("trainName6");

        const trainTime1 = document.getElementsByClassName("trainTime1");
        const trainTime2 = document.getElementsByClassName("trainTime2");
        const trainTime3 = document.getElementsByClassName("trainTime3");
        const trainTime4 = document.getElementsByClassName("trainTime4");
        const trainTime5 = document.getElementsByClassName("trainTime5");
        const trainTime6 = document.getElementsByClassName("trainTime6");

        const busShortName1 = document.getElementsByClassName("busShortName1");
        const busShortName2 = document.getElementsByClassName("busShortName2");
        const busShortName3 = document.getElementsByClassName("busShortName3");
        const busShortName4 = document.getElementsByClassName("busShortName4");
        const busShortName5 = document.getElementsByClassName("busShortName5");
        const busShortName6 = document.getElementsByClassName("busShortName6");

        const busName1 = document.getElementsByClassName("busName1");
        const busName2 = document.getElementsByClassName("busName2");
        const busName3 = document.getElementsByClassName("busName3");
        const busName4 = document.getElementsByClassName("busName4");
        const busName5 = document.getElementsByClassName("busName5");
        const busName6 = document.getElementsByClassName("busName6");

        const busTime1 = document.getElementsByClassName("busTime1");
        const busTime2 = document.getElementsByClassName("busTime2");
        const busTime3 = document.getElementsByClassName("busTime3");
        const busTime4 = document.getElementsByClassName("busTime4");
        const busTime5 = document.getElementsByClassName("busTime5");
        const busTime6 = document.getElementsByClassName("busTime6");

        const trainImg1 = document.getElementsByClassName("train1IconBody");
        const trainImg2 = document.getElementsByClassName("train2IconBody");
        const trainImg3 = document.getElementsByClassName("train3IconBody");
        const trainImg4 = document.getElementsByClassName("train4IconBody");
        const trainImg5 = document.getElementsByClassName("train5IconBody");
        const trainImg6 = document.getElementsByClassName("train6IconBody");
        
        const busImg1 = document.getElementsByClassName("bus1IconBody");
        const busImg2 = document.getElementsByClassName("bus2IconBody");
        const busImg3 = document.getElementsByClassName("bus3IconBody");
        const busImg4 = document.getElementsByClassName("bus4IconBody");
        const busImg5 = document.getElementsByClassName("bus5IconBody");
        const busImg6 = document.getElementsByClassName("bus6IconBody");
        //#endregion 


        /** @type [] */
        displayTemplates = '';
        let templates = JSON.parse(await readFile("currentDisplayInfo.json"));
        console.log(`amount of funnies: ${templates.length}`)
        for (let i = 0; i < templates.length; i++) {
            const document = (await jsdom.JSDOM.fromFile(`${__dirname}/templates/${templates[i].templateID}.html`)).window.document;
            const textElements = document.getElementsByClassName('text');
            const imageElements = document.getElementsByClassName('img');



            switch (templates[i].templateID) {

                case 'Template1':{
                    
                    textElements[0].appendChild(document.createTextNode(templates[i].content.text1));
                    const image1 = document.createElement('img');
                    const matches = templates[i].content.image1.split(':')[1].split(';')
                    
                    const ext = matches[0].split('/')[1];
                    const data = matches[1].split(',')[1];
                    console.log(Buffer.from(data, 'base64'));
                    await writeFile(`public/images/template/${templates[i].templateID}.${ext}`, Buffer.from(data, 'base64'));
                    console.log("saved file")
                    image1.src = `${address}/images/template/${templates[i].templateID}.${ext}`;
                    imageElements[0].appendChild(image1);
                    
                    break;}
                case 'Template2':
                    textElements[0].appendChild(document.createTextNode(templates[i].content.text1));
                    textElements[1].appendChild(document.createTextNode(templates[i].content.text2));
                    break;
                case 'Template3':{
                    const image1 = document.createElement('img');
                    
                    const matches = templates[i].content.image1.split(':')[1].split(';')
                    
                    const ext = matches[0].split('/')[1];
                    const data = matches[1].split(',')[1];
                    console.log(Buffer.from(data, 'base64'));
                    await writeFile(`public/images/template/${templates[i].templateID}.${ext}`, Buffer.from(data, 'base64'));
                    console.log("saved file")
                    image1.src = `${address}/images/template/${templates[i].templateID}.${ext}`;
                    imageElements[0].appendChild(image1);
                    break;}
                
                case 'Template4':{
                    textElements[0].appendChild(document.createTextNode(templates[i].content.text1));
                    const image1 = document.createElement('img');
                    
                    const matches = templates[i].content.image1.split(':')[1].split(';')
                    
                    const ext = matches[0].split('/')[1];
                    const data = matches[1].split(',')[1];
                    console.log(Buffer.from(data, 'base64'));
                    await writeFile(`public/images/template/${templates[i].templateID}.${ext}`, Buffer.from(data, 'base64'));
                    console.log("saved file")
                    image1.src = `${address}/images/template/${templates[i].templateID}.${ext}`;
                    imageElements[0].appendChild(image1);
                    break;}
                case 'Template5':{
                    textElements[0].appendChild(document.createTextNode(templates[i].content.text1));
                    textElements[1].appendChild(document.createTextNode(templates[i].content.text2));
                    break;}
                default:
                    break;
            }
            
            document.body.classList.add("page");
            displayTemplates += changeTag(document, document.body, "div").outerHTML;
            
        }
        displayTemplates = displayTemplates.replace(/[\n\r]/g,'');
        console.log("bruh");
    }


    app.get('*', async (req, res) => {
        console.log(`${new Date().toISOString()}: ${req.ip} is connecting to 404`);
        res.statusCode = 404;

        res.setHeader('Content-Type', 'text/html');
        res.send("<head></head><body>404</body>");
    });

    const server = app.listen(port, async () => {
        console.log(`Listening on port ${port}`)
        UpdateDisplayInfo();
    });

    server.on('upgrade', (request, socket, head) => {
        wsServer.handleUpgrade(request, socket, head, socket => {
            wsServer.emit('connection', socket, request);
        });
    });


}
/**
 * @param {Document} document
 * @param {HTMLElement} oldElement 
 * @param {string} tag
 * @returns {HTMLElement}
 */
function changeTag(document, oldElement, tag) {
    let newElement = document.createElement(tag);
    console.log(newElement.outerHTML)
    
    for (let i = 0; i < oldElement.attributes.length; i++) {
        newElement.setAttribute(oldElement.attributes.item(i).nodeName, oldElement.attributes.item(i).nodeValue);
        console.log(newElement.outerHTML)
    }
    newElement.innerHTML = oldElement.innerHTML;
    return newElement;
}