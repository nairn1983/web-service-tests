var hh = require('http-https');

var responseCheck = function(url) {
    describe('Calling the URL ' + url, function() {
        it('should return a response', function(done) {
            hh.request(url, function(response) {
                done();
            }).end();
        });
    });
}

module.exports.responseCheck = responseCheck;