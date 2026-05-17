import { Request, Response, NextFunction } from 'express';
import { prisma } from '../../lib/prisma';

export const getCalendarEvents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const goals = await prisma.goal.findMany({
      include: { employee: { select: { department: true } } }
    });
    
    const checkins = await prisma.checkIn.findMany();
    const cycles = await prisma.goalCycle.findMany();

    const formattedEvents: any[] = [];

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
  } catch (error) {
    next(error);
  }
};

export const createCalendarEvent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, date, type, notes } = req.body;
    const event = await prisma.calendarEvent.create({
      data: { title, date: new Date(date), type, notes }
    });
    res.status(201).json({ success: true, event });
  } catch (error) {
    next(error);
  }
};
