const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

// schema design 
const userSchema = mongoose.Schema(
    {
        pageName: {
            type: String,
            required: [true, "Page name is required"],
            unique: true
        },
        pageRoute: {
            type: String,
            required: [true, "Page name is required"],
            unique: true
        },
        accessCode: [
            {
                type: String
            }
        ],
        menu: [
            {
                menuName: {
                    type: String,
                    required: [true, "Menu name is required"]
                },
                menuRoute: {
                    type: String,
                    required: [true, "Menu route is required"]
                },
                menuAccessCode: [
                    {
                        type: String
                    }
                ],
                button: [
                    {
                        buttonName: {
                            type: String,
                            required: [true, "Button name is required"]
                        },
                        buttonAccessCode: [
                            {
                                type: String
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        timestamps: true
    }
)

// SCHEMA -> MODEL -> QUERY

const UserAccess = mongoose.model('UserAccess', userSchema);

module.exports = UserAccess;