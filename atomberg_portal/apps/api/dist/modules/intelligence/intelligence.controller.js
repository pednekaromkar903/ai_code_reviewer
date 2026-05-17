"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLegacyGoals = exports.queryIntelligence = exports.getSchema = exports.getConnection = exports.saveConnection = exports.testConnection = void 0;
const zod_1 = require("zod");
const intelligence_service_1 = require("./intelligence.service");
const chat_service_1 = require("../chat/chat.service");
const service = new intelligence_service_1.IntelligenceService();
const chatService = new chat_service_1.ChatService();
const connectSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    host: zod_1.z.string().min(1),
    port: zod_1.z.number().int().positive(),
    database: zod_1.z.string().min(1),
    username: zod_1.z.string().min(1),
    password: zod_1.z.string().optional(),
    dbType: zod_1.z.enum(['postgresql', 'mysql', 'sqlserver', 'sap_hana']).default('postgresql')
});
const testConnection = async (req, res, next) => {
    try {
        const config = connectSchema.parse(req.body);
        const result = await service.testConnection(config);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
};
exports.testConnection = testConnection;
const saveConnection = async (req, res, next) => {
    try {
        const config = connectSchema.parse(req.body);
        const conn = await service.saveConnection(config);
        res.json({ success: true, connection: conn });
    }
    catch (error) {
        next(error);
    }
};
exports.saveConnection = saveConnection;
const getConnection = async (req, res, next) => {
    try {
        const conn = await service.getActiveConnection();
        res.json({ success: true, connection: conn });
    }
    catch (error) {
        next(error);
    }
};
exports.getConnection = getConnection;
const getSchema = async (req, res, next) => {
    try {
        const schema = service.getSchema();
        res.json({ success: true, ...schema });
    }
    catch (error) {
        next(error);
    }
};
exports.getSchema = getSchema;
const queryIntelligence = async (req, res, next) => {
    try {
        const { query } = req.body;
        if (!query?.trim()) {
            return res.status(400).json({ message: 'Query is required' });
        }
        const result = await chatService.processMessage(query.trim(), req.user.id, req.user.role);
        res.json({ success: true, ...result });
    }
    catch (error) {
        next(error);
    }
};
exports.queryIntelligence = queryIntelligence;
const getLegacyGoals = async (req, res, next) => {
    try {
        const goals = await service.getLegacyGoals();
        res.json({ success: true, goals });
    }
    catch (error) {
        next(error);
    }
};
exports.getLegacyGoals = getLegacyGoals;
