import express from "express";
import {
    createResourceHandler,
    getAllResourcesHandler,
    getResourceHandler,
    updateResourceHandler,
    deleteResourceHandler,
    itemsHealthCheck,
} from "../controllers/resourceController";

const router: express.Router = express.Router();

/**
 * @swagger
 * /api/v1/health:
 *   get:
 *     summary: Health check endpoint
 *     description: Check if the API is running
 *     responses:
 *       200:
 *         description: API is healthy
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 */
router.get("/health", itemsHealthCheck);

/**
 * @swagger
 * /api/v1/resources:
 *   get:
 *     summary: Get all resources
 *     description: Retrieve a list of all resources
 *     responses:
 *       200:
 *         description: List of resources
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                   title:
 *                     type: string
 *                   type:
 *                     type: string
 *                   url:
 *                     type: string
 *                   description:
 *                     type: string
 *                   createdAt:
 *                     type: string
 */
router.get("/resources", getAllResourcesHandler);

/**
 * @swagger
 * /api/v1/resources/{id}:
 *   get:
 *     summary: Get a resource by ID
 *     description: Retrieve a single resource by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Resource ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Resource found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       404:
 *         description: Resource not found
 */
router.get("/resources/:id", getResourceHandler);

/**
 * @swagger
 * /api/v1/resources:
 *   post:
 *     summary: Create a new resource
 *     description: Add a new resource to the library
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - type
 *               - url
 *               - description
 *             properties:
 *               title:
 *                 type: string
 *               type:
 *                 type: string
 *                 enum: [article, video, tutorial, documentation]
 *               url:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Resource created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/resources", createResourceHandler);

/**
 * @swagger
 * /api/v1/resources/{id}:
 *   put:
 *     summary: Update a resource
 *     description: Update an existing resource by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Resource ID
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               type:
 *                 type: string
 *                 enum: [article, video, tutorial, documentation]
 *               url:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Resource updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Resource not found
 */
router.put("/resources/:id", updateResourceHandler);

/**
 * @swagger
 * /api/v1/resources/{id}:
 *   delete:
 *     summary: Delete a resource
 *     description: Remove a resource by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Resource ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Resource deleted successfully
 *       404:
 *         description: Resource not found
 */
router.delete("/resources/:id", deleteResourceHandler);

export default router;
