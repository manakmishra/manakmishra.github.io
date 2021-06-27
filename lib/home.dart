import 'package:flutter/material.dart';
import 'package:sizer/sizer.dart';

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
              padding: EdgeInsets.only(top: SizerUtil.orientation == Orientation.landscape ? 23.5.w : 23.5.h),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Container(
                    width: SizerUtil.orientation == Orientation.landscape ? 65.h : 65.w,
                    padding: EdgeInsets.only(bottom: 3.5.h),
                    child: Text(
                      "Hi, I'm Manak! 👋",
                      style: TextStyle(
                        fontFamily: "Chivo",
                        fontWeight: FontWeight.w700,
                        color: Colors.black,
                        fontSize: 22.5.sp,
                      ),
                    ),
                  ),
                  Container(
                    width: SizerUtil.orientation == Orientation.landscape ? 65.h : 65.w,
                    padding: EdgeInsets.only(bottom: 4.44.h),
                    child: RichText(
                      text: TextSpan(
                        children: <TextSpan>[
                          TextSpan(
                            text: 'I\'m a passionate ', 
                            style: TextStyle(
                              fontFamily: "Chivo",
                              fontWeight: FontWeight.w400,
                              color: Colors.black,
                              fontSize: 16.67.sp,
                            ),
                          ),
                          TextSpan(
                            text: 'Game Developer ', 
                            style: TextStyle(
                              fontFamily: "Chivo",
                              fontWeight: FontWeight.w700,
                              color: Color(0xFF0065FF),
                              fontSize: 16.67.sp,
                            ),
                          ),
                          TextSpan(
                            text: 'and ', 
                            style: TextStyle(
                              fontFamily: "Chivo",
                              fontWeight: FontWeight.w400,
                              color: Colors.black,
                              fontSize: 16.67.sp,
                            ),
                          ),
                          TextSpan(
                            text: 'Mobile App Developer ', 
                            style: TextStyle(
                              fontFamily: "Chivo",
                              fontWeight: FontWeight.w700,
                              color: Color(0xFFFFA100),
                              fontSize: 16.67.sp,
                            ),
                          ),
                          TextSpan(
                            text: 'who loves solving challenging problems.', 
                            style: TextStyle(
                              fontFamily: "Chivo",
                              fontWeight: FontWeight.w400,
                              color: Colors.black,
                              fontSize: 16.67.sp,
                            ),
                          ),
                        ],
                      ),
                    )
                  ),
                  Container(
                    width: SizerUtil.orientation == Orientation.landscape ? 65.h : 65.w,
                    child: RichText(
                      text: TextSpan(
                        children: <TextSpan>[
                          TextSpan(
                            text: 'Currently pursuing B.Tech. in Communication and Computer Engineering at ', 
                            style: TextStyle(
                              fontFamily: "Inter",
                              fontWeight: FontWeight.w300,
                              color: Colors.black87,
                              fontSize: 13.33.sp,
                            ),
                          ),
                          TextSpan(
                            text: 'The LNMIIT, Jaipur', 
                            style: TextStyle(
                              fontFamily: "Inter",
                              fontWeight: FontWeight.w300,
                              color: Color(0xFFFF6464),
                              fontSize: 13.33.sp,
                            ),
                          ),
                          TextSpan(
                            text: '.', 
                            style: TextStyle(
                              fontFamily: "Inter",
                              fontWeight: FontWeight.w300,
                              color: Colors.black87,
                              fontSize: 13.33.sp,
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
                    fontSize: 7.5.sp,
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