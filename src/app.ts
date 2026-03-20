import dotenv from "dotenv";
dotenv.config();

import express, { Express } from "express";
import helmet from "helmet";
import cors from "cors";
import setupSwagger from "../src/config/swagger";

import router from "./api/v1/routes/resourceRoutes";
// In your app.ts
import { getHelmetConfig } from "./config/helmetConfig";


// Initialize Express application
const app: Express = express();

app.use(getHelmetConfig());
app.use(cors(getCorsOptions()));
setupSwagger(app);
// Body parsing middleware
app.use(express.json());

// Define a route
app.use("/api/v1", router);

export default app;