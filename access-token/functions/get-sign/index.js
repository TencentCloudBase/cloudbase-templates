// 使用时请注意安全
exports.main = async event => {
    // 签名
    const { sign } = event;
    if (process.env.sign && sign !== process.env.sign) {
        return {};
    }

    // 自动注入环境
    const {
        TENCENTCLOUD_SECRETID,
        TENCENTCLOUD_SECRETKEY,
        TENCENTCLOUD_SESSIONTOKEN
    } = process.env;

    return {
        secretId: TENCENTCLOUD_SECRETID,
        secretKey: TENCENTCLOUD_SECRETKEY,
        token: TENCENTCLOUD_SESSIONTOKEN
    };
};
