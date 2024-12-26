import 'package:flutter/material.dart';

void main() {
  runApp(MainApp());
}

class MainApp extends StatelessWidget {
  MainApp({super.key});
  final ButtonStyle style =
      ElevatedButton.styleFrom(textStyle: const TextStyle(fontSize: 20));

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        debugShowCheckedModeBanner: false,
        home: Scaffold(
          appBar: AppBar(
            title: const Text("first app"),
            shadowColor: const Color.fromARGB(255, 176, 171, 171),
            backgroundColor: const Color.fromARGB(255, 106, 198, 109),
            actions: const [
              Icon(
                Icons.favorite,
                color: Color.fromARGB(255, 238, 225, 230),
              )
            ],
          ),
          body: Center(
            child: Container(
                color: const Color.fromARGB(255, 249, 190, 190),
                width: 200,
                height: 100,
                margin: const EdgeInsets.all(50.0),
                padding: const EdgeInsets.all(5.0),
                alignment: Alignment.center,
                //transform: Matrix4.rotationZ(0.1),
                child: Column(
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                      const Text(
                        'Hello World!',
                        textDirection: TextDirection.ltr,
                        //textAlign: TextAlign.right,
                      ),
                      const Text(
                        'bonjour!',
                        textDirection: TextDirection.ltr,
                        //textAlign: TextAlign.right,
                      ),
                      ElevatedButton(
                        onPressed: null,
                        style: ElevatedButton.styleFrom(
                            alignment: Alignment.center,
                            backgroundColor: Colors.blue,
                            shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(10))),
                        child: const Icon(Icons.search),
                      )
                    ])),
          ),
        ));
  }
}
