const DB = require('./db.json');
const { saveToDatabase } = require('../database/utils');

const getAllWorkouts = () => {
    return DB.workouts;
};

module.exports = { getAllWorkouts };