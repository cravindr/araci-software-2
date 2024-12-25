const express = require('express');
const placeController = require('../controllers/placeController');

const router = express.Router();

router.post('/', placeController.createPlace);
router.get('/', placeController.getPlaces);
router.get('/:id', placeController.getPlaceById);
router.put('/:id', placeController.updatePlace);
router.delete('/:id', placeController.deletePlace);

module.exports = router;
