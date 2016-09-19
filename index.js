// partyy-bot!

var twilio = require('twilio');
var mongodb = require('mongodb');

module.exports = function(request) {
  
    return new Promise(function(fulfill, reject){

        // functional code goes in here
        
        reply = formatReply("Woot! The party starts in the bar of The Roxy 6 pm Friday Sept. 30. Free later? Text again then to see if we've moved! Roxy: https://goo.gl/maps/Wiiuqn3uc1Q2");
        
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