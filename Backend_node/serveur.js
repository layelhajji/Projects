const express=require("express")
const userRouter=require("./routes/user")
require('./config/connect')

const app=express()


app.use(express.json())

app.use('/user',userRouter )



const port=3000;
app.listen(port,()=>{
    console.log(`Serveur en écoute sur le port ${port}`);
})