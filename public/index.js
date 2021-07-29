// accedemos al botón publicar

let publicar = document.getElementById('publicar');

let base64;

// cargamos la imagen y generamos su previsuaización

function leerArchivo(input){

	// si existe un archivo:
	if (input.files){

		const reader = new FileReader();

		reader.onload = function (e){
			const filePreview = document.createElement('img');
			filePreview.id = 'file_preview';
			//Al atributo src le indicamos la imagen que debe cargar:
			filePreview.src = e.target.result;

			filePreview.width = 400;
			base64 = e.target.result;

			const previewZone = document.getElementById ('preview');
			// Inserto la etiqueta img con toda la información definida dentro del div 'preview'
			previewZone.appendChild(filePreview)
		}
		reader.readAsDataURL(input.files[0])
	}

}

let fileUpload = document.getElementById('file')

//En el momento que cambie el imput paea subir archivos, 
//ejecutamos el evento que cargará la imagen en nuestro formulario
fileUpload.onchange = function (e){
	leerArchivo(e.srcElement);
}


// Enviamos los datos del nombre y la descripción al servidor --------------------------------------------

publicar.onclick = async() =>{
	let usuario = document.getElementById ('usuario').value;
	let descripcion = document.getElementById ('descripcion').value;

	// Creamos un objeto con los datos que vamos a enviar 

	const data = {usuario, descripcion, base64}; // creo un objeto con {}
	// preparamos el objeto data con toda la información para el envio al servidor (archivo index.js)
	const datos = {
		method:'POST', 
		headers:{
			'Content-type': 'application/json'
		},

		// Datos que enviamos
		body: JSON.stringify(data)
	};
	// Enviar los datos:
	const response = await fetch('/', datos); 

	// Recibimos una respuesta del servidor:
	const json = await response.json();
	console.log(json)


	// vamos a limpiar la entrada de datos que hemos puesto

	document.getElementById('usuario').value = '';
	document.getElementById('descripcion').value = '';
	document.getElementById('file').value = '';

	// Accedemos a la imagen y a la zona donde la previsualizamos y eliminamos la imagen



	const imagen = document.getElementById('file_preview');
	const previewZone = document.getElementById('preview');
	previewZone.removeChild(imagen);
}








