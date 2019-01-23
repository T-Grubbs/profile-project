const express = require('express');
const router  = express.Router();


router.get('/resume', (req, res, next) => {
  res.render('resume');
});

module.exports = router;