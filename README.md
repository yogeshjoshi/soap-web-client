# soap-web-client
small simple soap-web-client library to make SOAP Client

[![Build](https://img.shields.io/badge/build-passing-green)]
[![Coverage](https://img.shields.io/badge/Code%20Coverage-93.75%25-green)]
[![License](https://img.shields.io/github/license/yogeshjoshi/soap-web-client)]

#Install
<pre>yarn add soap-web-client</pre> 
or
<pre>npm install soap-web-client</pre>

##Requirements
<pre>node.js >= 7.6.0</pre>

##How to use ?

###Node.js
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
###Output Format

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


