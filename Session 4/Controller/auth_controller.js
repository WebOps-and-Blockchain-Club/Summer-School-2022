const User = require("../Model/user");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const iterations = require("../Utils/index").iterations;

module.exports.signup = async (req, res) => {
  await User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcryptjs.hashSync(req.body.password, iterations),
  })
    .then(() => {
      return res.status(200).send("User Registered Successfully!");
    })
    .catch((e) => {
      return res.status(500).send("Error in Saving User: " + e);
    });
};

module.exports.signin = async (req, res) => {
  await User.findOne({ email: req.body.email })
    .then((user) => {
      var passwordIsValid = bcryptjs.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) return res.status(401).send("Invalid Credentials");
      let token = jwt.sign(
        { _id: user._id },
        process.env.JWT_SECRET_KEY
      );
      return res.status(200).send({
        loginStatus: true,
        id: user._id,
        jwtToken: token,
      });
    })
    .catch((e) => res.status(500).send("Error in finding User: " + e));
};

module.exports.verify = async (req, res) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
        decodedId: null,
      });
    }
    return res.status(200).send({
      message: "Authorised!",
      decodedId: decoded,
    });
  });
};
