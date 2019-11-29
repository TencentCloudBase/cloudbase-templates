const path = require('path');
const crypto = require('crypto');
const fetch = require('node-fetch');
const CloudBase = require('@cloudbase/manager-node');

const dateTime = new Date().toGMTString();
const SecretId = 'AKIDavXmIwf095ob9Y4pbkifsxuuwt1h9QjG6cOq';
const SecretKey = process.env.API_GATEWAY_SECRET_KEY;

// 调用云函数获取访问 token
async function getAccessToken() {
  const signHeader = `x-date: ${dateTime}`;
  const sign = crypto
    .createHmac('sha1', SecretKey)
    .update(signHeader)
    .digest('base64');

  const auth = `hmac id="${SecretId}", algorithm="hmac-sha1", headers="x-date", signature="${sign}"`;

  const res = await fetch(
    'https://service-0k4s0grn-1252710547.ap-shanghai.apigateway.myqcloud.com/release/',
    {
      method: 'GET',
      headers: {
        'X-Date': dateTime,
        Authorization: auth
      }
    }
  );
  const data = await res.json();

  return data;
}

// 上传压缩包文件
async function uploadZipFiles() {
  const secret = await getAccessToken();

  console.log('获取密钥成功！');

  const app = CloudBase.init({
    ...secret,
    envId: 'base-830cab'
  });

  try {
    await app.storage.uploadDirectory(
      path.resolve(__dirname, '../../.zip-files'),
      'cloudbase-templates'
    );
    console.log('上传文件成功！');
  } catch (error) {
    console.log(error);
  }
}

uploadZipFiles();
