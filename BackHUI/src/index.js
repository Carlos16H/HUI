const express = require('express');
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const cors = require('cors');
require('dotenv').config({path:'./.env'});

const app = express()
console.log(process.env.B_PORT)
const port = process.env.B_PORT || 3001;

app.use(cors());
app.use(express.json());
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(port, () => console.log(`app listening on port ${port}!`));