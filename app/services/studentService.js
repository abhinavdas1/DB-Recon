var Student = require("../model/Student.js");

function search()
{

  var result = Student.find().exec();

  return result;

}


module.exports =  {
  "search" : search
};
