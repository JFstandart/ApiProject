## Endpoint Film

En este apartado se indicará la documentacion del Endpoint para Films.

### Datos almacenables

- title (titulo) `String`
- description (descripción) `String`
- director (director) `String`
- producer (productor) `String`
- release_date (fecha de lanzamiento) `String`
- rt_score (puntuacion de Rotten Tomato) `String`
- people (personas) `Array` - Opcional
- species (especies) `Array` - Opcional
- locations (localizaciones) `Array` - Opcional
- url (url) `String`

### Procesos

#### URL: *api/films/* method: *GET*

Retorna un array de objetos con todos los filmes almacenados en la base de datos

#### URL: *api/films/* method: *POST*

Recibe y almacena un nuevo objeto, despues retorna un mensaje indicando el objeto con el id o tambien un mensaje con el error presentado

#### URL: *api/films/:id* method: *GET*

Recibe un id y retorna toda lainformacion de id.

#### URL: *api/films/:id* method: *PUT*

Recibe un id y un objeto, sustituye el documento en la base de datos del id correspondiente por el objeto enviado y si este no existe lo crea

#### URL: *api/films/:id* method: *DELETE*

Recibe un id y lo elimina, retorna un mensaje de confirmación
