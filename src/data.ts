import { Resource } from "../src/interface_properties";

/**
 * Hardcoded sample project data
 */
export const resources: Resource[] = [
  {
    id: 1,
    title: 'Express.js Guide',
    type: 'documentation',
    url: 'https://expressjs.com/en/guide',
    description: 'Official Express.js documentation',
    createdAt: new Date().toISOString(), // Using current timestamp
  },
  {
    id: 2,
    title: 'TypeScript Basics',
    type: 'video',
    url: 'https://example.com/ts-basics',
    description: 'Introduction to TypeScript',
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    title: 'REST API Design',
    type: 'article',
    url: 'https://example.com/rest-design',
    description: 'Best practices for REST API design',
    createdAt: new Date().toISOString(),
  },
  {
    id: 4,
    title: 'Jest Testing Tutorial',
    type: 'tutorial',
    url: 'https://example.com/jest-tutorial',
    description: 'Complete guide to testing with Jest',
    createdAt: new Date().toISOString(),
  },
];