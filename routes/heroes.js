const express = require('express');

const router = express.Router();

const heroesController = require('../controllers/heroesController');

// /heroes ruta
router.get('/', heroesController.mostrarHeroes);
router.get('/detalle/:id', heroesController.heroeDetalle);
router.get('/detalle/:id/:ok?', heroesController.heroeDetalleOpcional);

module.exports = router;
