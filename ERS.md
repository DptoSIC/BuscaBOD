*ESPECIFICACION REQUISITOS DEL SOFTWARE (ERS)*

**Historial de Revisiones ERS**
=============================

| **Fecha** | **Revisión** | **Estado** | **Descripción** |
|-----------|--------------|------------|-----------------|
|           |              |            |                 |
|           |              |            |                 |
|           |              |            |                 |
|           |              |            |                 |
|           |              |            |                 |
|           |              |            |                 |
|           |              |            |                 |
|           |              |            |                 |

INDICE

ERS 1.- DEFINICIÓN DEL SISTEMA

>   ERS 1.1.- DETERMINACIÓN DEL ALCANCE DEL SISTEMA

>   ERS 1.2.- GLOSARIO DE TÉRMINOS Y ABREVIATURAS

>   ERS 1.3.- MODELO DE NEGOCIO

>   ERS 1.4.- MODELO DE DOMINIO

>   ERS 1.5.- IDENTIFICACION DEL ENTORNO TECNOLÓGICO

>   ERS 1.6.- ESPECIFICACION DE ESTANDARES Y NORMAS

ERS 2.- CATALOGO DE REQUISITOS

>   ERS 2.1.- DIAGRAMA DE CASOS DE USO

>   ERS 2.2.- ESPEDIFICACION DE CASOS DE USO

>   ERS 2.3.- ANÁLISIS DE REQUISITOS

ERS 3.- DEFINICION DE INTERFACES DE USUARIO

ERS 4.- APROBACION ERS




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

### ERS 1.4.- MODELO DE DOMINIO

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

## ERS 2.- CATÁLOGO DE REQUISITOS

### ERS 2.1.- REQUISITOS

**REQUISITOS FUNCIONALES**

| **REQUISITO** | **DESCRIPCIÓN**                                                               | **PRIORIDAD** | **ITERACIÓN** |
|---------------|-------------------------------------------------------------------------------|---------------|---------------|
| RF1           | Permitirá el la creación y acceso de usuarios a través del correo electrónico | Alta          | 1             |
| RF2           | Permitirá la gestión y administración de los usuarios creados                 | Media         | 2             |
| RF3           | Permitirá la búsqueda total o parcial de información en uno o varios archivos | Alta          | 1             |
| RF4           | Permitirá guardar los parámetros de la búsqueda realizada por cada usuario    | Media         | 2             |
| RF5           | Permitirá guardar los resultados de las búsquedas realizadas por cada usuario | Baja          | 3             |
| RF6           | Permitirá realizar una búsqueda con una lista de parámetros en archivos PDF   | Media         | 1             |
| RF7           | El sistema deberá presentar una excencion de responsabilidad ("Disclaimer") al acceder al sistema | Baja |3|
| RF8           | El sistema deberá eliminar los archivos que lleven mas de 7 días sin ser modificados| Baja|3|

**REQUISITOS NO FUNCIONALES**

| **REQUISITO** | **DESCRIPCIÓN**                                                                                           |
|---------------|-----------------------------------------------------------------------------------------------------------|
| RNF1          | El Sistema debe funcionar en cualquier ordenador conectado a la Red de Propósito General del MINISDEF.    |
| RNF2          | El Sistema deberá programarse en entorno WEB, con lenguaje JAVA.                                          |
| RNF3          | El Sistema deberá emplear el **SGBD SQL SERVER 2012**                                                     |
| RNF4          | Toda funcionalidad del sistema y transacción de negocio debe responder al usuario en menos de 5 segundos. |


ASI 2.1.1.- REQUISITOS FUNCIONALES

| Identificación  | RF1-ERS                                                                                                                                                                                                                                                                   |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Descripción     | Para que los usuarios puedan acceder al sistema y la administración de recursos deberán identificarse. Para ello, el usuario necesita una cuenta asociada a un correo electrónico. Los datos de la identificación son los siguientes: correo electronico, contraseña      |  
| Tipo            | Requisito                                                                                                                                                                                                                                                                 |
| Fuente          | CLIENTE                                                                                                                                                                                                                                                                   |
| Prioridad       | Alta                                                                                                                                                                                                                                                                      |
| Relacionado con | RF1                                                                                                                                                                                                                                                                       |

| Identificación  | RF2-ERS                                                                                                                                                                                                                                                                   |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Descripción     |       |  
| Tipo            | Requisito / Restriccion                                                                                                                                                                                                                                                                |
| Fuente          | CLIENTE                                                                                                                                                                                                                                                                   |
| Prioridad       | Alta / Media / Baja                                                                                                                                                                                                                                                                      |
| Relacionado con | RF2                                                                                                                                                                                                                                                                       |

| Identificación  | RF3-ERS                                                                                                                                                                                                                                                                   |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Descripción     |       |  
| Tipo            | Requisito / Restriccion                                                                                                                                                                                                                                                                |
| Fuente          | CLIENTE                                                                                                                                                                                                                                                                   |
| Prioridad       | Alta / Media / Baja                                                                                                                                                                                                                                                                      |
| Relacionado con | RF3   

| Identificación  | RF4-ERS                                                                                                                                                                                                                                                                   |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Descripción     |       |  
| Tipo            | Requisito / Restriccion                                                                                                                                                                                                                                                                |
| Fuente          | CLIENTE                                                                                                                                                                                                                                                                   |
| Prioridad       | Alta / Media / Baja                                                                                                                                                                                                                                                                      |
| Relacionado con | RF4   

| Identificación  | RF5-ERS                                                                                                                                                                                                                                                                   |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Descripción     |       |  
| Tipo            | Requisito / Restriccion                                                                                                                                                                                                                                                                |
| Fuente          | CLIENTE                                                                                                                                                                                                                                                                   |
| Prioridad       | Alta / Media / Baja                                                                                                                                                                                                                                                                      |
| Relacionado con | RF5   

| Identificación  | RF6-ERS                                                                                                                                                                                                                                                                   |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Descripción     |       |  
| Tipo            | Requisito / Restriccion                                                                                                                                                                                                                                                                |
| Fuente          | CLIENTE                                                                                                                                                                                                                                                                   |
| Prioridad       | Alta / Media / Baja                                                                                                                                                                                                                                                                      |
| Relacionado con | RF6   

| Identificación  | RF7-ERS                                                                                                                                                                                                                                                                   |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Descripción     |       |  
| Tipo            | Requisito / Restriccion                                                                                                                                                                                                                                                                |
| Fuente          | CLIENTE                                                                                                                                                                                                                                                                   |
| Prioridad       | Alta / Media / Baja                                                                                                                                                                                                                                                                      |
| Relacionado con | RF7   

| Identificación  | RF8-ERS                                                                                                                                                                                                                                                                   |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Descripción     |       |  
| Tipo            | Requisito / Restriccion                                                                                                                                                                                                                                                                |
| Fuente          | CLIENTE                                                                                                                                                                                                                                                                   |
| Prioridad       | Alta / Media / Baja                                                                                                                                                                                                                                                                      |
| Relacionado con | RF8   

ERS 2.1.2.- REQUISITOS NO FUNCIONALES

| Identificación  | RNF1-ERS                                                                                                                                                                                                                                                                   |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Descripción     |       |  
| Tipo            | Requisito / Restriccion                                                                                                                                                                                                                                                                |
| Fuente          | CLIENTE                                                                                                                                                                                                                                                                   |
| Prioridad       | Alta / Media / Baja                                                                                                                                                                                                                                                                      |
| Relacionado con | RNF1   

| Identificación  | RNF2-ERS                                                                                                                                                                                                                                                                   |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Descripción     |       |  
| Tipo            | Requisito / Restriccion                                                                                                                                                                                                                                                                |
| Fuente          | CLIENTE                                                                                                                                                                                                                                                                   |
| Prioridad       | Alta / Media / Baja                                                                                                                                                                                                                                                                      |
| Relacionado con | RNF2   

| Identificación  | RNF3-ERS                                                                                                                                                                                                                                                                   |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Descripción     |       |  
| Tipo            | Requisito / Restriccion                                                                                                                                                                                                                                                                |
| Fuente          | CLIENTE                                                                                                                                                                                                                                                                   |
| Prioridad       | Alta / Media / Baja                                                                                                                                                                                                                                                                      |
| Relacionado con | RNF3   

| Identificación  | RNF4-ERS                                                                                                                                                                                                                                                                   |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Descripción     |       |  
| Tipo            | Requisito / Restriccion                                                                                                                                                                                                                                                                |
| Fuente          | CLIENTE                                                                                                                                                                                                                                                                   |
| Prioridad       | Alta / Media / Baja                                                                                                                                                                                                                                                                      |
| Relacionado con | RNF4   
                                                                   
ERS 2.2.- DIAGRAMA DE CASOS DE USO

ERS 2.3.- ESPECIFICACIÓN DE CASOS DE USO

Del estudio detallado de los Requisitos, se extraen los siguientes Actores del
sistema.

| **Actor** | **Descripción**                                                                                                                                                                                                                                                                                           |
|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Usuario   | Persona responsable de realizar la busqueda en uno varios archivos |
| Admin Grupo Trabajo | Encargado del mantenimiento de los Grupos de Trabajo creados por el.                                                                                                                                                                                                         |
                                                                                                                                                                                                                                         |

De lo anterior se llega a la conclusión de que los casos de uso son:

| **NUMERACIÓN** | **DESCRIPCIÓN**                           |
|----------------|-------------------------------------------|
| CU1            | Autenticar usuario.                       |
| CU2            | Consultar Lista de Usuarios.              |
| CU3            | Mantenimiento de un Usuario.              |
| CU4            | Consultar lista de proveedores.           |
| CU5            | Mantenimiento de un proveedor.            |
| CU6            | Consultar Lista de Lotes.                 |
| CU7            | Mantenimiento de un Lote.                 |
| CU8            | Consultar lista de Tipos de Ejercicios.   |
| CU9            | Mantenimiento de un Tipo de Ejercicio.    |
| CU10           | Consultar lista de Tipos de Formatos.     |
| CU11           | Mantenimiento de un Tipo de Formato.      |
| CU12           | Consultar Catálogo de artículos.          |
| CU13           | Mantenimiento de un artículo.             |
| CU14           | Consultar Lista de Unidades.              |
| CU15           | Mantenimiento de una Unidad.              |
| CU16           | Consultar Lista de Ejercicios.            |
| CU17           | Mantenimiento de un Ejercicio.            |
| CU18           | Consultar Lista de Pedidos.               |
| CU19           | Creación de un Pedido.                    |
| CU20           | Consultar/Modificar/Reutilizar un Pedido. |
| CU21           | Revisar un Pedido.                        |
| CU22           | Corregir un Pedido.                       |
| CU23           | Validar un Pedido.                        |
| CU24           | Lotear un pedido.                         |
| CU25           | Listar pedidos de lotes por fechas.       |
| CU26           | Comprobar un pedido de proveedor.         |
| CU27           | Entregar un pedido a unidad consumidora.  |
| CU28           | Mantener datos de configuración.          |

Debido a la extensión del Sistema, el elevado número de casos de uso y el escaso
tiempo que dispone el alumno para realizar la práctica, se han seleccionado tres
casos de uso de los veintiocho detectados. Se han seleccionado los que se han
considerado más importantes o relevantes.

| **Caso de Uso**                                                                                               | **Autenticar usuario**                                                                                                                                                                                                                                                                                                                                                                 | **CU1**             |                                                                                                                                                                                                                                                                                                                                                                                                                                       |         |
|---------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| **Actores**                                                                                                   | CABTO, JIAE, UNIDAD                                                                                                                                                                                                                                                                                                                                                                    |                     |                                                                                                                                                                                                                                                                                                                                                                                                                                       |         |
| **Tipo**                                                                                                      | Primario                                                                                                                                                                                                                                                                                                                                                                               |                     |                                                                                                                                                                                                                                                                                                                                                                                                                                       |         |
| **Referencias**                                                                                               | RF19-ASI, RSEG1-ASI                                                                                                                                                                                                                                                                                                                                                                    |                     |                                                                                                                                                                                                                                                                                                                                                                                                                                       |         |
| **Precondición**                                                                                              | Ninguna                                                                                                                                                                                                                                                                                                                                                                                |                     |                                                                                                                                                                                                                                                                                                                                                                                                                                       |         |
| **Postcondición**                                                                                             | El usuario queda autenticado y accede al sistema con las opciones autorizadas según su perfil.                                                                                                                                                                                                                                                                                         |                     |                                                                                                                                                                                                                                                                                                                                                                                                                                       |         |
| **Autor**                                                                                                     | Analista                                                                                                                                                                                                                                                                                                                                                                               | Fecha               | 18/09/18                                                                                                                                                                                                                                                                                                                                                                                                                              | Versión |
| **Descripción**                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                        |                     |                                                                                                                                                                                                                                                                                                                                                                                                                                       |         |
| El actor introduce su usuario y contraseña para autenticarse y acceder a determinados menús de la aplicación. |                                                                                                                                                                                                                                                                                                                                                                                        |                     |                                                                                                                                                                                                                                                                                                                                                                                                                                       |         |
| **Camino básico**                                                                                             |                                                                                                                                                                                                                                                                                                                                                                                        |                     |                                                                                                                                                                                                                                                                                                                                                                                                                                       |         |
| ACTOR                                                                                                         | SISTEMA                                                                                                                                                                                                                                                                                                                                                                                |                     |                                                                                                                                                                                                                                                                                                                                                                                                                                       |         |
| **1**                                                                                                         | Inicia la aplicación.                                                                                                                                                                                                                                                                                                                                                                  | **2**               | Presenta Formulario de autenticación con cuadros de texto de nombre de usuario, contraseña y botón para inicio de sesión.                                                                                                                                                                                                                                                                                                             |         |
| **3**                                                                                                         | Introduce su usuario y contraseña y pulsa botón iniciar sesión.                                                                                                                                                                                                                                                                                                                        | **4**               | Realiza la comprobación y presenta la pantalla principal de la aplicación, habilitando o deshabilitando las opciones según el perfil del usuario.                                                                                                                                                                                                                                                                                     |         |
| **Caminos Alternativas**                                                                                      |                                                                                                                                                                                                                                                                                                                                                                                        |                     |                                                                                                                                                                                                                                                                                                                                                                                                                                       |         |
| **3b**                                                                                                        | Cancelar Introducción de nombre usuario/contraseña. El sistema cerrará la aplicación.                                                                                                                                                                                                                                                                                                  |                     |                                                                                                                                                                                                                                                                                                                                                                                                                                       |         |
| **4b**                                                                                                        | La contraseña o el usuario no son válidos. En ese caso el sistema muestra devuelve el mismo formulario con un mensaje notificando el error y se reinicia el CU. Si se introduce tres (3) veces seguidas erróneamente el usuario/contraseña, el sistema cancela la operación, bloqueando al usuario y notificando al usuario que se ponga en contacto con el administrador del sistema. |                     |                                                                                                                                                                                                                                                                                                                                                                                                                                       |         |
| **Otros datos**                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                        |                     |                                                                                                                                                                                                                                                                                                                                                                                                                                       |         |
| **Frecuencia esperada**                                                                                       | De 2 a 20 veces al día                                                                                                                                                                                                                                                                                                                                                                 | **Rendimiento**     | Menos de 5 seg.                                                                                                                                                                                                                                                                                                                                                                                                                       |         |
| **Importancia**                                                                                               | Alta                                                                                                                                                                                                                                                                                                                                                                                   | **Urgencia**        | Alta                                                                                                                                                                                                                                                                                                                                                                                                                                  |         |
| **Caso de Uso**                                                                                               | **Consultar Catálogo de Artículos**                                                                                                                                                                                                                                                                                                                                                    | **CU12**            |                                                                                                                                                                                                                                                                                                                                                                                                                                       |         |
| **Actores**                                                                                                   | CABTO, Unidad                                                                                                                                                                                                                                                                                                                                                                          |                     |                                                                                                                                                                                                                                                                                                                                                                                                                                       |         |
| **Tipo**                                                                                                      | Primario                                                                                                                                                                                                                                                                                                                                                                               |                     |                                                                                                                                                                                                                                                                                                                                                                                                                                       |         |
| **Referencias**                                                                                               | RF1-ASI, RF9-ASI, RF17-ASI                                                                                                                                                                                                                                                                                                                                                             | CU1, CU6, CU10,CU13 |                                                                                                                                                                                                                                                                                                                                                                                                                                       |         |
| **Precondición**                                                                                              | El actor, se encuentra autenticado en el sistema con perfil CABTO o Unidad.                                                                                                                                                                                                                                                                                                            |                     |                                                                                                                                                                                                                                                                                                                                                                                                                                       |         |
| **Postcondición**                                                                                             | El sistema una vez comprobados los filtros introducidos por el actor, accede a la base de datos y muestra una lista con los artículos del catálogo que cumplan las condiciones de filtrado...                                                                                                                                                                                          |                     |                                                                                                                                                                                                                                                                                                                                                                                                                                       |         |
| **Autor**                                                                                                     | Analista                                                                                                                                                                                                                                                                                                                                                                               | Fecha               | 18/01118                                                                                                                                                                                                                                                                                                                                                                                                                              | Versión |
| **Descripción**                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                        |                     |                                                                                                                                                                                                                                                                                                                                                                                                                                       |         |
| El actor accede a la opción de consulta del catálogo de artículos.                                            |                                                                                                                                                                                                                                                                                                                                                                                        |                     |                                                                                                                                                                                                                                                                                                                                                                                                                                       |         |
| **Camino básico**                                                                                             |                                                                                                                                                                                                                                                                                                                                                                                        |                     |                                                                                                                                                                                                                                                                                                                                                                                                                                       |         |
| ACTOR                                                                                                         | SISTEMA                                                                                                                                                                                                                                                                                                                                                                                |                     |                                                                                                                                                                                                                                                                                                                                                                                                                                       |         |
| **1**                                                                                                         | Accede a la opción del menú para consulta del catálogo de artículos.                                                                                                                                                                                                                                                                                                                   | **2**               | El sistema muestra en pantalla una lista con todos los artículos disponibles, mostrando los artículos en páginas de 20 en 20. Así mismo, muestra en la parte superior de la lista, todas las posibles opciones de filtrado o búsqueda de artículos., rellenando los desplegables de lote y formato según los elementos existentes en la base de datos                                                                                 |         |
| **3**                                                                                                         | Introduce algún dato o selecciona algún elemento de filtrado de los disponibles, tales como:                                                                                                                                                                                                                                                                                           | **4**               | El sistema accede a la base de datos y muestra en pantalla una lista con todos los artículos disponibles que cumplan las condiciones de filtrado o búsqueda, mostrando los artículos en páginas de 20 en 20. Desde cada línea de artículo, el actor podrá acceder a la consulta, edición o borrado del artículo. Según sus privilegios, se le activarán o no esas opciones. Sólo el usuario CABTO, podrá editar o borrar un artículo. |         |
| **Caminos Alternativas**                                                                                      |                                                                                                                                                                                                                                                                                                                                                                                        |                     |                                                                                                                                                                                                                                                                                                                                                                                                                                       |         |
| **4b**                                                                                                        | Al acceder a la base de datos, ningún artículo cumple las opciones de filtrado o búsqueda seleccionada por el actor. El sistema mostrará un mensaje en pantalla indicando que ningún artículo cumple los criterios de búsqueda.                                                                                                                                                        |                     |                                                                                                                                                                                                                                                                                                                                                                                                                                       |         |
| **Otros datos**                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                        |                     |                                                                                                                                                                                                                                                                                                                                                                                                                                       |         |
| **Frecuencia esperada**                                                                                       | De 1 a 100 veces al día                                                                                                                                                                                                                                                                                                                                                                | **Rendimiento**     | Menos de 5 seg.                                                                                                                                                                                                                                                                                                                                                                                                                       |         |
| **Importancia**                                                                                               | Alta                                                                                                                                                                                                                                                                                                                                                                                   | **Urgencia**        | Alta                                                                                                                                                                                                                                                                                                                                                                                                                                  |         |

-   Código

-   Descripción.

-   Lote

-   Formato

Pulsa el botón Actualizar.

| **Caso de Uso**                                    | **Creación de un pedido**                                                                                                                                                                               | **C19**                         |                                                                                                                                                                                                                                                            |         |
|----------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| **Actores**                                        | CABTO, Unidad                                                                                                                                                                                           |                                 |                                                                                                                                                                                                                                                            |         |
| **Tipo**                                           | Primario                                                                                                                                                                                                |                                 |                                                                                                                                                                                                                                                            |         |
| **Referencias**                                    | RF2-ASI, RF9-ASI                                                                                                                                                                                        | CU1, CU6, CU8, CU10, CU12, CU14 |                                                                                                                                                                                                                                                            |         |
| **Precondición**                                   | El actor, se encuentra autenticado en el sistema con perfil CABTO o Unidad.                                                                                                                             |                                 |                                                                                                                                                                                                                                                            |         |
| **Postcondición**                                  | El sistema registra el pedido de alimentación dejándolo en estado PTE VALIDACION.                                                                                                                       |                                 |                                                                                                                                                                                                                                                            |         |
| **Autor**                                          | Analista                                                                                                                                                                                                | Fecha                           | 18/11/18                                                                                                                                                                                                                                                   | Versión |
| **Descripción**                                    |                                                                                                                                                                                                         |                                 |                                                                                                                                                                                                                                                            |         |
| El actor, accede a la opción de Alta de un Pedido. |                                                                                                                                                                                                         |                                 |                                                                                                                                                                                                                                                            |         |
| **Camino básico**                                  |                                                                                                                                                                                                         |                                 |                                                                                                                                                                                                                                                            |         |
| ACTOR                                              | SISTEMA                                                                                                                                                                                                 |                                 |                                                                                                                                                                                                                                                            |         |
| **1**                                              | Accede a la opción de Alta de un pedido.                                                                                                                                                                | **2**                           | Muestra una pantalla, con dos partes diferenciadas, la cabecera, donde mostrará las cajas de edición y desplegables para que el usuario introduzca los datos del pedido. Y otra parte en forma de tabla para que introduzca los artículos que desea pedir. |         |
| **3**                                              | Selecciona la unidad de las disponibles en el desplegable.                                                                                                                                              | **4**                           | Accede a la base de datos y carga en el desplegable los ejercicios de esa unidad, cuya fecha de fin no se haya sobrepasado.                                                                                                                                |         |
| **5**                                              | Selecciona un ejercicio de los disponibles en el desplegable e introduce el resto de información:                                                                                                       | **6**                           | En la introducción de las fechas, se comprueba que estén dentro del rango de fechas del ejercicio.                                                                                                                                                         |         |
| **7**                                              | Rellena los datos del artículo que desea pedir, para ello, introduce el código del artículo y pulsa la tecla enter o tab.                                                                               | **8**                           | Se accede a la base de datos y se localiza el artículo de entre los disponibles. Se muestra en la caja de texto correspondiente la siguiente información:                                                                                                  |         |
| **9**                                              | Rellena la cantidad solicitada, y rellena las observaciones si las tuviera.                                                                                                                             | **10**                          | Comprueba que se ha rellenado la cantidad y que esta es un número mayor que cero. Añade una nueva línea en blanco, para que el actor pueda introducir un nuevo artículo.                                                                                   |         |
| **11**                                             | Si queda algún artículo más por pedir, vuelve a ejecutar el evento 9. Si no quedan más artículos, se pasa al evento 11.                                                                                 |                                 |                                                                                                                                                                                                                                                            |         |
| **12**                                             | Indica que no quedan más artículos por pedir, pulsando el botón “Finalizar Pedido”.                                                                                                                     | **13**                          | Graba el pedido con todos los artículos solicitados, incorporando a la información del actor y de forma automática, la fecha y el código del pedido, así como su estado, que pasará a ser “PTE. VALIDACION”                                                |         |
| **Caminos Alternativas**                           |                                                                                                                                                                                                         |                                 |                                                                                                                                                                                                                                                            |         |
| **3a**                                             | El actor selecciona una unidad que no tiene ejercicios o estos ya se han realizado.                                                                                                                     |                                 |                                                                                                                                                                                                                                                            |         |
| **4a**                                             | El desplegable quedará vacío al no haber ejercicios disponibles y se mostrará un texto junto al ejercicio, indicándoselo al actor.                                                                      |                                 |                                                                                                                                                                                                                                                            |         |
| **5a**                                             | Se introducen fechas fuera del rango del ejercicio o no se rellena alguna de ellas.                                                                                                                     |                                 |                                                                                                                                                                                                                                                            |         |
| **6a**                                             | Muestra un mensaje junto a la caja de edición de la información que falta o es errónea indicando el error.                                                                                              |                                 |                                                                                                                                                                                                                                                            |         |
| **8a**                                             | El sistema no localiza el artículo, muestra un mensaje en pantalla indicando que se compruebe el código introducido y pasa al estado de espera para que el usuario introduzca de nuevo el código.       |                                 |                                                                                                                                                                                                                                                            |         |
| **9a**                                             | Introduce una cantidad menor o igual que cero.                                                                                                                                                          |                                 |                                                                                                                                                                                                                                                            |         |
| **10a**                                            | Muestra un mensaje junto a la caja de edición de la cantidad indicando el error.                                                                                                                        |                                 |                                                                                                                                                                                                                                                            |         |
| **12a**                                            | Pulsa el botón “Guardar Pedido”, ya que no ha terminado el pedido y lo desea continuar en otro momento.                                                                                                 |                                 |                                                                                                                                                                                                                                                            |         |
| **13a**                                            | Graba el pedido con todos los artículos solicitados, incorporando a la información del actor y de forma automática, la fecha y el código del pedido, así como su estado, que pasará a ser “EN PROCESO”. |                                 |                                                                                                                                                                                                                                                            |         |
| **Otros datos**                                    |                                                                                                                                                                                                         |                                 |                                                                                                                                                                                                                                                            |         |
| **Frecuencia esperada**                            | De 120 a 400 veces al día                                                                                                                                                                               | **Rendimiento**                 | Menos de 5 seg.                                                                                                                                                                                                                                            |         |
| **Importancia**                                    | Alta                                                                                                                                                                                                    | **Urgencia**                    | Alta                                                                                                                                                                                                                                                       |         |

-   Fecha de suministro.

-   Hora de suministro

-   Fecha de consumo

-   Descripción

-   Precio

-   Formato, por defecto el que tiene el artículo

ERS 2.4.- ANÁLISIS DE REQUISITOS

En el **ANEXO 1** se exponen los casos de uso asociados a los diferentes
requisitos funcionales que se han obtenido en el proceso de captura de
requisitos...

Se observa como todos los requisitos tienen asociados al menos un caso de uso
que contemple la correspondiente funcionalidad y que todos los casos de uso
cumplen algún requisito funcional, por lo que podemos afirmar que no queda
ningún requisito por cubrir.

ASI 2.- ESTABLECIMIENTO DE REQUISITOS:

ASI 2.1.- OBTENCIÓN DE REQUISITOS

Tras las dos últimas reuniones con el cliente, se procede a una obtención más
detallada de información con el objetivo de actualizar la lista de requisitos ya
detallada anteriormente. Además de los ya enumerados en ASI 1.1.4, se han
establecido los siguientes requisitos englobándolos en los diferentes tipos de
interfaces de usuario, interfaces hardware, interfaces software, interfaces de
comunicación, funcionales, rendimiento, seguridad, mantenimiento, accesibilidad,
facilidad de uso.

ERS 3.- INTERFACES DE USUARIO

| Identificación  | RIUS1-ASI                                                                                                                                                                                                                                                      |             |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| Descripción     | Los interfaces de los actores se realizarán mediante la creación de páginas web, utilizando los mismos colores y disposición de botones que la aplicación SIGEAL, dedicada también a la alimentación en el E.T.                                                |             |
| Tipo            | Requisito                                                                                                                                                                                                                                                      | Restricción |
| Fuente          | Analista                                                                                                                                                                                                                                                       |             |
| Prioridad       | Alta                                                                                                                                                                                                                                                           | Media       |
| Relacionado con |                                                                                                                                                                                                                                                                |             |
| Identificación  | RIUS2-ASI                                                                                                                                                                                                                                                      |             |
| Descripción     | La aplicación ofrecerá el mismo interfaz de usuario al acceder a la aplicación independientemente de si el usuario tiene el perfil CABTO, el perfil JIAE o el perfil unidad consumidora. Dependiendo del perfil, se le habilitarán o no las diversas opciones. |             |
| Tipo            | Requisito                                                                                                                                                                                                                                                      | Restricción |
| Fuente          | Analista                                                                                                                                                                                                                                                       |             |
| Prioridad       | Alta                                                                                                                                                                                                                                                           | Media       |
| Relacionado con |                                                                                                                                                                                                                                                                |             |
| Identificación  | RIUS3-ASI                                                                                                                                                                                                                                                      |             |
| Descripción     | En todas las interfaces, se podrá elegir en todo momento si se cancelan o aceptan las operaciones realizadas.                                                                                                                                                  |             |
| Tipo            | Requisito                                                                                                                                                                                                                                                      | Restricción |
| Fuente          | Analista                                                                                                                                                                                                                                                       |             |
| Prioridad       | Alta                                                                                                                                                                                                                                                           | Media       |
| Relacionado con |                                                                                                                                                                                                                                                                |             |

ASI 2.1.2.- INTERFACES DE HARDWARE

| Identificación  | RIHW1-ASI                                                                                                                                          |             |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| Descripción     | La aplicación deberá poder ser utilizada en los ordenadores que ya disponen las unidades del Ministerio de Defensa.                                |             |
| Tipo            | Requisito                                                                                                                                          | Restricción |
| Fuente          | Jefe Cía. Abto.                                                                                                                                    |             |
| Prioridad       | Alta                                                                                                                                               | Media       |
| Relacionado con |                                                                                                                                                    |             |
| Identificación  | RIHW2-ASI                                                                                                                                          |             |
| Descripción     | El servidor de la aplicación y el servidor de base de datos, será el que ya dispone el CGBRILOG en el Acuartelamiento de San Fernando en Zaragoza. |             |
| Tipo            | Requisito                                                                                                                                          | Restricción |
| Fuente          | Analista                                                                                                                                           |             |
| Prioridad       | Alta                                                                                                                                               | Media       |
| Relacionado con |                                                                                                                                                    |             |

ASI 2.1.3.- INTERFACES DE SOFTWARE

| Identificación  | RISW1-ASI                                                                                 |             |
|-----------------|-------------------------------------------------------------------------------------------|-------------|
| Descripción     | El Sistema deberá programarse en entorno WEB con ASP. NET y lenguaje de programación C\#. |             |
| Tipo            | Requisito                                                                                 | Restricción |
| Fuente          | Analista                                                                                  |             |
| Prioridad       | Alta                                                                                      | Media       |
| Relacionado con | RNF1                                                                                      |             |
| Identificación  | RISW2-ASI                                                                                 |             |
| Descripción     | El sistema gestor de base de datos a usar será, SQL Server 2012.                          |             |
| Tipo            | Requisito                                                                                 | Restricción |
| Fuente          | Analista                                                                                  |             |
| Prioridad       | Alta                                                                                      | Media       |
| Relacionado con | RNF2                                                                                      |             |

ASI 2.1.4.- INTERFACES DE COMUNICACIONES

| Identificación  | RICOM1-ASI                                                                                                                                             |             |
|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| Descripción     | La infraestructura de la red y sus comunicaciones se basarán en la Red de Propósito General del Ministerio de Defensa.                                 |             |
| Tipo            | Requisito                                                                                                                                              | Restricción |
| Fuente          | Analista                                                                                                                                               |             |
| Prioridad       | Alta                                                                                                                                                   | Media       |
| Relacionado con |                                                                                                                                                        |             |
| Identificación  | RICOM2-ASI                                                                                                                                             |             |
| Descripción     | Todas las solicitudes de datos al sistema, artículos, proveedores, pedidos, etc., serán tratados en tiempo real.                                       |             |
| Tipo            | Requisito                                                                                                                                              | Restricción |
| Fuente          | Analista                                                                                                                                               |             |
| Prioridad       | Alta                                                                                                                                                   | Media       |
| Relacionado con |                                                                                                                                                        |             |
| Identificación  | RICOM3-ASI                                                                                                                                             |             |
| Descripción     | El CABTO, deberá solicitar la creación de un correo electrónico genérico para ser usada como origen en los correos electrónicos que genere el Sistema. |             |
| Tipo            | Requisito                                                                                                                                              | Restricción |
| Fuente          | Analista                                                                                                                                               |             |
| Prioridad       | Alta                                                                                                                                                   | Media       |
| Relacionado con |                                                                                                                                                        |             |

ERS 3.- DEFINICIÓN DE LAS INTERFACES DE USUARIO

ASI 8.1.- ESPECIFICACIÓN DE PRINCIPIOS GENERALES DE LA INTERFAZ

Para el desarrollo de las interfaces se usará una interfaz interactiva (gráfica,
a base de ventanas) tomando como punto de partida el RIUS1-ASI que indica que
los interfaces de los actores se realizarán mediante la creación de páginas WEB,
utilizando los mismos colores y disposición de botones que SIGEAL.

De acuerdo al RIUS2-ASI, la aplicación debe ofrecer el mismo interfaz de usuario
al acceder a la aplicación independientemente del perfil que tenga Dependiendo
del perfil, se le habilitarán o no las diversas opciones.

Con carácter general, según el RIUS3-ASI, en todas las interfaces, se podrá
elegir en todo momento si se cancelan o aceptan las operaciones realizadas.

![](media/823e6ace4579e9e44d65e697248b9ffb.png)

Los mensajes de error, ayuda y otros mensajes aclaratorios se mostrarán mediante
ventanas emergentes.

Se muestran a modo de modelo y guía para el futuro diseño y construcción de la
aplicación, diferentes pantallas de la aplicación y la navegación en ella, dando
a los analistas/programadores una idea exacta de los campos, formularios,
diálogos y su comportamiento dinámico. Además, permitirá validar la consistencia
entre los resultados esperados y los datos necesarios a solicitar en los
formularios y a mostrar en las consultas.

A continuación se muestra un formato de pantalla del portal de la aplicación,
esta pantalla será la primera a la que se accederá al autenticarse en la
aplicación.

![](media/e462aee0a7d891a3d9ec677b3e65cf4a.png)

ASI 8.3.- ESPECIFICACIÓN DE FORMATOS INDIVIDUALES DE LA INTERFAZ DE PANTALLA

A continuación, se presentarán las pantallas de la aplicación para los casos de
uso descritos, desde un punto de vista estático, con los caminos alternativos
correspondientes. El formato de entrada se realizará a través de ratón y
teclado.

**CU14 – Consultar catálogo de artículos**

![](media/a0d5deab2863e42ba62f0221bfef91c2.png)

Pantalla de Edición de un Artículo

![](media/debb9d9cc8e2bdb3b24cf3642c1d59b5.png)

**CU21 – CREAR UN PEDIDO**

![](media/ac3b77bc746877b47bd55d1add3ca3f6.png)

Pantalla de Creación de un pedido

![](media/24fd817b1a16645d922b455311ecf238.png)

Pantalla de Consulta de un pedido

![](media/9ad3d5bcf8a41b0493e7978414ee2dea.png)

**ERS 4- APROBACIÓN DEL ANÁLISIS DEL ERS**

A fecha 21/09/2018 y reunidos el Comité de Dirección y el Jefe del Proyecto, se
presenta por parte de este último el análisis del sistema de información, dando
como resultado su aprobación y firma.

ANEXO 1: MATRIZ DE CUMPLIMIENTO DE REQUISITOS

| **CASO DE USO** | **REQUISITOS FUNCIONALES RFXX-ASI**     |       |       |       |       |       |       |       |       |        |        |        |        |        |        |        |        |        |        |        |
|-----------------|-----------------------------------------|-------|-------|-------|-------|-------|-------|-------|-------|--------|--------|--------|--------|--------|--------|--------|--------|--------|--------|--------|
|                 | **1**                                   | **2** | **3** | **4** | **5** | **6** | **7** | **8** | **9** | **10** | **11** | **12** | **13** | **14** | **15** | **16** | **17** | **18** | **19** | **20** |
| CU1             | Autenticar usuario.                     |       |       |       |       |       |       |       |       |        |        |        |        |        |        |        |        |        |        | X      |
| CU2             | Consultar Lista de Usuarios.            |       |       |       |       |       | X     |       |       |        |        |        |        |        |        |        |        |        |        | X      |
| CU3             | Mantenimiento de un Usuario.            |       |       |       |       |       | X     |       |       |        |        |        |        |        |        |        |        |        |        |        |
| CU4             | Consultar lista de proveedores.         |       |       |       | X     |       |       |       |       |        |        |        |        |        |        | X      | X      | X      |        |        |
| CU5             | Mantenimiento de un proveedor.          |       |       |       | X     |       |       |       |       |        |        |        |        |        |        | X      |        |        |        |        |
| CU6             | Consultar Lista de Lotes.               |       | X     | X     |       |       |       |       |       | X      |        |        |        |        |        | X      |        |        |        |        |
| CU7             | Mantenimiento de un Lote.               |       |       | X     |       |       |       |       |       |        |        |        |        |        |        |        |        |        |        |        |
| CU8             | Consultar lista de Tipos de Ejercicios. |       |       |       |       |       | X     | X     |       |        |        |        |        |        |        |        |        |        |        |        |
| CU9             | Mantenimiento de un Tipo de Ejercicio.  |       |       |       |       |       |       | X     |       |        |        |        |        |        |        |        |        |        |        |        |
| CU10            | Consultar lista de Tipos de Formatos.   |       |       |       |       |       |       |       | X     | X      |        |        |        |        |        |        |        |        |        |        |
| CU11            | Mantenimiento de un Tipo de Formato.    |       |       |       |       |       |       |       | X     |        |        |        |        |        |        |        |        |        |        |        |
