const {CustomAPIError} = require('../errors/custom-errors')

const errorHandelerMiddleware = (err,req,res,next) =>{

    if(err instanceof CustomAPIError){
         return res.status(err.statusCode).json({msg:err.message})
    }

      res.status(500).send({msg:'some thing went wrong , please try again later'})
}

module.exports = errorHandelerMiddleware