const { v4: uuid } = require("uuid");
const Workout = require("../database/Workout");

const getAllWorkouts = () => {
    const allWorkouts = Workout.getAllWorkouts();
    return allWorkouts;
};
const getOneWorkout = (workoutId) => {
    const workout = Workout.getOneWorkout(workoutId);
    return workout;
};
const createNewWorkout = (newWorkout) => {
    const workoutToInsert = {
        ...newWorkout,
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC"}),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC"}),
    }
    const createdWorkout = Workout.createNewWorkout(workoutToInsert);
    return createdWorkout;
};
const updateOneWorkout = (workoutId, changes) => {
    const updateOneWorkout = Workout.updateOneWorkout(workoutId, changes);
    return updateOneWorkout;
};
const deleteOneWorkout = (workoutId) => {
    Workout.deleteOneWorkout(workoutId);
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}