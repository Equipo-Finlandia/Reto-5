var modo=localStorage.getItem('noche');

window.onload=function(){
	if (this.modo=='blanco'||this.modo==null){
		this.modo='blanco';
		localStorage.setItem('noche','blanco');
		console.log(this.modo);
	}
	if (this.modo=='negro'){
		this.modo='negro';
		localStorage.setItem('noche','negro');
		console.log(this.modo);
	}
	modoNoche(this.modo);
}

function modoNoche(modoNull) {
	var body = document.body;
	var contenedor = document.getElementById('contenedor');
	var CTSPV = document.getElementById('CTSPV');
	
	if (this.modo=='negro') {
		contenedor.style.backgroundColor = 'black';
		contenedor.style.color = '#A9A9A9';
		body.style.backgroundColor = '#A9A9A9';
		CTSPV.src = "imagenes/cebancNoche.png";
		this.modo='blanco';
	}else{
		contenedor.style.backgroundColor='white';
		contenedor.style.color = 'black';
		body.style.backgroundColor = 'white';
		CTSPV.src = "imagenes/cebanc.jpg";
		this.modo='negro';
	}
	console.log(this.modo);
	console.log(modoNull);
	if(modoNull==null){
		if(this.modo=='negro')
			localStorage.setItem('noche','blanco');
		else
			localStorage.setItem('noche','negro');
	}
}