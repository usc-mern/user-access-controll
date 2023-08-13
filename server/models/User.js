const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

// schema design 
const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            unique: true
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            unique: true
        },
        accessCode: [
            {
                type: String
            }
        ]
    },
    {
        timestamps: true
    }
)

userSchema.pre("save", function (next) {
    const password = this.password;
    const hashedPassword = bcrypt.hashSync(password);
    this.password = hashedPassword;
    next();
})

userSchema.methods.comparePassword = function (password, hash) {
    const isPasswordValid = bcrypt.compareSync(password, hash);
    return isPasswordValid;
};

userSchema.methods.createJWT = async function () {
    try {
        const accessToken = jwt.sign({ id: this._id }, process.env.ACCESS_TOKEN, {
            expiresIn: "1d"
        })
        // await new Token({ token: accessToken }).save();
        return accessToken;
    }
    catch (err) {
        // console.log(err);
        throw new Error(err.message)
    }
}

// SCHEMA -> MODEL -> QUERY

const User = mongoose.model('User', userSchema);

module.exports = User;