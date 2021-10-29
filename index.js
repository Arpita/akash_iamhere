var express = require('express');
var app = express();
var morgan = require('morgan');

var mongoose = require('mongoose');
var complexRouter = require('./routes/complexRouter.js');

var dbURI = `mongodb+srv://testUser:showPass123@cluster0.8zxoc.mongodb.net/apartmentData?retryWrites=true&w=majority`

mongoose.connect(dbURI)
.then(result=>{
    app.listen(3000, () => {
        console.log('App listening on port 3000!');
    });
})
.catch(err=>{
    console.log(err);
})


app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

app.use('/complex',complexRouter);
