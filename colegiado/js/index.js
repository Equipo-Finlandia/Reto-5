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


