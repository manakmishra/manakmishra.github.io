import 'package:flutter/material.dart';
import 'package:manakmishra/config/themes/theme.dart';
import 'package:manakmishra/home.dart';
import 'package:sizer/sizer.dart';
import 'package:url_strategy/url_strategy.dart';

void main() {
  setPathUrlStrategy();
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Sizer(
      builder: (context, orientation, deviceType) {
        return MaterialApp(
          title: 'Manak Mishra',
          debugShowCheckedModeBanner: false,
          theme: lightTheme,
          home: Home(),
        );
      }
    );
  }
}
