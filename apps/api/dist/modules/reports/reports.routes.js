"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reports_controller_1 = require("./reports.controller");
const auth_1 = require("../../middleware/auth");
const router = (0, express_1.Router)();
router.use(auth_1.authenticate);
router.get('/achievement', (0, auth_1.authorize)(['MANAGER', 'ADMIN']), reports_controller_1.getAchievementReport);
exports.default = router;
