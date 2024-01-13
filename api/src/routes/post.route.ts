import express from "express";
import Model from "../model/model";
const router = express.Router();


  router.post('/posts', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
  }) 

    router.get('/posts', async (req, res) => {
        try {
            const data = await Model.find();
            res.status(200).json(data)
        }
        catch (error) {
            res.status(400).json({message: error.message})
        }
    })
  
export default router;