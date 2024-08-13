// const fs = require("fs");
// const app = require('./app');

// console.log(app.c());

// console.log("hello");
// // fs.writeFileSync("hello.txt","Hello Node JS");

// const http = require('http');

// http.createServer((req, res) => {
//     res.write("<h1>Hello this is demo</h1>");
//     res.end();
// }).listen(4500);


// const options = {
//   host: '127.0.0.1',
//   port: 8080,
//   path: '/length_request',
// };

// const req = http.request(options);
// req.end();

// req.on('information', (info) => {
//   console.log(`Got information prior to main response: ${info.statusCode}`);
// });


var chalk = require('chalk');

console.log(chalk.blue('Hello world!'));

console.log(chalk.blue('Hello') + 'World' + chalk.red('!'));

console.log(chalk.blue.bgRed.bold('Hello world!'));

console.log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

console.log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));

console.log(chalk.styles.red.open + 'Hello' + chalk.styles.blue.close);
