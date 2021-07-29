// Esquema o estructura básica de como se organizará la información

const mongoose = require('mongoose')

//Utilizamos el esqeuma de datos de mongoose

const {Schema} = mongoose;

// Definimos las propiedades de las publicaciones

const PostSchema = new Schema({
	usuario: {type: String, required: true },
	descripcion: {type: String, required: true},
	base64: {type: String, required: true},
	date: {type: Date, default: Date.now}

});

// module.exports nos ayuda a poder exportar la información de este archivo

module.exports = mongoose.model('Post', PostSchema)