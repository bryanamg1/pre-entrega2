import { Router } from "express";
import { productsModel } from "../dao/models/products.model.js";

const router = Router()

router.get('/', async(req, res)=>{
    try {
        //const { limit, page, query, sort } = req.query;
        const products = await productsModel.find().limit(10).sort({tittle:1})
        res.send({status:'succcess', payload: products}) 
    } catch (error) {
        console.error(error)
        res.status(500).send({error: error.message})
    }
})

router.get('/pid', async(req, res)=>{
    try {
        //const { limit, page, query, sort } = req.query;
        const products = await productsModel.find().limit(10).sort({tittle:1})
        res.send({status:'succcess', payload: products}) 
    } catch (error) {
        console.error(error)
        res.status(500).send({error: error.message})
    }
})

router.post('/', async (req, res)=>{
    try {
        const {tittle, description, price, code, stock, thumbnails, status} = req.body;
        if(!tittle || !description || !price || !code || !stock || !thumbnails || !status){
            return res.status(400).send({status: "error", message: 'datos incompletos'})
        }else{
            const newProduct = await productsModel.create({ tittle, description, price, code, stock, thumbnails, status });
            res.status(201).send({ status: 'success', message: 'Producto creado exitosamente', product: newProduct });
        }
    } catch (error) {
        console.error(error)
    }
})

export default router