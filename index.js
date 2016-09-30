// partyy-bot!

var twilio = require('twilio');
var request = require('request');

module.exports = function(request) {
  
    return new Promise(function(fulfill, reject){

        // functional code goes in here
        
        request.get('http://www.whatever.com/my.csv', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var csv = body;
        // Continue with your processing here.
    }
});
        
        fulfill(reply);
        
    });
  
};

var formatReply = function(text_message){
  
    // build the XML to send back to Twilio
    var twiml = new twilio.TwimlResponse();
    twiml.message(text_message);

    // return the XML
    return(twiml.toString());
  
};