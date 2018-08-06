## Endpoint Film

En este apartado se indicará la documentacion del Endpoint para People.

### Datos almacenables

- name (nombre) `String`
- gender (genero) `String`
- age (edad) `String`
- eye_color (color de ojos) `String`
- hair_color (color del cabello) `String`
- films (peliculas) `Array` - Opcional
- species (especies) `Array` - Opcional
- url (url) `String`

### Procesos

#### URL: *api/people/* method: *GET*

Retorna un array de objetos con todos las personas almacenadas en la base de datos

#### URL: *api/people/* method: *POST*

Recibe y almacena un nuevo objeto, despues retorna un mensaje indicando el objeto con el id o tambien un mensaje con el error presentado

#### URL: *api/people/:id* method: *GET*

Recibe un id y retorna toda lainformacion de id.

#### URL: *api/people/:id* method: *PUT*

Recibe un id y un objeto, sustituye el documento en la base de datos del id correspondiente por el objeto enviado y si este no existe lo crea

#### URL: *api/people/:id* method: *DELETE*

Recibe un id y lo elimina, retorna un mensaje de confirmación
