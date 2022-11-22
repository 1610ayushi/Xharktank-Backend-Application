const express = require('express');
const dotenv = require('dotenv');

// connection 
const connectDB = require('./database/connection');

// Api
const Pitches = require('./database/api/pitches')

dotenv.config();

const app = express();
app.use(express.json())

const PORT = 8081 || process.env.PORT;

app.get('/', (req,res) => {
    res.json({
        message: 'Server is running'
    })
})

app.use('/pitches', Pitches)

app.listen(PORT, () => {
    connectDB().then(() => {
        console.log('Server is running!!!')
    }).catch((error) => {
        console.log('Server is running but the database connection failed!!!');
        console.error(error);
    })
})