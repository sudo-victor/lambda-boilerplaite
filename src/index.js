"use strict";
const { S3 } = require("./factory");

module.exports.main = async (event) => {
  const allBuckets = await S3.listBuckets().promise()
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        allBuckets
      },
      null,
      2
    ),
  };
};
