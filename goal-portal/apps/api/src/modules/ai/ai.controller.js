"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSuggestions = exports.queryAI = void 0;
const ai_service_1 = require("./ai.service");
const suggestion_service_1 = require("./suggestion.service");
const aiService = new ai_service_1.AIService();
const suggestionService = new suggestion_service_1.SuggestionService();
const queryAI = async (req, res, next) => {
    try {
        const { query } = req.body;
        const userId = req.user.id;
        const role = req.user.role;
        const result = await aiService.processQuery(query, userId, role);
        res.json(result);
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
        res.json(suggestions);
    }
    catch (error) {
        next(error);
    }
};
exports.getSuggestions = getSuggestions;
