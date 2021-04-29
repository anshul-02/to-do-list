const jwt = require("jsonwebtoken");
const secret = process.env.JWT_KEY;
module.exports = {
  checkToken: (req, res, next) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
  
      let decodedData;
  
      if (token) {      
        decodedData = jwt.verify(token, secret);
  
        req.userId = decodedData?.id;
      } else {
        decodedData = jwt.decode(token);
  
        req.userId = decodedData?.sub;
      }    
  
      next();
    } catch (error) {
      console.log(error);
    }
  }
};
