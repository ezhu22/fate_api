const Material = require('../models/material');

module.exports = {
    index: function(req, res){
        console.log('You are in the index route for Materials')
        res.render('index.ejs')
    },

    new: function(req, res){
        console.log('You are in the new route for Materials')
        res.render('create_materials')
    },

    create: function(req, res){
        console.log('You are in the create route for Materials')
        console.log('Here is the information from the req.body', req.body)
        const new_material = new Material();
        new_material.name = req.body.name;
        new_material.image_link = req.body.image_link;
        new_material.classification = req.body.classification;
        new_material.description = req.body.description;
        new_material.grade = req.body.grade;
        new_material.number = req.body.number;
        new_material.save()
            .then(success => {
                console.log('Material added to database.', success)
                res.json(success);
            })
            .catch(error => {
                console.log('Unable to add material to database.')
                res.json(error)
            })
    },

    show: function(req, res){
        console.log('You are in the show route for Materials')
    },
    
    update: function(req, res){
        console.log('You are in the update route for Materials')
    },
    
    destroy: function(req, res){
        console.log('You are in the destroy route for Materials')
    }


}