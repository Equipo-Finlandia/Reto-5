//Valida el campo del nombre solo admite letras y espacios.
function validaNombre() {

    var nombre = document.getElementById("nombre").value;
    var etiqueta = document.getElementById("etiq_reg_nombre");
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
    var etiqueta = document.getElementById("etiq_reg_contrasena");
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

//Funcion que valida el DNI y si su letra corresponde
function validaDNI(){
	var numeroDNI = document.getElementById("dni").value;   
    var etiqueta = document.getElementById("etiq_dni");	
	var fallo = document.createElement("div");
	var textoer1 = document.createTextNode("Este campo es obligatorio");
	var textoer2 = document.createTextNode("DNI no válido");
	var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
	
	
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
	

    if (numeroDNI == null || numeroDNI.length==0 ||!(/^\d{8}[A-Z]+$/.test(numeroDNI))) {
          texto1();
          return false;
    } else if (numeroDNI.charAt(8) != letras[(numeroDNI.substring(0, 8)) % 23]){
        alert('Letra del DNI inválida');
		texto2();
        return false;
    } else {
		if(etiqueta.childNodes.length>1){
			etiqueta.removeChild(etiqueta.lastChild);
		}
        return true;
    }
}

//Funcion que valida el nombre del centro académico admitiendo letras y espacios
function validaCentro(){
	var centro= document.getElementById("centroacadem").value;
    var etiqueta = document.getElementById("etiq_centro");
    var fallo = document.createElement("div");
    var textoer1 = document.createTextNode('Este campo es obligatorio');
    var textoer2 = document.createTextNode('Información no válida')
    var formato = /^[A-Za-z\s]+$/;
	
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

    if (centro == null || centro.length == 0) {
            texto1();   
			return false;
        } else if (!(formato.test(centro))) {
            texto2();
            return false;
		}else {
			if (etiqueta.childNodes.length > 1) {
				etiqueta.removeChild(etiqueta.lastChild);
			}
			return true;
        }
}

//Función que valida la dirección en la que vive el usuario, admite numeros y letras
function validaDireccion(){
    var direccion = document.getElementById("direccion").value;
    var etiqueta = document.getElementById("etiq_direccion");
    var formato = /^[A-Za-z\s0-9]+$/;
	var fallo = document.createElement("div");
	var textoer1 = document.createTextNode("Este campo es obligatorio");
	var textoer2 = document.createTextNode("Dirección no válida");
	
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

//Función que valida la titulación del usuario

function validaTitulacion(){
    var titulacion = document.getElementById("titulacion").value;
    var etiqueta = document.getElementById("etiq_titulacion");
    var formato = /^[A-Za-z\s0-9]+$/;
	var fallo = document.createElement("div");
	var textoer1 = document.createTextNode("Este campo es obligatorio");
	var textoer2 = document.createTextNode("Dirección no válida");
	
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
	
    if (titulacion == null || titulacion.length == 0) {
        texto1();
        return false;
    }else if(!(formato.test(titulacion))) {
		texto2();
		return false;
	}else{
		if(etiqueta.childNodes.length>1){
			etiqueta.removeChild(etiqueta.lastChild);
		}
        return true;
    }
}

//Funcion que valida el numero de telefono, solo admite numeros
function validaTelefono(){
	var telefono = document.getElementById("telefono").value;
    var etiqueta = document.getElementById("etiq_telefono");
    var formato = /^\d{9}$/
	var fallo = document.createElement("div");
	var textoer1 = document.createTextNode("Este campo es obligatorio");
	var textoer2 = document.createTextNode("Teléfono no válido");
	
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
	
    if (telefono == null || telefono.length == 0) {
        texto1();
        return false;
    }else if(!(formato.test(telefono))) {
		texto2();
		return false;
	}else{
		if(etiqueta.childNodes.length>1){
			etiqueta.removeChild(etiqueta.lastChild);
		}
        return true;
    }
	
}