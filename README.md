# Prueba React + GraphQL

Este repositorio parte de un la plantilla `create-react-app` con typescript. Se añadieron las siguientes carpetas dentro del directorio `src`:

*  `Pages`
*  `Components`

Tambien se añadió una versión muy simple de un routern en el archivo `src/App.tsx` que se encarga de renderizar la pagina `Home`. 

Dentro del archivo `Home` existe una variable llamada `questions` con las preguntas en JSON. Se utiliza el componente `Question` para renderizar el texto de cada una de las preguntas.

Como complemento al codigo de react se incluyen dos binarios `graph-server` y `graph-server.exe` para ejecutar en Linux o Windows respectivamente. Estos binarios lanzan una API Grapql en el puerto `9000`. Una vez ejecutado el binario deberia poder accederse el playground de graphQL en http://localhost:9000 y las peticiones deberán hacerse a http://localhost:9000/query

Este binario cuenta con 2 funciones principales, listar las preguntas y crear una respuesta. Los datos que sirve esta api se pueden encontrar en la carpeta `./data`. El nombre de los ficheros no debe ser modificado pero  el contenido se puede modificar para añadir nuevas preguntas, opciones o modificar las existentes.

Las respuestas creadas a través de la mutación de la api `CreateAnswer` se almacenarán automaticamente dentro de la carpeta `./data` en un fichero .json que permitira comprobar que todo funcionó correctamente.

Los esquemas asocidados a la API GraphQL se encuientran en la carpeta `schemas`

## Objetivos

* Escribir una interfaz que permita contestar a las preguntas
* Sustituir la constante `questions` por una conexion con via GraphQL con el binario
* Almacenar las respuestas haciendo uso de GraphQL
* Establecer un sistema de puntuacion basado en el campo `weight` de las preguntas y opciones de tal manera que cuando se acaben las preguntas le muestre al usuario su puntuación

Puedes usar cualquier libreria de JS que consideres necesaria para el correcto funcionamiento del frontend (GraphQL, Componentes, Router, Gestion de estado, testing...), tambien puedes modificar la estructura y organización del código de React. Si no conoces ninguna libreria puedes usar estas:

* [Apollo para la conexion GraphQL](https://www.apollographql.com/docs/react)
* [MaterialUI para los compoenetes](https://mui.com/)
* [Redux para mantener el estado](https://es.redux.js.org/)

Para lanzar el proyecto ejecutar `yarn` para instalar las dependencias `yarn start` para lanzar el servidor de aplicacion y se lanzará en el puerto 3000, se podra acceder desde http://localhost:3000