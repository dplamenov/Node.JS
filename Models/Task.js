const mongoose = require('../Database');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: { type: String },
    body: String,
    status: String,
    dueDate: String
}, {
    versionKey: false
});

const task = mongoose.model('Task', taskSchema);

module.exports = task;
