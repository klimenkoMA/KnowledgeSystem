import * as mongoose from 'mongoose';
import express from 'express';

mongoose.connect('mongodb://localhost:27017/knowledgedb')
    .then(() => console.log('DB OK'))
        .catch((err) => console.log('DB error', err));

const app = express();

app.use(express.json());

app.listen(3333, (err) => {
   if (err) {
       console.log(err);
       return console.log(err);
   }

   console.log('Server up');
});