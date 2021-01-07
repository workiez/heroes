const express = require('express');

const router = express.Router();

const mainController = require('../controllers/mainController');

//ruta home-page
router.get('/',mainController.index);
router.get('/creditos',mainController.mostrarCreditos);
router.get('*', mainController.error);

module.exports = router;
