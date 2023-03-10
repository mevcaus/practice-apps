let db = require('../db')
//
module.exports = {
    getAll: () => {
        // idk if i want to access the data
        return db.queryAsync('SELECT * FROM responses LEFT JOIN address ON responses.address_id = address.id LEFT JOIN payment ON responses.payment_id = payment_id')
    },
    addRecord: (id, info) => {
        console.log('this is my info\n,', info)
        return db.queryAsync(`INSERT INTO payment (ccNum, expDate, cvv, billingZip)
        VALUES ('${info.ccNum}', '${info.expDate}', '${info.cvv}','${info.billingZip}')`)
            .then((paymentInfo) => {
                db.queryAsync(`INSERT INTO address (lineOne, lineTwo, city, state, zipCode, phoneNumber)
                VALUES ('${info.lineOne}', '${info.lineTwo}',  '${info.city}', '${info.state}', '${info.zipCode}', '${info.phoneNumber}')`)
                    .then((addressInfo) => {
                        db.queryAsync(`INSERT INTO responses (req_session_id, name, email, password, address_id, payment_id)
                        VALUES ('${id}','${info.name}', '${info.email}', '${info.password}',
                        (SELECT id FROM address WHERE lineOne = '${info.lineOne}' LIMIT 1),
                        (SELECT id FROM payment WHERE ccNum = '${info.ccNum}' LIMIT 1))`)
                            .then(() => {
                                console.log('successfully added to server')
                            })
                            .catch(err => {
                                console.log('err inserting into payment table\n', err)
                            })
                    })
                    .catch(err => {
                        console.log('err inserting into addresses table\n', err)
                    })
            })
            .catch(err => {
                console.log('err inserting into responses table\n', err)
            })
    },
    delete: (uid) => {

    }
}