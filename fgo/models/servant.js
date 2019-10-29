const mongoose = require('mongoose');

const ServantSchema = new mongoose.Schema(
  {
    name: {type: String, required: [true, 'Must enter a name.'], minlength: 2},
    class: {type: String, required: [true, 'Must enter a class.'], minlength: 2},
    rarity: Number,
    id: Number,
    deck: [String],
    hit_count: [{card_type: String, hits: Number}],
    attribute: String,
    alignment: String,
    ascension: [{stage: Number, image_link: String}],
    base_attack: Number,
    base_health: Number,
    max_attack: Number,
    max_health: Number,
    grailed_max_attack: Number,
    grailed_max_health: Number,
    np_gain_per_hit_percent: Number,
    np_gain_when_attacked: Number,
    star_absorption: Number,
    star_gen_per_hit_percent: Number,
    traits: [String],
    servant_skills: [{
                    number: Number,
                    name: String, 
                    description: String,
                    upgraded: {type: Boolean, default: false}
                }],
    class_skills: [{name: String, rank: String, description: String}],
    noble_phantasm:[{
                    name: String,
                    description: String,
                    card_type: String,
                    rank: String,
                    classification: String,
                    hit_count: Number,
                    effect: String,
                    overcharge_effect: String,
                    upgraded: {type: Boolean, default: false}
                }],
    cost: Number,
    gender: String,
    instant_death_chance: Number,
    ascension_materials: [{
                            stage: Number, 
                            qp_cost: Number, 
                            materials:[{
                                        name: String, 
                                        amount: Number 
                                    }]
                        }],
    skill_enhancement_materials: [{
                                    end_level: Number,
                                    qp_cost: Number,
                                    materials: [{
                                                name: String,
                                                amount: Number
                                    }]
    }],
    nicknames: [String],
    place_of_origin: String,
    illustrator: String,
    seiyuu: String,
    parameters: [],
    character_info: String
  },
  {
      timestamps: true
  });

const Servant = mongoose.model('Servant', ServantSchema);
module.exports = Servant;