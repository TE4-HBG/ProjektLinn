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
        const trainNameElements = document.getElementsByClassName("trainName");
        const trainTimeElements = document.getElementsByClassName("skanetrafikenTimeBody");
        const trainImgElements = document.getElementsByClassName("skanetrafikenIconsBody");
        const busNameElements = document.getElementsByClassName("busNameBody");
        const busTimeElements = document.getElementsByClassName("skanetrafikenTimeBody");
        const busImgElements = document.getElementsByClassName("skanetrafikenIconsBody");
        const busNumberElements = document.getElementsByClassName("busNumberBody");


        train1Name.innerHTML = jsonData.outputTrain.routeLongName;
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