import 'dotenv/config';
import express from 'express'
import cors from 'cors'
import connectDb from './configs/mongodb.js';
import userRouter from './routes/userRoutes.js';
import imageRouter from './routes/imageRoutes.js';

//App Config
const  PORT = process.env.PORT || 4000;
const app = express();

// Initialize Middlewares 
app.use(express.json())
app.use(cors());

//Api Routes
app.get("/",(req,res)=>{
    res.send("Api working");
})

app.use('/api/user',userRouter);
app.use("/api/image",imageRouter)

connectDb().then(() => {
    app.listen(PORT, () => console.log(`Server Running on port http://localhost:${PORT}`));
})