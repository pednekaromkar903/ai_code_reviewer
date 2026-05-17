"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ai_controller_1 = require("./ai.controller");
const auth_1 = require("../../middleware/auth");
const router = (0, express_1.Router)();
router.get('/health', async (req, res) => {
    try {
        const response = await fetch('http://localhost:11434');
        if (response.ok) {
            res.status(200).json({ status: 'ok', message: 'Ollama is running' });
        }
        else {
            throw new Error('Ollama not ok');
        }
    }
    catch (error) {
        if (process.env.GEMINI_API_KEY) {
            res.status(200).json({ status: 'ok', message: 'Gemini AI is running' });
        }
        else {
            res.status(200).json({ status: 'ok', message: 'AI service is currently in demo mode. Connect your Gemini API key in .env to enable full responses.' });
        }
    }
});
router.use(auth_1.authenticate);
router.post('/query', ai_controller_1.queryAI);
router.get('/suggestions', ai_controller_1.getSuggestions);
exports.default = router;
