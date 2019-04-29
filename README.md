# BuscaBOD

## 1.	ESTUDIO DE VIABILIDAD DEL SISTEMA 

### 1.1	Establecimiento del alcance del sistema

#### 1.1.1	Descripción General del Sistema 
El sistema a desarrollar tiene como meta permitir realizar búsquedas dentro de un archivo PDF o grupo de ficheros PDF, como por ejemplo el Boletín Oficial de Defensa para que a través de una o varias palabras se obtenga un resultado de coincidencia parcial o total de los documentos objeto de búsqueda.

#### 1.1.2	Identificación del alcance del sistema
El sistema no realizara funciones de modificación de documentos ya que la empresa cuenta con herramientas que cumple dichas labores, pero este sistema contará con la capacidad de realizar búsquedas de cualquier dato en el interior de los documentos, (guardando dichos resultados en otro archivo)  y sobre todo permitir a los usuarios la reutilización de búsquedas anteriormente guardadas o la búsqueda en listas de documentos cargados con anterioridad en el sistema.

### 1.2.	Catálogo de Requisitos 

#### 1.2.1	Requisitos funcionales:

| REQUISITO |	FUENTE |	DESCRIPCION |	PRIORIDAD |
| ---- |:------:|:------------:|-----------|
| RF1	| CLIENTE |	Permitirá el Registro/login usuarios | ALTA |
| RF2 |	CLIENTE	| Permitirá la gestión y administración de los usuarios | MEDIA |
| RF3	| CLIENTE	| Permitirá la búsqueda total o parcial de información en archivos PDF |	ALTA |
| RF4 |	CLIENTE |	Permitirá guardar los parámetros de la búsqueda realizada  por cada usuario	| MEDIA |
| RF5 |	CLIENTE |	Permitirá guardar los resultados de las búsquedas realizadas por cada usuario | BAJA |
| RF6 |	CLIENTE |	Permitirá  buscar un listado de parámetros en archivos PDF | MEDIA |
 
#### 1.2.2	Requisitos no funcionales:

| REQUISITO |	FUENTE |	DESCRIPCION |	PRIORIDAD |
| ---- |:------:|:------------:|-----------|
| RNF1 | JEFE DE PROYETO	| El lenguaje utilizado será JAVA | ALTA |
| RNF2 | CLIENTE | El sistema se consultará a través de navegador web | ALTA |
| RNF3 | JEFE DE PROYECTO	| El sistema deberá realizar las búsquedas de forma ágil | MEDIO |


### 1.3.	Catálogo de participantes

* **Jefe de proyecto**. Responsable del estudio y las posibles soluciones.
* **Cliente**. Persona encargada de decidir los requisitos conforme a sus necesidades desde el punto de vista de la gestión y uso del sistema.
* **Usuarios**. Como usuarios del sistema aportará sus opiniones del uso y mejoras de las actuales herramientas.

### 1.4.	Situación actual

Anteriormente se disponía de  una aplicación, pero estaba limitada a buscar por número de DNI, y debido a la implantación de la LOPD dicha aplicación ha quedado obsoleta.  Actualmente se utiliza el buscador nativo del visor de PDF.

### 1.5.	Alternativas estudiadas

#### **Alternativa 1** : 
- Actualizar la aplicación anterior para que se ajuste a los requisitos del cliente.
- Coste: 0
- Riesgo:
    - Código fuente desconocido.
    - Imposibilidad de implementar mejoras.
    - No esta mantenido.
    - Es una aplicación de escritorio.

#### **Alternativa 2** :
- Creación de un Script para seguir utilizando el buscador nativo del visor de PDF.
- Coste: Bajo
- Riesgo:
    - No existe la posibilidad de guardar búsquedas ni resultados.
    - En el momento que se varíe el buscador nativo de Adobe, es probable que haya que cambiar el Script.
    - Siempre se tiene que tener el Script con uno mismo para poder hacer búsquedas.
#### **Alternativa 3**:
- Generar una nueva aplicación ajustándose a los requisitos del cliente.
- Coste: Medio / bajo.
- Riesgo:
    - Necesidad de mantener el servidor de datos y usuarios.
    

| REQ / ALT |	RF1 |	RF2 |	RF3 |	RF4 |	RF5 | RF6 |	RNF1 | RNF2 |	RNF3 |
| ------ |:---:|:----:|:----:|:----:|:----:|:----:|:----:|:----:|:----:|
|ALT1 (App Desktop)| | |X|X|X|X|||X|
|ALT2 (Adobe)	| | |	X||||||X|
|ALT3 (Busca PDF)|	X|	X|	X|	X|	X|	X|	X|	X|	X|


