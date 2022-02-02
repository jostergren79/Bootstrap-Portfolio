const express = require('express')
const app = express()
const mysql = require('mysql2')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'root',
    database: 'testDB'

})

app.post("/add", (req, res) => {

    const firstName = req.body.firstName
    const lastName = req.body.lastName    
    const addressLineOne = req.body.addressLineOne    
    const addressLineTwo= req.body.addressLineTwo    
    const city = req.body.city    
    const state = req.body.state
    const postalCode = req.body.postalCode
    const contactNumber = req.body.contactNumber
    const email = req.body.email

    db.query('INSERT INTO testTABLE (firstName, lastName, addressLineOne, addressLineTwo, city, state, postalCode, contactNumber, email) VALUES (?,?,?,?,?,?,?,?,?)',
    [firstName, lastName, addressLineOne, addressLineTwo, city, state, postalCode, contactNumber, email], 
    (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send('Values Inserted')
        }
    }
    )
})

app.get('/records', (req, res) => {
    db.query('SELECT * FROM testTABLE', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.put('/update', (req,res) => {
    const id = req.body.id
    const email = req.body.email
    db.query('UPDATE testTABLE SET email = ? WHERE ID = ?', [email, id], (err, result) => {
        if (err) {
        console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.delete('/delete/:id', (req,res) => {
    const id = req.params.id
    db.query('DELETE FROM testTABLE WHERE id ?', id, (err,result))
    if (err) {
        console.log(err)
    } else {
        res.send(result)
    }
})


app.listen(3001, () => {
    console.log('API Server listening on 3001')
})