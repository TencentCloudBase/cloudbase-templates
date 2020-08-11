import 'package:aqueduct/aqueduct.dart';
import 'package:dio/adapter.dart';
import 'package:dio/dio.dart';
import '../config.dart';

Map<String, String> copyHeaders(Request request) {
  return {
    'cookie': request.raw.headers.value('cookie'),
    'accept': request.raw.headers.value('accept'),
    'accept-language': request.raw.headers.value('accept-language'),
    'accept-encoding': request.raw.headers.value('accept-encoding'),
    'user-agent': request.raw.headers.value('user-agent'),
  };
}

/*
 *  获取Dio对象
 */
Dio getDio() {
  if (isDev == 1) {
    return _getDioWithProxy();
  } else {
    return _getDioWithNoProxy();
  }
}

/*
 *  获取Dio对象，配本地IOA代理
 */
Dio _getDioWithProxy() {
    final dioj = Dio();
    (dioj.httpClientAdapter as DefaultHttpClientAdapter).onHttpClientCreate = (client){
      client.findProxy = (url) {
        return 'PROXY 127.0.0.1:12639';
      };
    };
    return dioj;
}

/*
 *  获取Dio，不配代理
 */
Dio _getDioWithNoProxy() {
    final dioj = Dio();
    return dioj;
}
