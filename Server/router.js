const router = require('express').Router();
const ms = require('./ms');

router.route('/name/:id')
    .get(ms.lm)
    .put(ms.pl)

router.route('/create')
    .post(ms.createItem)

router.route('/update')
    .post(ms.updateItem)

module.exports = router;