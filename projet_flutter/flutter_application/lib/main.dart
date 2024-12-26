import 'package:flutter/material.dart';


void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        debugShowCheckedModeBanner: false,
        home: Scaffold(
            endDrawer: const Drawer(child: Text("my drawer")),
            appBar: AppBar(
              leading: const Icon(Icons.person),
              title: const Text("my home page"),
              backgroundColor: const Color.fromARGB(255, 236, 191, 244),
            ),
            body: SingleChildScrollView(
                child: Column(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                  Container(
                      decoration: const BoxDecoration(
                          color: Color.fromARGB(255, 250, 223, 142),
                          boxShadow: [
                            BoxShadow(
                                color: Color.fromARGB(255, 212, 211, 211),
                                offset: Offset(4, 4),
                                blurRadius: 10)
                          ],
                          borderRadius: BorderRadius.all(Radius.circular(50))),
                      margin: const EdgeInsets.symmetric(
                          vertical: 40.0, horizontal: 50.0),
                      alignment: Alignment.center,
                      width: 480,
                      height: 90,
                      child: const Text(
                        "hello",
                        style: TextStyle(
                            color: Color.fromARGB(255, 163, 193, 115),
                            fontSize: 30.0,
                            fontWeight: FontWeight.bold),
                      )),
                  Container(
                      decoration: const BoxDecoration(
                          color: Color.fromARGB(255, 250, 223, 142),
                          boxShadow: [
                            BoxShadow(
                                color: Color.fromARGB(255, 212, 211, 211),
                                offset: Offset(4, 4),
                                blurRadius: 10)
                          ],
                          borderRadius: BorderRadius.all(Radius.circular(50))),
                      margin: const EdgeInsets.symmetric(
                          vertical: 40.0, horizontal: 50.0),
                      alignment: Alignment.center,
                      width: 480,
                      height: 90,
                      child: const Text(
                        "hello",
                        style: TextStyle(
                            color: Color.fromARGB(255, 163, 193, 115),
                            fontSize: 30.0,
                            fontWeight: FontWeight.bold),
                      )),
                  Container(
                      decoration: const BoxDecoration(
                          color: Color.fromARGB(255, 250, 223, 142),
                          boxShadow: [
                            BoxShadow(
                                color: Color.fromARGB(255, 212, 211, 211),
                                offset: Offset(4, 4),
                                blurRadius: 10)
                          ],
                          borderRadius: BorderRadius.all(Radius.circular(50))),
                      margin: const EdgeInsets.symmetric(
                          vertical: 40.0, horizontal: 50.0),
                      alignment: Alignment.center,
                      width: 480,
                      height: 90,
                      child: const Text(
                        "hello",
                        style: TextStyle(
                            color: Color.fromARGB(255, 163, 193, 115),
                            fontSize: 30.0,
                            fontWeight: FontWeight.bold),
                      )),
                  Container(
                      decoration: const BoxDecoration(
                          color: Color.fromARGB(255, 250, 223, 142),
                          boxShadow: [
                            BoxShadow(
                                color: Color.fromARGB(255, 212, 211, 211),
                                offset: Offset(4, 4),
                                blurRadius: 10)
                          ],
                          borderRadius: BorderRadius.all(Radius.circular(50))),
                      margin: const EdgeInsets.symmetric(
                          vertical: 40.0, horizontal: 50.0),
                      alignment: Alignment.center,
                      width: 480,
                      height: 90,
                      child: const Text(
                        "hello",
                        style: TextStyle(
                            color: Color.fromARGB(255, 163, 193, 115),
                            fontSize: 30.0,
                            fontWeight: FontWeight.bold),
                      )),
                  Container(
                      decoration: const BoxDecoration(
                          color: Color.fromARGB(255, 250, 223, 142),
                          boxShadow: [
                            BoxShadow(
                                color: Color.fromARGB(255, 212, 211, 211),
                                offset: Offset(4, 4),
                                blurRadius: 10)
                          ],
                          borderRadius: BorderRadius.all(Radius.circular(50))),
                      margin: const EdgeInsets.symmetric(
                          vertical: 40.0, horizontal: 50.0),
                      alignment: Alignment.center,
                      width: 480,
                      height: 90,
                      child: const Text(
                        "hello",
                        style: TextStyle(
                            color: Color.fromARGB(255, 163, 193, 115),
                            fontSize: 30.0,
                            fontWeight: FontWeight.bold),
                      )),
                  Container(
                      decoration: const BoxDecoration(
                          color: Color.fromARGB(255, 250, 223, 142),
                          boxShadow: [
                            BoxShadow(
                                color: Color.fromARGB(255, 212, 211, 211),
                                offset: Offset(4, 4),
                                blurRadius: 10)
                          ],
                          borderRadius: BorderRadius.all(Radius.circular(50))),
                      margin: const EdgeInsets.symmetric(
                          vertical: 40.0, horizontal: 50.0),
                      alignment: Alignment.center,
                      width: 480,
                      height: 90,
                      child: const Text(
                        "hello",
                        style: TextStyle(
                            color: Color.fromARGB(255, 163, 193, 115),
                            fontSize: 30.0,
                            fontWeight: FontWeight.bold),
                      )),
                  Container(
                      decoration: const BoxDecoration(
                          color: Color.fromARGB(255, 250, 223, 142),
                          boxShadow: [
                            BoxShadow(
                                color: Color.fromARGB(255, 212, 211, 211),
                                offset: Offset(4, 4),
                                blurRadius: 10)
                          ],
                          borderRadius: BorderRadius.all(Radius.circular(50))),
                      margin: const EdgeInsets.symmetric(
                          vertical: 40.0, horizontal: 50.0),
                      alignment: Alignment.center,
                      width: 480,
                      height: 90,
                      child: const Text(
                        "hello",
                        style: TextStyle(
                            color: Color.fromARGB(255, 163, 193, 115),
                            fontSize: 30.0,
                            fontWeight: FontWeight.bold),
                      )),
                ]))));
  }
}
