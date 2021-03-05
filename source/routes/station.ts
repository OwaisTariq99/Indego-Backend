/**
 * Station routes
 */

import express from 'express';
import controller from '../controllers/station';
import verifyToken from '../services/verifyToken';

const router = express.Router();

router.post('/indego-data-fetch-and-store-it-db', verifyToken, controller.createStation);
router.get('/stations/:at', verifyToken, controller.getWeatherAndStationData);
router.get('/stations/:at/:kioskId', verifyToken, controller.getWeatherAndStationDataByKioskId);

export = router;
