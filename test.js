var COS = require('cos-nodejs-sdk-v5');

var SecretId = 'AKID0wsivBFKD3So0KOGXnz2Ka1a0IPOoxbA'; // �滻Ϊ�û��� SecretId
var SecretKey = 'cYQBmCTZeZWOB42wnhnYCzoCQTCylVZs';    // �滻Ϊ�û��� SecretKey
var Bucket = 'qcloudtest-1251018606';                       // �滻Ϊ�û������� Bucket
var Region = 'ap-shanghai';                            // �滻Ϊ�û������� Region

var cos = new COS({SecretId: SecretId, SecretKey: SecretKey});
cos.putBucket({
    Bucket: Bucket,
    Region: Region
}, function (err, data) {
    console.log(err || data);
});