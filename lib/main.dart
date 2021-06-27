import 'package:flutter/material.dart';
import 'package:manakmishra/config/themes/theme.dart';
import 'package:manakmishra/home.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Manak Mishra',
      debugShowCheckedModeBanner: false,
      theme: lightTheme,
      home: Home(),
    );
  }
}
