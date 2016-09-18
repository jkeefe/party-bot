var bot = require('./index');
var ApiBuilder = require('claudia-api-builder');
var api = new ApiBuilder();

module.exports = api;

api.post('/question-bot', function(request){
  // bulding the reply (repsonse)
  // which first sends the request object to bot for processing
  return bot(request)
  
    // wait for the Promise object to come back from sparkbot
    .then(function(response){
      // send the response back to the requester (Twilio)
      return response;
    });
    
  }, {
    // this optional 3rd argument changes the format of the response, for twilio 
    success: { contentType: 'application/xml' },
    error: { contentType: 'application/xml' }
});
