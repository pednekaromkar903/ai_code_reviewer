"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const database_1 = require("@atomberg/database");
exports.prisma = new database_1.PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
});
