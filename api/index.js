const express = require("express");
const router = express.Router();
const tasksRouter = require("./tasks");
const userRouter = require("./users")

router.use("/tasks", tasksRouter);
router.use("/users", userRouter)

module.exports = router;
// module.exports = router;