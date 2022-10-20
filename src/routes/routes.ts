import express from "express";
import routes from './LDB.Routes/liveDepartureBoard.routes'

const router = express.Router();

router.use('/getLDB', routes);

export default router;