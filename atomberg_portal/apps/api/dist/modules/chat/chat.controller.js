"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryChat = void 0;
const chat_service_1 = require("./chat.service");
const chatService = new chat_service_1.ChatService();
const queryChat = async (req, res, next) => {
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
exports.queryChat = queryChat;
