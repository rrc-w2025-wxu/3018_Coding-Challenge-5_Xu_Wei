/**
 * Represents the response structure for the Health Check API.
 */
export interface HealthCheckResponse {
    status: string;
    uptime: number;
    timestamp: string;
    version: string;
}

export interface Resource {
    id: number;
    title: string;
    type: 'article' | 'video' | 'tutorial' | 'documentation';
    url: string;
    description: string;
    createdAt: string;
}
