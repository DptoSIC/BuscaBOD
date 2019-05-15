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


[Indice](https://github.com/DptoSIC/BuscaBOD/blob/master/ERS.md)
