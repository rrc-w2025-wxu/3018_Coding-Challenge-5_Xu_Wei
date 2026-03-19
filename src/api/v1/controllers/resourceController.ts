import { Request, Response, NextFunction } from "express";
import { successResponse } from "../models/responseModel";
import { HealthCheckResponse } from "../../../interface_properties";
import { HTTP_STATUS } from "../../../constants/httpConstants";
import * as itemService from "../services/resourceService";


/**
 * Check the health status of the service.
 *
 * GET /api/v1/health
 *
 * @param req - Express Request
 * @param res - Express Response
 */
export const itemsHealthCheck = (req: Request, res: Response): void => {
    const healthCheck:HealthCheckResponse = {
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    };
    res.status(HTTP_STATUS.OK).json(healthCheck);
}

export const getAllResourcesHandler = (req: Request,res: Response,next: NextFunction)=> {
    try{
        const items = itemService.getAllResource();
        const count: number = items.length;
        res.status(HTTP_STATUS.OK).json({ message: "Resources retrieved", count, data: items });
    }catch (error: unknown) {
        if (error instanceof Error) {
            next(error); 
        } else {
            next(new Error("Unknown error"));
        }
    }
};

export const createResourceHandler = (req: Request, res: Response) => {
  try {
    const { title, type, url, description } = req.body;

    if (!title || !type || !url || !description) {
      return res.status(400).json({ message: "Missing title, type, url or description" });
    }

    const newResource = itemService.createResource(title, type, url, description);

    return res.status(201).json(newResource);

  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(500).json({ message: `Failed to create project: ${error.message}` });
    }
    return res.status(500).json({ message: "Failed to create project: Unknown error" });
  }
};

export const getResourceHandler = (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const resource = itemService.getResource(id);

    return res.status(200).json(resource);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(404).json({ message: error.message });
    }
    return res.status(500).json({ message: "Unknown error" });
  }
};

export const updateResourceHandler = (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { title, type, url, description } = req.body;

    const resource = itemService.updateResource(id, title, type, url, description);

    return res.status(200).json(resource);
  } catch (error: unknown) {
    if (error instanceof Error) {
      if (error.message === "Resource not found") {
        return res.status(404).json({ message: error.message });
      }
      return res.status(500).json({ message: error.message });
    }
    return res.status(500).json({ message: "Unknown error" });
  }
};

export const deleteResourceHandler = (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const deletedProject = itemService.deleteResource(id);

    return res.status(200).json({
      message: "Resource deleted successfully",
      project: deletedProject,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      if (error.message === "Resource not found") {
        return res.status(404).json({ message: error.message });
      }
      return res.status(500).json({ message: error.message });
    }
    return res.status(500).json({ message: "Unknown error" });
  }
};


