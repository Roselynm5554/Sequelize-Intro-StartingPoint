const express = require("express");
const router = express.Router();
const { User } = require("../database");


router.get("/", async (req, res) => {
    try {
        const allUsers = await User.findAll();

        if (!allUsers || allUsers.length === 0) {
            return res.status(404).send("No users found!");
        }

        res.status(200).send(allUsers);
    } catch (err) {
        console.error("Error getting all users:", err);
        res.status(500).send("Server error while fetching users.");
    }
})

router.get("/:id", async (req, res) => {
    const id = Number(req.params.id);
    try {
        const singleUser = await User.findByPk(id);

        if (!singleUser) {
            return res.status(404).send("User not found!");
        }
        res.status(200).send(singleUser);

    } catch (err) {
        console.log("Error getting single User!", err)
    }
})

router.patch("/:id", async (req, res) => {
    const id = Number(req.params.id);
    try {
        const update = await User.update(req.body, {
            where: { id: id }
        });

        //   if (!update) {
        //     return res.status(404).send({ error: "Task not found" });
        //   }

        res.status(200).send({ success: true });
    } catch (err) {
        console.error("Error updating a User", err);
        res.status(500).send({ error: "Failed to update User" });
    }
})


router.delete("/:id", async (req, res) => {
    const id = Number(req.params.id);

    try {
        const deleted = await User.destroy({
            where: {
                id: id
            }
        });

        //   if (!deleted) {
        //     return res.status(404).send({ error: "Task not found" });
        //   }
        res.status(200).send({ success: true });
    } catch (error) {
        console.error("Error deleting a User", error);
        res.status(500).send({ error: "Server error" });
    }
})


router.post("/", async (req, res) => {
    try {
        const newUserData = {
            name: req.body.name
        };
        const newUser = User.create(newUserData);
        res.status(201).send(newUser);
    } catch (err) {
        console.error("Error creating a new User!", err);
        res.status(500).send({ error: "Failed to create a new User" });
    }
});


module.exports = router;