const AWS = require("aws-sdk")

const s3Config = {
  s3ForcePathStyle: true,
}

// by serverless-offline
const isLocal = process.env.IS_OFFLINE

// use localstack from docker-compose when run serverless-offline
if (isLocal) {
  // Cannot need to do it, because the env vars was defined on docker-compose
  // AWS.config.update({
  //   credentials: {
  //     accessKeyId: 'test',
  //     secretAccessKey: 'test'
  //   }
  // })
  const host = process.env.LOCALSTACK_HOST || "localhost"
  s3Config.endpoint = new AWS.Endpoint(
    `http://${host}:4566`
  )
}

const S3 = new AWS.S3(s3Config)

module.exports = { S3 }