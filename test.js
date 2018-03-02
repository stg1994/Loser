var COS = require('cos-nodejs-sdk-v5');

var SecretId = 'AKID0wsivBFKD3So0KOGXnz2Ka1a0IPOoxbA'; // 替换为用户的 SecretId
var SecretKey = 'cYQBmCTZeZWOB42wnhnYCzoCQTCylVZs';    // 替换为用户的 SecretKey
var Bucket = 'qcloudtest-1251018606';                       // 替换为用户操作的 Bucket
var Region = 'ap-shanghai';                            // 替换为用户操作的 Region

var cos = new COS({SecretId: SecretId, SecretKey: SecretKey});
cos.putBucket({
    Bucket: Bucket,
    Region: Region
}, function (err, data) {
    console.log(err || data);
});