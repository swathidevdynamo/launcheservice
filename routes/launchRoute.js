import express from "express";
import { saveToDB, fetchLaunchData, deleteFromDB } from "../controller/launchController.js";

const route = express.Router();
 
route.get("/launch", (req, res) => {
    fetchLaunchData(req, res)
});

route.post("/save", (req, res) => {
    const { data } = req?.body;
    if (!data) {
        return res.status(400).json({ error: 'Invalid request: `data` field is missing in the request body.' });
    }
    saveToDB(req, res)
})


route.delete('/launch/:id', async (req, res) => {
   const { id } = req?.params;
   if(!id){
    return res.status(400).json({error:'Invalid request'})
   }
   deleteFromDB(req,res);
  });

  
export default route;