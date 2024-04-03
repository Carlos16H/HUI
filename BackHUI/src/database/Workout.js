require('./connection');
const workoutModel = require('../models/WorkoutModel');


const getAllWorkouts = async () => {

    const workouts = await workoutModel.find();
    return workouts;
};
 const getOneWorkout = async (workoutId)=>{
  const workout = await workoutModel.findOne({_id: workoutId});
  if(!workout){
    return;
  };
  return workout;
};
const createNewWorkout = async (newWorkout) => {
    const workout = new workoutModel({
      name: newWorkout.name,
      mode: newWorkout.mode,
      equipment: newWorkout.equipment,
      exercises: newWorkout.exercises,
      createdAt: newWorkout.createdAt,
      updatedAt: newWorkout.updatedAt,
      trainerTips: newWorkout.trainerTips
    });
    await workout.save();
    return workout;
};

const updateOneWorkout = async (workoutId, changes) => {
  try {
    const indexForUpdated = await workoutModel.findOne({_id: workoutId});

    if (!indexForUpdated) {
      return;
    }
    let updatedAt = new Date().toLocaleString("en-US", { timeZone: "UTC"});
    const updatedWorkout =  await workoutModel.findByIdAndUpdate({ _id: workoutId}, {
      name: changes.name,
      mode: changes.mode,
      equipment: changes.equipment,
      exercises: changes.exercises,
      createdAt: changes.createdAt,
      updatedAt: updatedAt,
      trainerTips: changes.trainerTips
    });
    return updatedWorkout;
  } catch (error) {
    console.error("Error getting training:", error);
        throw error;
  } 
}

const deleteOneWorkout = async (workoutId) => {
  try {
    const indexForDelete = await workoutModel.findOne({_id: workoutId});
    if (!indexForDelete) {
      return;
    }
    const deleted = await workoutModel.findByIdAndDelete(workoutId);
    console.log(deleted);
  } catch (error) {
    console.error("Error getting training:", error);
        throw error;
  }
} 


module.exports = { getAllWorkouts, createNewWorkout, getOneWorkout, updateOneWorkout, deleteOneWorkout};