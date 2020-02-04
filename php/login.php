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

 echo "usuario: ";
 $nombre =$_REQUEST['nombre'];
 echo $nombre;

 echo "<br> Contraseña: ";
 $contrase = $_REQUEST['contrasena'];
 echo $contrase;
 echo "<br>";
 $query="SELECT * FROM $tabla WHERE Nombre = '$nombre' AND Contraseña = '$contrase'";

       $result = mysqli_query($link, $query)
         or die ("No se pudo consultar la base de datos ");

$row= mysqli_fetch_array($result);

 if($row['Nombre']==$nombre && $row['Contraseña']==$contrase){
	 echo "<br> Has iniciado sesión correctamente!"; 
 }else{
     echo "Contraseña o usuario incorrectos";
 }
 mysqli_close($link);
 
?>
