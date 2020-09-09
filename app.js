// import dotenv
require('dotenv').config();
// import AWS SDK
const AWS = require('aws-sdk');

// Amazon SES configuration
const SESConfig = {
  apiVersion: '2010-12-01',
  accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY,
  region: process.env.AWS_SES_REGION
};

var params = {
  Source: 'node123mailer@gmail.com',
  Destination: {
    ToAddresses: [
      'harichandansukhavasi@gmail.com'
    ]
  },
  ReplyToAddresses: [
    'node123mailer@gmail.com',
  ],
  Message: {
    Body: {
      Html: {
        Charset: "UTF-8",
        Data: 'Hi User, <strong>Thank you</strong> for Signing up with us !!!'
      }
    },
    Subject: {
      Charset: 'UTF-8',
      Data: 'Sign-up Successful'
    }
  }
};

new AWS.SES(SESConfig).sendEmail(params).promise().then((res) => {
  console.log(res);
});