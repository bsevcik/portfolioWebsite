const fs = require('fs');
var obj = require('../scripts/data.json');
fs.appendFile('greetings.txt', 'Hello!');