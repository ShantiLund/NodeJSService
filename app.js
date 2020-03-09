const express=require('express');
const app=express()
const mongoose=require("mongoose");
const bodyParser=require('body-parser');
require("./mongodb.js");
require("./model/courses");
require("./model/trainers");
const course_data=mongoose.model("courses");
const trainer_data=mongoose.model("trainers");

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.render('index', {});
  });

app.get('/getCourse', async (req,res)=>
{

  try{
    const courses= await course_data.find({});
    res.send(courses);
    //console.log("got it");
     }
  catch(error)
  {

    res.status(400);

  }
});



app.get('/getTrainer', async (req,res)=>
{

  try{
    const trainers= await trainer_data.find({});
    res.send(trainers);
    //console.log("got it");
     }
  catch(error)
  {

    res.status(400);

  }
});







app.post('/createCourse',async (req,res)=>
{

    try
    {
        const courses=new course_data();
        courses.course_name=req.body.course_name;
        await courses.save();
        res.send(courses)

    } 
    catch(error)
    {
        res.status(400);
    }

});


app.post('/createTrainer', async(req,res)=>
{


    try
    {
        const trainers=new trainer_data();
        trainers.trainer_name=req.body.trainer_name;
        trainers.trainer_phone=req.body.trainer_phone;
        trainers.trainer_address=req.body.trainer_address;
        trainers.save();
        res.send(trainers)

    } 
    catch(error)
    {
        res.status(400);
    }


});




//Define port 
const port=process.env.PORT||3005;

app.listen(port,()=>console.log(`Listening port ${port}`));

