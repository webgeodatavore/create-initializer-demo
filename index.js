#!/usr/bin/env node

'use strict';
const fs = require('fs');

fs.writeFileSync('./out.txt', 'content' + '\n' + process.argv.join('\n'), 'utf8');
