async function getData(){

	const response = await fetch('/historias');
	const datos = await response.json();
	console.log(datos)

	//Recorremos el array para acceder a los datos
	for (let i = 0; i < datos.length; i++){

		// este sería el contenedor principal para alojar el post o la historia
		const root = document.createElement('div');
		root.class = 'root';

		// Etiquetas que muestran los datos dentro del post
		const usuario = document.createElement('div');
		const descripcion = document.createElement('div');
		const fecha = document.createElement('div');
		const imagen = document.createElement('img');
		const linea = document.createElement('hr') // hr genera etiqueta con una linea automatica

	

		//Mostramos las etiquetas que hemos creado antes los datos que queremos mostrar

		usuario.innerHTML = 'Usuario: ' + datos[i].usuario;
		descripcion.innerHTML = 'Descripcion: ' + datos[i].descripcion;
		const fechaOk = new Date(datos[i].date).toLocaleString();
		fecha.innerHTML = 'Fecha de publicación: ' + fechaOk;
		imagen.src = datos[i].base64;
		imagen.style = 'width: 400px;' ; 


		//Con la función append añadimos los elementos creados al contenedor principal (root) 
		//en el orden que queremos

		root.append(usuario, imagen, descripcion, fecha, linea)

		document.getElementById('historias').append(root);

	}

}

getData();