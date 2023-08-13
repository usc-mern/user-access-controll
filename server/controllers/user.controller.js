const User = require('../models/User');

exports.createUser = async (req, res) => {
    try {


        console.log(req.user)

        if (!req.user?.accessCode?.includes('SuperAdmin')) {
            return res.status(403).send({ message: 'forbidden access' })
        }
        if (req.body.accessCode?.includes('SuperAdmin')) {
            return res.status(403).send({ message: "This access code don't allow" })
        }

        const userInfo = req.body;
        console.log(userInfo)

        if (userInfo.accessCode) {

        }

        const user = await User.create(req.body);

        res.status(200).json({
            message: "New User Created Successful",
            user: user
        })
    }
    catch (err) {
        // console.log(err);
        res.status(500).json({
            message: err.message
        })
    }
}

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || email === null) {
            return res.status(400).json({ message: "Email is required" });
        }

        if (!password || password === null) {
            return res.status(400).json({ message: "Password is required" });
        }

        query = { email: email };

        const user = await User.findOne(query);

        if (!user) {
            return res.status(404).json({ message: "This email is not found!" });
        }

        const isPasswordValid = user.comparePassword(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({ message: "Password is incorrect!" });
        }

        const accessToken = await user.createJWT();

        res.json({
            message: "User login successful",
            user: user,
            accessToken
        });

    }
    catch (err) {
        // console.log(err.message);
        res.status(500).json({
            message: err.message
        })
    }
}

exports.getUser = async (req, res) => {
    try {
        const user = await User.find(req.body);

        res.status(200).json({
            message: "get Successful",
            user: user
        })
    }
    catch (err) {
        // console.log(err);
        res.status(500).json({
            message: err.message
        })
    }
}



exports.getLoggedUser = async (req, res) => {
    try {

        const user = req.user;
        res.status(200).json({
            message: "log in Successful",
            user: user
        })
    }
    catch (err) {
        // console.log(err.message);
        res.status(500).json({
            message: err.message
        })
    }
}