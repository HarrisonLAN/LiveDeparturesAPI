import controller from "../../controllers/getDeparture.controller";
import express from "express";
import { errHandler } from "../../middlewares/err.handler";

const router = express.Router();

router.get('/getAllDepBoardWithDetails', errHandler.asyncHandler(controller.GetArrDepBoardWithDetails));
//router.get('/getDepartureBoard', asyncHandler(controller.getDepartureBoard));
//router.get('/getDepBoardWithDetails', asyncHandler(controller.getDepBoardWithDetails));

export default router;