import { Router } from "express";
import { getShortestPath } from "../controllers/path.controller";

const router = Router();

router.post("/algorithm", getShortestPath as any);

export default router;
