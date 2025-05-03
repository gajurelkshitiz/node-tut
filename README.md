# 🌟 Node.js Learning Journey

Welcome to my Node.js learning repository!  
This repo contains all the code and notes I practiced while exploring the fundamentals of Node.js. I followed a structured tutorial and documented the key concepts I learned along the way. This README serves as a summary and reference.

---

## 🚀 Topics Covered

###  What Is Node.js?
Node.js is a runtime environment that lets you run JavaScript on the server side. It is built on Chrome’s V8 engine and is designed for building scalable, high-performance applications, especially web servers.

---

###  Browser vs Server
- **Browser**: Executes JavaScript in the frontend (limited access to OS).
- **Server**: Executes JavaScript using Node.js (access to filesystem, OS, network, etc.).

---

###  Install Node & REPL
- Installed Node.js and learned about **REPL** (Read-Eval-Print Loop), which is an interactive shell to run Node commands directly.
```bash
node
> 2 + 2
4
```

### CLI & Globals
- LLearned how to use the command line interface to execute .js files and explored global objects like `__dirname`, `__filename`, and `require`.

```js
console.log(__dirname); // Outputs current directory
```

###  Modules

- **CommonJS Modules**: Used `require` and `module.exports` to create and reuse code across files.

```js
// greet.js
const greet = () => console.log("Hello, Node!");
module.exports = greet;
```

```js
// app.js
const greet = require('./greet');
greet();
```


### Built-in Modules
- **OS Module** - Fetches system info.

- **Path Module**: Handles file paths.

- **FS Module**: Reads and writes to files (sync & async).

```js
const os = require('os');
console.log(os.userInfo());
```

###  Sync vs Async
- Explored blocking vs non-blocking code execution.

- Used `fs.readFileSync` and `fs.readFile` to understand the difference.


### HTTP Module
Built a simple HTTP server using Node’s built-in `http` module.

```js
const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Hello, World!');
});
server.listen(3000);
```

### NPM (Node Package Manager)
- Learned how to initialize a project with `npm init`.

- Installed packages locally and globally.

- Explored `package.json` and `package-lock.json`.

```bash
npm install lodash
```

### Nodemon
Used Nodemon to automatically restart the server on file changes.

```bash
npm install -g nodemon
nodemon app.js
```

### Event Loop
Studied the Node.js event loop and how it handles asynchronous operations behind the scenes.

### Async Patterns
- **Callbacks**, **Promises**, and `async/await`.

- Refactored callback-based code into Promises.

```js
const { readFile } = require('fs').promises;

const start = async () => {
  const data = await readFile('./content.txt', 'utf8');
  console.log(data);
};

start();
```

###  Events and EventEmitter
Learned how to use Node's built-in `EventEmitter` class to create and handle custom events.

```js
const EventEmitter = require('events');
const customEmitter = new EventEmitter();

customEmitter.on('response', () => {
  console.log('Data received');
});

customEmitter.emit('response');
```


### Streams
Used streams to handle large data efficiently.

```js
const fs = require('fs');
const stream = fs.createReadStream('./large-file.txt', 'utf8');

stream.on('data', (chunk) => {
  console.log(chunk);
});
```

### HTTP Request/Response Cycle
Understood the flow of an HTTP request and response, including:

- **Headers**

- **Request Object**

- **Serving HTML files**

```js
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const html = fs.readFileSync('./index.html', 'utf8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  }
});
server.listen(3000);
```

### 
📁 Project Structure

```bash
📦 nodejs-learning
├── 📂 modules
│   └── greet.js
├── 📂 http-server
│   └── app.js
├── 📂 streams
│   └── stream-example.js
├── 📂 events
│   └── emitter.js
├── 📂 fs
│   ├── read-sync.js
│   └── read-async.js
├── package.json
└── README.md
```

