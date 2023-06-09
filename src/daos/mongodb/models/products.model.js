import mongoose from 'mongoose';

//cambiar donde se necesite
const prodsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true }
});

export const ProdsModel = mongoose.model(
   'products',
   prodsSchema 
);