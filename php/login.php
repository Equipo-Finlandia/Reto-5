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

 echo "El nombre introducido es:<br>";
 echo $_REQUEST['nombre'];
 $nombre =$_REQUEST['nombre'];
  
 echo "<br> La contraseña introducida es:<br>";
 echo $_REQUEST['pass'];
 $pass = $_REQUEST['pass'];

  
 $query = "SELECT Nombre FROM $tabla WHERE Nombre=$nombre";
 $query2= "SELECT Contraseña FROM $tabla WHERE Contraseña=$pass";
 $result = mysqli_query($link, $query, $query2);
 
 if($result){
	 echo "Has iniciado sesión como :" $nombre;
 }else{
	 echo "Contraseña o usuario incorrectos";
 }

?>
