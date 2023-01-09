const connection = require('../conn/dbconn.js')
const advertisementsList = require('../model/ads.js')
const data = require('../data/ads.json')

connection.dropCollection('advertisementsList').then(() => {
    data['ads'].forEach(advertisementsList => {
        console.log(advertisementsList)
        advertisementsList.create(advertisementsList, function (err) {
            if (err) return handleError(err);
        })
    })
})