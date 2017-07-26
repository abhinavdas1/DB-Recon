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

  //search by position
  if(filters.position)
  {
    query.positions = {$all : [filters.position]}
  }

  //search by pillar
  if(filters.pillar)
  {

    //convert semester to number - for comparision purposes
    if(filters.pillar.semester)
    {
      if(filters.pillar.semester == "Fall"){
        filters.pillar.semester = 2;
      }
      else {
        filters.pillar.semester = 1;
      }
    }

    //if search by semester included
    if (filters.pillar.year) {
      query.pillar = { $elemMatch : { title : new RegExp(filters.pillar.title, "i"), $or : [{"period.semester_joined.year" : {$lt : filters.pillar.year}, "period.semester_left.year" : {$gt : filters.pillar.year}}, {"period.semester_joined.year" : filters.pillar.year, "period.semester_joined.sem" : {$gte : filters.pillar.semester}}, {"period.semester_left.year" : filters.pillar.year, "period.semester_left.sem" : {$lte : filters.pillar.semester}}] }};
    }
    else {
      query.pillar = { $elemMatch : { title : new RegExp(filters.pillar.title, "i")}};
    }
  }

  console.log(query);
  var result = Student.find(query).exec();

  return result;

}


module.exports =  {
  "search" : search
};
