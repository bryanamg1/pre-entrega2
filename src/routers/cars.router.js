import { Router } from "express";
import mongoose from "mongoose";
import { carsModel } from "../dao/models/cars.model.js";

const router = Router();

router.get('/:cid', async(req,res)=>{
    try{
        const id = req.params.cid
        const result = await carsModel.find({_id:id})
        res.send({status: 'success', payload: result})
    }catch(error) {
        res.status(500).send('Error obteniendo productos: ' + error);
    }
});

router.post('/',async(req,res)=>{
    const productId = req.body
    try{
        const result = await carsModel.find({_id:productId})
        if(!result){
            result.quantity=1
        }else{
            result.quantity++
            await carsModel.create(productId,result.quantity)
        }
        
        res.send({ status: 'success', payload:0  });
    }catch(error) {
    res.status(500).send('Error obteniendo productos: ' + error);
}})

export default router