// partyy-bot!

var twilio = require('twilio');
var request = require('request');

module.exports = function(req) {
  
    return new Promise(function(fulfill, reject){

        // functional code goes in here
        
        var filename = "https://raw.githubusercontent.com/jkeefe/party-bot/master/party.txt";
        filename = filename + "?" + Math.random();
        
        request.get(filename, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var reply = formatReply(body);
                fulfill(reply);
            } else {
                console.log("Error getting text file:", error);
                fulfill(null);
            }
        });
                
    });
  
};

var formatReply = function(text_message){
  
    // build the XML to send back to Twilio
    var twiml = new twilio.TwimlResponse();
    twiml.message(text_message);

    // return the XML
    return(twiml.toString());
  
};