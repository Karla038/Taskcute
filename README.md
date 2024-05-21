# Taskcute

Taskcute es una aplicación web que permite a los usuarios crear, gestionar y completar tareas diarias. Esta aplicación está desarrollada utilizando Angular 17 para el front-end, Express para el back-end y MongoDB Atlas como base de datos.

## Tecnologías Utilizadas

- **Angular 17**: Framework de desarrollo front-end.
- **MongoDB Atlas**: Base de datos NoSQL en la nube.
- **Express**: Framework web para Node.js.

## Configuración del Entorno

### Requisitos Previos

Asegúrate de tener instalados los siguientes requisitos antes de configurar el proyecto:

- Node.js (versión 14 o superior)
- npm (versión 6 o superior)
- Angular CLI (versión 17)
- Cuenta en MongoDB Atlas

### Parámetros de Configuración

#### Angular

Configura el archivo `angular.json` para definir la base URL y otros parámetros de producción. Para generar una build de producción, utiliza el siguiente comando:

```sh
ng build --prod

### Protocolos de Seguridad para el servidor
Puertos Abiertos:

- 80 (HTTP): Para redireccionar tráfico a HTTPS.
- 443 (HTTPS): Para comunicaciones seguras.
#### Espacio en Disco:

- Tamaño inicial de la aplicación: 50 MB - 200 MB.
- Espacio para datos de usuarios: Comenzar con al menos 1 GB.
- Espacio adicional para logs y backups: Reservar un 10-20% del espacio total.
