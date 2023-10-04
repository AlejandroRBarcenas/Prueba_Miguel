const fs = require('fs');

// Crear un archivo de manera síncrona (si existe, se sobrescribirá)
fs.writeFileSync('archivo.txt', 'Hola, este es un archivo nuevo, creado de manera sincrónica');

// Crear un archivo de manera asincrónica
fs.writeFile('archivo2.txt', 'Hola, este es un archivo nuevo, creado de manera asincrónica', (err) => {
   if (err) {
      console.log(err);
   } else {
      console.log('Archivo creado de manera asincrónica');
   }
});

// Leer un archivo de manera síncrona y mostrar su contenido en consola
try {
   const informacion = fs.readFileSync('archivo.txt', 'utf8');
   console.log('Contenido del archivo.txt (síncrono):\n', informacion);
} catch (err) {
   console.error('Error al leer el archivo.txt:', err);
}

// Leer un archivo de manera asincrónica y mostrar su contenido en consola
fs.readFile('archivo2.txt', 'utf8', (err, data) => {
   if (err) {
      console.error('Error al leer el archivo2.txt:', err);
   } else {
      console.log('Contenido del archivo2.txt (asíncrono):\n', data);
   }
});

// Eliminar un archivo de manera síncrona
try {
   fs.unlinkSync('archivo.txt');
   console.log('Archivo archivo.txt eliminado de manera síncrona');
} catch (err) {
   console.error('Error al eliminar archivo.txt:', err);
}

// Eliminar un archivo de manera asincrónica
fs.unlink('archivo2.txt', (err) => {
   if (err) {
      console.error('Error al eliminar archivo2.txt:', err);
   } else {
      console.log('Archivo archivo2.txt eliminado de manera asincrónica');
   }
});
