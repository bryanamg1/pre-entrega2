import mongoose from "mongoose";

const productsCollection = 'products'

const productsSchema = new mongoose.Schema({
    tittle: String,
    description: String,
    price: Number,
    code: {
        type: String,
        unique: true,
        index: true
    },
    stock: Number,
    thumbnails:{
        type: Array,
        default:[]
    },
    status: {
        type: Boolean,
        default: true
    }
});

export const productsModel = mongoose.model(productsCollection,productsSchema);