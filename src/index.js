import * as mongoose from 'mongoose';
import express from 'express';
import jwt from 'jsonwebtoken';
import * as UserController from './controllers/UserController.js'
import {registerValidation, loginValidation} from "./validations.js";

mongoose.connect('mongodb://localhost:27017/knowledgedb')
    .then(() => console.log('DB OK'))
    .catch((err) => console.log('DB error', err));

const app = express();

app.use(express.json());

app.post('/auth/register', registerValidation, UserController.register);
app.post('/auth/login', loginValidation, UserController.login);

app.listen(3333, (err) => {
    if (err) {
        console.log(err);
        return console.log(err);
    }

    console.log('Server up');
});