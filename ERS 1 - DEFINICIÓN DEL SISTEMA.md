## ERS 1.- DEFINICIÓN DEL SISTEMA

### ERS 1.1.- DETERMINACIÓN DEL ALCANCE DEL SISTEMA

**BUSCABOD**, se desarrollará como una aplicación web, desarrollada en ASP.NET,
siendo accesible, únicamente desde los ordenadores conectados a la Red de
Propósito General del Ministerio de Defensa (WAN-PG), con el fin de gestionar y
controlar búsquedas interactivas de documentos atendiendo al criterio que se
haya seleccionado. Todo ello con el fin de localizar la información que necesite
el usuario que se encuentra en cada documentos que éste desee revisar

Quedan dentro del alcance del sistema las siguientes operaciones:

1.  El sistema contará con la capacidad de realizar búsquedas de cualquier dato
    en uno o varios archivos PDF.

2.  El Usuario tendrá la posibilidad de guardar las busquedas realizadas en una
    lista que podrá consultar posteriormente.

3.  El sistema permitirá reutilizar los parámetros usados en anteriores
    búsquedas

4.  El sistema contará con una gestión de usuarios y perfiles.

5.  Búsqueda simple. Se utiliza sólo una palabra o frase. En este caso, el
    buscador las relaciona de modo que el resultado de la búsqueda cumpla al
    menos uno de los criterios (uno, varios o todos), ordenando la presentación
    de los resultados según el grado de coincidencia.

6.  Busqueda avanzada. Las palabras clave de búsqueda se complementan con el uso
    de operadores, que condicionan y relacionan las palabras clave definidas.
    Los operadores permiten ampliar, reducir o dirigir la búsqueda

7.  La búsqueda por palabras clave se realiza escribiendo en el cuadro de
    diálogo la palabra o palabras que están relacionadas con la información que
    se busca. Una vez definidos, se ejecuta la consulta oprimiendo el botón
    Search.

8.  Conforme a la legislación vigente, el sistema recordara al Usuario las
    normas estándares de utilización de documentos en función de su
    clasificación de seguridad.

Quedan fuera del ámbito del sistema:

1.  El sistema no realizara funciones de modificación de documentos.

### ERS 1.2.- GLOSARIO DE TÉRMINOS Y ABREVIATURAS

Se define un glosario de términos del ámbito del negocio, con el fin de
conseguir una mayor precisión en la especificación del sistema de información:

1.  **PDF**: formato de documento portátil es un formato de almacenamiento para
    documentos digitales independiente de plataformas de software o hardware

2.  **BÚSQUEDA**: localización de aquello que necesite el Usuario.

3.  **LOGIN**: proceso mediante el cual se controla el acceso individual a un
    sistema informático mediante la identificación del usuario utilizando credenciales provistas por el usuario

4.  **USUARIO**: aquella persona que usa algo para una función en específico

5.  **ADMINISTRADOR**: tiene por objeto garantizar el tiempo de actividad (uptime),
    rendimiento, uso de recursos y la seguridad de los servidores que administra
    de forma dinámica

6.  **WAN PG**: Red de Propósito General del Ministerio de Defensa

### ERS 1.3.- MODELO DE NEGOCIO

![alt text](https://github.com/DptoSIC/BuscaBOD/blob/master/imagenes%20busca%20bod/modelo%20de%20negocio.jpg "Modelo de Negocio")

### ERS 1.4.- MODELO DE DOMINIO

![alt text](https://github.com/DptoSIC/BuscaBOD/blob/master/imagenes%20busca%20bod/Modelo%20de%20dominio.jpg "Modelo de Dominio")


### ERS 1.5.- IDENTIFICACIÓN DEL ENTORNO TECNOLÓGICO

(Realizar grafico como el del ejemplo de los microservicios)

En lo que se refiere al hardware, cada usuario podrá utilizar la aplicación en
un equipo informático, no siendo necesariamente indispensable un ordenador de
sobre mesa, pudiendo utilizarse en su defecto cualquier aplicativo móvil, el
único requisito que deben cumplir es disponer de conexión a la WAN-PG y un navegador WEB.

En cuanto al software, durante el desarrollo de la aplicación se programará en lenguaje JAVA, utilizando las librerías de Apache Lucene, Apache pdfbox y Mozilla pdf.js; no siendo necesaria la instalación de ningún
Framework adicional de los que ya dispongan los equipos, bajo el SO Windows y
utilizando como **SGDB SQL Server 2012 (cambiar)**.

### ERS 1.6.- ESPECIFICACIÓN DE ESTÁNDARES Y NORMAS

-   Metodología AGILE
-   SCRUM
-   LOPD 2018.


[Indice](https://github.com/DptoSIC/BuscaBOD/blob/master/ERS.md)
