import 'package:cloudbase_dart/cloudbase_dart.dart';
import 'app.dart';

/// This type initializes an application.
///
/// Override methods in this class to set up routes and initialize services like
/// database connections. See http://aqueduct.io/docs/http/channel/.
class AppChannel extends ApplicationChannel {
  /// 云数据库
  CloudBaseDatabase database;

  /// Initialize services in this method.
  ///
  /// Implement this method to initialize services, read values from [options]
  /// and any other initialization required before constructing [entryPoint].
  ///
  /// This method is invoked prior to [entryPoint] being accessed.
  @override
  Future prepare() async {
    logger.onRecord.listen((rec) => print("$rec ${rec.error ?? ""} ${rec.stackTrace ?? ""}"));
    /// 初始化云数据库
    database = CloudBaseDatabase(CloudBaseCore.init({
      /// 云开发环境 ID
      'env': 'your-env-id',         
      /// 腾讯云 API 固定密钥对
      /// 获取路径: https://console.cloud.tencent.com/cam/capi
      'secretId': 'your-secretId',
      /// 同上
      'secretKey': 'your-secretKey' 
    }));
  }

  /// Construct the request channel.
  ///
  /// Return an instance of some [Controller] that will be the initial receiver
  /// of all [Request]s.
  ///
  /// This method is invoked after [prepare].
  @override
  Controller get entryPoint {
    final router = Router();

    router
      .route("/")
      .linkFunction((request) async {
        return Response.ok('<h1>Hello Tencent CloudBase + Dart <h1> <h2>本示例 Github 源码地址</h2><a href="https://github.com/TencentCloudBase/cloudbase-templates/tree/master/dart">https://github.com/TencentCloudBase/cloudbase-templates/tree/master/dart</a><h2>开发部署工具</h2><a href="https://github.com/TencentCloudBase/cloudbase-framework" title="CloudBase Framework: 云开发前后端一体化部署工具"><img width="420" src="https://main.qcloudimg.com/raw/615038b16047fa677646011fae909102.png"></a>');
      });

    router
      .route("/example")
      .linkFunction((request) async {
        return Response.ok({"key": "value"});
      });

    /// 在请求里使用云数据库
    /// 云数据库详细文档请参考: https://docs.cloudbase.net/api-reference/flutter/database.html
    router
      .route("/user")
      .linkFunction((request) async {
        try {
          /// 这里需要用户在云开发控制台先创建数据库集合 user
          final res = await database.collection('user').count();
          /// 处理错误
          if (res.code != null) {
            return Response.serverError(body: {
              "code": res.code,
              "message": res.message
            });
          }
          /// 回包
          return Response.ok({"user_count": res.total});
        } catch (err) {
          return Response.serverError(body: err);
        }
      });

    return router;
  }
}