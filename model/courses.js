const mongoose=require("mongoose");
const course_schema=mongoose.Schema({

     course_name:
     {
        type:String,
        require:true
     }
     

})

module.exports=mongoose.model("courses",course_schema);