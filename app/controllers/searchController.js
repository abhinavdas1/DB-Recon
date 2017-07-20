require('async');
var bodyParser = require('body-parser');
var student = require("../services/studentService.js");

async function getStudents(filters){

  return await student.search();

}

module.exports =  {
  getStudents : getStudents
};
