const Business = require("../models/business");
const Auth = require("./auth");
const User = require("../models/user");

exports.findAll = function( req, res, next){   
    Business.find().exec().then(async function(foundBusinesses){
        return res.json(foundBusinesses);
    })

}

exports.create = async function( req, res, next){
    var name = req.body.name; 
    var location = req.body.location;
    var token = req.headers.authorization;
    const user = Auth.parseToken(token);

    var newBusiness = new Business({name: name, location: location});
    
    User.findById(user.userId).exec().then(async function(foundUser){
        await foundUser.businesses.push(newBusiness);
        await foundUser.save();
    })
    await newBusiness.save();

    return res.json(newBusiness);
}

exports.update = async function(req, res, next){
    const entries = Object.keys(req.body)
    const updates = {}
    console.log(req.params.id);
    console.log("updating");
// constructing dynamic query

    for (let i = 0; i < entries.length; i++) {
        updates[entries[i]] = Object.values(req.body)[i]
    }
    
    Business.updateOne({"_id": req.params.id},{
        $set: updates
    }, function (err , success) {
        if (err) throw (err);
        else {
            res.send({ msg: "update success" })
        }
    })

}