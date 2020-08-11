import 'package:hello_app/config.dart';
import '../hello_app.dart';

/// This type initializes an application.
///
/// Override methods in this class to set up routes and initialize services like
/// database connections. See http://aqueduct.io/docs/http/channel/.
///

class HelloAppChannel extends ApplicationChannel {
  /// Initialize services in this method.
  ///
  /// Implement this method to initialize services, read values from [options]
  /// and any other initialization required before constructing [entryPoint].
  ///
  /// This method is invoked prior to [entryPoint] being accessed.
  @override
  Future prepare() async {
    logger.onRecord.listen(
        (rec) => print("$rec ${rec.error ?? ""} ${rec.stackTrace ?? ""}"));
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

    // Prefer to use `link` instead of `linkFunction`.
    // See: https://aqueduct.io/docs/http/request_controller/

    functionsMap.forEach((key, value) {
      router.route(key).linkFunction((request) async {
        try {
          return Response.ok(await value(request))
            ..contentType = ContentType.json;
        } catch (e) {
          return Response.ok({'err': -1, 'msg': e.toString()});
        }
      });
    });

    return router;
  }
}
