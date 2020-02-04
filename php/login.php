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
 echo $_REQUEST['contrasena'];
 $pass = $_REQUEST['contrasena'];

 echo "<br>";

 $query = "SELECT Nombre, Contraseña FROM " .$tabla. " WHERE Nombre='$nombre' AND Contraseña='$pass'";
 
 $result=mysqli_query($query);
 echo "<br>";
 echo $query;
 echo $result;
 
 echo "<br>";

if($result){
	 echo "<br> Has iniciado sesión como : $nombre";
     
 }else{
     die('<br> Contraseña o usuario incorrectos ' .mysqli_error());
 }
 mysqli_close($link);
 
?>
