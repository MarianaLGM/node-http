
//1.crear un servidor HTTP.

const http= require("node:http")

const server= http.createServer((rec,rep)=>{
  console.log("request recived")
  res.end ("<h1></h1>") //esto es lo que veré en la pagina en negro de la derecha,
  res.end ("<h2></h2>")
  res.end ("<p></p>")
})

server.listen(0, ()=>{  //el 0 lo ponemos para que de manera aleatoria escoja un puerto libre
  console.log(`server listening on port http://localhost:${server.address().port}`) 
});

//2.Importar el módulo de datos `data.js`

import {web} from ".data.js";

console.log(web);

/*3.Configurar el servidor para responder con un documento HTML. Puedes utilizar el método `res.end()` 
 para escribir dentro tu HTML (con su !DOCTYPE, H1, H2... lo que creas que es necesario)con la datos de `data.js`*/

 //PENDIENTE
 //res.end ("<h1></h1>") 
 //res.end ("<h2></h2>")
 //res.end ("<p></p>")



 /*4.Ejecutar el servidor y asegurarse de que responde correctamente con un documento HTML 
que incorpora la información de la página web. */


//PENDIENTE