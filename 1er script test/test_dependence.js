// test-dependencies.js  
const axios = require('axios'); // Assurez-vous d'installer axios avec `npm install axios`  

const fetchData = async () => {  
  try {  
    const response = await axios.get('https://api.github.com/users/github');  
    console.log(response.data);  
  } catch (error) {  
    console.error(error);  
  }  
};  

fetchData();