// Requerimos (accedemos) al paquete express:
const express = require ('express');

// Requerimos (accedemos) al paquete mongoose

const mongoose = require('mongoose')

// Requerimos estos archivos 

const Post = require('./Post')
require('./database');

// creamos una instancia del paquete exprees para poder utilizarlo:
const app = express();
const port = 3000;


// Lanzamos la aplicación a través del puerto 3000;
app.listen(process.env.PORT || port, () =>

		console.log ('Servidor conectado al puerto ' + port)
	);

//La aplicación muestra el archivo index.html ubicado en la carpeta public

app.use(express.static('public'))

//Configuramos el tamaño máximo de los datos que podemos recibir
app.use(express.json({limit: '2mb'}));

//Obtenemos los datos del formulario de index.html
//req (request): parámetro desde donde recibimos los datos
//res (response): parámetro desde donde podemos generar una respuesta al que nos ha enviado los datos

app.post('/', async function(req, res){
	console.log('Respuesta recibida!!');
	// obtenemos los datos en text (jason) y los volvemos a convertir a javascript (objeto)
	//console.log (req);
	//const date = new Date ();
	const {usuario, descripcion, base64, date} = req.body;


	// Creamos una instancia del esquema post

	const newPost = new Post({usuario, descripcion, base64, date});

	//Enviamos los datos a la base de datos

	await newPost.save();

	//Enviamos una respuesta a cliente:
	res.json({

		status: 'success',
		usuario: usuario,
		descripcion: descripcion,
		img: base64,
		fecha: date,

	});

});

//Obtenemos los datos que tenemos guardados en la base de datos

app.get('/historias', async function(req, res){

	const historias = await Post.find({}).lean().sort({date: 'desc'});
	res.json(historias);
})




