import 'package:hello_app/framework/function_def.dart';
import 'functions/minishop.dart';
import 'functions/share.dart';

/* 是否是本地开发调试 
 * 0-本地开发网 1-Serverless内网
 * 注意发布前必须修改为 0
 */
const isDev = 0;

/* 
 * 请求映射表
 */
const Map<String, HandleFunction> functionsMap = {'/share': getShare, '/minishop': getMiniShopStatus};
