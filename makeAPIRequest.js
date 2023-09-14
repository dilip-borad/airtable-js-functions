/**
 * Make simple common API reuest. 
 * ==============================
 * @param {Object} obj with The paramters { url: `${url}`, method: requestMethod, headers: {"header1Key": "header1Value", "header2Key": "header2Value"} body: {}}
 * @return {Object} data response.
 **/
const makeAPIRequest = async (obj) => {
    const options = {
        method: obj.method,
        body: obj.body ? JSON.stringify(obj.body) : undefined,
        headers: obj.headers || {},
    };

    output.markdown(`Make request on \`${obj.url}\``);
    const response = await fetch(obj.url, options);
    return await response.json();
};
