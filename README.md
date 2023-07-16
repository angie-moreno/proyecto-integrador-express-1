# Servidor Lista de Tareas Express Middlewares

Este proyecto consiste en un servidor que implementa una lista de tareas utilizando Express.js y diversos middlewares para manejar errores y validar solicitudes. El objetivo es crear una aplicación robusta y segura para gestionar tareas.

## Middlewares implementados

### Middleware para el router list-edit-router

Este middleware se encarga de manejar los siguientes errores retornando un código de respuesta 400:

- Solicitudes POST con el cuerpo vacío.
- Solicitudes POST que tengan información no válida o atributos faltantes para crear las tareas.
- Solicitudes PUT con el cuerpo vacío.
- Solicitudes PUT que tengan información no válida o atributos faltantes para crear las tareas.

### Middleware a nivel de aplicación para gestionar métodos HTTP válidos

Este middleware se encarga de gestionar que solo lleguen solicitudes por métodos HTTP válidos dentro del servidor. En caso de que se reciba una solicitud con un método no válido, se devuelve un error.

### Middleware para el direccionador list-view-router

Este middleware se encarga de gestionar que los parámetros sean correctos. En caso de que los parámetros no cumplan con los criterios establecidos, se devuelve un error.
