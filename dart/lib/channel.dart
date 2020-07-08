import 'app.dart';

/// This type initializes an application.
///
/// Override methods in this class to set up routes and initialize services like
/// database connections. See http://aqueduct.io/docs/http/channel/.
class AppChannel extends ApplicationChannel {
  /// Initialize services in this method.
  ///
  /// Implement this method to initialize services, read values from [options]
  /// and any other initialization required before constructing [entryPoint].
  ///
  /// This method is invoked prior to [entryPoint] being accessed.
  @override
  Future prepare() async {
    logger.onRecord.listen((rec) => print("$rec ${rec.error ?? ""} ${rec.stackTrace ?? ""}"));
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

    return router;
  }
}