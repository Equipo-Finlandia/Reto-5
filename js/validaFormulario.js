//Valida el campo del nombre y apellidos, solo admite letras y espacios.
function validaNombre() {

    var nombre = document.getElementById("nombre").value;
    var etiqueta = document.getElementById("etiq_nombre");
    var fallo = document.createElement("div");
    var textoer1 = document.createTextNode('Este campo es obligatorio');
    var textoer2 = document.createTextNode('Nombre no válido')
    var formato = /^[A-Za-z\s]+$/;


    //Estas dos funciones sirven para crear y/o modificar el nodo hijo 
    //de las etiquetas mostrando un mensaje en rojo.
    //El mensaje cambiará dependiendo de si el campo quedó vacío
    //o si se introdujo información no válida.
	
    function texto1() {
		 if (etiqueta.childNodes.length > 1) {
		 etiqueta.removeChild(etiqueta.lastChild);
		}
		 
        etiqueta.appendChild(fallo);
        fallo.style.color = 'red';
        fallo.appendChild(textoer1);
    }

    function texto2() {
		 if (etiqueta.childNodes.length > 1) {
		 etiqueta.removeChild(etiqueta.lastChild);
		}
		 
        etiqueta.appendChild(fallo);
        fallo.style.color = 'red';
        fallo.appendChild(textoer2);
    }

    if (nombre == null || nombre.length == 0) {
            texto1();   
			return false;
        } else if (!(formato.test(nombre))) {
            texto2();
            return false;
		}else {
			if (etiqueta.childNodes.length > 1) {
				etiqueta.removeChild(etiqueta.lastChild);
			}
			return true;
    }
}