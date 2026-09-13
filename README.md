# ⚡ Smart Utility Toolkit

> **Lab Assignment 1 — Web Dev III (Node.js & Express Backend)**  
> A compact collection of Node.js utilities built entirely with **Node.js core modules**.

---

## 🧩 Project Overview

**Smart Utility Toolkit** is a hands-on Node.js project that demonstrates backend fundamentals without Express, external npm packages, or a database.

The toolkit contains five utilities:

- 🧮 **CLI Calculator** — command-line arithmetic using `process.argv`
- 🧱 **Custom Modules** — reusable functions using `module.exports` and `require()`
- 🌐 **HTTP Server** — route-based responses using the `http` module
- 📁 **File Manager** — create, read, update, and delete files using `fs`
- 🎲 **Dice Generator** — random dice rolls using `crypto`

---

## 🗂️ Project Structure

```text
smart-utility-toolkit/
│
├── 📄 calculator.js
├── 📄 app.js
├── 🌐 server.js
├── 📄 fileManager.js
├── 🎲 dice.js
│
├── 📂 modules/
│   ├── isEven.js
│   └── logger.js
│
└── 📘 README.md
```

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **Node.js** | JavaScript runtime |
| **JavaScript (ES6)** | Backend logic |
| `process` | Command-line arguments |
| `http` | HTTP server and routing |
| `fs` | File operations |
| `crypto` | Random number generation |

### 🚫 No External Dependencies

```text
No Express.js
No npm packages
No database
No third-party frameworks
```

Everything runs using Node.js built-in functionality.

---

# 🚀 Getting Started

### 1. Check Node.js

```bash
node -v
```

### 2. Enter the project

```bash
cd smart-utility-toolkit
```

### 3. Run the utilities

Each utility can be executed independently from the terminal.

---

# 🧮 1. CLI Calculator

The calculator reads the operation and numbers from the command line using `process.argv`.

### Syntax

```bash
node calculator.js <operation> <number1> <number2>
```

### Examples

```bash
node calculator.js add 10 5
```

```text
Result: 15
```

```bash
node calculator.js subtract 10 5
```

```text
Result: 5
```

```bash
node calculator.js multiply 10 5
```

```text
Result: 50
```

```bash
node calculator.js divide 10 5
```

```text
Result: 2
```

### Supported Operations

| Operation | Command |
|---|---|
| `add` | `node calculator.js add 10 5` |
| `subtract` | `node calculator.js subtract 10 5` |
| `multiply` | `node calculator.js multiply 10 5` |
| `divide` | `node calculator.js divide 10 5` |

Invalid operations, invalid numbers, and division by zero are handled gracefully.

---

# 🧱 2. Custom Modules

The project demonstrates reusable Node.js modules.

### `modules/isEven.js`

Provides a function that checks whether a number is even.

### `modules/logger.js`

Provides a reusable logging function.

### Run the demonstration

```bash
node app.js
```

### Example output

```text
[LOG] Testing custom module
10 is even: true
7 is even: false
[LOG] Custom module test complete
```

The module system demonstrates:

```javascript
module.exports
```

and:

```javascript
require()
```

---

# 🌐 3. HTTP Server

The project contains a basic HTTP server built using Node's built-in `http` module.

### Start the server

```bash
node server.js
```

Expected startup message:

```text
Server running at http://localhost:3000
```

### Available routes

| Route | Response |
|---|---|
| `/` | Welcome to Node Server |
| `/about` | About Page |
| `/contact` | Contact Page |
| Any other route | 404 - Page Not Found |

### Test in your browser

```text
http://localhost:3000/
http://localhost:3000/about
http://localhost:3000/contact
```

Also test an invalid route:

```text
http://localhost:3000/test
```

The server prints incoming requests in the terminal.

### Stop the server

```text
Ctrl + C
```

---

# 📁 4. File Manager

The file manager demonstrates basic file operations with the `fs` module.

### Run it

```bash
node fileManager.js
```

### Operation flow

```text
Create → Read → Update → Read → Delete
```

The implementation uses:

```javascript
fs.writeFile()
fs.readFile()
fs.appendFile()
fs.unlink()
```

### Example output

```text
Creating File...
File Created
Reading File...
Hello Node.js
Updating File...
File Updated
Hello Node.js
Learning FS Module
Deleting File...
File Deleted
```

Errors are reported directly in the terminal.

---

# 🎲 5. Random Dice Generator

The dice utility uses Node's `crypto` module to generate random values from **1 to 6**.

### Run it

```bash
node dice.js
```

### Example output

```text
Rolling 5 dice...
Dice Roll 1: 4
Dice Roll 2: 2
Dice Roll 3: 6
Dice Roll 4: 1
Dice Roll 5: 5
```

The values can change each time the program is executed.

---

# 🔄 How the Toolkit Works

```text
                    ⚡ SMART UTILITY TOOLKIT
                              │
             ┌────────────────┼────────────────┐
             │                │                │
             ▼                ▼                ▼
        🧮 Calculator     🧱 Modules        🌐 Server
        process.argv      require()         http
             │                │                │
             └────────────────┼────────────────┘
                              │
                    ┌─────────┴─────────┐
                    │                   │
                    ▼                   ▼
                 📁 File             🎲 Dice
                    fs               crypto
```

---

# ✅ Quick Test Checklist

Run:

```bash
node calculator.js add 10 5
node app.js
node fileManager.js
node dice.js
node server.js
```

For the HTTP server, verify:

```text
/
/about
/contact
/invalid-route
```

---

# 🎯 Concepts Demonstrated

This project demonstrates:

- Command-line input with `process.argv`
- Node.js core modules
- Custom module creation and reuse
- `module.exports` and `require()`
- HTTP server creation
- Basic route handling
- File CRUD operations
- Error handling
- Console-based debugging
- Random number generation with `crypto`
- Asynchronous file operations

---

## 📌 Assignment Information

**Course:** Web Dev III  
**Unit:** Unit–1  
**Assignment:** Lab Assignment 1 — Smart Utility Toolkit

---

<div align="center">

### ⚡ Built with Node.js

**Core modules. Simple utilities. Real backend fundamentals.**

</div>
