## Endpoint Film

En este apartado se indicará la documentacion del Endpoint para Species.

### Datos almacenables

- name (nombre) `String`
- classification (clasificación) `String`
- eye_color (color de ojos) `String`
- hair_color (color del cabello) `String`
- people (personas) `Array` - Opcional
- films (peliculas) `Array` - Opcional
- url (url) `String`

### Procesos

#### URL: *api/species/* method: *GET*

Retorna un array de objetos con todos las especies almacenadas en la base de datos

#### URL: *api/species/* method: *POST*

Recibe y almacena un nuevo objeto, despues retorna un mensaje indicando el objeto con el id o tambien un mensaje con el error presentado

#### URL: *api/species/:id* method: *GET*

Recibe un id y retorna toda lainformacion de id.

#### URL: *api/species/:id* method: *PUT*

Recibe un id y un objeto, sustituye el documento en la base de datos del id correspondiente por el objeto enviado y si este no existe lo crea

#### URL: *api/species/:id* method: *DELETE*

Recibe un id y lo elimina, retorna un mensaje de confirmación
