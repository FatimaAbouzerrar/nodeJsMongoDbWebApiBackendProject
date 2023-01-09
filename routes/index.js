const express = require('express');
var router = express.Router();
const connection = require('../conn/dbconn.js')
const mongoosePaginate = require('mongoose-paginate-v2')
const AdvertisementsModel = require('../model/ads.js')
const params = ['sellOrBuy', 'lowerPrice', 'higherPrice', 'name']
let page = 1
let limit = 5

router.get('/fatydev/nodepop/api/ads/', function(req, res, next) {
  if(req.query.page) {
    page = req.query.page
  }
  if(req.query.limit) {
    limit = req.query.limit
  }
  let lowerPrice = parseFloat(req.query.lowerPrice)
  let higherPrice = parseFloat(req.query.higherPrice)
  const filterValues = {}
  if(req.query.tags) {
    filterValues.tags = req.query.tags
  }
  if(req.query.lowerPrice || req.query.higherPrice){
    filterValues.price = {}
    if (req.query.lowerPrice){
      filterValues.price['$gte'] = lowerPrice
    }
    if(req.query.higherPrice){
      filterValues.price['$lte'] = higherPrice
    }
  }
  params.forEach(param => {
    
    if(req.query.hasOwnProperty(param)){
      filterValues[param] = req.query[param]
    }
  })
  console.log(filterValues)
  if(req.query.name){
    filterValues.name = new RegExp('^' + req.query.name, 'i')
  }
  console.log(filterValues)
  const paginationOptions = {
    page: page,
    limit: limit
  }
  AdvertisementsModel.paginate(filterValues, paginationOptions, (err, result) => {
    res.json(result)
  })
});

router.post('/fatydev/nodepop/api/ads', function(req, res) {
  AdvertisementsModel.create(req.body)
    .catch((err) => {
      console.log(err)
    })
    .then(() => res.status(201).send())
});

module.exports = router;