"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTechEntries = void 0;
const getTechEntries = async (req, res, next) => {
    try {
        const MOCK_ENTRIES = [
            { id: "1", technology: "Computer Vision API", category: "AI/ML", status: "Adopt", description: "For automated defect detection on motor assembly lines.", impact: "High", relevanceScore: 9 },
            { id: "2", technology: "Next.js 14 App Router", category: "Frontend", status: "Adopt", description: "Standardized frontend framework for internal portals.", impact: "Medium", relevanceScore: 8 },
            { id: "3", technology: "GraphQL Federation", category: "Backend", status: "Assess", description: "Evaluate for unified API layer across SAP and custom apps.", impact: "High", relevanceScore: 7 },
            { id: "4", technology: "IoT Edge Computing", category: "Hardware", status: "Trial", description: "Running logic directly on smart mixers and fans.", impact: "High", relevanceScore: 8 },
            { id: "5", technology: "WebAssembly", category: "Frontend", status: "Hold", description: "No immediate use case for our current web portals.", impact: "Low", relevanceScore: 3 },
            { id: "6", technology: "Matter Protocol", category: "IoT", status: "Assess", description: "Standardizing smart home integration for our devices.", impact: "High", relevanceScore: 9 },
            { id: "7", technology: "PostgreSQL Vector DB", category: "Data", status: "Trial", description: "For internal AI semantic search and chatbot.", impact: "Medium", relevanceScore: 7 },
            { id: "8", technology: "Solid State Batteries", category: "Hardware", status: "Hold", description: "Too early for our current product roadmap.", impact: "Low", relevanceScore: 4 },
        ];
        res.json({ success: true, entries: MOCK_ENTRIES });
    }
    catch (error) {
        next(error);
    }
};
exports.getTechEntries = getTechEntries;
