const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'unapalabrasecreta';

const auth = async (req,res,next) => {
    try {
        const authorization = req.headers.authorization;
        
        const payload = jwt.verify(authorization,secret);
        
        next();
    } catch (error) {
        const message = error.message;
        res.status(401).json({message,date: new Date});
        
    }
    


}

module.exports = auth