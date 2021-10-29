var apModel = require('../models/complexModel');
var flatModel = require('../models/flatStatusModel');
var _ = require("underscore");
const { result } = require('underscore');



const addApData =(req,res)=>{
    var apartment = new apModel(req.body);
    apartment.save()
    .then(result=>{
        for (let i = 0; i < result.numTowers; i++) {
            for(let j = 0; j < result.numFloors; j++){
                for(let k = 0; k < result.flatsPerFloor; k++){
                    var flats = new flatModel({"fnum":result.apName+i+j+k});
                    flats.save()
                    .then(result=>{
                        
                    })
                    .catch(err=>{
                        console.log(err);
                    }) 
                } 
            } 
        
          }
        
        res.redirect('/showApData');

    })
    .catch(err=>{
        console.log(err);
    })
}
const showApData= (req,res)=>{
    apModel.find()
    .then(result=>{
        res.send(result);
    })
    .catch(err=>{
        console.log(err);
    })
}
const showAvailableFlats = (req,res)=>{
    flatModel.find()
    .then(result=>{
        res.redirect(_.where(result, {'status': 1}));
    })
    .catch(err=>{
        console.log(err);
    })
}

const updateAvailableFlats = (req,res)=>{
    flatModel.findById(req.body.flatnum)
    .then(result=>{
        flatModel.findByIdAndUpdate(req.body.flatnum,{"status":!result.status})
        .then(result=>{
            res.redirect('/showAvailableFlats')
        })
        .catch(err=>{
            console.log(err);
        })
    })
    .catch(err=>{
        console.log(err);
    })
    
}
module.exports = {
    addApData,
    showApData,
    showAvailableFlats,
    updateAvailableFlats
}