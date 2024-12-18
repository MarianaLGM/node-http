
//1.crear un servidor HTTP.
//2.Importar el módulo de datos `data.js`
/*3.Configurar el servidor para responder con un documento HTML. Puedes utilizar el método `res.end()` 
 para escribir dentro tu HTML (con su !DOCTYPE, H1, H2... lo que creas que es necesario)con la datos de `data.js`*/
 /*4.Ejecutar el servidor y asegurarse de que responde correctamente con un documento HTML 
que incorpora la información de la página web. */

import web from "./data.mjs"; //no hace falta poner ./ 
import http from "node:http" //node: no hace falta 



const server= http.createServer((req,res)=>{ //req=REQUEST lo que recibe el servidor (lo que trae el navegador) // res=RECIBES lo que repsonde el servidor (lo que le devuelvo al navegador)
  console.log(req,"request recived")
    res.end (`
      <!DOCTYPE html>
      <html>
        <head>
          <title>TURISMO ASTURIAS</title>
        </head>
        <body>
          <h1>${web.title}</h1>
          <h2>${web.subtitle}</h2>
          <p>${web.description}<p>
        </body>
      </html>
      `) //esto es lo que veré en la pagina en negro de la derecha, 
})

server.listen(3000, ()=>{  //el 0 lo ponemos para que de manera aleatoria escoja un puerto libre
  console.log(`server listening on port http://localhost:${server.address().port}`) 
});
console.log(web);



//otra forma de hacerlo sería:
/*const PORT=3000;
server.listen(PORT, ()=>{  //el 0 lo ponemos para que de manera aleatoria escoja un puerto libre
  console.log(`server listening on port http://localhost:${PORT}/`) 
});
*/

/*También podemos meter todo en una variable:
const html=`
<!DOCTYPE html>
      <html>
        <head>
          <title>TURISMO ASTURIAS</title>
        </head>
        <body>
          <h1>${web.title}</h1>
          <h2>${web.subtitle}</h2>
          <p>${web.description}<p>
        </body>
      </html>
      `

  y luego hago referencia dentro de la función "html"*/





