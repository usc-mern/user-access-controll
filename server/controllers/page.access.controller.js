const PageAcess = require('../models/PageAcess');

exports.createPage = async (req, res) => {
    try {

        console.log("first page created")

        const user = await PageAcess.create(req.body);

        res.status(200).json({
            message: "New Page Created Successful",
            user: user
        })
    }
    catch (err) {
        console.log("err");
        console.log(err);
        res.status(500).json({
            message: err.message
        })
    }
}


exports.getPageInfo = async (req, res) => {
    try {

        const pageInfo = await PageAcess.findOne({}, 'menu.menuName menu.menuRoute menu.menuAccessCode');

        console.log("pageInfo")
        console.log(pageInfo)

        res.status(200).json({
            message: "New Page Created Successful",
            pageInfo
        })
    }
    catch (err) {
        console.log("err");
        console.log(err);
        res.status(500).json({
            message: err.message
        })
    }
}