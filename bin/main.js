#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
const figlet = require("figlet");
const arg = process.argv.splice(2);
const express = require("express");
const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
if (arg.length != 1) {
    console.error(`Invalid number of arguments ${arg}`);
    process.exit(1);
}
console.log(chalk.red(figlet.textSync(`hello ${arg}`, { horizontalLayout: 'full' })));
