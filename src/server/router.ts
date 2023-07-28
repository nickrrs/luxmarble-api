import {Router} from "express";

const router: Router = Router();

//Exemplo
router.get('/teste', (request, response) => {
    return response.json({
        teste: "Ola mundo!"
    });
})

export {router}