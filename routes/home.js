import express from "express";
import {
    home
} from '../controller/home.js'
const router = express.Router();
// Router()
/*

    GET
    POST
    PUT
    DELETE

*/

// La raiz '/'  
router.get('/', home);
// router.put( '/:id', putUsuario );
// router.delete( '/:id', deleteUsuario );

export default router;
