import 'dart:async';
import 'name_ipport.dart';
import 'utils.dart';

/*
 *  trpc协议调用
 *  service: trpc协议名称
 *  path: 协议路径
 *  query: 协议参数
 *  headers: request headers
 */
Future<dynamic> trpcReq(String service, String path, String query,
  Map<String, String> headers) async {
    try {
      print('service: $service, path: $path, query: $query, heades: $headers');

      final ipport = await getServiceAddress('Production', service);
      print('ipport:${ipport.toString()}');
      final ip = ipport['ip'];
      final port = '${ipport['port']}';

      final dioj = getDio();
      dioj.options.connectTimeout = 1000;
      dioj.options.sendTimeout = 1000;
      dioj.options.receiveTimeout = 2000;
      dioj.options.headers = headers;

      final startTime = DateTime.now();
      final response = await dioj.get("http://$ip:$port/$service/$path?$query");
      final endTime = DateTime.now();
      print('trpc get:${endTime.millisecondsSinceEpoch - startTime.millisecondsSinceEpoch}');

      return response.data;
    } catch(e) {
      print(e);
      return null;
    }
}
