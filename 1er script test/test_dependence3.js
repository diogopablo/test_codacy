// dateExample.js  
const moment = require('moment');  

const now = moment();  
console.log('Current Date and Time:', now.format('YYYY-MM-DD HH:mm:ss'));  
console.log('One week from now:', now.add(7, 'days').format('YYYY-MM-DD HH:mm:ss'));