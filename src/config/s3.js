const AWS = require('aws-sdk');
const fs = require('fs');
require('dotenv').config();

// console.log(process.env);
const bucketName = process.env.AWS_BUCKET_NAME;
// const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

AWS.config.update({
    accessKeyId,
    secretAccessKey
});

var s3 = new AWS.S3();

const uploadFile = function(file) {
    console.log("File object\n", file);
    const fileStream = fs.createReadStream(file.path);
    const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: file.filename
    };
    console.log("Hi");
    return s3.upload(uploadParams).promise();
}

const getFile = function(key) {
    const params = {
        Key: key,
        Bucket: bucketName
    };
    return s3.getObject(params).createReadStream();
}

module.exports = {uploadFile, getFile};