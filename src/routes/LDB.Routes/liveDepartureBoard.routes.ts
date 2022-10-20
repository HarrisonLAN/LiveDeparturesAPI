import express from "express";
import getDepartures from './getDeparture.routes';
import getArrivals from './getArrival.routes';
import getServices from './getService.routes';
import getFastest from './getFastest.routes';

const router = express.Router();

router.use('/Departures', getDepartures);
router.use('/Arrivals', getDepartures);
router.use('/Services', getDepartures);
router.use('/fastest', getDepartures);
router.use('/', getDepartures);

export default router;