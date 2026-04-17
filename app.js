const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

// --------------------
// MongoDB Connection
// --------------------
mongoose.connect(process.env.MONGO_URI || 'mongodb://mongo-db:27017/tasksdb')
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error(err));

// --------------------
// Schema & Model
// --------------------
const TaskSchema = new mongoose.Schema({
    name: { type: String, required: true }
});

const Task = mongoose.model('Task', TaskSchema);

// --------------------
// Routes
// --------------------

// GET tasks
app.get("/tasks", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST task
app.post("/tasks", async (req, res) => {
    try {
        const { name } = req.body;

        const task = new Task({ name });
        await task.save();

        res.json(task);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// --------------------
app.listen(3000, () => {
    console.log("Server running on port 3000");
});