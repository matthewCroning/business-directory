const Business = require("../models/business");

exports.findAll = function( req, res, next){   
    return res.json("hello");
}

exports.create = function( req, res, next){
    var name = req.body.name; 
    var location = req.body.location;

    var newBusiness = new Business({name: name, location: location});
    
    newBusiness.save();

    return res.json(newBusiness);
}