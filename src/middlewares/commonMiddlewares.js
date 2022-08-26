
const mid1= function ( req, res, next) {

    if(req.headers.isfreeappuser ==='true'){
        req.headers.isfreeappuser = true
        next()
    }
    else if(req.headers.isfreeappuser ==='false'){
        req.headers.isfreeappuser = false
       next()
    }
    else{
        res.send({msg:"not found"})
    }
    // req.falana= "hi there. i am adding something new to the req object"
    // console.log("Hi I am a middleware named Mid1")
    // next()
}

const mid2= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid2")
    next()
}

const mid3= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid3")
    next()
}

const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    next()
}



module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
module.exports.mid4= mid4
