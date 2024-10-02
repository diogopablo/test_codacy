const { exec } = require('child_process');  

// Exemple de nom de fichier PDF et de mot de passe contenant un byte NULL  
const pdfFilePath = 'example.pdf';  
const password = "my\0password"; // Mot de passe avec un byte NULL  

// Commande Ghostscript pour ouvrir le PDF  
const ghostscriptCommand = `gs -dNOPAUSE -dBATCH -sDEVICE=pdfwrite -sOutputFile=output.pdf -dPDFPassword=${password} ${pdfFilePath}`;  

exec(ghostscriptCommand, (error, stdout, stderr) => {  
  if (error) {  
    console.error(`Erreur lors de l'exécution de Ghostscript: ${error.message}`);  
    return;  
  }  

  if (stderr) {  
    console.error(`Erreur Ghostscript: ${stderr}`);  
    return;  
  }  

  console.log(`Sortie de Ghostscript: ${stdout}`);  
});
