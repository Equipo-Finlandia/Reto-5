<html lang="es">

 <head>
 <meta charset="UTF-8"> 
 </head>
 
 <body>
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
    $baseDatos="usuarioSergio";
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
 
 echo "<br> La contraseña introducida es:<br>";
 echo $_REQUEST['pass'];
 
 echo "<br> Apellido 1:"
 echo $_REQUEST['apell1']
 
 echo "<br> Apellido 2:"
 echo $_REQUEST['apell2']
 
 echo "<br> DNI:"
 echo $_REQUEST['dni']
 
 echo "<br> Centro Académico:"
 echo $_REQUEST['centroacadem']
 
 echo "<br> Direccion: "
 echo $_REQUEST['centroacadem']
 
 echo "<br> Titulación: "
 echo $_REQUEST ['titulacion']
 
 echo "<br> Teléfono: "
 echo $_REQUEST ['telefono']

 ?>
 
 </body>
 </html>