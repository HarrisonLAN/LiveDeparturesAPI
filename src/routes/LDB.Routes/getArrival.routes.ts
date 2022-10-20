import controller from "../../controllers/getArrival.controller";
import express from "express";
import { errHandler } from "../../middlewares/err.handler";

const router = express.Router();

router.get('/allDetails', errHandler.asyncHandler(controller.GetArrBoardWithDetails));
router.get('/Board', errHandler.asyncHandler(controller.GetArrivalBoard));

export default router;