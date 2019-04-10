
const express = require('express');
const businessRoutes = express.Router();

// Require Business model in our routes module
let Students = require('./business.model');

// Defined store route
businessRoutes.route('/add').post(function (req, res) {
  let students = new Students(req.body);
  students.save()
    .then(students => {
      res.status(200).json({'students': 'students in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
businessRoutes.route('/').get(function (req, res) {
    Students.find(function(err, data){
    if(err){
      console.log(err);
    }
    else {
      res.json(data);
    }
  });
});

// Defined edit route
businessRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Students.findById(id, function (err, students){
      res.json(students);
  });
});

//  Defined update route
businessRoutes.route('/update/:id').post(function (req, res) {
    Students.findById(req.params.id, function(err, students) {
    if (!students)
      res.status(404).send("data is not found");
    else {
        students.first_name = req.body.first_name;
        students.middle_name = req.body.middle_name;
        students.last_name = req.body.last_name;
        students.phone_number = req.body.phone_number;
        students.email = req.body.email;

        students.save().then(students => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
businessRoutes.route('/delete/:id').get(function (req, res) {
    Students.findByIdAndRemove({_id: req.params.id}, function(err, students){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = businessRoutes;