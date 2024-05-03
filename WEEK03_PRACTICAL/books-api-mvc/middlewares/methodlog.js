const methodlog = (req,res,next)=>
    {

        console.log(`The user is on ${req.method}`)
        next();
    }

module.exports = methodlog;



