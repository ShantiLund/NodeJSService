const mongoose=require('mongoose');
//require('dotenv').config({ path: '.env' });
mongoose.Promise=global.Promise;
mongoose
.connect('mongodb+srv://shanti:shanti@database-niaxb.mongodb.net/mydb?retryWrites=true&w=majority', {
useUnifiedTopology: true,
useNewUrlParser: true,
})
.then(() => console.log('DB Connected!'))
.catch(err => {
console.log(`DB Connection Error: ${err.message}`);
});
