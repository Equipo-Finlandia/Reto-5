var sesion=localStorage.getItem('sesion')

window.onload=function(){
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