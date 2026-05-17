"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSuggestions = exports.queryAI = void 0;
const suggestion_service_1 = require("./suggestion.service");
const chat_service_1 = require("../chat/chat.service");
const chatService = new chat_service_1.ChatService();
const suggestionService = new suggestion_service_1.SuggestionService();
const queryAI = async (req, res, next) => {
    try {
        const { query } = req.body;
        const userId = req.user.id;
        const role = req.user.role;
        if (!query || query.trim().length === 0) {
            return res.status(400).json({ message: 'Query is required' });
        }
        const result = await chatService.processMessage(query.trim(), userId, role);
        res.json({ success: true, ...result });
    }
    catch (error) {
        next(error);
    }
};
exports.queryAI = queryAI;
const getSuggestions = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const role = req.user.role;
        const suggestions = await suggestionService.getSuggestions(userId, role);
        res.json({ success: true, suggestions });
    }
    catch (error) {
        next(error);
    }
};
exports.getSuggestions = getSuggestions;
