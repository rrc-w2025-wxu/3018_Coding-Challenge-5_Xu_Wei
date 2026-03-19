import express from "express";
import {
    createProjectHandler,
    getAllProjectsHandler,
    getProjectHandler,
    updateProjectHandler,
    deleteProjectHandler,
} from "../controllers/Controller";
import authenticate from "../middleware/authenticate";
import isAuthorized from "../middleware/authorize";
import { itemsHealthCheck } from "../controllers/Controller";

const router: express.Router = express.Router();


// Health check endpoint
router.get("/health", itemsHealthCheck);

router.get("/resources", 
    authenticate, 
    isAuthorized({ hasRole: ["admin", "lead", "developer"] }), 
    getAllProjectsHandler
);

router.get(
    "/resources/:id",
    authenticate,
    isAuthorized({ hasRole: ["admin", "lead", "developer"] }),
    getProjectHandler
);

router.post(
    "/resources",
    authenticate,
    isAuthorized({ hasRole: ["admin", "lead"] }),
    createProjectHandler
);

router.put(
    "/resources/:id",
    authenticate,
    isAuthorized({ hasRole: ["admin", "lead"] }),
    updateProjectHandler
);

router.delete(
    "/resources/:id",
    authenticate,
    isAuthorized({ hasRole: ["admin"] }),
    deleteProjectHandler
);

export default router;

