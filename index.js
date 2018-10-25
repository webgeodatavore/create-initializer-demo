const fs = require('fs');

fs.writeFileSync('./out.txt', 'content' + JSON.stringify(process.argv), 'utf8');
