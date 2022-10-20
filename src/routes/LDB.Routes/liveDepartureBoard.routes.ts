import express, { request } from "express";

const router = express.Router();

router.use('/getDepartures', require('./getDeparture.routes'));

export default router;