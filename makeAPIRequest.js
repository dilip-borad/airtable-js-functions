/**
 * Make simple common API reuest. 
 * ==============================
 * @param {Object} obj with The paramters { url: `${url}`, method: requestMethod, headers: {"header1Key": "header1Value", "header2Key": "header2Value"} body: {}}
 * @return {Object} data response.
 **/
const makeAPIRequest = async function (obj) {
    let options = {}, response;
    options.method = obj.method;
    if (typeof obj.body !== undefined) {
        options.body = JSON.stringify(obj.body);
    }
    if (typeof obj.headers !== undefined) {
        options.headers = obj.headers;
    }
    output.markdown(`Make request on \`${obj.url}\``);
    //console.log(obj);    
    response = await fetch(obj.url, options);
    response = await response.json();
    return response;
}
