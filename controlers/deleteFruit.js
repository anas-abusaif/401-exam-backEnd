const favFruites=require('../models/fruitModel')

deleteFruit=(req,res)=>{
  favFruites.findByIdAndDelete({_id:req.query.id})
}
module.exports=deleteFruit;