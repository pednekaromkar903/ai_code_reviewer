import { Request, Response, NextFunction } from 'express';
import { prisma } from '../../lib/prisma';

export const getSapEmployees = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const employees = await prisma.sapEmployee.findMany();
    res.json({ success: true, employees });
  } catch (error) {
    next(error);
  }
};

export const getSapDepartments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const departments = await prisma.sapDepartment.findMany();
    res.json({ success: true, departments });
  } catch (error) {
    next(error);
  }
};

export const getSapProductionMetrics = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const metrics = await prisma.sapProductionMetric.findMany({
      orderBy: { month: 'asc' }
    });
    res.json({ success: true, metrics });
  } catch (error) {
    next(error);
  }
};

export const getSapSalesMetrics = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const metrics = await prisma.sapSalesMetric.findMany({
      orderBy: { month: 'asc' }
    });
    res.json({ success: true, metrics });
  } catch (error) {
    next(error);
  }
};

export const triggerSapSync = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Simulate a sync delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // In a real scenario, we might call external SAP APIs and update our DB.
    // Here we just return success as requested.
    res.json({ 
      success: true, 
      message: 'SAP Synchronization completed successfully',
      timestamp: new Date().toISOString(),
      stats: {
        employeesSynced: await prisma.sapEmployee.count(),
        departmentsSynced: await prisma.sapDepartment.count(),
        metricsProcessed: (await prisma.sapProductionMetric.count()) + (await prisma.sapSalesMetric.count())
      }
    });
  } catch (error) {
    next(error);
  }
};
