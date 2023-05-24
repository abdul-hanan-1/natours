const express = require('express');
const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  validateId,
} = require('./../controllers/tourController');

const router = express.Router();
router.param('id', validateId);

router.route('/').get(getAllTours).post(createTour);
router.route('/:id').get(getTour).patch(updateTour);

module.exports = router;
