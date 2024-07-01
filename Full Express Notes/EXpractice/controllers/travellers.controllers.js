const Traveler = require('../model/travellers.model');

const addTraveler= async(req,res,next)=>{
    let {name,age,place,vehicle}=req.body;

    let newTraveler = await Traveler.create({name,age,place,vehicle});
    res.status(201).json({error:false,message:"Traveler added successfully",data:newTraveler});
}
const getTraveler=(req, res, next)=>{
    res.status(201).json({error:false,message:"Traveler get Sucessfully"});
}
module.exports={
    addTraveler,getTraveler
}
