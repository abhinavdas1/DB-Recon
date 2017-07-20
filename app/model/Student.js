var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema ({
  name : String,
  major : String,
  ufid : Number,
  personal_statement : String,
  head_shot : String,
  pillar : [{
    period :
    {
      semester_joined : {
        sem : Number,
        year : Number
      },
      semester_left : {
        sem : Number,
        year : Number
      }
    },
    title : String,
  }],
  positions : [String],
  emails : [String],
  phone : String,
  profile_links : {
    linkedin_url : String,
    twitter : String,
    resume_link : String,
    github_link : String,
    personal_website : String,
    facebook : String,
  },
  isAlumni : Boolean,
  isHired : Boolean,
  employment : [{
      employer : String,
      job_title : String,
      joining_year : Number
    },
  ],
  isPlaced : Boolean,
  PlacedAt : String,
  skills : [String],
  project_assignments : [{
      name : String,
      period :{
        semester_joined : {
          sem : Number,
          year : Number
        },
        semester_left : {
          sem : Number,
          year : Number
        }
      }
    }]
});

module.exports = mongoose.model('employee', schema);;
