## Endpoint Film

En este apartado se indicará la documentacion del Endpoint para Locations.

### Datos almacenables

- name (nombre) `String`
- climate (clima) `String`
- terrain (terreno) `String`
- surface_water (Superficie del agua) `String`
- residents (residentes) `Array` - Opcional
- films (películas) `Array` - Opcional
- url (url) `String`

### Procesos

#### URL: *api/locations/* method: *GET*

Retorna un array de objetos con todos las localizaciones almacenadas en la base de datos

#### URL: *api/locations/* method: *POST*

Recibe y almacena un nuevo objeto, despues retorna un mensaje indicando el objeto con el id o tambien un mensaje con el error presentado

#### URL: *api/locations/:id* method: *GET*

Recibe un id y retorna toda lainformacion de id.

#### URL: *api/locations/:id* method: *PUT*

Recibe un id y un objeto, sustituye el documento en la base de datos del id correspondiente por el objeto enviado y si este no existe lo crea

#### URL: *api/locations/:id* method: *DELETE*

Recibe un id y lo elimina, retorna un mensaje de confirmación
