const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        dob: {
            type: String,
            required: true,
            trim: true
        },
        address: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    });


    const User = model('User', userSchema);

    module.exports = User;