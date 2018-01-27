var networkService = require('./NetworkService.js');

networkService.get({
        endPoint: "http://www.google.com",
        success: function(responseBody) {
            console.log(responseBody)
        },
        error: function(error) {
            console.log(error)
        }
    })