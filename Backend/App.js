// importing required dependencies 
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// configuration of dotenv
dotenv.config();

//initiating app 
const app = express();

app.use(cors());
app.use(express.json());

// Initiating PORT
const PORT = process.env.PORT || 4000;

// Listening
app.listen(PORT,'localhost',() =>{
    console.log(`Server listening on PORT ${PORT}`);
});