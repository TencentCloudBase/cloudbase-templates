// 返回输入参数
exports.main = async event => {
    console.log('触发事件', Date.now());
    return event;
};
