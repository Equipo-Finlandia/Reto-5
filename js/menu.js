 //Funcion que "abre" el menu lateral
 
 var  abierto = false;
        function cargaMenu() {
			
			
            var menuvertical = document.getElementById("menu");
			

			 if(abierto === true){
				
				menuvertical.style.display = "none";
				console.log(abierto);
			
			abierto = false;
			
			}
			else{
				
				menuvertical.style.display = "block";
				console.log(abierto);

            abierto = true;
				
			}
			
        }
		
		
