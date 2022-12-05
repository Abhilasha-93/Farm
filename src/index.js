const express=require("express")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const route=require("./route/route")
const app=express()


app.use(bodyParser.json())

mongoose.connect("mongodb+srv://Seema:C5PtEdt23kmtx9ov@cluster0.gjunl.mongodb.net/TicketBookingSystem?retryWrites=true&w=majority")
    .then(()=> console.log("mongodb connected"))
    .catch(err => console.log(err))


app.use("/",route)

app.listen(3000,function(){
    console.log('Express app running on port ' + 3000)
})