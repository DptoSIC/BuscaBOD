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
| RNF3          | El Sistema no deberá tener salida a Internet                                                    |



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
| Descripción     | Tras realizar el login el Usuario, el administrador podrá gestionar al mismo, y adjudicarle el rol y el grupo que estime conveniente.       |  
| Tipo            | Requisito                                                                                                                                                                                                                                                                |
| Fuente          | CLIENTE                                                                                                                                                                                                                                                                   |
| Prioridad       |  Media                                                                                                                                                                                                                                                                      |
| Relacionado con | RF2                                                                                                                                                                                                                                                                       |

| Identificación  | RF3-ERS                                                                                                                                                                                                                                                                   |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Descripción     | El Usuario podrá realizar varios tios de busquedas, simples o avanzadas, utilizando para ello una palabra o conjunto de ellas, con el fin de conseguir coincidencias en los documentos examinados      |  
| Tipo            | Requisito                                                                                                                                                                                                                                                                 |
| Fuente          | CLIENTE                                                                                                                                                                                                                                                                   |
| Prioridad       | Alta                                                                                                                                                                                                                                                                      |
| Relacionado con | RF3   

| Identificación  | RF4-ERS                                                                                                                                                                                                                                                                   |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Descripción     | Tras realizar las busquedas correspondientes e independientemente del tipo que sean, el Usuario podrá guardar los parámetros establecidos en la busqueda realizada para un uso posterior.      |  
| Tipo            | Requisito                                                                                                                                                                                                                                                                 |
| Fuente          | CLIENTE                                                                                                                                                                                                                                                                   |
| Prioridad       |  Media                                                                                                                                                                                                                                                                    |
| Relacionado con | RF4   

| Identificación  | RF5-ERS                                                                                                                                                                                                                                                                   |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Descripción     |  Tras realizar las busquedas correspondientes e independientemente del tipo que sean, el Usuario podrá guardar las busquedas realizadas para una consulta posterior.     |  
| Tipo            | Requisito                                                                                                                                                                                                                                                                 |
| Fuente          | CLIENTE                                                                                                                                                                                                                                                                   |
| Prioridad       | Baja                                                                                                                                                                                                                                                                      |
| Relacionado con | RF5   

| Identificación  | RF6-ERS                                                                                                                                                                                                                                                                   |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Descripción     | El Usuario podrá realizar busquedas utilizando distintos parametros o filtros para obtener un resultado mas preciso acorde a las necesidades del mismo.      |  
| Tipo            | Requisito                                                                                                                                                                                                                                                                 |
| Fuente          | CLIENTE                                                                                                                                                                                                                                                                   |
| Prioridad       |  Media                                                                                                                                                                                                                                                                     |
| Relacionado con | RF6   

| Identificación  | RF7-ERS                                                                                                                                                                                                                                                                   |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Descripción     | Conforme a la legislación vigente, el sistema advertirá a cada usuario, una vez realice el login, que la subida de archivos que por su naturaleza tengan protección será bajo la responsabilidad del Usuario        |  
| Tipo            | Requisito                                                                                                                                                                                                                                                                |
| Fuente          | CLIENTE                                                                                                                                                                                                                                                                   |
| Prioridad       | Baja                                                                                                                                                                                                                                                                      |
| Relacionado con | RF7   

| Identificación  | RF8-ERS                                                                                                                                                                                                                                                                   |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Descripción     | El sistema realizará acciones de autoborrado de todos aquellos documentos que no hayan sido modificados una vez transcurridos siete (7) dias desde su ultima modificación.      |  
| Tipo            | Requisito                                                                                                                                                                                                                                                                 |
| Fuente          | CLIENTE                                                                                                                                                                                                                                                                   |
| Prioridad       | Baja                                                                                                                                                                                                                                                                      |
| Relacionado con | RF8   

ERS 2.1.2.- REQUISITOS NO FUNCIONALES

| Identificación  | RNF1-ERS                                                                                                                                                                                                                                                                   |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Descripción     | El sistema deberá prestar servicio en todos aquellos ordenadores o equipos de hardware que estén conectado a la red WAN PG, sistema interno utilizado por el Ministerio de Defensa      |  
| Tipo            | Requisito                                                                                                                                                                                                                                                                |
| Fuente          | CLIENTE                                                                                                                                                                                                                                                                   |
| Prioridad       | Alta / Media / Baja                                                                                                                                                                                                                                                                      |
| Relacionado con | RNF1   

| Identificación  | RNF2-ERS                                                                                                                                                                                                                                                                   |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Descripción     | El lenguaje de programación y posterior mantenimiento del sistema será JAVA,        |  
| Tipo            | Requisito                                                                                                                                                                                                                                                              |
| Fuente          | CLIENTE                                                                                                                                                                                                                                                                   |
| Prioridad       | Alta                                                                                                                                                                                                                                                                      |
| Relacionado con | RNF2   

| Identificación  | RNF3-ERS                                                                                                                                                                                                                                                                   |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Descripción     | El sistema no tendrá salida a Internet, por lo que debe ser autonomo en una red privada.      |  
| Tipo            | Restriccion                                                                                                                                                                                                                                                                |
| Fuente          | CLIENTE                                                                                                                                                                                                                                                                   |
| Prioridad       | Alta                                                                                                                                                                                                                                                                      |
| Relacionado con | RNF3   

| Identificación  | RNF4-ERS                                                                                                                                                                                                                                                                   |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Descripción     | El sistema deberá tener un bajo tiempo de respuesta para las acciones realizadas or cualquier Usuario, n siendo este tiempo superior a cinco (5) segundos.      |  
| Tipo            | Requisito                                                                                                                                                                                                                                                                 |
| Fuente          | CLIENTE                                                                                                                                                                                                                                                                   |
| Prioridad       | Baja                                                                                                                                                                                                                                                                      |
| Relacionado con | RNF4   
                                                                   
### ERS 2.2.- DIAGRAMA DE CASOS DE USO

![alt text](https://github.com/DptoSIC/BuscaBOD/blob/master/imagenes%20busca%20bod/Diagrama%20de%20Casos%20de%20Uso.jpg "Diagrama de Casos de Uso")

### ERS 2.3.- ESPECIFICACIÓN DE CASOS DE USO

Del estudio detallado de los Requisitos, se extraen los siguientes Actores del
sistema.

| **Actor** | **Descripción**  |
|-----------|------------------|
| Usuario   | Persona responsable de realizar la busqueda en uno varios archivos |
| Admin Grupo Trabajo | Encargado del mantenimiento de los Grupos de Trabajo creados por el.|                                                                                                                                                                                                         

                                                                                                                                                                                                                                        
De lo anterior se llega a la conclusión de que los casos de uso son:

| **NUMERACIÓN** | **DESCRIPCIÓN**                           |
|----------------|-------------------------------------------|
| CU1            | Autenticar usuario.                       |
| CU2            | Realizar búsqueda en archivo/s PDF        |
| CU3            | Guardar parametros de búsqueda            |
| CU4            | Guardar resultados de búsqueda.           |
| CU5            | Consultar patrón búsqueda.                |
| CU6            | Borrar patron de búsqueda.                |
| CU7            | Consultar resultados búsqueda.            |
| CU8            | Borrar resultado de búsqueda              |
| CU9            | Creacion de Usuario                       |
| CU10           | Modificar Usuario                         |
| CU11           | Borrar Usuario de un Grupo de Trabajo     |
| CU12           | Crear un grupo de trabajo                 |
| CU13           | Borrar un grupo de Trabajo                |

Debido a la extensión del Sistema, el elevado número de casos de uso y el escaso
tiempo que dispone el alumno para realizar la práctica, se han seleccionado tres
casos de uso de los veintiocho detectados. Se han seleccionado los que se han
considerado más importantes o relevantes.

| **Caso de Uso**  | **Autenticar usuario** |        |**CU1** |
|------------------|------------------------|--------|--------|
| **Actores**      | Usuario, Administrador    |        | |
| **Tipo**         | Primario               |        | |
| **Referencias**  | RF1                    |        | |
| **Precondición** | Ninguna                |        | |
| **Postcondición**| El usuario queda autenticado y accede al sistema con las opciones autorizadas según su perfil.|||
| **Autor**        | Analista               |        | |
| **Descripción**  | El actor introduce su usuario y contraseña para autenticarse y acceder a determinados menús de la aplicación. | |
| **Camino básico**|                        |        | |
| ACTOR            |                        | SISTEMA| |                                                                                                                                                                                                                                                                                                                                                                                
| **1**| Inicia la aplicación.|**2**| Presenta Formulario de autenticación con cuadros de texto de nombre de usuario, contraseña y botón para inicio de sesión.|
| **3**| Introduce su usuario y contraseña y pulsa botón iniciar sesión.| **4** | Realiza la comprobación y presenta la pantalla principal de la aplicación.|
| **Caminos Alternativos**||||
|**4b**|La contraseña o el usuario no son válidos. En ese caso el sistema muestra devuelve el mismo formulario con un mensaje notificando el error y se reinicia el CU.|||
| **Otros datos** ||||
| **Frecuencia esperada**| De 2 a 20 veces al día  | **Rendimiento**     | Menos de 5 seg.    |
|**Importancia** | Alta | **Urgencia**        | Alta  |


| **Caso de Uso**  | **Realizar búsqueda en archivo/s PDF** |        |**CU2** |
|------------------|------------------------|--------|--------|
| **Actores**      | xxxxxxxxxxxxxxxxxxx    |        | |
| **Tipo**         | Primario               |        | |
| **Referencias**  | xxxxxxxxxxxxxxxxxxx    |        | |
| **Precondición** | Ninguna                |        | |
| **Postcondición**| xxxxxxxxxxxxxxxxxxxxxxx|        | |
| **Autor**        | Analista               |        | |
| **Descripción**  | xxxxxxxxxxxxxxxxxxxxxx |        | |
| **Camino básico**|                        |        | |
| ACTOR            |                        | SISTEMA| |                                                                                                                                                                                                                                                                                                                                                                                
| **1**| xxxxxxxxxxxxxxxxx |**2**| XXXXXXXXXXXXXXXXXXXXXX|
| **3**| XXXXXXXXXXXXXXXXX | **4** | XXXXXXXXXXXXXXXXXXXX|
| **Caminos Alternativos**| | | |
| **3b**| xxxxxxxxxxxxxxxx| | |
|**4b**|xxxxxxxxxxxxxxxxxx| | |
| **Otros datos** | | | |
| **Frecuencia esperada**| De 2 a 20 veces al día  | **Rendimiento**     | Menos de 5 seg.    |
|**Importancia** | Alta | **Urgencia**        | Alta  |


| **Caso de Uso**  | **Guardar parámetros de búsqueda** |        |**CU3** |
|------------------|------------------------|--------|--------|
| **Actores**      | xxxxxxxxxxxxxxxxxxx    |        | |
| **Tipo**         | Primario               |        | |
| **Referencias**  | xxxxxxxxxxxxxxxxxxx    |        | |
| **Precondición** | Ninguna                |        | |
| **Postcondición**| xxxxxxxxxxxxxxxxxxxxxxx|        | |
| **Autor**        | Analista               |        | |
| **Descripción**  | xxxxxxxxxxxxxxxxxxxxxx |        | |
| **Camino básico**|                        |        | |
| ACTOR            |                        | SISTEMA| |                                                                                                                                                                                                                                                                                                                                                                                
| **1**| xxxxxxxxxxxxxxxxx |**2**| XXXXXXXXXXXXXXXXXXXXXX|
| **3**| XXXXXXXXXXXXXXXXX | **4** | XXXXXXXXXXXXXXXXXXXX|
| **Caminos Alternativos**| | | |
| **3b**| xxxxxxxxxxxxxxxx| | |
|**4b**|xxxxxxxxxxxxxxxxxx| | |
| **Otros datos** | | | |
| **Frecuencia esperada**| De 2 a 20 veces al día  | **Rendimiento**     | Menos de 5 seg.    |
|**Importancia** | Alta | **Urgencia**        | Alta  |


| **Caso de Uso**  | **Guardar resultado de búsqueda** |        |**CU4** |
|------------------|------------------------|--------|--------|
| **Actores**      | xxxxxxxxxxxxxxxxxxx    |        | |
| **Tipo**         | Primario               |        | |
| **Referencias**  | xxxxxxxxxxxxxxxxxxx    |        | |
| **Precondición** | Ninguna                |        | |
| **Postcondición**| xxxxxxxxxxxxxxxxxxxxxxx|        | |
| **Autor**        | Analista               |        | |
| **Descripción**  | xxxxxxxxxxxxxxxxxxxxxx |        | |
| **Camino básico**|                        |        | |
| ACTOR            |                        | SISTEMA| |                                                                                                                                                                                                                                                                                                                                                                                
| **1**| xxxxxxxxxxxxxxxxx |**2**| XXXXXXXXXXXXXXXXXXXXXX|
| **3**| XXXXXXXXXXXXXXXXX | **4** | XXXXXXXXXXXXXXXXXXXX|
| **Caminos Alternativos**| | | |
| **3b**| xxxxxxxxxxxxxxxx| | |
|**4b**|xxxxxxxxxxxxxxxxxx| | |
| **Otros datos** | | | |
| **Frecuencia esperada**| De 2 a 20 veces al día  | **Rendimiento**     | Menos de 5 seg.    |
|**Importancia** | Alta | **Urgencia**        | Alta  |


| **Caso de Uso**  | **Consultar patron de búsqueda** |        |**CU5** |
|------------------|------------------------|--------|--------|
| **Actores**      | xxxxxxxxxxxxxxxxxxx    |        | |
| **Tipo**         | Primario               |        | |
| **Referencias**  | xxxxxxxxxxxxxxxxxxx    |        | |
| **Precondición** | Ninguna                |        | |
| **Postcondición**| xxxxxxxxxxxxxxxxxxxxxxx|        | |
| **Autor**        | Analista               |        | |
| **Descripción**  | xxxxxxxxxxxxxxxxxxxxxx |        | |
| **Camino básico**|                        |        | |
| ACTOR            |                        | SISTEMA| |                                                                                                                                                                                                                                                                                                                                                                                
| **1**| xxxxxxxxxxxxxxxxx |**2**| XXXXXXXXXXXXXXXXXXXXXX|
| **3**| XXXXXXXXXXXXXXXXX | **4** | XXXXXXXXXXXXXXXXXXXX|
| **Caminos Alternativos**| | | |
| **3b**| xxxxxxxxxxxxxxxx| | |
|**4b**|xxxxxxxxxxxxxxxxxx| | |
| **Otros datos** | | | |
| **Frecuencia esperada**| De 2 a 20 veces al día  | **Rendimiento**     | Menos de 5 seg.    |
|**Importancia** | Alta | **Urgencia**        | Alta  |


| **Caso de Uso**  | **Borrar patron de busqueda** |        |**CU6** |
|------------------|------------------------|--------|--------|
| **Actores**      | xxxxxxxxxxxxxxxxxxx    |        | |
| **Tipo**         | Primario               |        | |
| **Referencias**  | xxxxxxxxxxxxxxxxxxx    |        | |
| **Precondición** | Ninguna                |        | |
| **Postcondición**| xxxxxxxxxxxxxxxxxxxxxxx|        | |
| **Autor**        | Analista               |        | |
| **Descripción**  | xxxxxxxxxxxxxxxxxxxxxx |        | |
| **Camino básico**|                        |        | |
| ACTOR            |                        | SISTEMA| |                                                                                                                                                                                                                                                                                                                                                                                
| **1**| xxxxxxxxxxxxxxxxx |**2**| XXXXXXXXXXXXXXXXXXXXXX|
| **3**| XXXXXXXXXXXXXXXXX | **4** | XXXXXXXXXXXXXXXXXXXX|
| **Caminos Alternativos**| | | |
| **3b**| xxxxxxxxxxxxxxxx| | |
|**4b**|xxxxxxxxxxxxxxxxxx| | |
| **Otros datos** | | | |
| **Frecuencia esperada**| De 2 a 20 veces al día  | **Rendimiento**     | Menos de 5 seg.    |
|**Importancia** | Alta | **Urgencia**        | Alta  |


| **Caso de Uso**  | **Consultar resultado de búsqueda** |        |**CU7** |
|------------------|------------------------|--------|--------|
| **Actores**      | xxxxxxxxxxxxxxxxxxx    |        | |
| **Tipo**         | Primario               |        | |
| **Referencias**  | xxxxxxxxxxxxxxxxxxx    |        | |
| **Precondición** | Ninguna                |        | |
| **Postcondición**| xxxxxxxxxxxxxxxxxxxxxxx|        | |
| **Autor**        | Analista               |        | |
| **Descripción**  | xxxxxxxxxxxxxxxxxxxxxx |        | |
| **Camino básico**|                        |        | |
| ACTOR            |                        | SISTEMA| |                                                                                                                                                                                                                                                                                                                                                                                
| **1**| xxxxxxxxxxxxxxxxx |**2**| XXXXXXXXXXXXXXXXXXXXXX|
| **3**| XXXXXXXXXXXXXXXXX | **4** | XXXXXXXXXXXXXXXXXXXX|
| **Caminos Alternativos**| | | |
| **3b**| xxxxxxxxxxxxxxxx| | |
|**4b**|xxxxxxxxxxxxxxxxxx| | |
| **Otros datos** | | | |
| **Frecuencia esperada**| De 2 a 20 veces al día  | **Rendimiento**     | Menos de 5 seg.    |
|**Importancia** | Alta | **Urgencia**        | Alta  |


| **Caso de Uso**  | **Borrar resultado de búsqueda** |        |**CU8** |
|------------------|------------------------|--------|--------|
| **Actores**      | xxxxxxxxxxxxxxxxxxx    |        | |
| **Tipo**         | Primario               |        | |
| **Referencias**  | xxxxxxxxxxxxxxxxxxx    |        | |
| **Precondición** | Ninguna                |        | |
| **Postcondición**| xxxxxxxxxxxxxxxxxxxxxxx|        | |
| **Autor**        | Analista               |        | |
| **Descripción**  | xxxxxxxxxxxxxxxxxxxxxx |        | |
| **Camino básico**|                        |        | |
| ACTOR            |                        | SISTEMA| |                                                                                                                                                                                                                                                                                                                                                                                
| **1**| xxxxxxxxxxxxxxxxx |**2**| XXXXXXXXXXXXXXXXXXXXXX|
| **3**| XXXXXXXXXXXXXXXXX | **4** | XXXXXXXXXXXXXXXXXXXX|
| **Caminos Alternativos**| | | |
| **3b**| xxxxxxxxxxxxxxxx| | |
|**4b**|xxxxxxxxxxxxxxxxxx| | |
| **Otros datos** | | | |
| **Frecuencia esperada**| De 2 a 20 veces al día  | **Rendimiento**     | Menos de 5 seg.    |
|**Importancia** | Alta | **Urgencia**        | Alta  |


| **Caso de Uso**  | **Creacion de usuario** |        |**CU9** |
|------------------|------------------------|--------|--------|
| **Actores**      | xxxxxxxxxxxxxxxxxxx    |        | |
| **Tipo**         | Primario               |        | |
| **Referencias**  | xxxxxxxxxxxxxxxxxxx    |        | |
| **Precondición** | Ninguna                |        | |
| **Postcondición**| xxxxxxxxxxxxxxxxxxxxxxx|        | |
| **Autor**        | Analista               |        | |
| **Descripción**  | xxxxxxxxxxxxxxxxxxxxxx |        | |
| **Camino básico**|                        |        | |
| ACTOR            |                        | SISTEMA| |                                                                                                                                                                                                                                                                                                                                                                                
| **1**| xxxxxxxxxxxxxxxxx |**2**| XXXXXXXXXXXXXXXXXXXXXX|
| **3**| XXXXXXXXXXXXXXXXX | **4** | XXXXXXXXXXXXXXXXXXXX|
| **Caminos Alternativos**| | | |
| **3b**| xxxxxxxxxxxxxxxx| | |
|**4b**|xxxxxxxxxxxxxxxxxx| | |
| **Otros datos** | | | |
| **Frecuencia esperada**| De 2 a 20 veces al día  | **Rendimiento**     | Menos de 5 seg.    |
|**Importancia** | Alta | **Urgencia**        | Alta  |


| **Caso de Uso**  | **Modificar usuario** |        |**CU10** |
|------------------|------------------------|--------|--------|
| **Actores**      | xxxxxxxxxxxxxxxxxxx    |        | |
| **Tipo**         | Primario               |        | |
| **Referencias**  | xxxxxxxxxxxxxxxxxxx    |        | |
| **Precondición** | Ninguna                |        | |
| **Postcondición**| xxxxxxxxxxxxxxxxxxxxxxx|        | |
| **Autor**        | Analista               |        | |
| **Descripción**  | xxxxxxxxxxxxxxxxxxxxxx |        | |
| **Camino básico**|                        |        | |
| ACTOR            |                        | SISTEMA| |                                                                                                                                                                                                                                                                                                                                                                                
| **1**| xxxxxxxxxxxxxxxxx |**2**| XXXXXXXXXXXXXXXXXXXXXX|
| **3**| XXXXXXXXXXXXXXXXX | **4** | XXXXXXXXXXXXXXXXXXXX|
| **Caminos Alternativos**| | | |
| **3b**| xxxxxxxxxxxxxxxx| | |
|**4b**|xxxxxxxxxxxxxxxxxx| | |
| **Otros datos** | | | |
| **Frecuencia esperada**| De 2 a 20 veces al día  | **Rendimiento**     | Menos de 5 seg.    |
|**Importancia** | Alta | **Urgencia**        | Alta  |


| **Caso de Uso**  | **Borrar Usuario de un grupo de trabajo** |        |**CU11** |
|------------------|------------------------|--------|--------|
| **Actores**      | xxxxxxxxxxxxxxxxxxx    |        | |
| **Tipo**         | Primario               |        | |
| **Referencias**  | xxxxxxxxxxxxxxxxxxx    |        | |
| **Precondición** | Ninguna                |        | |
| **Postcondición**| xxxxxxxxxxxxxxxxxxxxxxx|        | |
| **Autor**        | Analista               |        | |
| **Descripción**  | xxxxxxxxxxxxxxxxxxxxxx |        | |
| **Camino básico**|                        |        | |
| ACTOR            |                        | SISTEMA| |                                                                                                                                                                                                                                                                                                                                                                                
| **1**| xxxxxxxxxxxxxxxxx |**2**| XXXXXXXXXXXXXXXXXXXXXX|
| **3**| XXXXXXXXXXXXXXXXX | **4** | XXXXXXXXXXXXXXXXXXXX|
| **Caminos Alternativos**| | | |
| **3b**| xxxxxxxxxxxxxxxx| | |
|**4b**|xxxxxxxxxxxxxxxxxx| | |
| **Otros datos** | | | |
| **Frecuencia esperada**| De 2 a 20 veces al día  | **Rendimiento**     | Menos de 5 seg.    |
|**Importancia** | Alta | **Urgencia**        | Alta  |


| **Caso de Uso**  | **Crear un grupo de trabajo** |        |**CU12** |
|------------------|------------------------|--------|--------|
| **Actores**      | xxxxxxxxxxxxxxxxxxx    |        | |
| **Tipo**         | Primario               |        | |
| **Referencias**  | xxxxxxxxxxxxxxxxxxx    |        | |
| **Precondición** | Ninguna                |        | |
| **Postcondición**| xxxxxxxxxxxxxxxxxxxxxxx|        | |
| **Autor**        | Analista               |        | |
| **Descripción**  | xxxxxxxxxxxxxxxxxxxxxx |        | |
| **Camino básico**|                        |        | |
| ACTOR            |                        | SISTEMA| |                                                                                                                                                                                                                                                                                                                                                                                
| **1**| xxxxxxxxxxxxxxxxx |**2**| XXXXXXXXXXXXXXXXXXXXXX|
| **3**| XXXXXXXXXXXXXXXXX | **4** | XXXXXXXXXXXXXXXXXXXX|
| **Caminos Alternativos**| | | |
| **3b**| xxxxxxxxxxxxxxxx| | |
|**4b**|xxxxxxxxxxxxxxxxxx| | |
| **Otros datos** | | | |
| **Frecuencia esperada**| De 2 a 20 veces al día  | **Rendimiento**     | Menos de 5 seg.    |
|**Importancia** | Alta | **Urgencia**        | Alta  |


| **Caso de Uso**  | **Borrar un grupo de trabajo** |        |**CU13** |
|------------------|------------------------|--------|--------|
| **Actores**      | xxxxxxxxxxxxxxxxxxx    |        | |
| **Tipo**         | Primario               |        | |
| **Referencias**  | xxxxxxxxxxxxxxxxxxx    |        | |
| **Precondición** | Ninguna                |        | |
| **Postcondición**| xxxxxxxxxxxxxxxxxxxxxxx|        | |
| **Autor**        | Analista               |        | |
| **Descripción**  | xxxxxxxxxxxxxxxxxxxxxx |        | |
| **Camino básico**|                        |        | |
| ACTOR            |                        | SISTEMA| |                                                                                                                                                                                                                                                                                                                                                                                
| **1**| xxxxxxxxxxxxxxxxx |**2**| XXXXXXXXXXXXXXXXXXXXXX|
| **3**| XXXXXXXXXXXXXXXXX | **4** | XXXXXXXXXXXXXXXXXXXX|
| **Caminos Alternativos**| | | |
| **3b**| xxxxxxxxxxxxxxxx| | |
|**4b**|xxxxxxxxxxxxxxxxxx| | |
| **Otros datos** | | | |
| **Frecuencia esperada**| De 2 a 20 veces al día  | **Rendimiento**     | Menos de 5 seg.    |
|**Importancia** | Alta | **Urgencia**        | Alta  |


ERS 2.4.- ANÁLISIS DE REQUISITOS

En el **ANEXO 1** se exponen los casos de uso asociados a los diferentes
requisitos funcionales que se han obtenido en el proceso de captura de
requisitos...

Se observa como todos los requisitos tienen asociados al menos un caso de uso
que contemple la correspondiente funcionalidad y que todos los casos de uso
cumplen algún requisito funcional, por lo que podemos afirmar que no queda
ningún requisito por cubrir.


[Indice](https://github.com/DptoSIC/BuscaBOD/blob/master/ERS.md)
