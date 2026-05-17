"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const auth_routes_1 = __importDefault(require("./modules/auth/auth.routes"));
const goals_routes_1 = __importDefault(require("./modules/goals/goals.routes"));
const checkin_routes_1 = __importDefault(require("./modules/checkin/checkin.routes"));
const dashboard_routes_1 = __importDefault(require("./modules/dashboard/dashboard.routes"));
const ai_routes_1 = __importDefault(require("./modules/ai/ai.routes"));
const reports_routes_1 = __importDefault(require("./modules/reports/reports.routes"));
const audit_routes_1 = __importDefault(require("./modules/audit/audit.routes"));
const intelligence_routes_1 = __importDefault(require("./modules/intelligence/intelligence.routes"));
const chat_routes_1 = __importDefault(require("./modules/chat/chat.routes"));
const cycles_routes_1 = __importDefault(require("./modules/cycles/cycles.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({ origin: 'http://localhost:3000', credentials: true }));
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});
// API Routes
app.use('/api/v1/auth', auth_routes_1.default);
app.use('/api/v1/goals', goals_routes_1.default);
app.use('/api/v1/checkins', checkin_routes_1.default);
app.use('/api/v1/dashboard', dashboard_routes_1.default);
app.use('/api/v1/ai', ai_routes_1.default);
app.use('/api/v1/reports', reports_routes_1.default);
app.use('/api/v1/audit', audit_routes_1.default);
app.use('/api/v1/intelligence', intelligence_routes_1.default);
app.use('/api/v1/chat', chat_routes_1.default);
app.use('/api/v1/cycles', cycles_routes_1.default);
// 404 handler
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});
// Global error handler
app.use((err, req, res, next) => {
    console.error('[ERROR]', err);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error',
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
});
app.listen(PORT, () => {
    console.log(`🚀 Atomberg API Server running on http://localhost:${PORT}`);
    console.log(`📊 Health Check: http://localhost:${PORT}/health`);
});
