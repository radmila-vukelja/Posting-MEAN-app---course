const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    
    // .split(" ")[1]; - the name is by convention "Bearer hfeisobcjsktokenciao", so the token we are getting is as per convetion the sequence 
    //following that " " blank space. Index [1] (Bearer is [0])
    try{
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, process.env.JWT_KEY);
        req.userData = { email: decodedToken.email, userId: decodedToken.userId };
        next();
    } catch (error) {
        res.status(401).json(
            {message: "You are not authenticated"}
        );
    }
    
    //const token = req.query.auth


};