const fs = require("fs");

const saveToDatabase = (DB) => {
    fs.writeFileSync("./src/database/db.json", JSON.stringify(DB, null, 2), {
        enconding: "utf8",
    });
};

module.exports = {
    saveToDatabase
};