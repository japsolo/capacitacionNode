const lowercasePaths = require('express-lowercase-paths');
const server = require('../Server.js');
const SiteController = require('../controllers/SiteController.js');

// Route Index
server.get('/', SiteController.index);

// 2nd Exercise
server.all('/todosLosRequests', SiteController.allRequest);

// 3rd Exercise
server.get('/ruta-?1', SiteController.ruta1);

// 4th Exercise
server.get('/clase/:number', SiteController.clase);

// 5th Exercise
// a.
server.get('/suma/:n1/:n2', SiteController.suma);

// b.
server.get('/sumaQuery', SiteController.sumaQuery);

// c.
server.get('/verificarNumeroImpar/:n', SiteController.verificarNumeroImpar);

// 6th Exercise
server.get('/digital-house/:cursada', SiteController.dh);

// 7th Exercise
server.get('/productos/:id?', SiteController.productos);

// 8th Exercise - Middleware
server.use(SiteController.tiempoDeRequest);

// 9th Exercise
server.use(lowercasePaths());

// 10th Exercise
server.get('/static', SiteController.static);

// 404 route
server.get('*', SiteController.notFound);
