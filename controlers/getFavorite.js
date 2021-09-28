const favFruites=require('../models/fruitModel')

getFavorite=(req,res)=>{
favFruites.find({email:req.query.email},(err,data)=>{
  if(err){
    res.send(err)
    console.log('err')
  }else if(data){
    res.send(data)
    console.log(data)

  }
})
}

module.exports=getFavorite;