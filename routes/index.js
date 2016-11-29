var express = require('express');
var router = express.Router();
var reclamo = {
	tipoReclamo:'ODECO', 
	observacion: 'mal servicio', 
	fechaReclamo:'29/11/2016'
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Proyecto final', subtitle: 'Avances en computacion', reclamo:reclamo });
});

module.exports = router;
