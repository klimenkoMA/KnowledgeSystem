import UserModel from '../model/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

/**
 * Класс для создания роутов для сущности User. Необходимый
 * минимум для нормальной работы с авторизацией - роуты регистрации, логина,
 * возврата информации о текущем пользователе
 */
export const register = async (req, res) => {

    try {
        //Take password from user`s request
        const password = req.body.password;
        //Create a special object for a hashing user`s password
        const salt = await bcrypt.genSalt(10);
        //Hashing an user`s password
        const hash = await jwt.sign(password, salt);

        //Create object for save in DB
        const doc = new UserModel({
            fullName: req.body.fullName,
            email: req.body.email,
            avatarUrl: req.body.avatarUrl,
            passwordHash: hash,
        });

        const user = await doc.save();

        //Create safe token
        const token = jwt.sign({
                _id: user._id
            }, 'secret123',
            {
                expiresIn: '30d',
            },
        );

        const {passwordHash, ...UserData} = user._doc;

        //Return response
        res.json({
            ...UserData,
            token,
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Could not create the user',
        });
    }

};