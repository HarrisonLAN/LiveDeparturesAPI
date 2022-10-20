import controller from "../../controllers/getDeparture.controller";
import express from "express";
import { errHandler } from "../../middlewares/err.handler";

const router = express.Router();

router.get('/allDetails', errHandler.asyncHandler(controller.GetArrDepBoardWithDetails));
router.get('/Board', errHandler.asyncHandler(controller.getDepartureBoard));
router.get('/Details', errHandler.asyncHandler(controller.getDepBoardWithDetails));
router.get('/*', errHandler.asyncHandler(controller.GetArrivalDepartureBoard));

export default router;