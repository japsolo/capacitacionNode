const fs = require('fs');
const path = require('path');
const products = require('../Products.js');

module.exports = {
	// Index Fn
	index: (req, res) => {
		console.log(req.tiempoDeRequest);
		console.log(req.route.path);
		res.send('Clase 3 de Node - Práctica');
	},
	// All Request
	allRequest: (req, res) => {
		res.send(`Ingresaste a todosLosRequests por ${req.method}`);
	},
	// Ruta-1
	ruta1: (req, res) => {
		res.send('Estás accediendo a la ruta /ruta-1');
	},
	// Tiempo De Request
	tiempoDeRequest: (req, res, next) => {
		req.tiempoDeRequest = new Date();

		let final = 'DATE: ' + req.tiempoDeRequest + ' METHOD: ' + req.method;

		// Write data in 'access-log.txt'
		fs.writeFile(path.join(__dirname, '../access-log.txt'), final, (err) => {
			// In case of a error throw err.
			if (err) throw err;
		});

		next();
	},
	// Clase
	clase: (req, res) => {
		console.log(req.route.path);
		let classNumber = req.params.number;
		let txt = 'Clase inexistente';

		switch (classNumber) {
			case '1':
				txt = 'Clase 1 - ES6';
				break;
			case '2':
				txt = 'Clase 2 - Node server';
				break;
			case '3':
				txt = 'Clase 3 - Express server';
				break;
			default:
		}

		res.send(txt);
	},
	// Suma
	suma: (req, res) => {
		let n1 = Number(req.params.n1);
		let n2 = Number(req.params.n2);

		res.send(`La suma de ${n1} + ${n2} es: ` + (n1 + n2));
	},
	// sumaQuery
	sumaQuery: (req, res) => {
		let n1 = Number(req.query.n1);
		let n2 = Number(req.query.n2);
		res.send(`La suma de ${n1} + ${n2} es: ` + (n1 + n2));
	},
	// verificarNumeroImpar
	verificarNumeroImpar: (req, res) => {
		let number = Number(req.params.n);
		let result = '';

		if (number % 2 === 0) result = `El ${number} es un número par`;
		else result = `El ${number} es impar`;

		res.send(result);
	},
	// Digital House
	dh: (req, res) => {
		let cursada = {cursada: req.params.cursada};
		res.json(cursada);
	},
	// productos
	productos: (req, res) => {
		let product = products;
		let requestId = req.params.id;

		switch (requestId) {
			case '1':
				product = products[requestId - 1];
				break;
			case '2':
				product = products[requestId - 1];
				break;
			case '3':
				product = products[requestId - 1];
				break;
			default:
				product = 'Producto inexistente';
		}

		res.send(product);
	},
	// static
	static: (req, res) => {
		let html = fs.readFileSync(path.join(__dirname, '../public/index.html'), 'utf-8');
		res.send(html);
	},
	// notFound
	notFound: (req, res) => res.status(404).send('WFT Bro? Route no found')
};
