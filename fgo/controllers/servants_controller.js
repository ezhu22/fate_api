const Servant = require('../models/servant');

module.exports = {
    index: function(req, res){
        console.log('You are in the index route for Servants')
    },

    new: function(req, res){
        console.log('You are in the new route for Servants')
        res.render('create_servants')
    },

    create: function(req, res){
        console.log('You are in the create route for Servants')
        console.log('this is the req.body', req.body)
        console.log('---------------------------------')

        String.prototype.capitalize = function() {
            return this.charAt(0).toUpperCase() + this.slice(1);
        }
        const new_servant = new Servant();
        new_servant.name = req.body.name.capitalize();
        new_servant.class = req.body.class;
        new_servant.rarity = req.body.rarity;
        new_servant.id = req.body.id;
        new_servant.deck = req.body.deck;
        
        for(var i = 0; i < req.body.hit_count_card_type.length; i++){
            const hit_count_object = { card_type: "", hits: 0 };
            hit_count_object.card_type = req.body.hit_count_card_type[i];
            hit_count_object.hits = req.body.hit_count_hits[i];
            new_servant.hit_count.push(hit_count_object);
        }

        new_servant.attribute = req.body.attribute.capitalize();
        new_servant.alignment = req.body.alignment;

        for (var i = 0; i < req.body.ascension_stage.length; i++){
            const ascension_object = {stage: 0, image_link: ""};
            ascension_object.stage = req.body.ascension_stage[i];
            ascension_object.image_link = req.body.ascension_image_link[i];
            new_servant.ascension.push(ascension_object);
        }

        new_servant.base_attack = req.body.base_attack;
        new_servant.base_health = req.body.base_health;
        new_servant.max_attack = req.body.max_attack;
        new_servant.max_health = req.body.max_health;
        new_servant.grailed_max_attack = req.body.grailed_max_attack;
        new_servant.grailed_max_health = req.body.grailed_max_health;
        new_servant.np_gain_per_hit_percent = req.body.np_gain_per_hit_percent;
        new_servant.np_gain_when_attacked = req.body.np_gain_when_attacked;
        new_servant.star_absorption = req.body.star_absorption;
        new_servant.star_gen_per_hit_percent = req.body.star_gen_per_hit_percent;
        new_servant.traits = req.body.traits.split(', ');

        for (var i = 0; i < req.body.servant_skills_number.length; i++){
            const servant_skills_object = { number: 0, name: "", description: "", upgraded: false};
            servant_skills_object.number = req.body.servant_skills_number[i];
            servant_skills_object.name = req.body.servant_skills_name[i];
            servant_skills_object.description = req.body.servant_skills_description[i];
            new_servant.servant_skills.push(servant_skills_object);
        }

        if (req.body.servant_skills_upgraded_1 == 'true'){
            const servant_skills_object = { number: 0, name: "", description: "", upgraded: false};
            servant_skills_object.number = req.body.servant_skills_number_upgraded[0];
            servant_skills_object.name = req.body.servant_skills_name_upgraded[0];
            servant_skills_object.description = req.body.servant_skills_description_upgraded[0];
            servant_skills_object.upgraded = true;
            new_servant.servant_skills.push(servant_skills_object);
        }

        if (req.body.servant_skills_upgraded_2 == 'true'){
            const servant_skills_object = { number: 0, name: "", description: "", upgraded: false};
            servant_skills_object.number = req.body.servant_skills_number_upgraded[1];
            servant_skills_object.name = req.body.servant_skills_name_upgraded[1];
            servant_skills_object.description = req.body.servant_skills_description_upgraded[1];
            servant_skills_object.upgraded = true;
            new_servant.servant_skills.push(servant_skills_object);
        }

        if (req.body.servant_skills_upgraded_3 == 'true'){
            const servant_skills_object = { number: 0, name: "", description: "", upgraded: false};
            servant_skills_object.number = req.body.servant_skills_number_upgraded[2];
            servant_skills_object.name = req.body.servant_skills_name_upgraded[2];
            servant_skills_object.description = req.body.servant_skills_description_upgraded[2];
            servant_skills_object.upgraded = true;
            new_servant.servant_skills.push(servant_skills_object);
        }

        for (var i = 0; i < req.body.class_skill_check.length; i++){
            const class_skill_object = { name: "", rank: "", description: ""};
            class_skill_object.name = req.body.class_skill_name[i];
            class_skill_object.rank = req.body.class_skill_rank[i];
            class_skill_object.description = req.body.class_skill_description[i];
            new_servant.class_skills.push(class_skill_object);
        }

        for (var i = 0; i < 2; i++){
            const np_object = { name: "", description: "", card_type: "", rank: "", classification: "", hit_count: 0, effect: "", overcharge_effect: "", upgraded: false };
            if (i == 1 && req.body.noble_phantasm_upgraded[i] == 'true'){
                np_object.name = req.body.noble_phantasm_name[i];
                np_object.description = req.body.noble_phantasm_description[i];
                np_object.card_type = req.body.noble_phantasm_card_type[i];
                np_object.rank = req.body.noble_phantasm_rank[i];
                np_object.classification = req.body.noble_phantasm_classification[i];
                np_object.hit_count = req.body.noble_phantasm_hit_count[i];
                np_object.effect = req.body.noble_phantasm_effect[i];
                np_object.overcharge_effect = req.body.noble_phantasm_overcharge[i]
                np_object.upgraded = true;
                new_servant.noble_phantasm.push(np_object);
                break;
            }
            np_object.name = req.body.noble_phantasm_name[i];
            np_object.description = req.body.noble_phantasm_description[i];
            np_object._type_type = req.body.noble_phantasm_card_type[i];
            np_object.rank = req.body.noble_phantasm_rank[i];
            np_object.classification = req.body.noble_phantasm_classification[i];
            np_object.hit_count = req.body.noble_phantasm_hit_count[i];
            np_object.effect = req.body.noble_phantasm_effect[i];
            np_object.overcharge_effect = req.body.noble_phantasm_overcharge[i]
            new_servant.noble_phantasm.push(np_object);
        }

        new_servant.cost = req.body.cost;
        new_servant.gender = req.body.gender;
        new_servant.instant_death_chance = req.body.instant_death_chance;

        for (var i = 0; i < req.body.ascension_materials_stage.length; i++){
            const am_object = { stage: 0, qp_cost: 0, materials: [] };
            am_object.stage = req.body.ascension_materials_stage[i];
            am_object.qp_cost = req.body.ascension_materials_qp_cost[i];
            for (var j = i; j < req.body.ascension_materials_materials_name.length; j++){
                const am_material_object = { name: "", amount: 0 };
                if (req.body.ascension_materials_materials_name[j] == ""){
                    continue;
                }
                if( i == 0 && j < 2){
                    am_material_object.name = req.body.ascension_materials_materials_name[j];
                    am_material_object.amount = req.body.ascension_materials_materials_amount[j];
                    am_object.materials.push(am_material_object);
                }
                if( i == 1 && j >= 2 && j < 4){
                    am_material_object.name = req.body.ascension_materials_materials_name[j];
                    am_material_object.amount = req.body.ascension_materials_materials_amount[j];
                    am_object.materials.push(am_material_object);
                }
                if( i == 2 && j >= 4 && j < 6){
                    am_material_object.name = req.body.ascension_materials_materials_name[j];
                    am_material_object.amount = req.body.ascension_materials_materials_amount[j];
                    am_object.materials.push(am_material_object);
                }
            }
            new_servant.ascension_materials.push(am_object);
        }

        for (var i = 0; i < req.body.skill_enhancement_materials_end_level.length; i++){
            const skill_enhancement_object = { end_level: 0, qp_cost: 0, materials: [] };
            skill_enhancement_object.end_level = req.body.skill_enhancement_materials_end_level[i];
            skill_enhancement_object.qp_cost = req.body.skill_enhancement_materials_qp_cost[i];
            for (var j = i; j < req.body.skill_enhancement_materials_materials_name.length; j++){
                const skill_enhancement_materials_object = { name: "", amount: 0 };
                if (req.body.skill_enhancement_materials_materials_name[j] == ""){
                    continue;
                }
                if( i == 0 && j < 2){
                    skill_enhancement_materials_object.name = req.body.skill_enhancement_materials_materials_name[j];
                    skill_enhancement_materials_object.amount = req.body.skill_enhancement_materials_materials_amount[j];
                    skill_enhancement_object.materials.push(skill_enhancement_materials_object);
                }
                if( i == 1 && j >= 2 && j < 4){
                    skill_enhancement_materials_object.name = req.body.skill_enhancement_materials_materials_name[j];
                    skill_enhancement_materials_object.amount = req.body.skill_enhancement_materials_materials_amount[j];
                    skill_enhancement_object.materials.push(skill_enhancement_materials_object);
                }
                if( i == 2 && j >= 4 && j < 6){
                    skill_enhancement_materials_object.name = req.body.skill_enhancement_materials_materials_name[j];
                    skill_enhancement_materials_object.amount = req.body.skill_enhancement_materials_materials_amount[j];
                    skill_enhancement_object.materials.push(skill_enhancement_materials_object);
                }
                if( i == 3 && j >= 6 && j < 8){
                    skill_enhancement_materials_object.name = req.body.skill_enhancement_materials_materials_name[j];
                    skill_enhancement_materials_object.amount = req.body.skill_enhancement_materials_materials_amount[j];
                    skill_enhancement_object.materials.push(skill_enhancement_materials_object);
                }
                if( i == 4 && j >= 8 && j < 10){
                    skill_enhancement_materials_object.name = req.body.skill_enhancement_materials_materials_name[j];
                    skill_enhancement_materials_object.amount = req.body.skill_enhancement_materials_materials_amount[j];
                    skill_enhancement_object.materials.push(skill_enhancement_materials_object);
                }
                if( i == 5 && j >= 10 && j < 12){
                    skill_enhancement_materials_object.name = req.body.skill_enhancement_materials_materials_name[j];
                    skill_enhancement_materials_object.amount = req.body.skill_enhancement_materials_materials_amount[j];
                    skill_enhancement_object.materials.push(skill_enhancement_materials_object);
                }
                if( i == 6 && j >= 12 && j < 14){
                    skill_enhancement_materials_object.name = req.body.skill_enhancement_materials_materials_name[j];
                    skill_enhancement_materials_object.amount = req.body.skill_enhancement_materials_materials_amount[j];
                    skill_enhancement_object.materials.push(skill_enhancement_materials_object);
                }
                if( i == 7 && j >= 14 && j < 16){
                    skill_enhancement_materials_object.name = req.body.skill_enhancement_materials_materials_name[j];
                    skill_enhancement_materials_object.amount = req.body.skill_enhancement_materials_materials_amount[j];
                    skill_enhancement_object.materials.push(skill_enhancement_materials_object);
                }
                if( i == 8 && j >= 16 && j < 18){
                    skill_enhancement_materials_object.name = req.body.skill_enhancement_materials_materials_name[j];
                    skill_enhancement_materials_object.amount = req.body.skill_enhancement_materials_materials_amount[j];
                    skill_enhancement_object.materials.push(skill_enhancement_materials_object);
                }
                if( i == 9 && j >= 18 && j < 20){
                    skill_enhancement_materials_object.name = req.body.skill_enhancement_materials_materials_name[j];
                    skill_enhancement_materials_object.amount = req.body.skill_enhancement_materials_materials_amount[j];
                    skill_enhancement_object.materials.push(skill_enhancement_materials_object);
                }
            }
            new_servant.skill_enhancement_materials.push(skill_enhancement_object);
        }

        new_servant.nicknames = req.body.nicknames.split(', ');
        new_servant.place_of_origin = req.body.place_of_origin;
        new_servant.illustrator = req.body.illustrator;
        new_servant.seiyuu = req.body.seiyuu;

        for (var i = 0; i < req.body.parameter_type.length; i++){
            var parameter_object = { type: "", rank: "" };
            parameter_object.type = req.body.parameter_type[i];
            parameter_object.rank = req.body.parameter_rank[i];
            new_servant.parameters.push(parameter_object);
        }

        new_servant.character_info = req.body.character_info;

        new_servant.save()
            .then(success => {
                console.log('Servant added to database.', success);
                res.json(success);
            })
            .catch(error => {
                console.log('Unable to add servant to database.', error);
                res.json(error)
            })
    },

    show: function(req, res){
        console.log('You are in the show route for Servants')
    },
    
    update: function(req, res){
        console.log('You are in the update route for Servants')
    },
    
    destroy: function(req, res){
        console.log('You are in the destroy route for Servants')
    }
}