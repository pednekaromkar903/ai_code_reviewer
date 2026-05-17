"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCalendarEvent = exports.getCalendarEvents = void 0;
const prisma_1 = require("../../lib/prisma");
const getCalendarEvents = async (req, res, next) => {
    try {
        const goals = await prisma_1.prisma.goal.findMany({
            include: { employee: { select: { department: true } } }
        });
        const checkins = await prisma_1.prisma.checkIn.findMany();
        const cycles = await prisma_1.prisma.goalCycle.findMany();
        const formattedEvents = [];
        goals.forEach(g => {
            if (g.createdAt) { // using createdAt or any other valid date field as deadline proxy for demo if deadline doesn't exist
                formattedEvents.push({
                    id: `goal-${g.id}`,
                    title: `Deadline: ${g.title}`,
                    date: g.updatedAt, // or g.deadline if exists, using updatedAt as proxy
                    type: 'goal',
                    color: 'red',
                    description: `Department: ${g.employee?.department || 'N/A'}`
                });
            }
        });
        checkins.forEach(c => {
            if (c.checkInDate) {
                formattedEvents.push({
                    id: `checkin-${c.id}`,
                    title: `Check-in Due`,
                    date: c.checkInDate, // using checkInDate
                    type: 'checkin',
                    color: 'green',
                    description: `Status: ${c.status}`
                });
            }
        });
        cycles.forEach(c => {
            if (c.startDate && c.endDate) {
                formattedEvents.push({
                    id: `cycle-start-${c.id}`,
                    title: `Cycle Start: ${c.name}`,
                    date: c.startDate,
                    type: 'cycle',
                    color: 'purple',
                    description: 'Performance Cycle Start'
                });
                formattedEvents.push({
                    id: `cycle-end-${c.id}`,
                    title: `Cycle End: ${c.name}`,
                    date: c.endDate,
                    type: 'cycle',
                    color: 'purple',
                    description: 'Performance Cycle End'
                });
            }
        });
        res.json(formattedEvents);
    }
    catch (error) {
        next(error);
    }
};
exports.getCalendarEvents = getCalendarEvents;
const createCalendarEvent = async (req, res, next) => {
    try {
        const { title, date, type, notes } = req.body;
        const event = await prisma_1.prisma.calendarEvent.create({
            data: { title, date: new Date(date), type, notes }
        });
        res.status(201).json({ success: true, event });
    }
    catch (error) {
        next(error);
    }
};
exports.createCalendarEvent = createCalendarEvent;
