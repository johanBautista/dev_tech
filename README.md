# Edatalia prueba técnica

En este proyecto he usado las siguientes tecnologias:

- nodejs: 18.14.2
- axios: 1.3.5,
- react: 18.2.0,
- react-dom: 18.2.0,
- react-redux: 8.0.5,
- typescript: 4.9.5,

Links de información de las tecnologias usadas [Create React App](https://github.com/facebook/create-react-app),  [Redux](https://redux.js.org/) y [Redux Toolkit](https://redux-toolkit.js.org/).

## Para trabajar en este proyecto
1. Hacer un git clone del repositorio
2. Descargar las dependencias con npm install 
3. Ejecutar el comando npm run start 
4. abrir en el navegador el puerto http://localhost:3000

## `Proceso de desarrollo de la prueba`
1. Crear el setup del proyecto con los siguientes comandos 
   1. npm install @reduxjs/toolkit
   2. npx create-react-app my-app --template redux-typescript
2. Instalar axios `npm i axios`
3. Eliminar y organizar el arbol de archivos del proyecto  
   - node_modules 
   - public
   - src
     - app
       - store.ts
     - components
       - dropdown
         - Dropdown.tsx
         - Dropdown.css
       - listProducts
         - ListProducts.tsx
         - ListProduct.css
       - spinner
         - Spinner.tsx
         - Spiner.css
     - features
       - products
         - productSlice.ts 
     - shared
       - ApiProducts
     - App.tsx
     - App.css
     - Index.tsx
     - Index.css
    - package.json
    - README.md

4. Primero empiezo con una maquetación sencilla de la vista, creo un array de productos usando la respuesta del endpoint que nos dan para la prueba y con este preparo el mapeo de los datos que usare en el componente de listProducts. El diseño de la spa es sencillo con un header, main y footer que se ajustan a las diferentes pantallas desde mobil hasta desktop. En este desarrollo no he usado ninguna libreria como bootstrap o tailwind.
5. Una vez finalizada la parte de maquetación del componente listProducts, empiezo por modificar la gestión de la data, para ello uso la store de redux toolkit para el manejo global del estado en la app. Como el setup lo cree con el template que propone en la documentación de redux la estructura básica de configuración y el tipado ya viene hecho, en este punto son importantes 3 cosas:
   1. Configuración de la store 
   2. Creación del slice, en nuestro caso del productSlice
   3. Importación del provider en el punto de entrada de la app, es decir en el archivo index envolvemos el componente <App> con el provider para tener acceso a toda la store desde los demas componentes que formen la app 
6. En este punto el trabajo se concentra en el productSlice, el objetivo es hacer el apiFetch del endopint y crear los diferentes estados de la app. Como estoy desarrollando con Typescript es necesario una interface para tipar la data que viene del endpoint y asi poder vincular el tipo de datos que usamos en la app. Los datos de la interface estan el archivo shared/ApiProducts.ts
7. Una vez creado el estado inicial de la app creo el reducer que almacenara la respuesta de la llamada al endpoint que contiene los productos, para la llamada al endpoint uso axios (aunque tambian podria haber usado fetch la api nativa en javascript) y capturo la respuesta dentro del reducer setProducts. Dentro de este reducer tambien poblamos leakedProducts que sera la propiedad que usaremos para el ffiltrado de los productos que manejaremos por medio de un selector.
8. Una vez poblada el array de products en la store, invocamos el fetchProducts desde el componente App.tsx y pasamos como prop el array de productos al componente ListProducts donde se renderizara la información. Para llevar a cabo este trabajo usamos el hook useDispatch dentro de un useEffect y llamamos a fetchProducts que es la función que hace la llamada al endpoint, este hook se llama una vez se monta por primera vez el componente App.tsx 
9. Para manejar el filtrado de los productos he creado un componente Dropdowmn el cual importo en el App.tsx, este componente va a capturar el valor de la opción escogida por el usuario y la enviara como parametro a una función dentro de la store que filtrara el array de todos los productos devolviendo solo aquellos que coinciden con la busqueda. El reducer es el de leakedProducts, el cual hara una validación si el value === "all" devuelve todo el array si no es asi filtra por el payload. El array resultante de este reducer es el que paso por prop al componente ListProducts encargado de renderizar la información. Tambien agrege un snipper que se puede visualizar cuando se vuelve a cargar la pagina.