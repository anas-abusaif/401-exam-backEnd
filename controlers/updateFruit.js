const favFruites=require('../models/fruitModel')

updateFruit=(req,res)=>{
  favFruites.findOne({_id:req.query.id},(data)=>{
    data.name=req.body.name
    data.image=req.body.image
    data.price=req.body.price
    data.save();
  })
}
module.exports=updateFruit