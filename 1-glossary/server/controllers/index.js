//format data for model
//give model the data
const model = require('../models/index')

module.exports = {
    get: (req, res) => {
        // see if req.body has a filter
        // ask model for all records
        console.log('request from controllers\n', req.body)
        // console.log('response from controllers\n', response)
        model.getAll()
            .then(response => {
                res.send(response);
            })
            .catch(err => {
                console.log('err getting from model\n', err)
            })
    },
    post: (req, res) => {
        // add to model
    },
    patch: (req, res) => {
        // update model
    },
    delete: (req, res) => {
        // delete a record
    }
}