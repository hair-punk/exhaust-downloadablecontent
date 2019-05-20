var AWS = require('aws-sdk');
// var test = require('./')

AWS.config.loadFromPath(__dirname+'/aws_config');

var s3Bucket = new AWS.S3({ params: { Bucket: 'hrr38-fecteam3-purchaseoptionsimages' } });


// TODO imageName, imageFile
// var data = { Key: imageName, Body: imageFile };
// s3Bucket.putObject(data, function (err, data) {
//   if (err) return console.error(err);
// });

var getImageURLs = function() {

  var urls = {};

  var params = { Bucket: 'hrr38-fecteam3-purchaseoptionsimages' };
  s3.listObjects(params, function (err, data) {
    var bucketContents = data.Contents;

    for (var i = 0; i < bucketContents.length; i++) {

      var gameType = bucketContents[i].Key.split('-')[0];
      if (urls[gameType] === undefined){
        urls[gameType] = [];
      }

      var urlParams = { Bucket: 'hrr38-fecteam3-purchaseoptionsimages', Key: bucketContents[i].Key };
      s3.getSignedUrl('getObject', urlParams, function (err, url) {
        if (err) return console.error(err);
        urls[gameType].push(url);
      });
    }
  });

  return urls;
}

module.exports = getImageURLs;