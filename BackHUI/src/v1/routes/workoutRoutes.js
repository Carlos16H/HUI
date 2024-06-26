const express = require('express');
const router = express.Router();
const workoutController = require('../../controller/workoutcontroller');

router
    .get("/", workoutController.getAllWorkouts)

    .get("/:workoutId", workoutController.getOneWorkout)

    .post("/", workoutController.createNewWorkout)

    .patch("/:workoutId", workoutController.updateOneWorkout)

    .delete("/workoutId", workoutController.deleteOneWorkout);

module.exports = router;

