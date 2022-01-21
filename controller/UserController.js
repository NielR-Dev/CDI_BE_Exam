const res = require('express/lib/response');
const jwt = require('jsonwebtoken');

var  users = [
  {
    id: 1,
    username: "johndoe",
    password: "pass12345",
    token: "",
    logged: ""
  },
  {
    id: 2,
    username: "juandelacruz",
    password: "matapangako",
    token: "",
    logged: ""
  }
]
function generateToken(username) {
  return jwt.sign(username, "09f26e402586e2faa8da4c98a35f1b20d6b033c60", { expiresIn: '3600s' });
}

exports.getUsers = (req, res)=>{
  res.json(users)
};
exports.login = (req, res)=>{
  var user = null;
  users.forEach(element => {
    if(element.username == req.body.username && 
      element.password == req.body.password){
      element.token = generateToken(element.username);
      user = element;
    }
  });
  res.json(user);
};

exports.logout = (req, res)=>{
  users.forEach(element => {
    if(element.username == req.body.username && 
      element.password == req.body.password){
      element.token = "";
    }
  });
  res.status(200);
  res.send("ok");
};

exports.register = (req, res)=>{
  users.push({
    id:1,
    username: req.body.username,
    password: req.body.password,
    token:"",  
    logged:""
  });
  res.json(req.body);
};
