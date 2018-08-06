## Endpoint Vehicle

En este apartado se indicará la documentacion del Endpoint para Vehicles.

### Datos almacenables

- name (nombre) `String`
- description (descripción) `String`
- vehicle_class (clase de vehiculo) `String`
- length (longitud) `String`
- pilot (piloto) `String`
- rt_score (puntuacion de Rotten Tomato) `String`
- films (peliculas) `Array` - Opcional
- url (url) `String`

### Procesos

#### URL: *api/vehicles/* method: *GET*

Retorna un array de objetos con todos los vehiculos almacenados en la base de datos

#### URL: *api/vehicles/* method: *POST*

Recibe y almacena un nuevo objeto, despues retorna un mensaje indicando el objeto con el id o tambien un mensaje con el error presentado

#### URL: *api/vehicles/:id* method: *GET*

Recibe un id y retorna toda lainformacion de id.

#### URL: *api/vehicles/:id* method: *PUT*

Recibe un id y un objeto, sustituye el documento en la base de datos del id correspondiente por el objeto enviado y si este no existe lo crea

#### URL: *api/vehicles/:id* method: *DELETE*

Recibe un id y lo elimina, retorna un mensaje de confirmación
