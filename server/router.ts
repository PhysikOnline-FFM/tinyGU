import bodyParser = require('body-parser');
import express = require('express');

const router = express.Router();
router.use(bodyParser.json());
export = router;

router.get('/:link', shortlink);

function shortlink(req, res) {
  const link = req.params.link;

  // here of course should be a call to the database
  if (link === 'test') {
    res.redirect('http://google.com');
  } else {
    // ...and here a nicer page (e.g. a separate component)
    res.send(`No shortlink found under "${link}"!`);
  }
}
