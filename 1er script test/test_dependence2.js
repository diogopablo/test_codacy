// lodashExample.js  
const _ = require('lodash');  

const array = [1, 2, 2, 3, 4, 4, 5];  
const uniqueArray = _.uniq(array);  

console.log('Unique Array:', uniqueArray);