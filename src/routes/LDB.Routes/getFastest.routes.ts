import controller from "../../controllers/getFastest.controller";
import express from "express";
import { errHandler } from "../../middlewares/err.handler";

const router = express.Router();

router.get('/Dep', errHandler.asyncHandler(controller.GetFastestDepartures));
router.get('/Details', errHandler.asyncHandler(controller.GetFastestDeparturesWithDetails));
router.get('/NextDep', errHandler.asyncHandler(controller.GetNextDepartures));
router.get('/NextDetails', errHandler.asyncHandler(controller.GetNextDeparturesWithDetails));

export default router;