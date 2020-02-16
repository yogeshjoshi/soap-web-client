const axios = require('axios').default;
/**
 * @author Joshi Yogesh
 * @param {string} url - URL mentioned in the wsdl {endpoints to hit the soap-request}
 * @param {string} data - XML data which need to be sent to web service
 * @param {object} headers - Header which need to be sent to request
 * @param {object} proxy - Proxy Object with Proxy configuration of Proxy server host name and port number {host : "127.0.0.1",port : 3000, auth : {username : "joshiyogesh" password : "imduffer"}}
 * @param {number} timeout - Timeout for request
 * @param {number} maxContentLength - max permissable content length that should be pass, by default Infinity 
 */
const soaprequest = ({
    url = '',
    headers = {},
    data = '',
    timeout = 0,
    proxy = {},
    maxContentLength  = Infinity
}:{url:string, headers:object,data:string,timeout:number,proxy:object,maxContentLength:number}) => {
    return new Promise((resolve,reject)=>{
        axios({
            method : 'post',
            url,
            headers,
            data,
            timeout,
            proxy,
            maxContentLength
        }).then((response : any)=>{
            resolve({
                res : {
                    headers : response.headers,
                    body : response.data,
                    status : response.status
                }
            })
        }).catch((error : any)=>{
            if(error.response){
                reject({
                    error : {
                        message : 'SOAP_REQUEST_FAILURE',
                        data : error.response.data
                    }
                })
            }else{
                reject({
                    error : {
                        message : 'SOAP_REQUEST_FAILURE',
                        data : error
                    }
                })
            }
        })
    })
};

module.exports = soaprequest;
