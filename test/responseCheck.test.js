var responseCheck = require('../src/responseCheck').responseCheck;

var urls = ['http://www.google.co.uk/'].sort();

urls.forEach(function (appUrl) {
    responseCheck(appUrl);
});
