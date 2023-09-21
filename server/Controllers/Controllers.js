import Issuer from "../models/Issuer.js";
import bcrypt from "bcrypt";

const homepageGet = (req, res) => {
  res.send("hompage");
};

const issuerSignupGet = (req, res) => {
  res.send("issuer signup");
};

const issuerSignupPost = async (req, res) => {
  console.log("issuer signup post called");
  // console.log(req.body);

  const checkIssuer = await Issuer.findOne({ username: req.body.username });
  if (checkIssuer) {
    console.log("issuer already exisists in db");
    res.send('issuer already exists');
    return;
  }

  try {
    const newIssuer = new Issuer({
      username: req.body.username,
      password: await bcrypt.hash(req.body.password, 10),
    });

    newIssuer.save().then((result) => console.log("issuer created", result));
  } catch (err) {
    console.log(err);
  }
  res.send("recieved");
};

export { homepageGet, issuerSignupPost, issuerSignupGet };
