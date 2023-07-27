import express from "express";
import {
    getUsuarios ,
    postUsuario,
    getUsuario,
    putUsuario,
    deleteUsuario

} from '../controller/usuario.js'
const router = express.Router();
// Router()
/*

    GET
    POST
    PUT
    DELETE

*/

// La raiz '/' es igual a decir ---> '/api/usuario/'
router.get( '/', getUsuarios );
router.get( '/:id', getUsuario );
router.post( '/', postUsuario );
router.put( '/:id', putUsuario );
router.delete( '/:id', deleteUsuario );

export default router;
