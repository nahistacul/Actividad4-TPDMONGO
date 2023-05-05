<h1>2023-Actividad-4</h1>

<p>
  Para que el proyecto funcione correctamente es necesario tener instalado: Node, MongoDB y mongosh, y como herramienta opcional: MongoDB Compass 
Al descargar el proyecto utilizar el comando
</p>

<code>npm install</code>

<p>
  para instalar todas las dependencias necesarias para el correcto funcionamiento.
</p>
<p>
  Para inicializar el servidor, ingresar el comando
</p>

<code>node app.js</code>

<p>
  y se visualizara por consola
</p>

<code>Node server running on http://localhost:5252
  Connected to Database</code>

<p>
  una vez que se establezca la conexion con el servidor.
</p>
<p>
  Mediante una aplicacion como Postman y las sguientes rutas podemos utilizar los metodos CRUD:
</p>

<h5>GET - Visualizar todos los registros de la BD<h5>
<h5>POST - Dar de alta un nuevo registro</h5>

<code>http://localhost:5252/api/tvshows</code>

<h5>GET - Visualizar un registro especifico</h5>
<h5>PUT - Actualizar un registro</h5>
<h5>DELETE - Eliminar un registro</h5>

<code>http://localhost:5252/api/tvshows/{id}</code>
