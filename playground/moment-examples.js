var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1500837492;
var currentMoment = moment.unix(timestamp);

console.log('Current moment', currentMoment.format('D MMMM YYYY HH:mm'));
