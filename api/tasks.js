const express = require("express");
const router = express.Router();
const { Task, User } = require("../database");

// TASK 4: Add the necessary routes here
// This time, use your newly created Sequelize models instead of the dummy database

// GET all tasks
router.get("/", async (req, res) => {
  try {
    const alltask = await Task.findAll();

    if (!alltask) {
      return res.status(404).send("Server is not Working!");
    }

    res.status(200).send(alltask);

  } catch (err) {
    console.log("Error getting all task!", err)
  }
  // Replace this with your code!

});

// GET a single task by id
router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  try {
    const singleTask = await Task.findByPk(id);

    if (!singleTask) {
      return res.status(404).send("Task not found!");
    }
    res.status(200).send(singleTask);

  } catch (err) {
    console.log("Error getting single task!", err)
  }

})

// Patch a task by id
router.patch("/:id", async (req, res) => {
  const id = Number(req.params.id);
  try {
    const update = await Task.update(req.body, {
      where: { id: id }
    });

    // if (!update) {
    //   return res.status(404).send({ error: "Task not found" });
    // }

    res.status(200).send({ success: true });
  } catch (err) {
    console.error("Error updating a task", err);
    res.status(500).send({ error: "Failed to update task" });
  }

});

// Delete a task by id
router.delete("/:id", async (req, res) => {
  const id = Number(req.params.id);

  try {
    const deleted = await Task.destroy({
      where: {
        id: id
      }
    });

    // if (!deleted) {
    //   return res.status(404).send({ error: "Task not found" });
    // }
    res.status(200).send({ success: true });
  } catch (error) {
    console.error("Error deleting a task", error);
    res.status(500).send({ error: "Server error" });
  }
})

// Create a new task
router.post("/", async (req, res) => {
  try {
    const task = {
      title: req.body.title,
      description: req.body.description,
      completed: false
    }
    const newTask = await Task.create(task);
    res.status(201).send(newTask);
  } catch (err) {
    console.error("Error creating a new task!", err);
    res.status(500).send({ error: "Failed to create a new task" });
  }
});


module.exports = router;

// TASK 5: Create a new routes file for users, and add as many routes as you see fit
// Don't forget to export the router, and import it into api/index.js

