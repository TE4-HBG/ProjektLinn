/**
 * @param {string} url 
 * @param {(string,string) => any} callback 
 * @param {string} params 
 * @param {string} id 
 */
function requestPost(url, callback, params, id) {
    var request = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"); request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE && request.status === 200) { callback(request.responseText, id) }
    }; request.open('POST', url, !0); request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); request.send(params)
}
/**
 * @param {string} data 
 * @param {string} id 
 */
function updateOnPage(data, id) {
    const parsedData = JSON.parse(data)
    console.log(parsedData);
    if (parsedData.hasOwnProperty("a") && parsedData.a.hasOwnProperty("html")) {
        document.getElementById(id).innerHTML = parsedData.a.html
    }
}
/**
 * 
 * @param {string} id 
 */
function initializeWidget(id) {
    const element = document.getElementById(id);
    const v = element.getAttribute("v");
    const a = element.getAttribute("a");
    const l = element.getAttribute("loc");
    const u = document.getElementById(id + '_u').getAttribute("href") + '|||' + document.getElementById(id + '_u').innerHTML;
    const ub = element.innerHTML;
    requestPost('https://app1.weatherwidget.org/data/', updateOnPage, `v=${v}&a=${a}&l=${l}&u=${u}&ub=${ub}&i=${false}&g=${0}&id=${id}`, id)
}
initializeWidget('ww_c2119b56c9599');