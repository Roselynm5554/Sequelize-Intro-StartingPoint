const express = require("express");
const router = express.Router();
const { Task, User } = require("../database");

// GET all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.findAll({ include: User });
    res.send(tasks);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// GET task by id
router.get("/:id", async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) return res.status(404).send({ error: "Task not found" });
    res.send(task);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// PATCH task
router.patch("/:id", async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) return res.status(404).send({ error: "Task not found" });

    await task.update(req.body);
    res.send(task);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// DELETE task
router.delete("/:id", async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) return res.status(404).send({ error: "Task not found" });

    await task.destroy();
    res.send({ success: true });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// CREATE task
router.post("/", async (req, res) => {
  try {
    const task = {title: req.body.title, description: req.body.description, completed: false}
    const newTask = await Task.create(task);
    console.log("new task was created");
    res.send(newTask);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
