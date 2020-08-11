import 'dart:async';
import 'package:aqueduct/aqueduct.dart';
import '../framework/trpc_req_helper.dart';
import '../framework/utils.dart';

/* 
 * trpc协议请求实例
 * 拉取个人分享榜列表
 */
Future<dynamic> getShare(Request request) async {
  return trpcReq("trpc.tlive.tlive_share_list.tlive_share_list_http_proxy",
                 "GetList", request.raw.requestedUri.query, copyHeaders(request));
}
