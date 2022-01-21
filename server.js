const express = require("express");
const cors = require("cors");

var usersRouter = require("./router/UserRoute");

const port = process.env.PORT || 5000;

const app = express()
app.use(cors());
app.use(express.json())
app.use(express.static('public'))


app.get("/", (req, res) => {
    res.status(200)
    res.send("Connected")
});

app.use(usersRouter);


app.listen(port, () => {
    console.log(`Server is Listening on `+port)
})