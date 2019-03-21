'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const params = {
  TableName: process.env.BACKGAMMON_USERS_TABLE,
  KeyConditionExpression: 'createdAt = :createdAt',
  Limit: 1,
  ScanIndexForward: false,   
};

  module.exports.get = (event, context, callback) => {
    // fetch all todos from the database
    dynamoDb.scan(params, (error, result) => {
      // handle potential errors
      if (error) {
        console.error(error);
        callback(null, {
          statusCode: error.statusCode || 501,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Couldn\'t fetch the experiences.',
        });
        return;
      }
  
      // create a response
      const response = {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': 'http://pratikmathur.com',
        'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify(result.Items),
      };
      callback(null, response);
    });
  };
  