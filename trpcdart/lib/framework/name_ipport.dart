import 'dart:async';
import 'dart:convert';
import 'package:hello_app/hello_app.dart';
import 'utils.dart';

/*
 *  北极星寻址服务内网地址
 *  替换为实际部署环境地址
 */
const nameService = '9.140.90.3';

/*
 *  使用服务名称调用北极星寻址
 *  env: Production-生产环境 Development-开发环境 
 *  service: trpc协议名称 或者 服务l5地址
 */
Future<dynamic> getServiceAddress(String env, String service) async {
  try {
    final instance = getDio();
    instance.options.connectTimeout = 500;
    instance.options.sendTimeout = 500;
    instance.options.receiveTimeout = 500;
    final response =
        await instance.get('http://$nameService/?namespace=$env&service=$service');
    return json.decode(response.data.toString());
  } catch (e) {
    print(e);
    return null;
  }
  
}
