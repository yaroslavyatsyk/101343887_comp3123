const { json } = require("express");
const  express = require("express");
const app = express();
const PORT_ID = 8099;

app.get("/", (req, res) => {
    res.send("<h1>Main Express</h1>");
})
app.get("/hello", (req, res) =>{
    res.send("<h1>Hello Express JS</h1>")
})

app.get("/users", (req, res) => {
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;

    console.log(req.query);

    res.send(JSON.stringify({
        firstName,
        lastName
    }))
})

app.post("/users/:firstName/:lastName", (req, res) => {
    const firstName = req.params.firstName;
    const lastName = req.params.lastName;


    res.send({
        firstName,
        lastName
    })
})

app.listen(PORT_ID, () =>{
    console.log(`Listen at http://localhost:${PORT_ID}`);
})

