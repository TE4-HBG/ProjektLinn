const express = require('express');
const jsdom = require('jsdom');
const fs = require('fs');
const createDOMPurify = require("dompurify");
const { fileURLToPath } = require('url');
const { dirname } = require('path');
const { WebSocketServer } = require('ws');
const { readFile, writeFile } = require('fs/promises');
const SkåneTrafiken = require('./SkåneTrafiken.js')
//const __filename = fileURLToPath(import.meta.url);
//const __dirname = dirname(__filename);

const app = express();
const address = "http://infotavla.te4projekt.se";
const port = 80;



//Here skanetrafiken data is read from ther journeys json file.
//Next step involves filtering the data to be read and used.

//let rawdata = fs.readFileSync('../SkaneWidget/journeys.json');
//let jsonData = JSON.parse(rawdata);
//console.log("traffic data acquired:" + jsonData[0].routeLongName)

//Assign all traffic elements with json data

//#region 

//#endregion 


// string array
let displayInfo = { templates: [], skåneTrafiken: {} };

(async () => {
    displayInfo.skåneTrafiken = await SkåneTrafiken.Get();
    setInterval(async () => {
        displayInfo.skåneTrafiken = await SkåneTrafiken.Get();
    }, 3600000);
})();



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
            console.log(displayInfo.length);
            if (res.write(`data: ${JSON.stringify(displayInfo)}\n\n`, (error) => { console.log(error) })) {
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


    function AuthenticateLogin(template) {
        // Load credentials from file
        const data = fs.readFileSync('credentials.txt', 'utf8');
        const [username, password] = data.split(':');
        if (template && (template.username === username && template.password === password)) {
            return true
        }
        return false
    }

    function ParseData(templatesToParse) {
        templatesToParse.forEach(template => {
        template.foodSchedules = JSON.parse(template.foodSchedules);
        });
        console.log("Parsed templates in ParseData()")
        return templatesToParse;
    }

    function CheckForNonTemplateChanges(templates) {
        templates = ParseData(templates);
        for (let i = 0; i < templates.length; i++) {
            if (templates[i].duration === null && templates[i].foodSchedules != null) {
                console.log("Detected changes to food schedule")
                // Load foodSchedule file to array of objects
                var savedSchedules = JSON.parse(fs.readFileSync('foodSchedules.txt', 'utf8'));
                console.log(savedSchedules[0])
                console.log(savedSchedules)
                savedSchedules = JSON.parse(savedSchedules); // Needs to be parsed twice

                // Check if the new data already exists in savedSchedule
                for (let x = 0; x < savedSchedules.length; x++) {
                    for (let y = 0; y < templates[i].foodSchedules.length; y++) {
                        foodSchedule = templates[i].foodSchedules[y];// NOTE SINGULAR NOT PLURAL!!!
                        if (savedSchedules[x].week === foodSchedule.week) {
                            // If the new week already exists in savedSchedule, replace it with new week.
                            savedSchedules[x] = foodSchedule;
                        }
                        else {
                            // If the new week doesn't exists in savedSchedule, add it
                            savedSchedules.push(foodSchedule);
                        }
                    }
                }

                // Save the new savedSchedule to file.
                console.log(JSON.stringify(savedSchedules))
                fs.writeFileSync('foodSchedules.txt', JSON.stringify(savedSchedules));
                /*
                console.log("foodSchedules.txt updated");
                // Reading from file again to make sure things are correct
                var newSavedSchedules = JSON.parse(fs.readFileSync('foodSchedules.txt', 'utf8'));
                newSavedSchedules = JSON.parse(newSavedSchedules); // Needs to be parsed twice
                */
                console.log("Current foodSchedules.txt: " + newSavedSchedules);
                templates.splice(i, 1);
            }
            else if (templates[i].duration === null && templates[i].countdown != null) {
                console.log("Detected changes to countdown")
                // Not started working here but same plan :D
                templates.splice(i, 1);
            }
        }
    }


    async function UpdateDisplayInfo() {
        console.log("Entered UpdateDisplayInfo()");
        let templates = JSON.parse(await readFile("currentDisplayInfo.json"));
        console.log("Parsed currentDisplayInfo.json");
        if (templates[0] && templates[0].isCool) {
            console.log("\u006B\u006C\u006F\u0068\u0067\u0065\u0072\u0020\u0077\u0061\u0073\u0020\u0068\u0065\u0072\u0065")
            displayInfo.templates = [];
            displayInfo.templates.push(templates[0].data)
        } else {
            if (AuthenticateLogin(templates[0])) {
                CheckForNonTemplateChanges(templates);

                // if templates.length is 0, then the for loop shouldn't run in the first place! /// KLohger
                if (templates.length != 0) { // Ugly solution but we can't find another way / I and A 
                    displayInfo.templates = [];
                    console.log(`amount of templates: ${templates.length}`)
                    for (let i = 0; i < templates.length; i++) {
                        const window = (await jsdom.JSDOM.fromFile(`${__dirname}/templates/${templates[i].templateID}.html`)).window;
                        const document = window.document;
                        const DOMPurify = createDOMPurify(window);
                        const config = {
                            ALLOWED_TAGS: ['p', 'h1', 'h2', 'h3', 'li', 'ul', 'ol', 'u', 'b', 'i', 'center', '#text', 'sans'],
                            ALLOWED_ATTR: ['class'],
                            KEEP_CONTENT: false,
                        }

                        switch (templates[i].templateID) {

                            case 'Template1': {
                                // fix this
                                textElements[0].innerHTML = DOMPurify.sanitize(templates[i].content.text1, config);

                                const image1 = document.createElement('img');
                                const matches = templates[i].content.image1.split(':')[1].split(';')

                                const ext = matches[0].split('/')[1];
                                const data = matches[1].split(',')[1];
                                console.log(Buffer.from(data, 'base64'));
                                await writeFile(`public/images/template/${templates[i].templateID}.${ext}`, Buffer.from(data, 'base64'));
                                console.log("saved file")
                                image1.src = `${address}/images/template/${templates[i].templateID}.${ext}`;
                                imageElements[0].appendChild(image1);

                                break;
                            }
                            case 'Template2':
                                textElements[0].innerHTML = DOMPurify.sanitize(templates[i].content.text1, config);
                                textElements[1].innerHTML = DOMPurify.sanitize(templates[i].content.text2, config);
                                break;
                            case 'Template3': {
                                const image1 = document.createElement('img');

                                const matches = templates[i].content.image1.split(':')[1].split(';')

                                const ext = matches[0].split('/')[1];
                                const data = matches[1].split(',')[1];
                                console.log(Buffer.from(data, 'base64'));
                                await writeFile(`public/images/template/${templates[i].templateID}.${ext}`, Buffer.from(data, 'base64'));
                                console.log("saved file")
                                image1.src = `${address}/images/template/${templates[i].templateID}.${ext}`;
                                imageElements[0].appendChild(image1);
                                break;
                            }

                            case 'Template4': {
                                textElements[0].innerHTML = DOMPurify.sanitize(templates[i].content.text1, config);

                                const image1 = document.createElement('img');

                                const matches = templates[i].content.image1.split(':')[1].split(';')

                                const ext = matches[0].split('/')[1];
                                const data = matches[1].split(',')[1];
                                console.log(Buffer.from(data, 'base64'));
                                await writeFile(`public/images/template/${templates[i].templateID}.${ext}`, Buffer.from(data, 'base64'));
                                console.log("saved file")
                                image1.src = `${address}/images/template/${templates[i].templateID}.${ext}`;
                                imageElements[0].appendChild(image1);
                                break;
                            }
                            case 'Template5': {
                                textElements[0].innerHTML = DOMPurify.sanitize(templates[i].content.text1, config);
                                textElements[1].innerHTML = DOMPurify.sanitize(templates[i].content.text2, config);
                                break;
                            }
                            default:
                                break;
                        }

                        document.body.classList.add("page");

                        displayInfo.templates[i] = { duration: templates[i].duration, html: changeTag(document, document.body, "div").outerHTML };
                        displayInfo.templates[i].html = displayInfo.templates[i].html.replace(/[\n\r]/g, '');
                    }
                }
            }
            else {
                console.log("login failed");
                if (templates[0]) {
                    console.log(templates[0]);
                    console.log("username: " + templates[0].username);
                    console.log("password: " + templates[0].password);
                } else {
                    console.log("username and password was missing!");
                }

            }
        }
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