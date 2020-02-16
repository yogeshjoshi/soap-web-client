const fs = require('fs');
const soaptestrequest = require('../src/index');
const url = 'www.dneonline.com/calculator.asmx';
const data = fs.readFileSync('__tests__/_resource/request1.xml', 'utf-8');
const headers = {
    'Content-Type': `text/xml; charset=utf-8`,
    'Content-Length': Infinity,
    SOAPAction: "http://tempuri.org/Add"
}
test('soaprequestTest', async () => {
    const { response } = await soaptestrequest({ url, data, headers });
    console.log('Hello Yogesh')
    console.log({ response })
    expect(response).toEqual('');
})
