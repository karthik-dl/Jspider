const express = require('express');
let app=express();
app.use(express.json())

app.listen(1500,(err)=>{
    if(err)throw err
    console.log("server running at port 1000");
});
const itemlist=[
    {
        item:"milk",
        quantity:"2"
    },
    {
        item:"water",
        quantity:"3"
    },
    {
        item:"Oil",
        quantity:"1"
    }
]

app.get('/graceries',(req,res)=>{
    res.send(itemlist);
})

app.post('/graceries',(req,res)=>{
    console.log(req.body);  //it is property
    itemlist.push(req.body)
    res.send(201)
 })