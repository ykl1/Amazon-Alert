const User = require('../models/user'); 

// Create user without email account activation 
exports.saveuser = (req, res) => {
    console.log("saveuser reached"); 
    const {email, name, imageURL} = req.body; 
    User.findOne({email}).exec((err, user) => {
        if (user) {
            return res.json({msg: "Account already been created"}); 
        }
        let newUser = new User({email, name, imageURL}); 
        newUser.save((err, success) => {
            if (err) {
                console.log("Error in signup", err); 
                return res.status(400), json({error: err})
            }
            res.json({
                message: "Account created!"
            })
        })
    }); 
}