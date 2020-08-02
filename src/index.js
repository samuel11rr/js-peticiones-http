// // import { init } from "./js/chistes-page";
// // init();

// const { obtenerUsuarios } = require("./js/http-provider");
// obtenerUsuarios();

// const { init } = require("./js/usuarios-page");
// init();



/** CRUD */
// import * as CRUD from './js/crud-provider';

// CRUD.getUsuario(1).then(console.log);


// CRUD.crearUsuario({
//   name: 'Samuel',
//   job: 'Cocinero'
// }).then(console.log);


// CRUD.actualizarUsuario( 2, {
//   name: 'Brenda',
//   job: 'Designer'
// }).then(console.log);


// CRUD.borrarUsuario( 4 ).then( console.log );



/** SUBIR ARCHIVOS */
import { init } from './js/archivos-page';
init();