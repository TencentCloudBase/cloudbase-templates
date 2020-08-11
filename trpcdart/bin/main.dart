import 'package:aqueduct/aqueduct.dart';
import 'package:hello_app/framework/channel.dart';
import 'package:hello_app/hello_app.dart';


Future main() async {
  final app = Application<HelloAppChannel>()
    ..options.configurationFilePath = "config.yaml"
    ..options.port = 8090;

  final count = Platform.numberOfProcessors ~/ 2;
  await app.start(numberOfInstances: count > 0 ? count : 1);

  print("Application started on port: ${app.options.port}.");
  print("Use Ctrl-C (SIGINT) to stop running the application.");
}
