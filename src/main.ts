#!/usr/bin/env node
import * as chalk from "chalk";
import * as figlet from "figlet";

import * as express from "express";

const arg = process.argv.splice(2);

const app = express();
const port = 3000;

// eslint-disable-next-line import/prefer-default-export
export function Hello(name: string): string {
    return `Hello ${name}`;
}

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);

if (arg.length !== 1) {
    console.error(`Invalid number of arguments ${arg}`);
    process.exit(1);
}

console.log(
    chalk.red(figlet.textSync(`hello ${arg}`, { horizontalLayout: "full" }))
);
