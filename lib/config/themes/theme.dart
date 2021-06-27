import 'package:flutter/material.dart';

ThemeData lightTheme = ThemeData(
        brightness: Brightness.light,
        primarySwatch: MaterialColor(
          0xFF377A83, 
          <int, Color>{
            50: Color(0xFFEBF2F3),
            100: Color(0xFFD7E4E6),
            200: Color(0xFFAFCACD),
            300: Color(0xFF87AFB5),
            400: Color(0xFF5F959C),
            500: Color(0xFF377A83),
            600: Color(0xFF2C6269),
            700: Color(0xFF21494F),
            800: Color(0xFF163134),
            900: Color(0xFF0B181A),
          },
        ),
        primaryColor: Color(0xFF377A83),
        primaryColorBrightness: Brightness.light,        
        primaryColorLight: Color(0xFFEBF2F3),
        primaryColorDark: Color(0xFF0B181A),
        canvasColor: Color(0xFF7294A7),
        accentColor: Color(0xFF5DA2D5),        
        accentColorBrightness: Brightness.light,
        scaffoldBackgroundColor: Color(0xFFF5F1EE),        
      );