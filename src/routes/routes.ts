import express from "express";

const router = express.Router();

router.use('/getLDB', require('./LDB.Routes/liveDepartureBoard.routes'));

export default router;