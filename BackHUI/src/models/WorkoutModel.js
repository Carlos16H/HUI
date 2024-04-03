const { Schema, model } = require('mongoose');

const workoutSchema = new Schema({
    name: String,
    mode: String,
    equipment: [String],
    exercises: [String],
    createdAt: String,
    updatedAt: String,
    trainerTips: [String],
});

module.exports = model('workout', workoutSchema);