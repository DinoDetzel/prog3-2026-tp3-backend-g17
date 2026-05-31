# Programación III 2026 - TUP

#### Profesor: Gustavo Ramoscelli
#### Ayudante: Maria Victoria Ruiz

#### Integrantes del Grupo 17:
- Dino Detzel
- Jano Rodriguez
- Luca Aversano
- Joaquin Robles
- Owen Braggi Bamberger Carrasco
- Garcia Amado Juan Manuel

## Trabajo Práctico 3 (Backend)

**Objetivo:**
Desarrollar una API REST utilizando Node.js y Express.

## Descripción del proyecto
Este repositorio contiene el backend del sitio web "Gimnasio Fit", reemplazando los datos estáticos para servir información dinámica. La aplicación gestiona los servicios deportivos, el personal del gimnasio, perfiles de usuarios y maneja el login y registro mediante la lectura y escritura de archivos JSON, los cuales simulan el comportamiento de una base de datos.

## Metodología de trabajo con Git/GitHub
Para mantener un flujo de desarrollo ordenado creamos una rama para cada integrante (branching).

## Estructura de archivos
- `app.js` → Configuración de Express y sus middlewares
- `package.json` → Configuración del proyecto y sus dependencias
- `package-lock.json` → Registro de las versiones instaladas
- `postman_collection.json` → Rutas guardadas para pruebas en Postman
- `.husky/` → Hooks de Git
  - `pre-commit`
- `controllers/` → Lógica y control de peticiones
  - `equipoController.js`
  - `loginController.js`
  - `perfilController.js`
  - `registerController.js`
  - `serviciosController.js`
- `data/` → Archivos JSON que simulan una base de datos
  - `equipo.json`
  - `perfil.json`
  - `servicios.json`
  - `usuarios.json`
- `models/` → Clases principales y definición de entidades
  - `server.js`
  - `usuario.js`    
- `routes/` → Rutas y endpoints
  - `equipoRoutes.js`
  - `loginRoutes.js`
  - `perfilRoutes.js`
  - `registerRoutes.js`
  - `serviciosRoutes.js`

## Eplicación de funciones principales
- `register(req, res)` → Se encarga de registrar nuevos usuarios. Extrae el nombre, email y contraseña del cuerpo de la petición `(req.body)`. Lee de manera asíncrona el archivo `usuarios.json` utilizando el módulo `fs/promises`. Verifica que el email ingresado no exista previamente en la base de datos. Si es válido, calcula un nuevo ID autoincremental, pushea el nuevo objeto al array y sobrescribe el archivo JSON original.
- `login(req, res)` → Función que autentica usuarios. Recibe las credenciales (email y password) por el método POST. Lee sincrónicamente `usuarios.json` y utiliza el método `.forEach()` para verificar si existe un objeto que coincida exactamente con las credenciales dadas. Si el usuario no existe, devuelve un error `401 Unauthorized`; si es correcto, responde con un `200 OK` y los datos del usuario.
- `obtenerServicios(req, res)` → Responde a peticiones GET en la ruta de servicios. Lee el arreglo almacenado en `servicios.json` y retorna el listado completo de las actividades del gimnasio ofrecidas.
- `obtenerServiciosId(req, res)` → Extrae el parámetro dinámico `id` desde la URL `(req.params.id)`. Valida que el dato ingresado sea un número entero. Posteriormente, busca dentro del archivo JSON el servicio particular cuyo ID coincida y lo devuelve. Si no se encuentra, emite un estado `404 Not Found`.
- `obtenerPerfilId(req, res)` → Funciona igual a la obtención de servicios por ID, pero con la información de cuenta. Retorna los datos del usuario logueado basándose en el ID enviado en la ruta, exponiendo información como fecha de registro y últimos pedidos realizados en el gimnasio.

- `obtenerEquipos(req, res)` → Consulta el archivo `equipo.json`. Primero valida que el archivo contenga datos y no esté vacío. En caso afirmativo, devuelve todo el array con el listado del personal de trabajo (entrenadores y dueños).

## Estructura de los archivos JSON
- `usuarios.json`
```json
{
    "id": 1,
    "nombre": "Juan Rodriguez",
    "email": "juan@gmail.com",
    "password": "1234",
    "foto": "https://i.imgur.com/6VBx3io.png"
}
```
- `servicios.json`
```json
{
    "id": 1,
    "nombre": "Musculación",
    "descripcion": "Accedé a nuestra sala equipada con máquinas modernas para entrenar fuerza y resistencia.",
    "precio": "$50.000 / mes",
    "img": "../assets/img/musculacion.png"
}
```
- `equipo.json`
```json
{
    "nombre": "Guillermo Montes",
    "rol": "Personal trainer"
}
```
- `perfil.json`
```json
{
    "id": 1,
    "nombre": "Dino",
    "mail": "dino@gmail.com",
    "fechaRegistro": "2026-05-12",
    "foto": "perfil1.jpg",
    "ultimosPedidos": [
        "Landing Page",
        "SEO",
        "Backend API"
    ]
}
```

## Link del deploy en Render.
https://prog3-2026-tp3-backend-g17.onrender.com/

## Link al repositorio con el front-end.
https://github.com/DinoDetzel/prog3-2026-tp3-frontend-g17

## Licencia
Proyecto de la materia Programación III. Uso educativo y académico.
