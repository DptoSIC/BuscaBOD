*Sistema*

*“Busca-PDF”*

**ÍNDICE**

EVS 1.- ESTABLECIMIENTO DEL ALCANCE DEL SISTEMA:

>   EVS 1.1.- ESTUDIO DE LA SOLICITUD

>   EVS 1.2.- IDENTIFICACIÓN DEL ALCANCE DEL SISTEMA

>   EVS 1.3.- ESPECIFICACIÓN DEL ALCANCE DEL EVS

EVS 2.- ESTUDIO DE LA SITUACIÓN ACTUAL

>   EVS 2.1.- VALORACIÓN DEL ESTUDIO DE LA SITUACIÓN ACTUAL

>   EVS 2.2.- IDENTIFICACIÓN DE LOS USUARIOS PARTICIPANTES EN EL ESTUDIO DE LA
>   SITUACIÓN ACTUAL

>   EVS 2.3.- REALIZACIÓN DEL DIAGNÓSTICO DE LA SITUACIÓN ACTUAL

EVS 3.- DEFINICIÓN DE REQUISITOS DEL SISTEMA

>   EVS 3.1.- IDENTIFICACIÓN DE LAS DIRECTRICES Y TÉCNICAS DE GESTIÓN

>   EVS 3.2/3.3.- IDENTIFICACIÓN Y CATALOGACIÓN DE REQUISITOS

EVS 4.- ESTUDIO DE LAS ALTERNATIVAS DE SOLUCIÓN

>   EVS 4.1.- PRESELECCIÓN DE ALTERNATIVAS DE SOLUCIÓN

>   EVS 4.2.- DESCRIPCIÓN DE LAS ALTERNATIVAS DE SOLUCIÓN

EVS 5.- DEFINICIÓN DE REQUISITOS DEL SISTEMA

EVS 5.1.- ESTUDIO DE LA INVERSIÓN

EVS 5.1.- ESTUDIO DE LOS RIESGOS

EVS 5.3.- PLANIFICACIÓN DE ALTERNATIVAS

EVS 6.- SELECCIÓN DE LA SOLUCIÓN

EVS 6.1.- CONVOCATORIA DE LA PRESENTACIÓN

EVS 6.2.- EVALUACIÓN DE LAS ALTERNATIVAS Y SELECCIÓN

EVS 6.3- APROBACIÓN DE LA SOLUCIÓN

ANEXO 1.- MATRIZ CUMPLIMIENTO DE REQUISITOS DEL SISTEMA

**EVS 1.- ESTABLECIMIENTO DEL ALCANCE DEL SISTEMA**

**EVS 1.1.- ESTUDIO DE LA SOLICITUD**

1.  *Descripción General del Sistema*

Actualmente, el cliente dispone de un sistema, el cual permite hacer búsquedas
dentro de uno o varios archivos PDF, pero no se encuentra mantenida. El sistema
se trata de un software de escritorio el cual solo puede ser accedido en
plataformas “Windows”, y no permite compartir búsquedas entra usuarios.

1.  *Catálogo objetivo del EVS:*

2.  Detectar las necesidades de información de los futuros usuarios.

3.  Conocer las limitaciones técnicas y legales para el trato de información
    personal de carácter sensible protegida por el Reglamento General de
    Protección de Datos.

4.  Conocer las limitaciones legales para el trato de información clasificada.

5.  Detectar las fuentes de datos relacionadas con el SI.

6.  Delimitar un catálogo de requisitos que permita terminar el proceso de
    diseño no más tarde del día XXXXXX.

7.  *Alcance del sistema*

El sistema contará con la capacidad de realizar búsquedas de cualquier dato en
uno o varios archivos PDF, permitiendo el guardado de los resultados.

El sistema permitirá reutilizar los parámetros usados en anteriores búsquedas

El sistema no realizara funciones de modificación de documentos.

El sistema contará con una gestión de usuarios y perfiles.

El sistema deberá ser accesible a través de un navegador web.

1.  *Estudio de restricciones*

Se contemplan restricciones de tipo temporal, restricciones técnicas tanto de
hardware como de software, así como restricciones legales que deben estar
conforme a los estándares vigentes.

**EVS 1.2.- IDENTIFICACION DEL ALCANCE DEL SISTEMA**

El cliente desea disponer de un sistema que permita poder realizar búsquedas
dentro de un archivo PDF o grupo de ficheros PDF, como por ejemplo el Boletín
Oficial de Defensa para que a través de una o varias palabras se obtenga un
resultado de coincidencia parcial o total de los documentos objeto de búsqueda.
A dicho sistema se deberá acceder mediante web, y deberá contar con una gestión
de usuarios/perfiles, para así poder agilizar el trabajo del personal
perteneciente a la misma unidad/núcleo. Así mismo, se deberá poder acceder a
antiguos parámetros de búsqueda para poder ser reutilizados.

**EVS 1.3.- ESPECIFICACION DEL ALCANCE DEL EVS**

Se pretende estudiar en profundidad la situación actual, para así averiguar si
es posible crear un sistema informático que mejore el sistema actual, tanto en
usabilidad, incremento de funcionalidades y seguridad de la información, así
como una mayor automatización de los procesos. Para ello se llevará un proceso
de estudio para evaluar su viabilidad y, en su caso, ofrecer posibles opciones.

**EVS 2.- ESTUDIO DE LA SITUACION ACTUAL**

**EVS 2.1.- VALORACION DEL ESTUDIO DE LA SITUACION ACTUAL**

El actual sistema se basa en un programa basado en Visual Basic, el cual realiza
una búsqueda según los parámetros establecidos, en uno o varios documentos PDF.
Es un software de “”escritorio”, el cual no requiere de una instalación, pero sí
de disponer de “Adobe Acrobat Reader” en el equipo.

![](media/d642bbe898874ddf81ffa676c4c971b7.png)

**EVS 2.2.- IDENTIFICACIÓN DE LOS USUARIOS PARTICIPANTES EN EL ESTUDIO DE LA
SITUACIÓN ACTUAL**

Equipo de desarrollo del proyecto

Cliente

Usuarios del sistema.

Administrador/gestor del sistema.

**EVS 2.3.- REALIZACION DEL DIAGNÓSTICO DE LA SITUACIÓN ACTUAL**

La aplicación “Buscar cadenas en el BOD” en su versión 1.1 no está mantenida ni
se dispone actualmente de código fuente, por lo que no se podrían realizar
actualizaciones o cambios.

El equipo de desarrollo no domina Visual Basic, por lo tanto, para valorar la
continuación de este proyecto habría que incluir los costes de formar al equipo
en esta tecnología.

Esta tecnología está obsoleta, no tiene soporte por Microsoft y no soportada por
la A.T.U del Ejército de Tierra, por lo que para poder implantarla habría que
incluirla, en todo caso.

Otro de los requisitos por el cliente es que la aplicación se encuentre en
lenguaje Java, por lo que esta aplicación no lo cumpliría al estar desarrollada
en otro lenguaje, visual basic.

Por otra parte, la aplicación actualmente no abarca todos los requisitos
planteados por el cliente, aunque sí los basados en búsquedas y resultados,
faltarían los requerimientos sobre la conectividad y posibilidad de compartir
búsquedas por roles y perfiles.

**EVS 3.- DEFINICION DE LOS REQUISITOS DEL SISTEMA**

**EVS 3.1.- IDENTIFICACION DE LAS DIRECTRICES Y TECNICAS DE GESTION**

Se tendrán en cuenta los planes de gestión de la configuración, de seguridad y
de calidad realizados para esta aplicación. En aras de ofrecer un producto que
se adapte lo más posible a las necesidades de los usuarios, para el desarrollo
del sistema se introducirán técnicas de metodología AGILE cuando sea posible.

>   **EVS 3.2/3.3.- IDENTIFICACION Y CATÁLOGO DE REQUISITOS**

>   **Requisitos funcionales:**

| REQUISITO | FUENTE  | DESCRIPCION                                                                    | PRIORIDAD |
|-----------|---------|--------------------------------------------------------------------------------|-----------|
| RF1       | CLIENTE | Permitirá el Registro/login usuarios                                           | **A**     |
| RF2       | CLIENTE | Permitirá la gestión y administración de los usuarios                          | **M**     |
| RF3       | CLIENTE | Permitirá la búsqueda total o parcial de información en archivos PDF           | **A**     |
| RF4       | CLIENTE | Permitirá guardar los parámetros de la búsqueda realizada por cada usuario     | **M**     |
| RF5       | CLIENTE | Permitirá guardar los resultados de las búsquedas realizadas por cada usuario. | **B**     |
| RF6       | CLIENTE | Permitirá buscar un listado de parámetros en archivos PDF                      | **M**     |

>   **Requisitos no funcionales**

| REQUISITO | FUENTE           | DESCRIPCION                                            | PRIORIDAD |
|-----------|------------------|--------------------------------------------------------|-----------|
| RNF1      | JEFE DE PROYETO  | El lenguaje utilizado será JAVA                        | **A**     |
| RNF2      | CLIENTE          | El sistema se consultará a través de navegador web     | **A**     |
| RNF3      | JEFE DE PROYECTO | El sistema deberá realizar las búsquedas de forma ágil | **M**     |

>   **RESTRICCIONES**

Una restricción con la que nos encontramos en este proyecto es la temporal, ya
que, al tratarse de un proyecto de prácticas, el tiempo está limitado a los 2
meses de duración de la asignatura.

Se nos indica otra restricción, consistente en la imposibilidad de contar con un
servidor externo expuesto en Internet, solo pudiendo contar con un servidor en
la Intranet, por lo tanto hay que cumplir con la A.T.U marcada.

El cliente muestra su interés por ver distintas opciones que contemplen, además
de conectividad web, aplicación de escritorio.

**EVS 4.- ESTUDIO DE LAS ALTERNATIVAS DE SOLUCION**

**EVS 4.1.- PRESELECCION DE ALTERNATIVAS DE SOLUCIÓN**

-   Alternativa 1.

Supone la adopción, modificación y mantenimiento de la solución “Docfetcher”.

-   Alternativa 2.

Usar el buscador nativo del “Adobe Acrobat Reader”.

-   Alternativa 4. Desarrollo aplicación “BUSCA-PDF”.

Supone la generación de una nueva aplicación ajustándose a los requisitos del
cliente.

**EVS 4.2.- DESCRIPCIÓN DE LAS ALTERNATIVAS DE SOLUCIÓN**

-   **Alternativa 1. Modificación de una aplicación existente.**

    Docfetcher (http://docfetcher.sourceforge.net/) es un proyecto “open source”
    con licencia “Eclipse Public License”, escrito en Java, usando como interfaz
    de usuario SWT (Standard Widget Toolkit) desarrollado por Eclipse. Esta
    aplicación vio su primera versión en marzo de 2010 y la última versión es la
    1.1.22.

    ![](media/ea6866860ff11509b29dca57817abecc.png)

    Versión completa.

    ![](media/27a85ce197c0ebda08b2c9d957210598.png)

    Versión minimalista.

    ![](media/bda3e55b11f0b2b39405ead35f365851.png)

    Vista detalles.

    -   Ventajas:

        -   Cumple los requisitos de búsqueda, guardar búsqueda y guardar
            resultado.

        -   Cumple los requisitos de buscar en uno o varios archivos PDF,
            incluyendo otros formatos como HTML, Office y OpenOffice.

        -   Es multiplataforma, Windows, OSX y Linux.

        -   Esta íntegramente escrita en Java.

        -   Tiene una versión portable.

        -   Incluye búsquedas por expresiones regulares y múltiples opciones que
            pueden ser de interés para el cliente: soporte unicode, búsqueda en
            archivos de código fuente, detección de tipo MIME, búsqueda en
            archivos PTS (Outlook), soporta ficheros comprimidos .zip y la
            familia .tar

        -   Buena documentación para construir.

    -   Inconvenientes:

        -   No es accesible desde una URL. Es una aplicación de escritorio.

        -   No está disponible para dispositivos móviles.

        -   No tiene gestión de usuarios.

        -   Requiere Java 1.7 y Python para construir.

        -   Proyecto maduro que tiene mucho código que habría que estudiar
            detenidamente. Escasa documentación del funcionamiento interno.

            ![](media/90cb5c18ee8616e123c549d295e82f4d.jpg)

-   **Alternativa 2. Buscador Adobe Acrobat Reader :**

    -   Ventajas:

        -   Ya se encuentra implementada en el software de Acrobat.

        -   Tiene opciones adicionales que son requisitos: solo palabras
            completas, sensible a mayúsculas.

        -   Cumple los requisitos de buscar en uno o varios PDF.

        -   Tiene otras opciones como incluir favoritos y comentarios.

        -   Adobe Acrobat Reader está disponible para Windows, Linux, HP-UX,
            AIX, Solaris, MacOS, y en móviles para iOS, Android, Blackberry
            Tablet, BlackBerry 10 y Windows Phone.

    -   Inconvenientes:

        -   No es accesible desde una URL. Es una aplicación.

        -   No tiene gestión de usuarios.

        -   Requiere instalación.

        -   No está hecha en Java, está hecha en C++.

-   **Alternativa 3. Desarrollo aplicación “BUSCA-PDF”:**

    ![](media/54a57901a5c145fd61ba3359f5640d49.jpg)

    -   Ventajas:

        -   Cubriría todos los requisitos.

        -   Sería multiplataforma.

        -   No requiere instalación (solo el servidor).

        -   Se dispondría del código fuente y la documentación para añadir
            nuevas funcionalidades.

    -   Desventajas:

        -   No se dispone ahora mismo del software, habría que desarrollarla.

        -   Hay que enseñar al personal a mantenerla.

-   **Alternativa 4. Creación solución basada en javascript.**

    Se construiría una aplicación basada íntegramente en javascript, basada en
    la librería de Mozilla pdf.js (<https://github.com/mozilla/pdf.js>)

    -   Ventajas:

        -   Cubriría todos los requisitos.

        -   Sería multiplataforma.

        -   No requiere instalación.

        -   Se dispondría del código fuente y la documentación para añadir
            nuevas funcionalidades.

        -   La librería está mantenida y actualizada por Mozilla.

    -   Desventajas:

        -   No se dispone ahora mismo del software, habría que desarrollarla.

        -   La librería no implementa la opción de buscar en múltiples pdf, está
            pensada para ser un visor de pdf con opción de búsqueda.

        -   El uso de la librería no parece sencillo ni excesivamente bien
            documentado.

        -   Hay que enseñar al personal a mantener la aplicación.

**EVS 5.- DEFINICIÓN DE REQUISITOS DEL SISTEMA**

**EVS 5.1. – ESTUDIO DE LA INVERSIÓN**

-   Alternativa 1:

>   **XXX**

-   Alternativa 2:

>   **XXX**

-   Alternativa 3:

>   **XXX**

-   Alternativa 4:

**EVS 5.2. – ESTUDIO DE LOS RIESGOS**

-   Alternativa 1:

    -   Que no sea sencillo modificar la aplicación para adecuarla a los
        requisitos.

    -   Que la estructura interna sea poco reusable, muy dependiente y poco
        clara.

-   Alternativa 2:

    -   No existe la posibilidad de guardar búsquedas ni resultados.

    -   En el momento que se varíe el buscador nativo de Adobe, es probable que
        haya que cambiar el Script.

    -   Siempre se tiene que tener el Script con uno mismo para poder hacer
        búsquedas.

-   Alternativa 3:

    -   Que no se entregue en tiempo.

-   Alternativa 4:

    -   Que encontremos dificultades en el manejo de la librería.

    -   Que el equipo de desarrollo no tenga los conocimientos suficientes para
        construir una aplicación web basada en esta tecnología.

    -   Que no sea trivial la modificación de la librería para que permita
        buscar en varios pdf.

**ANEXO 1. MATRIZ CUMPLIMIENTO DE REQUISITOS DEL SISTEMA**

| REQ / ALT             | RF1 | RF2 | RF3 | RF4 | RF5 | RF6 | RNF1 | RNF2 | RNF3 |
|-----------------------|-----|-----|-----|-----|-----|-----|------|------|------|
| ALT1 (App Desktop)    |     |     | X   | X   | X   | X   |      |      | X    |
| ALT2 (Adobe)          |     |     | X   |     |     |     |      |      | X    |
| ALT3 (Busca PDF)      | X   | X   | X   | X   | X   | X   | X    | X    | X    |
| ALT4 (Desarrollo app) |     |     | X   | X   | X   | X   | X    |      | X    |
