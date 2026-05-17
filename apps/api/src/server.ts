import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

import authRoutes from './modules/auth/auth.routes';
import goalRoutes from './modules/goals/goals.routes';
import checkinRoutes from './modules/checkin/checkin.routes';
import dashboardRoutes from './modules/dashboard/dashboard.routes';
import aiRoutes from './modules/ai/ai.routes';
import reportRoutes from './modules/reports/reports.routes';
import auditRoutes from './modules/audit/audit.routes';
import intelligenceRoutes from './modules/intelligence/intelligence.routes';
import chatRoutes from './modules/chat/chat.routes';
import cyclesRoutes from './modules/cycles/cycles.routes';
import sapRoutes from './modules/sap/sap.routes';
import calendarRoutes from './modules/calendar/calendar.routes';
import innovationRoutes from './modules/innovation/innovation.routes';
import techRadarRoutes from './modules/tech-radar/tech-radar.routes';
import emailAnalyticsRoutes from './modules/email-analytics/email-analytics.routes';
import notificationRoutes from './modules/notifications/notifications.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors({ 
  origin: 'http://localhost:3001', 
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(morgan('dev'));
app.use(express.json());

// Health check
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/goals', goalRoutes);
app.use('/api/v1/checkins', checkinRoutes);
app.use('/api/v1/dashboard', dashboardRoutes);
app.use('/api/v1/ai', aiRoutes);
app.use('/api/v1/reports', reportRoutes);
app.use('/api/v1/audit', auditRoutes);
app.use('/api/v1/intelligence', intelligenceRoutes);
app.use('/api/v1/chat', chatRoutes);
app.use('/api/v1/cycles', cyclesRoutes);
app.use('/api/v1/sap', sapRoutes);
app.use('/api/v1/calendar', calendarRoutes);
app.use('/api/v1/innovation', innovationRoutes);
app.use('/api/v1/tech-radar', techRadarRoutes);
app.use('/api/v1/email', emailAnalyticsRoutes);
app.use('/api/v1/notifications', notificationRoutes);

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
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
