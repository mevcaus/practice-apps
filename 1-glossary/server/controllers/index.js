//format data for model
//give model the data
const model = require('../models/index')

module.exports = {
    get: (req, res) => {
        // see if req.body has a filter
        // ask model for all records
        // console.log('response from controllers\n', response)
        model.getAll()
            .then(response => {
                res.send(response);
            })
            .catch(err => {
                console.log('err getting from model\n', err)
                res.sendStatus(500);
            })
    },
    post: (req, res) => {
        // add to model
        let word = req.body.word;
        let definition = req.body.definition;
        model.post(word, definition)
            .then(response => {
                res.send(201);
            })
            .catch(err => {
                console.log('err posting to db\n', err);
                res.sendStatus(500);
            })
    },
    patch: (req, res) => {
        // update model
        let replacedID = req.body.id;
        let word = req.body.word;
        let definition = req.body.definition;
        model.patch(replacedID, word, definition)
            .then(response => {
                res.send(201);
            })
            .catch(err => {
                console.log('err posting to db\n', err);
                res.sendStatus(500);
            })
    },
    delete: (req, res) => {
        // delete a record
        let id = req.body.id;
        console.log('id from controller\n', id);
        model.delete(id)
            .then(response => {
                res.send(202);
            })
            .catch(err => {
                console.log('err deleting from server\n', err);
                res.sendStatus(500);
            })
    }
}