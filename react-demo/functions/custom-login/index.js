/* eslint-disable */
const tcb = require('tcb-admin-node')
// 导出自定义登录私钥
const config = require('./config')

exports.main = async function(event) {
  const { SCF_NAMESPACE } = process.env
  // 字母和数字的组合
  const { userId = 'tcb00' } = event.queryString || {}

  tcb.init({
    env: SCF_NAMESPACE,
    credentials: {
      private_key_id: config.keyId,
      private_key: config.key
    }
  })

  let {
    headers: { origin }
  } = event

  // if (!validDomains.includes(origin)) {
  //   origin = '';
  // }

  if (!/^[a-zA-Z0-9]{4,32}$/.test(userId)) {
    return {
      isBase64Encoded: false,
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': origin
      }
    }
  }

  console.log(userId)

  const ticket = tcb.auth().createTicket(userId, {
    refresh: 10 * 60 * 1000
  })

  return {
    isBase64Encoded: false,
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': origin
    },
    body: JSON.stringify({
      ticket
    })
  }
}
