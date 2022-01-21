const res = require('express/lib/response');
const req = require('express/lib/request');
const jwt = require('jsonwebtoken');

var  users = [
  {
    id: 1,
    username: "johndoe",
    password: "pass12345",
    token: "",
    logged: false
  },
  {
    id: 2,
    username: "juandelacruz",
    password: "matapangako",
    token: "",
    logged: false
  }
]
function generateToken(username) {
  return jwt.sign(username, "09f26e402586e2faa8da4c98a35f1b20d6b033c60");
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
      element.logged=true;
      user = element;
    }
  });
  res.json(user.token||"");
};

exports.logout = (req, res)=>{
  users.forEach(element => {
    if(element.username == req.body.username && 
      element.password == req.body.password){
      element.token = "";
      element.logged = false;
    }
  });
  res.status(200);
  res.send("logged out");
};

exports.register = (req, res)=>{
  users.push({
    id:users.length+1,
    username: req.body.username,
    password: req.body.password,
    token:"",
    logged:false
  });
  res.status(200);
  res.json(users);
};
