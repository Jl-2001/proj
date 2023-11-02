const express = require('express')

const bodyParser = require('body-parser')

const cors = require('cors')

const app = express()

const port = 3000

const users = [
    {
        username: "jorge1", 
        password: "foo123"
    },
    {
        username: "johndoe3",
        password: "left6"
    },
    {
        username: "who3",
        password: "whatthe4"
    }
]

app.use(bodyParser.json())

app.use(cors())

app.get('/', (req,res) => {
    res.send('hello world!')
})
app.post("/login", (req,res) => {
    const username = req.body.username
    const password = req.body.password
    for (let i = 0; i < users.length; i++){
        if (users[i].username == username) {
            if (users[i].password == password) {
                res.send({
                    message: "successfully logged in"
                })
                return
            }
            else {
                res.send({
                    message: "wrong password"
                })
                return
            }
        }
    }
    res.send({
        message: "no such user"
    })
})
app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
})
