**Una aplicación backend basada en node, usando Express.js**
Los pasos para crearla desde cero y seguir con su desarrollo son:

 1. Ejecutamos en la consola `npm init -y`
 2. Instalamos paquetes, los paquetes/librerías necesarios al principio serian:
	 **Express**
	 comando: `npm install express --save`
	 Documentación: https://expressjs.com/es/starter/installing.html
	 **Nodemon**
	 comando: `npm install nodemon -D`
	 -D es de development, es decir que la libreria estara en devDependencies
	 Documentación: https://www.npmjs.com/package/nodemon
 3. Crear el archivo `app.js` en el proyecto 
 4. Podemos con nodemon, crear un script en package.json en la key `scripts` con el nombre `dev` (dev es una sugerencia de nombre, puede ser otro) y asignarle el valor `nodemon app.js`
Luego de estos pasos se nos generará una carpeta /node_modules en nuestro proyecto, y nuestro package.json se verá de la siguiente manera:
	

    {
        "name": "repo-hello-express-rollingclases",
        "version": "1.0.0",
        "description": "",
    	"main": "app.js",
    	"scripts": {
    	   "dev": "nodemon app.js",
    	   "test": "echo \"Error: no test specified\" && exit 1"
    	 },
        "keywords": [],
        "author": "",
        "license": "ISC",
        "devDependencies": {
    	    "nodemon": "^2.0.22"
        },
        "dependencies": {
    	    "express": "^4.18.2"
        }
    }

