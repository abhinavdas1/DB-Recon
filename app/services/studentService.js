var Student = require("../model/Student.js");

function search(filters)
{

  var query = {};

  //search by name
  if(filters.name)
  {
    query.name = new RegExp(filters.name, "i");
  }

  //search by major
  if(filters.major)
  {
    query.major = new RegExp(filters.major, "i");
  }

  //search by alumni status
  if(filters.alumni)
  {
    query.isAlumni = (filters.alumni==="true" || filters.alumni==="True");
  }

  console.log(query);
  var result = Student.find(query).exec();

  return result;

}


module.exports =  {
  "search" : search
};
