const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: String,
    body: String,
    status: String,
    dueDate: String
});

const task = mongoose.model('Task', taskSchema);

module.exports = task;