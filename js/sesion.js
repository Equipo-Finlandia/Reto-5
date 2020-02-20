var sesion=localStorage.getItem('sesion')

window.onload=function(){
	var formacion = document.getElementById("");
	var acceder = document.getElementById("");
	var formacion = document.getElementById("");
	var colegiacion = document.getElementById("");
	
    console.log(this.sesion);
    if (this.sesion=='1'){
        console.log("111");
		
    }
}

function sesionCorrecto(){
	this.sesion='1';
    localStorage.setItem('sesion','1');
    console.log(this.sesion);
}
