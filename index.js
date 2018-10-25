#!/usr/bin/env node

const fs = require('fs');

fs.writeFileSync('./out.txt', 'content', 'utf8');

console.log(process.argv);
