const mongoose = require('mongoose');

// donde está mi base de datos

const mongodb_url = 'mongodb+srv://Pablo:GammRiAADYYvjZpE@clusterapppublicaciones.rblit.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(mongodb_url, {

	useCreateIndex: true,
	useNewUrlParser: true,
	useFindAndModify: false

}).then(db => console.log('Base de datos conectada con éxito')).catch( err=> console.log(error))


//contraseña base de datos: GammRiAADYYvjZpE