var noche=localStorage.getItem('noche');

window.onload=function(){
	if (this.noche=='1'||this.noche==null){
		this.noche='1';
		localStorage.setItem('noche','1');
		console.log(this.noche);
	}
	if (this.noche=='0'){
		this.noche='0';
		localStorage.setItem('noche','0');
		console.log(this.noche);
	}
	modoNoche(this.noche);
}

function modoNoche(modo) {
	var body = document.body;
	var contenedor = document.getElementById('contenedor');
	var CTSPV = document.getElementById('CTSPV');
	
	if (this.noche=='0') {
		contenedor.style.backgroundColor = 'black';
		contenedor.style.color = '#A9A9A9';
		body.style.backgroundColor = '#A9A9A9';
		CTSPV.src = "imagenes/cebancNoche.png";
		this.noche='1';
	}else{
		contenedor.style.backgroundColor='white';
		contenedor.style.color = 'black';
		body.style.backgroundColor = 'white';
		CTSPV.src = "imagenes/cebanc.jpg";
		this.noche='0';
	}
	console.log(this.noche);
	console.log(modo);
	if(modo==null){
		if(this.noche=='0')
			localStorage.setItem('noche','1');
		else
			localStorage.setItem('noche','0');
	}
}