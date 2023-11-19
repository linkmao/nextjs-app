**Notas de Next-js**

Crear un proyecto
$ npx create-netx-app nameproject


Toda la aplicación va dentro de la carpeta app, y el archivo principal, el que hace el papel de index.html es en el caso de nextjs `page.jsx`

Al ser next en framework de React, los elementos básicos son los componentes de react

Las rutas de las paginas son tan secillas como crear las carpetas correspondente a cada ruta, y dentro de esa carpeta siempre debe haber un archivo `page.jsx`, es una forma muy sencilla de enrutado

El archivo  `layout.js` basicamente es el componente principal, el que engloba los demás componentes, permitiendo además que lo que se ponga en el layput se repita en toda la estructura de a app

Sin embargo hay otra posibilidad, cada ruta o carpeta puede tener su layout, eso signiifca que una ruta puede tener otro elemento que se repita, 

Notese el ejemplo en la ruta o carpeta `profiles` donde hay layout, esto signiifca que ese componente layout, se repetirá en cada sub carpeta o pagina de profiles.

La información title, description y metadatos en general que son etiquetas HTML usualmente ubicadas en el head, en Nextjs lo hace usando un json llamado metadata, la cual está en el layout general, la ventaja de esto es que por ejemplo al ser un json, la información se puede cambair de forma dinámica. 
Los metadata no solo se pueden usar en el LAyout principal sino que se puede usar en los demás Layout si existen e incluso en los componentes, eso significa que cada pagina puede poe ejemplo tener su propio title, description etc

Interesante que se pueda colocar fonts o estilos de texto desde nextjs, eso significa que no necesito de una bibliteca css para ello. Para lo grar eso vease la manera como en el layout genral (que es el que contiene toda la aplicación) se hace la importacion de un tipo de letra, su configiracion se ejecuta como una funcion del componente y se guarda el resultado, el cual es el que finalmente se usa.

IMPROTANTE
El enfoque de NextJS es de crear componentes de servidor, eso que significa, que todo los componentes se ejecutan en el servidor y los entrega renderizado para que el cliente simplemente lo muestre, lo que hace que el rednimiento de la aplicacion sea mucho mayor. SIn embargo hay componentes que tienen o deberan tener funcionalades especiales, como por ejemplo un listener en un boton para un manjador de evento, o el uso de los hooks de react, en esos casos cuando se requiera de ello, Next dará un error y pedirá que ese componente no sea entonces un componente de servidor sino un componete cliente, lo que nos obliga a decirle a Next que el componente en particular sea entoces componente cliente. 
La manera de hacer esto es simplemente marcando al incio del código del respectivo componente que sea cliente con la palabra
`"use client"`, tal como se muestra, con comillas. Esto hace que el componente quede marcado entoces como cliente.
Cabe anotar por ejemplo que el objeto metadata solo funciona en componentes de servidor

Cuando se hace carga de datos por ejemplo mediante fetch, puede que se demore un poco, ovbiamente eso depende de las condiciones de conectividad y demás, en ese sentido se puede tener una página o un componente loading el cual se escribe en el archivo `loading.jsx`, es decir asi como  `page.jsx` `layout.jsx` `not-found.jsx`, es posible en la página `loading.jsx` tener un componente que me muestre que algo está cargando. Ver loading.jsx en carpeta post.

Otra situación interesante es la siguiente, resulta que si bien `page.jsx` es la pagina principal en cada ruta y que el componente que alli esté es el principal, tambien es posibe usar ese componente comun y corriente como si estuviera en la carperta components. Notese el ejemplo en la carpeta `posts` como en `[postId]` en `page.jsx` se hace el llamado de un componente de otro page.

## Suspense
En el ejemplo anterior se usa de manera opcional un componente llamado `<Suspense>`, el cual tiene como función asignar un pequeño loading a la carga de ese componente individual, recuerdese que lo loading se da especialmente cuando hay solicitud de datos desde una base de datos por ejemplo

## URL dinamicas
Obviamente algo que es muy importante en la programacion son las url dinámicas, normalmente en otros framework se usa :id en la url, sin embargo como Next en un framen que usa estructura de archivos para representar las URL entoces la manera de crear rutas dinámicas es creando una carpeta entre conchetes así [postId] por ejemplo, notese entonces el uso de las url dinámicas dentro de la estructura de post

Aca es importante el papel de `props` quien es un json que coniene dentro otra info en especial `parmas`, por eso en el ejemplo en post se hace un extracting de params para usar el dato que nos llega en `postId` y usarlo dentro de la página.

## Uso de alias para importar
basicamente cuando se usa `import` se debe escribir la ruta y subir niveles como sea necesario para llegar a la carpeta requerida

Ejemplo
```
import Componente '../../../component/Componente'
```

Para evitar esto se puede usar entonces el alias `@` el cual indica que se inicie desde la raiz del proyecto, este mismo ejercicio quedaria así por ejemplo
```
import Componente '@/component/Componente
```

## Instalacion de Tailwind
Para la instalción del framework Tailwind se recomienda visitar la página del frameworn https://tailwindcss.com/, e ingresar en `get` starter y seguir las instrucciones` las cuales basicamente son 
```
$ npm install -D tailwindcss postcss autoprefixer
$ npx tailwindcss init -p
```
en el archivo `tailwind.config.js` agregar o complementar la siguiente linea
` content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
     // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],`

como debe haber un archivo css global  `global.css`(normalmente usado por  layout principal), allí copiar al incio 
`@tailwind base;
@tailwind components;
@tailwind utilities`
