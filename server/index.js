const express = require('express');
const jsdom = require('jsdom');

const { fileURLToPath } = require('url');
const { dirname } = require('path');
const { WebSocketServer } = require('ws');
const { readFile, writeFile } = require('fs/promises');
//const __filename = fileURLToPath(import.meta.url);
//const __dirname = dirname(__filename);

const app = express();
const address = "http://infotavla.te4projekt.se";
const port = 80;

// string array
let displayTemplates = "";
{

    //Create Websocket Server
    const wsServer = new WebSocketServer({ noServer: true });
    wsServer.on('connection', function connection(ws) {
        console.log(`${new Date().toISOString()} - Got a new input site connection: ${ws.url}`)
        ws.on('message', async (message) => {
            console.log(`${new Date().toISOString()} - Input site "${ws.url}" sent some new display info!`)
            await writeFile("currentDisplayInfo.json", message);
            UpdateDisplayInfo();
        });
    });



    app.use(express.static(__dirname + '/public'));

    app.get('/display/events', async (req, res) => {
        console.log(`${new Date().toISOString()} - Got a new display site connection: ${req.ip}.`);
        res.set({
            'Cache-Control': 'no-cache',
            'Content-Type': 'text/event-stream',
            'Connection': 'keep-alive'
        });
        res.flushHeaders();

        let counter = 0;
        let interValID = setInterval(() => {
            counter++;
            console.log(`${new Date().toISOString()} - Sending info to display site "${req.ip}".`)
            if(res.write(`data: ${displayTemplates}\n\n`, (error) => {if (error) { console.log(`${new Date().toISOString()} - Got an error when sending info to display site "${req.ip}": ${error}`) }})) {
                console.log(`${new Date().toISOString()} - Successfully sent info to display site "${req.ip}".`);
            } else {
                console.error(`${new Date().toISOString()} - Failed to sent info to display site "${req.ip}"!`);
            }
            
        }, 4000);

        // If client closes connection, stop sending events
        res.on('close', () => {
            console.log(`${new Date().toISOString()} - Display site "${req.ip}" disconnected.`);
            clearInterval(interValID);
            res.end();
        });
    });



    async function UpdateDisplayInfo() {
        displayTemplates = '';
        /**
         * @type {[]}
         */
        let templates = JSON.parse(await readFile("currentDisplayInfo.json"));
        console.log(`${new Date().toISOString()} - Got ${templates.length} templates!`)
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
                    image1.src = await saveTemplateImage(templateID,ext, Buffer.from(data,'base64'));
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
                    image1.src = await saveTemplateImage(templateID,ext, Buffer.from(data,'base64'));
                    imageElements[0].appendChild(image1);
                    break;}
                
                case 'Template4':{
                    textElements[0].appendChild(document.createTextNode(templates[i].content.text1));
                    const image1 = document.createElement('img');
                    
                    const matches = templates[i].content.image1.split(':')[1].split(';')
                    
                    const ext = matches[0].split('/')[1];
                    const data = matches[1].split(',')[1];
                    image1.src = await saveTemplateImage(templateID,ext, Buffer.from(data,'base64'));
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
    }


    app.get('*', async (req, res) => {
        console.log(`${new Date().toISOString()} - ${req.ip} is connecting to 404`);
        res.statusCode = 404;

        res.setHeader('Content-Type', 'text/html');
        res.send("<head></head><body>Uh oh, you entered an incorrect link and now the sad <br/> <h1>:(</h1></body>");
    });

    const server = app.listen(port, async () => {
        console.log(`${new Date().toISOString()} - Listening on port ${port}`)
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
    //console.log(newElement.outerHTML)
    
    for (let i = 0; i < oldElement.attributes.length; i++) {
        newElement.setAttribute(oldElement.attributes.item(i).nodeName, oldElement.attributes.item(i).nodeValue);
        //console.log(newElement.outerHTML)
    }
    newElement.innerHTML = oldElement.innerHTML;
    return newElement;
}
async function saveTemplateImage(templateID, ext, buffer) {
    console.log(`${new Date().toISOString()} - Writing image from ${templateID}".`);
    await writeFile(`public/images/template/${templateID}.${ext}`, buffer);
    console.log(`${new Date().toISOString()} - Finished writing image from "${templateID}".`);
    return `${address}/images/template/${templateID}.${ext}`;
}