const express = require('express');
const router  = express.Router();


router.get('/about-me', (req, res, next) => {
  res.render('about-me');
});

module.exports = router;