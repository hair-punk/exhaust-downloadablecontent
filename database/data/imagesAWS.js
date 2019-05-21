var AWS = require('aws-sdk');

AWS.config.loadFromPath(__dirname+'/config.json');

var s3 = new AWS.S3();

var getImageURLs = function(cb) {

  var urls = {};

  var params = { Bucket: 'hrr38-fecteam3-purchaseoptionsimages' };
  s3.listObjects(params, function (err, data) {
    if (err) return console.error('err:', err);
    var bucketContents = data.Contents;

    async function getSignedUrl(key) {
      return new Promise((resolve, reject) => {
        let params = { Bucket: 'hrr38-fecteam3-purchaseoptionsimages', Key: key };
        s3.getSignedUrl('getObject', params, (err, url) => {
          if (err) return console.error(err)
          resolve(url);
        })
      });
    }

    async function process(items) {
      for (let item of items) {
        const signedUrl = await getSignedUrl(item.Key);
        var gameType = item.Key.split('-')[0];
        if (urls[gameType] === undefined) {
          urls[gameType] = [];
        }
        urls[gameType].push(signedUrl);
      }
      return urls;
    }


    process(bucketContents).then(res => {
      cb(res);
    });
  });
}

module.exports = getImageURLs;