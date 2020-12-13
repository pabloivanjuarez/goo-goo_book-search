const router = require('express').Router();
const path = require('path');
const APIroutes = require('./API');

router.use('./api', APIroutes);

router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

module.exports = router;