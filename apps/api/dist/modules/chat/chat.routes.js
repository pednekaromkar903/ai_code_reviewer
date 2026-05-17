"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../../middleware/auth");
const chat_controller_1 = require("./chat.controller");
const router = (0, express_1.Router)();
router.use(auth_1.authenticate);
router.post('/query', chat_controller_1.queryChat);
exports.default = router;
