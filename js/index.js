  //Funcion que "abre" la ventana para iniciar sesion
        function cargaLogin() {
            var menuReg = document.getElementById("menu_registro");


            menuReg.style.display = "block";
        }

        //Función que "cierra" u oculta la ventana de iniciar sesión
        function cerrarLogin() {
            var menuReg = document.getElementById("menu_registro");


            menuReg.style.display = "none";
        }

function validaNombre() {

    var nombre = document.getElementById("usr").value;
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
        fallo.style.color = '#C51F5D';
        fallo.appendChild(textoer1);
    }

    function texto2() {
		 if (etiqueta.childNodes.length > 1) {
		 etiqueta.removeChild(etiqueta.lastChild);
		}
		 
        etiqueta.appendChild(fallo);
        fallo.style.color = '#C51F5D';
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
		
		


		
		
		
			//Listener y función que recoge las distintas opciones de accesibilidad
			//para favorecer la legibilidad.
	window.addEventListener("keydown", aumentaLetra)
	var tam = 14;
	var grosor = 500;
	function aumentaLetra(event){
		var texto = document.getElementById("contenedor");
		
		  if (event.key == "q"){
			  tam++;
			  texto.style.fontSize=tam+"px";
		  } else if (event.key=="w" && tam>10){
			  tam--;
			  texto.style.fontSize=tam+"px";
			  
		  } else if (event.key=="e" && grosor==800){
			  grosor=600;
			  texto.style.fontWeight=grosor;
			  
		  } else if (event.key=="e" && grosor<=600){
			  grosor=800;
			  texto.style.fontWeight=grosor;
		  }
	}


