var modo=localStorage.getItem('modo');//crear variable modo y almacenarlo en local.
//este script contiene dos Funcion, uno se ejecuta al cargarse la Página(windows.onload) y otro al dar boton luna (function modoNoche) 

window.onload=function(){
	//comprobar si @modo tiene valor, si no tiene, asignarlo a 'blanco'
	if (this.modo=='blanco'||this.modo==null){ 
		this.modo='blanco';
		localStorage.setItem('modo','blanco');// almacenar modo='blanco' a local
		console.log(this.modo);
	}
	if (this.modo=='negro'){
		this.modo='negro';
		localStorage.setItem('modo','negro');// almacenar modo='negro' a local
		console.log(this.modo);
	}
	modoNoche(this.modo);//mandar @modo a function()
}

function modoNoche(modoNull) { //recibir llamada, llamarlo como @modoNull
	var body = document.body;//Coger los elementos
	var contenedor = document.getElementById('contenedor');
	var CTSPV = document.getElementById('CTSPV');
	var linea = document.getElementsByTagName('hr');
    var form = document.getElementById('menu_registro');
	var etiq_nombre = document.getElementById("etiq_nombre");
	var etiq_pass = document.getElementById("etiq_contrasena");
	
	if (this.modo=='negro') {//si @modo = 'negro', poner en negro
		contenedor.style.backgroundColor = '#333333';
		contenedor.style.color = '#cccccc';
		body.style.backgroundColor = '#666666';
		CTSPV.src = "imagenes/cebancNoche.png";
        form.style.color="#ffffff";
        form.style.backgroundColor ='#243447';
		linea.style='border-color:white';
		etiq_nombre.style.color="#ffffff";
		etiq_pass.style.color="#ffffff";

		this.modo='blanco'; //cambiar @modo a 'blanco', así siguiente vez que ejecute se va ver HTML en blanco
	}else{//si @modo = 'blanco', poner en blanco
		contenedor.style.backgroundColor='white';
		contenedor.style.color = 'black';
		body.style.backgroundColor = 'white';
		CTSPV.src = "imagenes/cebanc.jpg";
        form.style.color="black";
        form.style.backgroundColor="white";
		etiq_nombre.style.color='black';
		etiq_pass.style.color='black';
    
		this.modo='negro';//cambiar @modo a 'blanco', así siguiente vez que ejecute se va ver HTML en negro
	}
	console.log(this.modo);
	console.log(modoNull);
	
	//si usuario se ejecutó mediante botón Luna, @modoNull sería null y entraría a este if, porque no rebibio la llamada(vea linea 19)
	//@modoNull no es null cuando [function modoNoche()] ha sido activado por [window.onload()]
	if(modoNull==null){
		if(this.modo=='negro'){//si ahora @modo='negro', significa que usuario ahora tiene página en blanco (vea linea 35)
			localStorage.setItem('modo','blanco');//guardar @modo='blanco' en local
		}else{//else @modo='blanco', significa que usuario ahora tiene página en negro (vea linea 29)
			localStorage.setItem('modo','negro');//guardar @modo='blanco' en local
		}
	}//Hasí hace que cuando cambia de página, se mantiene el modo que tenía.
}