import 'package:flutter/material.dart';

class Home extends StatelessWidget {
  
  const Home({ Key key }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Container(
              padding: EdgeInsets.only(
                top: MediaQuery.of(context).size.height/4.25,
              ),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Container(
                    width: 1240,
                    padding: EdgeInsets.only(bottom: 48),
                    child: Text(
                      "Hi, I'm Manak!",
                      style: TextStyle(
                        fontFamily: "Chivo",
                        fontWeight: FontWeight.w700,
                        color: Colors.black,
                        fontSize: 72,
                      ),
                    ),
                  ),
                  Container(
                    width: 1240,
                    padding: EdgeInsets.only(bottom: 48),
                    child: RichText(
                      text: TextSpan(
                        children: <TextSpan>[
                          TextSpan(
                            text: 'I\'m a passionate ', 
                            style: TextStyle(
                              fontFamily: "Chivo",
                              fontWeight: FontWeight.w400,
                              color: Colors.black,
                              fontSize: 60,
                            ),
                          ),
                          TextSpan(
                            text: 'Game Developer ', 
                            style: TextStyle(
                              fontFamily: "Chivo",
                              fontWeight: FontWeight.w700,
                              color: Color(0xFF0065FF),
                              fontSize: 60,
                            ),
                          ),
                          TextSpan(
                            text: 'and  ', 
                            style: TextStyle(
                              fontFamily: "Chivo",
                              fontWeight: FontWeight.w400,
                              color: Colors.black,
                              fontSize: 60,
                            ),
                          ),
                          TextSpan(
                            text: 'Mobile App Developer ', 
                            style: TextStyle(
                              fontFamily: "Chivo",
                              fontWeight: FontWeight.w700,
                              color: Color(0xFFFFA100),
                              fontSize: 60,
                            ),
                          ),
                          TextSpan(
                            text: 'who loves solving challenging problems.', 
                            style: TextStyle(
                              fontFamily: "Chivo",
                              fontWeight: FontWeight.w400,
                              color: Colors.black,
                              fontSize: 60,
                            ),
                          ),
                        ],
                      ),
                    )
                  ),
                  Container(
                    width: 1240,
                    child: RichText(
                      text: TextSpan(
                        children: <TextSpan>[
                          TextSpan(
                            text: 'Currently pursuing B.Tech. in Communication and Computer Engineering at ', 
                            style: TextStyle(
                              fontFamily: "Inter",
                              fontWeight: FontWeight.w300,
                              color: Colors.black87,
                              fontSize: 42,
                            ),
                          ),
                          TextSpan(
                            text: 'The LNMIIT, Jaipur', 
                            style: TextStyle(
                              fontFamily: "Inter",
                              fontWeight: FontWeight.w300,
                              color: Color(0xFFFF6464),
                              fontSize: 42,
                            ),
                          ),
                          TextSpan(
                            text: '.', 
                            style: TextStyle(
                              fontFamily: "Inter",
                              fontWeight: FontWeight.w300,
                              color: Colors.black87,
                              fontSize: 42,
                            ),
                          ),
                        ],
                      ),
                    )
                  ),
                ],
              ),
            ),
            Container(
              padding: EdgeInsets.only(bottom: 20),
              child: Center(
                child: Text(
                  "Work in Progress.",
                  style: TextStyle(
                    fontFamily: "Inter",
                    fontWeight: FontWeight.w300,
                    color: Colors.black87,
                    fontSize: 18,
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}