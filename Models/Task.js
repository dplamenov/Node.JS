const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: { type: String, required: true },
    body: String,
    status: String,
    dueDate: String
}, {
    versionKey: false
});

const task = mongoose.model('Task', taskSchema);

module.exports = task;