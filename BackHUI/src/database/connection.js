const mongoose = require("mongoose");
require('dotenv').config({path:'./.env'});

const uri = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}:27017/hui-monguito-1?authSource=${process.env.MONGO_USERNAME}`;
console.log(uri)

mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).catch(err => console.log(err));

const db = mongoose.connection;
db.once("open", _ => {
    console.log("Database is connected to:", uri);
});

db.on("error", err => {
    console.log(err);
});
