
const express=require("express") ;

const app=express() ;

const cors=require("cors") ;

const port=process.env.PORT || 8080 ;

const connect=require('./config/db')

const userAuth=require('./controller/userAuth.controller');

const userList=require('./controller/userList.controller');

app.use(express.json());

app.use(cors({origin:"*"}));

app.use("/authentication",userAuth)
app.use("/dashboard",userList)

app.listen(port,async()=>{
    try {
        await connect()
       console.log(`http://localhost:${port}`) 
    } catch (error) {
       console.log('er',error.message) 
    }
})

