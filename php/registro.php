<html lang="es">



 <head>
 <meta charset="UTF-8"> 
 <title>Registro</title>
     <style>
         body{
             background-color: rgb(247,247,247);
			 text-align:center;
			 margin: 0 auto;
         }
     </style>
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
        //echo "Conexión establecida correctamente con la base de datos.<br>";
    }
    if(!mysqli_select_db($link, $baseDatos))
    {
        echo "Error al seleccionar la base de Datos.<br>";
        exit();
    }
    else
    {
       // echo "Se ha podido acceder a la base de datos $baseDatos <br>en la direccion: $host : $puerto  sin problema.<br>";
    }
    return $link;
    }
    
 $link =Conectarse();

// echo "El nombre introducido es:<br>";
// echo $_REQUEST['nombre'];
 $nombre =$_REQUEST['nombre'];
 
// echo "<br> La contraseña introducida es:<br>";
// echo $_REQUEST['pass'];
 $pass = $_REQUEST['pass'];
 
// echo "<br> Apellido 1:";
// echo $_REQUEST['apell1'];
 $apell1=$_REQUEST['apell1'];
 
// echo "<br> Apellido 2:";
// echo $_REQUEST['apell2'];
 $apell2=$_REQUEST['apell2'];
 
// echo "<br> DNI:";
// echo $_REQUEST['dni'];
 $dni = $_REQUEST['dni'];
 
 //echo "<br> Centro Académico:";
// echo $_REQUEST['centro'];
 $centroacadem=$_REQUEST['centro'];
 
 //echo "<br> Direccion: ";
 //echo $_REQUEST['direccion'];
 $direccion = $_REQUEST['direccion'];
 
 //echo "<br> Titulación: ";
 //echo $_REQUEST ['titulacion'];
 $titulacion= $_REQUEST['titulacion'];
 
 //echo "<br> Teléfono: ";
 //echo $_REQUEST ['telefono'];
 $telefono = $_REQUEST['telefono'];

 echo "<br>";

 $insertar = "INSERT INTO  $tabla VALUES('$nombre','$apell1','$apell2','$pass', '$dni', '$centroacadem', '$direccion', '$titulacion',$telefono, 0)";
// echo $insertar;

if ($link->query($insertar) === TRUE) {
echo "<h2>Se ha creado su cuenta correctamente</h2>";
echo "<h3>Nos pondremos en contacto con usted en un plazo inferior a 14 días</h3>";
echo "<h3>para darle de alta.</h3>";
echo"<img src='../imagenes/registro.gif' alt=imagen registrado con exito'>";
header("Refresh:5; URL=http://212.142.193.210:10104/index.html");
} else {
    echo "Error: " . $insertar . "<br>" . $link->error;
	header("Refresh:5; URL=http://212.142.193.210:10104/index.html");
}


 ?>
 
 </body>
 </html>