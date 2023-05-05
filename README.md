#2023-Actividad-4

Para que el proyecto funcione correctamente es necesario tener instalado: Node, MongoDB y mongosh, y como herramienta opcional: MongoDB Compass 
Al descargar el proyecto utilizar el comando

$ npm install

para instalar todas las dependencias necesarias para el correcto funcionamiento.

Para inicializar el servidor, ingresar el comando

$node app.js

y se visualizara por consola

$Node server running on http://localhost:5252
$Connected to Database

una vez que se establezca la conexion con el servidor.

Mediante una aplicacion como Postman y las sguientes rutas podemos utilizar los metodos CRUD:

GET - Visualizar todos los registros de la BD
POST - Dar de alta un nuevo registro

$http://localhost:5252/api/tvshows

GET - Visualizar un registro especifico
PUT - Actualizar un registro
DELETE - Eliminar un registro

$http://localhost:5252/api/tvshows/{id}
