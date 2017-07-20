require('async');
var express  = require('express');
var students = require("./controllers/searchController.js");
var router = express.Router();

router.get('/students', async function(req, res) {
  try{

    var val =  await students.getStudents(req.parameters);

    console.log(val);
    res.send(val, 200);

  }catch (error)
  {
    console.log(error);
  }

});

module.exports = router;
