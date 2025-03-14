import express from "express";
import { Task } from "../models/task.models.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;
    const task = new Task({ title, description });
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
});

// get tasks by status
router.get("/status/:status", async (req, res) => {
  try {
    const status = req.params.status === "completed";
    const tasks = await Task.find({ completed: status });
    res.send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
});

// update a task
router.put("/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (error) {
    res.status(500).send(error);
    }
});

// delete a task
router.delete("/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id);
    if (!task) {
      return res.status(404).send();
    }
    return res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
