import mongoose from 'mongoose';


/**Создаем схему для сущности, которая будет представлена
 * множеством в БД. Используем объект mongoose.
**/
 const UserSchema = new mongoose.Schema({

    //User fields
        fullName: {
            //type of field
            type: String,
            //Must be in require
            required: true,
        },
        email: {
            type: String,
            required: true,
            //must be unique
            unique: true,
        },
    //Must be in any User
        passwordHash: {
            type: String,
            required: true,
        },
        avatarUrl: String
    },
    //Time point
    {
        timestamps: true,
    });

 //Return the User model
export default mongoose.model('User', UserSchema);
