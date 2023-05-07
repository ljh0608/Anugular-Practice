const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express();

const PORT=process.env.PORT||8060;

app.use(cors());

app.use(bodyParser.json());

app.use('/',require('./app/mysql/route/route.ts'));


let db=require('./app/mysql/model/index.ts');

db.sequelizeConfig.sync();

app.get('/',(req,res)=>{
    res.json({message: `Server is running on port ${PORT}`});
});

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})