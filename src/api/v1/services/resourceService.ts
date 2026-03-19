import { resources } from "../../../data";
import { Resource } from "../../v1/../../interface_properties";

export const createResource = (title: string, type: 'article' | 'video' | 'tutorial' | 'documentation', url: string, description:string):Resource => {
    try{
        const newId = resources.length ? resources[resources.length - 1].id + 1 : 1;

        const newResource: Resource = {
        id: newId,
        title,
        type,
        url,
        description,
        createdAt: new Date().toISOString(), 
        };

        resources.push(newResource); 
        return newResource;
    }catch (error: unknown) {
        if (error instanceof Error) {
        throw new Error(`Failed to create resource: ${error.message}`);
        } else {
        throw new Error("Failed to create resource: Unknown error");
        }
    }
};

export const getAllResource = () => {
    try{
        const allReource:Resource[] = resources;
        return allReource;
    }catch (error: unknown) {
        if (error instanceof Error) {
        throw new Error(`Failed to create resource: ${error.message}`);
        } else {
        throw new Error("Failed to create resource: Unknown error");
        }
    }
};


export const getResource = (id: number): Resource => {
    try {
        const resource = resources.find(p => p.id === Number(id));
        if (!resource) throw new Error("Resource not found");
        return resource;
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(`Failed to get resource: ${error.message}`);
        } else {
            throw new Error("Failed to get resource: Unknown error");
        }
    }
};

export const updateResource = (id: number, title:string, type?: 'article' | 'video' | 'tutorial' | 'documentation', url?: string, description?:string): Resource => {
  try {
    const resource = resources.find(p => p.id === id);
    if (!resource) throw new Error("Resource not found");

    if (title) resource.title = title;
    if (type) resource.type = type;
    if (url) resource.url = url;
    if (description) resource.description = description;

    return resource;
  } catch (error: unknown) {
    if (error instanceof Error) throw new Error(`Failed to update resource: ${error.message}`);
    throw new Error("Failed to update resource: Unknown error");
  }
};

export const deleteResource = (id: number): Resource => {
  try {
    const index = resources.findIndex(p => p.id === id);
    if (index === -1) throw new Error("Project not found");

    const deleted = resources.splice(index, 1)[0];
    return deleted;
  } catch (error: unknown) {
    if (error instanceof Error) throw new Error(`Failed to delete resource: ${error.message}`);
    throw new Error("Failed to delete resource: Unknown error");
  }
};
