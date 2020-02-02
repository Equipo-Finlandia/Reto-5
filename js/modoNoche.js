function noche() {
	var body = document.body;
	var contenedor = document.getElementById('contenedor');
	var CTSPV = document.getElementById('CTSPV');
	var switchNoche = document.getElementById('activarNoche')

	contenedor.style.backgroundColor = 'black';
	contenedor.style.color = '#A9A9A9';
	body.style.backgroundColor = '#A9A9A9';
	CTSPV.src = "imagenes/cebancNoche.png";
	switchNoche.setAttribute=("onlick","dia();");
}
function dia() {
	var body = document.body;
	var contenedor = document.getElementById('contenedor');
	var CTSPV = document.getElementById('CTSPV');
	var switchNoche = document.getElementById('activarNoche')

	contenedor.style.backgroundColor = 'white';
	contenedor.style.color = 'black';
	body.style.backgroundColor = 'white';
	CTSPV.src = "imagenes/cebanc.png";
	switchNoche.onClick="noche()";
}