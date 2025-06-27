const express = require("express");
const router = express.Router();
const { User } = require("../database");


router.get("/", async (req, res) => {
    try {
        const allUsers = User.findAll();

        if (!allUsers) {
            return res.status(404).send("User not found!")
        }
        res.status(200).send(allUsers);

    } catch (err) {
        console.log("Error getting All Users", err)
    }
})

// router.get("/:id", async(req, res) => {

// })


module.exports = router;