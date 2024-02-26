import * as mongoose from 'mongoose';
import express from 'express';
import jwt from 'jsonwebtoken';

mongoose.connect('mongodb://localhost:27017/knowledgedb')
    .then(() => console.log('DB OK'))
    .catch((err) => console.log('DB error', err));

const app = express();

app.use(express.json());

//test method
app.get('/', (req, res) => {
    console.log(req.body);


    res.json({
       success: true,
    });
});

//test method
app.post('/auth/login', (req, res) =>{

    const token = jwt.sign({
        email : req.body.email,
        fullName: "Bambara Chupara",
    }, 'secret 123');

    res.json({
        success: true,
        token,
    });
});

// app.post('/auth/register', registerValidation, PostController.register);


app.listen(3333, (err) => {
    if (err) {
        console.log(err);
        return console.log(err);
    }

    console.log('Server up');
});