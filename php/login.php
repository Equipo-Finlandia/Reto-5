<html lang="es">
<head>
<meta charset="UTF-8">
<title> Iniciando sesion </title>
</head>
<body>
<style>
    body{
        background-color:rgb(0,11,28);
        color:white;
    }

#cargando img{
margin-left:30%;

}
    
</style>
<?php
    //IP DEL SERVIDOR MYSQL
    $host="localhost";
    //Puerto
    $puerto="3306";
    //Usuario 
    $usuario="adminer";
    //contraseña
    $contrasena="Passw0rd";
    //Nombre de Base de Datos
    $baseDatos="CTSPV";
    //tabla
    $tabla="USUARIOSREGISTRADOS";
    
    function Conectarse(){
        
        global $host, $puerto, $usuario, $contrasena, $baseDatos, $tabla;
        
        if(!($link=mysqli_connect($host.":".$puerto, $usuario, $contrasena)))
        {
            echo "Error, no se ha podido establecer conexión con la base de datos.<br>";
            exit();
        } 
    else
    {
        echo "Conexión establecida correctamente con la base de datos.<br>";
    }
    if(!mysqli_select_db($link, $baseDatos))
    {
        echo "Error al seleccionar la base de Datos.<br>";
        exit();
    }
    else
    {
        echo "Se ha podido acceder a la base de datos $baseDatos <br>en la direccion: $host : $puerto  sin problema.<br>";
    }
    return $link;
    }
    
 $link =Conectarse();
 $nombre =$_REQUEST['nombre'];
 $contrase = $_REQUEST['contrasena'];
 $query="SELECT * FROM $tabla WHERE Nombre = '$nombre' AND Contraseña = '$contrase'";

 $result = mysqli_query($link, $query)
      or die ("No se pudo consultar la base de datos ");

 $row= mysqli_fetch_array($result);


 if($row['Nombre']==$nombre && $row['Contraseña']==$contrase){
	 echo "<h2><br> Has iniciado sesión correctamente!</h2>"; 
     echo "<br> Volviendo a inicio";
      header("Refresh:5; URL=https://192.168.0.104/");
    
 }else{
     echo "<h2>Contraseña o usuario incorrectos</h2>";
 echo "<br> Volviendo a inicio";
  header("Refresh:5; URL=https://192.168.0.104/");
 }
 mysqli_close($link);
?>

    <div id="cargando">
        <img src="../imagenes/carga.gif" alt="Rueda de carga de página">
    </div>
</body>
</html>