<html lang="es">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="css\bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css\index.css">
    <script type="text/javascript" src="js\index.js"></script>
    <script type="text/javascript" src="js\modoNoche.js"></script>
</head>

<body>

    <input type="button" value="" name="botonMenu" id="botonMenu" onClick="cargaMenu()">

    <div id="menu">
        <nav>
            <ul id="menu_principal">
                <li><a href="#">🏠 Inicio</a></li>
                <li>
                    <label for="submenu1">
                        🏫 Colegio
                    </label>
                    <ul>
                        <li><a href="paginas/quienes.html">🏫 ¿Quiénes somos?</a></li>
                        <li><a href="paginas/historia.html">📜 Historia</a></li>
                        <li><a href="paginas/contactanos.html">☎️ Contactanos</a></li>
                    </ul>
                </li>
                <li>
                    <label for="submenu2">
                        🤝 Convenios
                    </label>
                    <ul>
                        <li><a href="paginas/conquien.html">❓¿Con quién?</a></li>
                        <li><a href="paginas/cuando.html">🕔 ¿Desde cuándo?</a></li>
                        <li><a href="paginas/enlaces.html">🌐 Enlaces</a></li>
                    </ul>
                </li>
                <li>
                    <label for="submenu3">
                        🎓 Colegiación
                    </label>
                    <ul>
                        <li><a href="paginas/razones.html">👍 Razones</a></li>
                        <li><a href="paginas/requisitos.html">✅ Requisitos</a></li>
                        <li><a href="paginas/inscripcion.html">🖊️ Inscripción</a></li>
                    </ul>
                </li>
                <li>
                    <label for="submenu4">
                        📑 Modelos de contrato
                    </label>
                    <ul>
                        <li><a href="paginas/temporal.html">⌚ Temporal</a></li>
                        <li><a href="paginas/indefinido.html">⌚ Indefinido</a></li>
                        <li><a href="paginas/practicas.html">⌚ Prácticas</a></li>
                    </ul>
                </li>
                <li>
                    <label for="submenu5">
                        🖥️ Formación
                    </label>
                    <ul>
                        <li><a href="paginas/cusos.html">📋 Cursos</a></li>
                        <li><a href="paginas/seminarios.html">🏛️ Seminarios</a></li>
                        <li><a href="paginas/charlas.html">🗣️ Charlas</a></li>
                    </ul>
                </li>
                <li>
                    <label for="submenu6">
                        💰 Bolsa de empleo
                    </label>
                </li>
            </ul>
        </nav>
    </div>
    <div id="encabezado">
        <div id="EncabezadoSegundaria">
            <a href="index.html">
                <div>🌍</div>
            </a>
            <a id="activarNoche" href="javascript:modoNoche();">
                <div>🌙</div>
            </a>
        </div>
        <div id="encabezadoPrincipal">
            <a href="">
                <div>NombreUsuario</div>
            </a>
            <a href="subpaginas/formacion.html">
                <div>Formacion</div>
            </a>
            <a href="subpaginas/bolsaTrabajo.html">
                <div style="width: 150;">Bolsas de trabajo</div>
            </a>
            <a href="subpaginas/contactanos.html">
                <div>Contactanos</div>
            </a>
            <a href="subpaginas/convenio.html">
                <div>Convenios</div>
            </a>
            
        </div>
    </div>
    <div id="contenedor">
        <a href="index.html"><img id="CTSPV" src="imagenes/cebanc.jpg"></a>
        <h1>Noticias</h1>
        <hr>
        <!--Primera noticia-->
        <div class="row">
            <h3>Los riesgos de "Crunch" laboral</h3>
            <div class="col-sm-4 noticias">
                <img src="imagenes/trabajador.jpg" class="noticiaPng" alt="programador en oficina">
            </div>
            <div class="col-sm-8 noticias">
                <p>Se entiende por crunch aquellos periodos en los que los programadores y desarrolladores trabajan por encima de las horas estipuladas, normalmente para llegar a tiempo a una fecha acordada de entrega. Dichos periodos normalmente duran una semana o dos, pero en algunos casos pueden alargarse durante meses.
                </p>
            </div>
        </div>
        <!--Segunda noticia-->
        <div class="row">
            <h3>lorem ipsum dolor sit amet</h3>
            <div class="col-sm-4 noticias">
                <img src="imagenes/noticia.jpg" class="noticiaPng" alt="">
            </div>
            <div class="col-sm-8 noticias">
                <p>lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet
                    , lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet
                    , lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet
                </p>
            </div>
        </div>
    </div>

    <script>
        
        
        function responsive(resolucion) {

            var menuvertical = document.getElementById("menu");

            if (resolucion.matches) { // si coincide con la resolución de ventana

            } else {
                menuvertical.style.display = "none";
                abierto=false;
                 console.log(abierto);
            }
        }

        var resolucion = window.matchMedia("(max-width: 900px)");
        responsive(resolucion); // Llamada al listener y le pasa como parametro la variable resolucion
        resolucion.addListener(responsive); //Vincula el listener al cambiar de resolución la ventana


       
        //Variable booleana que se encarga de almacenar el estado del menu lateral, si está abierto o no.
        var abierto=false;
         //Funcion que se encarga de mostrar el menu lateral
        function cargaMenu() {
            var menuvertical = document.getElementById("menu");
            
            if (abierto == true) {
                menuvertical.style.display = "none";
                console.log(abierto);
                abierto = false;
            } else {
                menuvertical.style.display = "block";
                console.log("abierto = " +abierto);
                abierto = true;
            }
        }

        var contenedor = document.getElementById("contenedor");
        //Listener que queda a la escucha de si se hace click en el body, al tener el menu lateral abierto y lo oculta
        contenedor.addEventListener("click", cierraMenu, true);

        function cierraMenu() {
            var menuvert = document.getElementById("menu");

           menuvert.style.display = "none";
           abierto=false;
        }


    </script>

</body>

</html>