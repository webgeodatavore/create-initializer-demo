#!/usr/bin/env node

'use strict';
const fs = require('fs');

fs.writeFileSync('./out.txt', 'content', 'utf8');
