const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]


});

// generate token 

userSchema.methods.generateAuthToken = async function () {
    try {
        const token = jwt.sign({ _id: this._id }, process.env.JWT_KEY);
        this.tokens = this.tokens.concat({ token });
        console.log("token added");
        await this.save();
        return token;

    }
    catch (err) {
        throw err;
    }
}

console.log("schema is created");
const User = mongoose.model('User', userSchema);

module.exports = User;