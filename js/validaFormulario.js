//Valida el campo del nombre solo admite letras y espacios.
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

//Valida el campo del primer apellido solo admite letras y espacios.
function validaApellido1() {

    var nombre = document.getElementById("apell1").value;
    var etiqueta = document.getElementById("etiq_apellido1");
    var fallo = document.createElement("div");
    var textoer1 = document.createTextNode('Este campo es obligatorio');
    var textoer2 = document.createTextNode('Apellido no válido')
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

//Valida el campo del segundo apellido solo admite letras y espacios.
function validaApellido2() {

    var nombre = document.getElementById("apell2").value;
    var etiqueta = document.getElementById("etiq_apellido2");
    var fallo = document.createElement("div");
    var textoer1 = document.createTextNode('Este campo es obligatorio');
    var textoer2 = document.createTextNode('Apellido no válido')
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


//Función que valida la contraseña, admite letras y numeros sin espacios.
function validaContrasena() {
    var direccion = document.getElementById("pass").value;
    var etiqueta = document.getElementById("etiq_contrasena");
    var formato = /^[A-Za-z0-9]+$/;
	var fallo = document.createElement("div");
	var textoer1 = document.createTextNode("Este campo es obligatorio");
	var textoer2 = document.createTextNode("Contraseña no válida");
	
	function texto1(){
		if(etiqueta.childNodes.length>1){
			etiqueta.removeChild(etiqueta.lastChild);
		}
		etiqueta.appendChild(fallo);
		fallo.style.color="red";
		fallo.appendChild(textoer1);
	}
	
	function texto2(){
		if(etiqueta.childNodes.length>1){
			etiqueta.removeChild(etiqueta.lastChild);
		}
		etiqueta.appendChild(fallo);
		fallo.style.color="red";
		fallo.appendChild(textoer2);
	}
	
    if (direccion == null || direccion.length == 0) {
        texto1();
        return false;
    }else if(!(formato.test(direccion))) {
		texto2();
		return false;
	}else{
		if(etiqueta.childNodes.length>1){
			etiqueta.removeChild(etiqueta.lastChild);
		}
        return true;
    }
}

//Función que compara la contraseña con el campo de repetir contraseña
//para verificar que ambas coinciden.
function comparaContrasena(){
   var contrasena = document.getElementById("pass").value;
   var contrasena2 = document.getElementById("pass2").value;
   var etiqueta = document.getElementById("etiq_contrasena2");
   var fallo = document.createElement("div");
   var textoer1 = document.createTextNode("Este campo es obligatorio");
   var textoer2 = document.createTextNode("Las contraseñas no coinciden");
	
	function texto1(){
		if(etiqueta.childNodes.length>1){
			etiqueta.removeChild(etiqueta.lastChild);
		}
		etiqueta.appendChild(fallo);
		fallo.style.color="red";
		fallo.appendChild(textoer1);
	}
	
	function texto2(){
		if(etiqueta.childNodes.length>1){
			etiqueta.removeChild(etiqueta.lastChild);
		}
		etiqueta.appendChild(fallo);
		fallo.style.color="red";
		fallo.appendChild(textoer2);
	}
	
    if (contrasena2 == null || contrasena2.length == 0) {
        texto1();
        return false;
	}else if(etiqueta.childNodes.length>1){
			etiqueta.removeChild(etiqueta.lastChild);
		}
		
	
	if(contrasena!=contrasena2){
		texto2();
        return false;
	}else if(etiqueta.childNodes.length>1){
			etiqueta.removeChild(etiqueta.lastChild);
		}
     return true;		
}