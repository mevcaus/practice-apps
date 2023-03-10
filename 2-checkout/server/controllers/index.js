const model = require('../model');

module.exports = {
    get: (req, res) => {
        model.getAll()
            .then((info) => {
                console.log('this is my info\n', info);
                res.status(200);
                res.json(info);
            })
            .catch(err => {
                console.log('err retrieving data\n', err)
            })
    },
    post: (req, res) => {
        console.log('this is my req.body\n', req.body);
        console.log('this is my sessionid\n',req.session_id)
        model.addRecord(req.session_id, req.body)
            .then(() => {
                res.sendStatus(201);
            })
            .catch(err => {
                console.log('err posting to server\n', err);
                res.sendStatus(500);
            })
    },
    patch: (req, res) => {

    },
    delete: (req, res) => {

    }
}