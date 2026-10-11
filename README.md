# Asignación 3

**¿Por qué esta tabla se puede llamar «genérica»? ¿Qué tendría que cambiar para mostrar alumnos en lugar de productos?**

Porque sirve para cualquier lista que se quiera mostrar, la tabla no sabe qué datos va a mostrar porque solo recibe las columnas con clave y título y las filas.

No se tendría que cambiar nada en la tabla, por lo que acabo de mencionar, pero sí habría que cambiar el main pasándole otras columnas con lo que se quiera mostrar y en las filas una lista de alumnos.

**Describan el contrato de su componente en tres partes: qué recibe, qué avisa y qué guarda adentro**

Qué recibe: atributo estado (disponible, pocas o agotado), es un atributo vigilado.

Qué avisa: nada ya que no lanza ningún evento porque solo muestra información, no es que sea clickeable como un botón.

Qué guarda adentro: el span con el texto, sus estilos y qué texto va con cada estado.



# Práctica 11 

**Cambiar la variante en el HTML y anotar qué pasa sin tocar el TypeScript**

El botón cambia de color. Con primario se ve azul, con secundario blanco y con peligro rojo. No tuve que cambiar nada del TypeScript, solo el atributo en el HTML, porque el componente ya tiene los estilos de cada variante.

**¿Por qué el nombre de una etiqueta propia debe llevar guion?**

Para que el navegador sepa que es una etiqueta que hicimos nosotros (las etiquetas de html no llevan guion entonces no se confundirá) y no una de las que ya trae, como la de <button>.