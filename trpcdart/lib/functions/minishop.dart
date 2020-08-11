import 'dart:async';
import 'package:aqueduct/aqueduct.dart';
import '../framework/l5_req_helper.dart';

/* 
 * L5协议请求实例
 * 拉取个人橱窗开通状态
 */
Future<dynamic> getMiniShopStatus(Request request) async {
  return l5Req(request, "tencentlive.qq.com", "cgi-bin/cgiproxy/tlive/tlive_minishop_third_account_svr/getminishopstatus", 
               "1205121:65536", null);
}

