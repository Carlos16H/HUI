const workoutServices = require('../services/workoutService')

const getAllWorkouts = (req, res) => {
    const allWorkouts = workoutServices.getAllWorkouts();
    res.send({status: 'OK', data: allWorkouts});
};

const getOneWorkout = (req, res) =>{
    const workout = workoutServices.getOneWorkout(req.params.workoutId);
    res.send(`Get workout ${req.params.workoutId}`);
};

const createNewWorkout = (req, res) => {

    const createdWorkout = workoutServices.createNewWorkout();
    res.status(201).send({status: "OK"});
};

const updateOneWorkout = (req, res) => {
    const updateWorkout = workoutServices.updateOneWorkout(req.params.workoutId);
    res.send(`Update workout ${req.params.workoutId}`);
};

const deleteOneWorkout = (req, res) => {
    workoutServices.deleteOneWorkout(req.params.workoutId);
    res.send(`Delete workout ${req.params.workoutId}`);
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
};