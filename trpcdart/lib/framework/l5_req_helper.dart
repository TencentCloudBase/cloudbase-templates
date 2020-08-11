import 'dart:async';
import 'package:aqueduct/aqueduct.dart';
import 'package:dio/dio.dart' as dio;
import 'name_ipport.dart';
import 'utils.dart';

/*
 *  L5通用协议请求
 */
Future<dynamic> l5Req(Request request, String host, String path, String service, Map<String, String> params) async {
  try {
    final cookieStr = request.raw.headers.value('cookie');
    final headers = {
      'Referer': "https://$host",
      'Host': host,
      'cookie': cookieStr
    };

    // 从l5地址寻址ip/port
    final ipport = await getServiceAddress("Production", service);
    final ip = ipport['ip'];
    final port = '${ipport['port']}';
   
    final dioj = getDio();
    dioj.options.connectTimeout = 1000;
    dioj.options.sendTimeout = 1000;
    dioj.options.receiveTimeout = 2000;

    final startTime = DateTime.now();
    final response = await dioj.get('http://$ip:$port/$path', options: dio.Options(headers: headers, ), queryParameters: params);
    final endTime = DateTime.now();
    print('l5req get:${endTime.millisecondsSinceEpoch - startTime.millisecondsSinceEpoch}');
    return response.data;
  } catch (e) {
    print(e);
    return null;
  }
}