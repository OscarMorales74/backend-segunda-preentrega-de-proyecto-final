import mongoose from 'mongoose';

//cambiar donde se necesite
const cartsSchema = new mongoose.Schema({
    products: { type: Array, default: [] }
});

export const CartsModel = mongoose.model(
   'carts',
   cartsSchema 
);