const mongoose=require("mongoose");
const trainer_schema=mongoose.Schema({

     trainer_name:
     {
        type:String,
        require:true
     },
     trainer_phone:
     {
         type:String

     },
     trainer_address:
     {
        type:String
     }
     

})

module.exports=mongoose.model("trainers",trainer_schema);