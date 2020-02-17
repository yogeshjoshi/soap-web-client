# soap-web-client
small simple soap-web-client library to make SOAP Client

[![Build](https://img.shields.io/badge/build-passing-green)]
[![Coverage](https://img.shields.io/badge/Code%20Coverage-93.75%25-green)]
[![License](https://img.shields.io/github/license/yogeshjoshi/soap-web-client)]

<h3>Install</h3>
<pre>yarn add soap-web-client</pre> 
or
<pre>npm install soap-web-client</pre>

<h3>Requirements</h3>
<pre>node.js >= 7.6.0</pre>

<h3>How to use ?</h3>

<h4>Node.js</h4>
```
const fs = require('fs');
const soaprequest = require('soap-web-client');

const url = 'http://www.dneonline.com/calculator.asmx';
const sampleHeaders = {
    'Content-Type': `text/xml; charset=utf-8`,
    'Content-Length': Infinity,
    'SOAPAction': "http://tempuri.org/Add"
};
const data = fs.readFileSync('request.xml', 'utf-8');
//Use With Async Await
(async () => {
    const { response } = await soaptestrequest({ url, data, headers : sampleHeaders});
    const {headers, body, status, message} = response;
})();

```
<h4>Output Format</h4>

```
Promise Success Output - 
{
    response : 
        {
            "headers" : "",
            "body" : "",
            "status" : 200,
            "message" : "SOAP_WEB_CLIENT_REQUEST_SUCCESS"
        }
}

Promise Failure -
{
    response : {
        "message" : "SOAP_WEB_CLIENT_REQUEST_FAILURE",
        "data" : "error response"
    }
}
```


