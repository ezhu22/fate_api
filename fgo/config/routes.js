const materials_controller = require('../controllers/materials_controller');
const servants_controller = require('../controllers/servants_controller')

module.exports = function(app) {
    // Routes for all materials
    app.get('/api/v1/materials', materials_controller.index);
    app.get('/api/v1/materials/new', materials_controller.new);
    app.post('/api/v1/materials', materials_controller.create);
    app.get('/api/v1/materials/:id', materials_controller.show);
    app.put('/api/v1/materials/:id', materials_controller.update);
    app.delete('/api/v1/materials/:id', materials_controller.destroy);

    // Routes for all servants
    app.get('/api/v1/servants', servants_controller.index);
    app.get('/api/v1/servants/new', servants_controller.new);
    app.post('/api/v1/servants', servants_controller.create);
    app.get('/api/v1/servants/:id', servants_controller.show);
    app.put('/api/v1/servants/:id', servants_controller.update);
    app.delete('/api/v1/servants/:id', servants_controller.destroy);

    // Normal routes
    
}