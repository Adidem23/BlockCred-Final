import Issuer from "../models/Issuer.js"

const homepageGet = (req, res) => {
    res.send('hompage')
}

const issuerSignupGet = (req, res) => {
    res.send('issuer signup')
}

const issuerSignupPost = async (req, res) => {
    console.log("issuer signup post called");

    // const checkIssuer = await Issuer.findOne({})
    console.log(req.body);
    res.send('recieved')
}


export {
    homepageGet,
    issuerSignupPost,
    issuerSignupGet
}