const workoutServices = require('../services/workoutService')

const getAllWorkouts = async (req, res) => {
    try {
        const allWorkouts = await workoutServices.getAllWorkouts();
        res.send({status: 'OK', data: allWorkouts});
    } catch (error) {
        console.error("Error getting all workouts:", error);
        res.status(500).send({ status: 'Error', message: 'Error getting workouts' });
    }
};

const getOneWorkout = async (req, res) =>{
    try {
        const{
            params: { workoutId },
        } = req;
    
        if(!workoutId){
            return;
        }
        const workout = await workoutServices.getOneWorkout(workoutId);
        res.send({status: "ok", data: workout });
    } catch (error) {
        console.error("Error getting workout:", error);
        res.status(500).send({ status: 'Error', message: 'Error getting workout' });
    }
};

const createNewWorkout = async (req, res) => {
    try {
        const { body } = req;

        if(
            !body.name ||
            !body.mode ||
            !body.equipment ||
            !body.exercises ||
            !body.trainerTips
        ){
            return;
        }

        const newWorkout = {
            name: body.name,
            mode: body.mode,
            equipment: body.equipment,
            exercises: body.exercises,
            trainerTips: body.trainerTips,
        };
        const createdWorkout = await workoutServices.createNewWorkout(newWorkout);
        res.status(201).send({status: "OK", data: createdWorkout});
    } catch (error) {
        console.error("error creating workout:", error);
        res.status(500).send({ status: 'Error', message: 'error creating workout' });
    }
};

const updateOneWorkout = async (req, res) => {
    try {
        const { 
            body, 
            params: { workoutId },
        } = req; 
    
        if(!workoutId){
            return;
        }
    
        const updateOneWorkout = await workoutServices.updateOneWorkout(workoutId, body);
        res.send({ status: "ok", data: updateOneWorkout });
    } catch (error) {
        console.error("error updating workout:", error);
        res.status(500).send({ status: 'Error', message: 'error updating workout' });
    }
    
};

const deleteOneWorkout = (req, res) => {
    const {
        params: { workoutId },
    } = req;

    if (!workoutId) {
        return;
    }

    workoutServices.deleteOneWorkout(workoutId);
    res.status(204).send({ status: "ok" });
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}; 