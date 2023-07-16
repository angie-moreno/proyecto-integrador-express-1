# Proyecto Integrador - Autenticación en Express

Este es un proyecto de integración que implementa la autenticación en un servidor Express.

## Pasos de configuración

1. Clona el repositorio del proyecto en tu máquina local.
2. Abre el proyecto en tu editor de código preferido.

## Implementación de la autenticación

1. Crea una ruta `/login` en el servidor utilizando el método `POST`. Esta ruta se utilizará para el proceso de autenticación.

2. Implementa la creación de un JWT (JSON Web Token) en la ruta `/login` para una serie de usuarios predefinidos. Estos usuarios deben estar almacenados en un array dentro del servidor.

3. Asegúrate de utilizar variables de entorno configuradas en un archivo `.env` para almacenar el secreto utilizado en el JWT. Esto ayudará a mantener la seguridad de la aplicación.

## Ruta protegida

1. Crea una ruta protegida en el servidor que valide un token JWT recibido en el encabezado de autorización de la solicitud. Esta ruta debe ser accesible solo para usuarios autenticados.

2. Asegúrate de devolver los mensajes de error adecuados en cada uno de los casos, como cuando el token no es válido o está ausente.
