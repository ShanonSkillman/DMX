'use strict';

const dbManager = require('./dbManager');
const uuidv1 = require('uuid/v1');

function createResponse(statusCode, msg){
  return {
    statusCode: statusCode,
    body: JSON.stringify(msg)
  };
}

/*
module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }, null, 2),
  };
};
*/

module.exports.saveItem = (event, context, callback) => {
  const item = JSON.parse(event.body);
  console.log(item);
  item.itemID = uuidv1();

  dbManager.saveItem(item).then(response=>{
    console.log(response);
    callback(null, createResponse(200, response));
  });
};

module.exports.getItem = (event, context, callback) => {
  const itemId = event.pathParameters.itemId;

  dbManager.getItem(itemId).then(response=>{
    console.log(response);
    callback(null, createResponse(200, response));
  });
};

module.exports.deleteItem = (event, context, callback) => {
  const itemId = event.pathParameters.itemId;

  dbManager.deleteItem(itemId).then(response=>{
    callback(null, createResponse(200, 'Item was deleted'));
  });
};

module.exports.updateItem = (event, context, callback) => {
  const itemId = event.pathParameters.itemId;
  const body = JSON.parse(event.body);
  const paramName = body.paramName;
  const paramValue = body.paramValue;

  dbManager.updateItem(itemId, paramName, paramValue).then(response=>{
    console.log(response);
    callback(null, createResponse(200, response));
  });
};
