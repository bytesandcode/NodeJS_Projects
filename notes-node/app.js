console.log('Starting app.');
const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');
var filteredArray = _.uniq(['Gary', 1, 'Gary', 1, 2, 3, 4]);
console.log(filteredArray);
console.log(_.isString('Gary'));
var res = notes.add(20, 30);
console.log(res);

//var user = os.userInfo();
//console.log(user);
//fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.addNote}.`);
