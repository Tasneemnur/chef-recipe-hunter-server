const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())
const chefs = require('./data/chefs.json')
app.get("/", (req, res)=>{
res.send("server is running")
});

app.get("/chefs", (req, res)=>{
res.send(chefs)
});

app.get('/chefs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const selectedChef = chefs.find(chef => chef.id === id);
    res.send(selectedChef)
})

app.listen(port, ()=>{
console.log(`project is running on port: ${port}`)
});


