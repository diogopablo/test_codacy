const express = require('express');  
const mysql = require('mysql');  
const bodyParser = require('body-parser');  

const app = express();  
app.use(bodyParser.json());  

// Configuration de la base de données  
const db = mysql.createConnection({  
  host: 'localhost',  
  user: 'root',  
  password: 'password',  
  database: 'testdb'  
});  

// Connexion à la base de données  
db.connect(err => {  
  if (err) throw err;  
  console.log('Connected to database');  
});  

// Injection SQL vulnérable  
app.post('/user', (req, res) => {  
  const username = req.body.username;  
  
  // Vulnérabilité d'injection SQL  
  const query = `SELECT * FROM users WHERE username = '${username}'`;  
  
  db.query(query, (err, results) => {  
    if (err) {  
      console.error(err);  
      return res.status(500).send('Internal Server Error');  
    }  
    if (results.length > 0) {  
      res.json(results[0]);  
    } else {  
      res.status(404).send('User not found');  
    }  
  });  
});  

// Écouter le serveur  
const PORT = process.env.PORT || 3000;  
app.listen(PORT, () => {  
  console.log(`Server running on port ${PORT}`);  
});