const express = require("express");
const router = express.Router();
const { Task, User } = require("../database");

// TASK 4: Add the necessary routes here
// This time, use your newly created Sequelize models instead of the dummy database

// GET all tasks
router.get("/", async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.send(task);
  } catch(error) {
    res.status(500).send({ error: error.messege})
  }

 // res.status(501).send("Not implemented");
});
router.get("/:id", async (req, res) => {
  try {
   const id = await Task.findByPk(id);
    res.send(id);
  } catch (error) {
    res.status(500).send({ error: error.messege});
  }
})
router.patch("/:id", async (req, res) => {
  try {
   const id = await Task.update(id);
    res.send(id);
  } catch (error) {
    res.status(500).send({ error: error.messege});
  }
})
router.delete("/:id", async (req, res) => {
  try {
   const id = Number(req.params.id);
   Task.delete(id);
    res.send({success: true});
  } catch (error) {
    res.status(500).send({ error: error.messege});
  }
})
router.post("/", async (req, res) => {
  try {
    const newTask = Task.create(req.body);
    res.send(newTask);
  } catch (error) {
    res.status(500).send({ error: error.messege});
  }
})

// GET a single task by id

// Patch a task by id

// Delete a task by id

// Create a new task

module.exports = router;

// TASK 5: Create a new routes file for users, and add as many routes as you see fit
// Don't forget to export the router, and import it into api/index.js
 