const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`)
    .then(()=> {
        console.log('connected to db')
    })
    .catch(err => {
        console.log('err connecting to db\n', err);
    })
// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

const schema = new mongoose.Schema({
    word: String,
    definition: String
})


const glossary = mongoose.model('glossaries', schema);

module.exports = glossary;
