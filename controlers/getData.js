const axios = require('axios');


getData=(req,res)=>{
axios.get(`${process.env.API}`).then(data=>
  res.send(data.data)
)
}

module.exports=getData;