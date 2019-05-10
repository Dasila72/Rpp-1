// const http = require("http");
// http.createServer(function(request,response){
//      
//     response.end("Hello NodeJS!");
//      
// }).listen(3000, "127.0.0.1",function(){
//     console.log("Сервер начал прослушивание запросов на порту 3000");
// });
////////////////
// const os = require("os");
// const greeting = require("./greeting");
// // получим имя текущего пользователя
// let userName = os.userInfo().username;
 /////////////////
// console.log(`Дата запроса: ${greeting.date}`);
// console.log(greeting.getMessage(userName));

// const http = require("http");
// http.createServer(function(request,response){
//      
//     response.end(greeting.getMessage(userName));
//      
// }).listen(3000, "127.0.0.1",function(){
//     console.log("Сервер начал прослушивание запросов на порту 3000");
// });
//////////////////

// const welcome = require("./podpm");
// welcome.getMorningMessage();
// welcome.getEveningMessage();
////////////////

// let nodePath = process.argv[0];
// let appPath = process.argv[1];
// let name = process.argv[2];
// let age = process.argv[3];

// console.log("nodePath: " + nodePath);
// console.log("appPath: " + appPath);
// console.log();
// console.log("name: " + name);
// console.log("age: " + age);
/////////////////////////

// получаем модуль Express
const express = require("express");
// создаем приложение
const app = express();
 
// устанавливаем обработчик для маршрута "/"
app.get("/", function(request, response){
 
    response.end("Hello from Express!");
});
// начинаем прослушивание подключений на 3000 порту
app.listen(3000);