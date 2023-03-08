const glossary = require('../db')

module.exports = {
    getAll: () => {
        // see if req.body has a filter
        // ask model for all records
        return glossary.find({});
    },
    post: (word, definition) => {
        // add to model
        const newWord = new glossary({
            word: word,
            definition: definition
        });
        return newWord.save()
    },
    patch: (id, word, definition) => {
        // update model
        return glossary.updateOne({_id: id}, {$set: {word: word, definition: definition}})
    },
    delete: (id) => {
        // delete a record
        return glossary.deleteOne({_id: id})
    }
}