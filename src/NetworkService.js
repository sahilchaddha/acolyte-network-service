var requestClient = require('request');

var NetworkService = function() {
}

NetworkService.prototype.get = function (parameters) {
    parameters.httpMethod = "GET"
    return request(parameters)
};

NetworkService.prototype.post = function (parameters) {
    parameters.httpMethod = "POST"
    return request(parameters)
};

NetworkService.prototype.put = function (parameters) {
    parameters.httpMethod = "PUT"
    return request(parameters)
};

NetworkService.prototype.delete = function (parameters) {
    parameters.httpMethod = "DELETE"
    return request(parameters)
};

function request(parameters) {
      return requestClient({
        url: parameters.endPoint,
        method: parameters.httpMethod,
        json: parameters.isJson,
        body: parameters.data,
        headers: parameters.headers,
    },
    function (error, response, body) {
        if (error != null) {
            if (parameters.error) {
                parameters.error(error)    
            }
        } else {
            if (parameters.success, body != null) {
                    parameters.success(body);
            }                    
        }
    })
}

var sharedNetworkService = new NetworkService()

module.exports = sharedNetworkService