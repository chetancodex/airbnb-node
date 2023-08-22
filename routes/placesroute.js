const express = require('express');
const PlaceController = require('../controllers/placescontroller');
const router = express.Router();

// Get All Places
router.get('/',PlaceController.getAllPlaces);
// Post place
router.post('/',PlaceController.postPlace);
// get place by Id
router.get('/:id', PlaceController.FindOnePlacesById);
// Update Product
router.put('/:id', PlaceController.updatePlace);
//Delete Product
router.delete('/:id', PlaceController.deleteOnePlace);
module.exports = router;