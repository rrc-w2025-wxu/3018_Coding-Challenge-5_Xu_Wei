import express from "express";
import {
    createResourceHandler,
    getAllResourcesHandler,
    getResourceHandler,
    updateResourceHandler,
    deleteResourceHandler,
} from "../controllers/resourceController";
import { itemsHealthCheck } from "../controllers/resourceController";

const router: express.Router = express.Router();


// Health check endpoint
router.get("/health", itemsHealthCheck);

router.get("/resources", getAllResourcesHandler);

router.get("/resources/:id", getResourceHandler);

router.post("/resources", createResourceHandler);

router.put("/resources/:id", updateResourceHandler);

router.delete("/resources/:id", deleteResourceHandler);

export default router;

