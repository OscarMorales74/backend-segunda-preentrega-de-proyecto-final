import {
    getAllProdServ,
    getByIdProdServ,
    createProdServ,
    updateProdServ,
    deleteProdServ,
  } from "../services/products.services.js";
  
  //viene peticion desde router y se deriva a service
  export const getAllProdCtll = async (req, res, next) => {
    try {
     const docs = await getAllProdServ();
     res.json(docs);
    } catch (error) {
      next(error);
    }
  };
  
  export const getByIdProdCtll = async (req, res, next) => {
    try {
      const { id } = req.params;
      const doc = await getByIdProdServ(id);
      res.json(doc);
    } catch (error) {
      next(error);
    }
  };
  //vinculado a dao de products
    export const createProdCtll = async (req, res, next) => {
    try {
      const { name, description, price, stock } = req.body;
      const newDoc = await createProdServ({
        name,
        description,
        price,
        stock
      });
      res.json(newDoc);
    } catch (error) {
      next(error);
    }
  };
  
  export const updateProdCtll = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { name, description, price, stock } = req.body;
      await getByIdProdServ(id);
      const docUpd = await updateProdServ(id, {
        name, description, price, stock
      });
      res.json(docUpd);
    } catch (error) {
      next(error);
    }
  };
  
  export const deleteProdCtll = async (req, res, next) => {
    try {
      const { id } = req.params;
      await deleteProdServ(id);
      res.json({message: 'Product deleted successfully!'})
    } catch (error) {
      next(error);
    }
  };
  