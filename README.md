# party-bot
Text a number to learn where the party's at. Uses AWS Lambda to field the calls and reply.

## Setting Up Lambda

_NOTE: [Amazon Web Services](aws.amazon.com) (AWS) is not what I'd call beginner-friendly. But dive in if you can. To use the code in this repo, you'll need to create a new AWS user in the "Identity and Access Management" part of AWS (which is called IAM). That user, which I've called `lambda-master`, needs IAM full access, Lambda full access and API Gateway Administrator privileges. More about getting up to speed is nicely written up by the folks who made [claudia.js](https://claudiajs.com/tutorials/installing.html)_

Load in Claudia and the other dependencies:

```bash
npm init
npm install claudia --save-dev
npm install claudia-api-builder --save
npm install twilio mongodb --save
```

Make sure a `lambda.js` file is in the directory tree. Here's a base  [example](https://gist.githubusercontent.com/jkeefe/c013ea91f4cfaf95ecef2a51b9c77f13/raw/56482f75615accb1b7360f51e94ce7ccc8a71640/lambda.js).

Make sure to have an `index.js` file in the directory tree. Here's a base [example](https://gist.githubusercontent.com/jkeefe/ebdb3cc1b3a704f4efb93adad76af284/raw/bd52173ca6d82a1dba4ab660730398b8bf93e422/index.js).

To establish the function the first time:

`AWS_PROFILE=lambda-master ./node_modules/.bin/claudia create --region us-east-1 --api-module lambda`

Take note of the URL in the configuration json that's displayed when all is done. Everything else (sans URL) is saved as `claudia.json`. (Or don't, because it tells you on every update.)

### Updating the code
  
To update the code all the billions of other times:

`AWS_PROFILE=lambda-master ./node_modules/.bin/claudia update`

### Secret & Environment Variables

To store API keys and the like, set them as "stage variables," such as `MONGO_URL` in the AWS API Gateway. 

- API Gateway >
- [name of API] >
- stages >
- latest >
- stage variables >
- Add stage variable

They then get passed to the function by lambda, and can be used like this:
  
```javascript
var mongoKey = request.env.MONGO_URL;
```


