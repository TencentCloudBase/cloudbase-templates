export default {
    data() {
        return {
            g_prefix: '/'
        }
    },
    created() {
        // #ifdef H5
        // 如果h5的访问路径为 http://xxx.xxxxx.com/uni-app/ 否则无需修改
        this.g_prefix = '/uni-app/'
        // #endif
    },
}