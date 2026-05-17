import { PrismaClient, Role, UoMType, GoalStatus, CheckInStatus } from './prisma/client/index.js';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Clear existing data
  await prisma.chatMessage.deleteMany();
  await prisma.escalation.deleteMany();
  await prisma.auditLog.deleteMany();
  await prisma.checkIn.deleteMany();
  await prisma.legacyGoal.deleteMany();
  await prisma.legacyEmployee.deleteMany();
  await prisma.salesMonthly.deleteMany();
  await prisma.manufacturingDaily.deleteMany();
  await prisma.dbConnection.deleteMany();
  await prisma.goal.deleteMany();
  await prisma.goalCycle.deleteMany();
  await prisma.user.deleteMany();
  await prisma.department.deleteMany();

  // Create Departments
  const deptRnD = await prisma.department.create({
    data: { name: 'R&D', thrustArea: 'Product Innovation', categoryLifecycle: 'MATURE' }
  });
  const deptMfg = await prisma.department.create({
    data: { name: 'Manufacturing', thrustArea: 'Operational Excellence', categoryLifecycle: 'MATURE' }
  });
  const deptB2B = await prisma.department.create({
    data: { name: 'B2B Sales', thrustArea: 'Industrial Growth', categoryLifecycle: 'GROWTH' }
  });

  // Create Users
  const hash = await bcrypt.hash('password123', 10);

  const admin = await prisma.user.create({
    data: { email: 'admin@atomberg.com', passwordHash: hash, name: 'Admin User', role: Role.ADMIN, departmentId: deptRnD.id }
  });

  const manager1 = await prisma.user.create({
    data: { email: 'manager1@atomberg.com', passwordHash: hash, name: 'Rajesh Kumar', role: Role.MANAGER, departmentId: deptMfg.id }
  });

  const manager2 = await prisma.user.create({
    data: { email: 'manager2@atomberg.com', passwordHash: hash, name: 'Priya Sharma', role: Role.MANAGER, departmentId: deptB2B.id }
  });

  const emp1 = await prisma.user.create({
    data: { email: 'employee1@atomberg.com', passwordHash: hash, name: 'Amit Patel', role: Role.EMPLOYEE, departmentId: deptRnD.id, managerId: manager1.id }
  });

  const emp2 = await prisma.user.create({
    data: { email: 'employee2@atomberg.com', passwordHash: hash, name: 'Sneha Rao', role: Role.EMPLOYEE, departmentId: deptMfg.id, managerId: manager1.id }
  });

  const emp3 = await prisma.user.create({
    data: { email: 'employee3@atomberg.com', passwordHash: hash, name: 'Vikram Desai', role: Role.EMPLOYEE, departmentId: deptB2B.id, managerId: manager2.id }
  });

  // Create Goal Cycle
  const cycle = await prisma.goalCycle.create({
    data: { name: 'FY2026-Q2', phase: 'Q2', status: 'ACTIVE', startDate: new Date('2026-10-01'), endDate: new Date('2026-12-31') }
  });

  // Create Goals for Amit (R&D)
  const goal1 = await prisma.goal.create({
    data: {
      employeeId: emp1.id,
      title: 'Reduce Renesa motor BOM cost by 8%',
      description: 'Optimize BLDC motor design to reduce bill of materials cost while maintaining 28W efficiency',
      thrustArea: 'Product Innovation',
      uomType: UoMType.MIN,
      targetValue: 8,
      actualValue: 5.2,
      weightage: 35,
      status: GoalStatus.ON_TRACK,
      categoryType: 'RND',
      lockedAt: new Date(),
      approvedBy: manager1.id,
      approvedAt: new Date()
    }
  });

  const goal2 = await prisma.goal.create({
    data: {
      employeeId: emp1.id,
      title: 'File 3 patents for next-gen motor topology',
      description: 'Innovative winding and magnet arrangements for Gen 6 Renesa motor',
      thrustArea: 'Product Innovation',
      uomType: UoMType.MIN,
      targetValue: 3,
      actualValue: 1,
      weightage: 25,
      status: GoalStatus.ON_TRACK,
      categoryType: 'RND',
      lockedAt: new Date(),
      approvedBy: manager1.id,
      approvedAt: new Date()
    }
  });

  const goal3 = await prisma.goal.create({
    data: {
      employeeId: emp1.id,
      title: 'Reduce motor assembly rejection rate',
      description: 'Quality improvement initiative for motor winding process',
      thrustArea: 'Operational Excellence',
      uomType: UoMType.MAX,
      targetValue: 2,
      actualValue: 1.8,
      weightage: 20,
      status: GoalStatus.COMPLETED,
      categoryType: 'RND',
      lockedAt: new Date(),
      approvedBy: manager1.id,
      approvedAt: new Date()
    }
  });

  const goal4 = await prisma.goal.create({
    data: {
      employeeId: emp1.id,
      title: 'Validate new compressor motor design for AC OEMs',
      description: 'Design validation for Godrej and Voltas compressor motor requirements',
      thrustArea: 'Product Innovation',
      uomType: UoMType.ZERO,
      targetValue: 0,
      actualValue: 0,
      weightage: 20,
      status: GoalStatus.COMPLETED,
      categoryType: 'RND',
      lockedAt: new Date(),
      approvedBy: manager1.id,
      approvedAt: new Date()
    }
  });

  // Goals for Sneha (Manufacturing)
  const goal5 = await prisma.goal.create({
    data: {
      employeeId: emp2.id,
      title: 'Achieve paint shop rejection rate below 0.5%',
      description: 'In-house paint shop quality control and process optimization',
      thrustArea: 'Operational Excellence',
      uomType: UoMType.MAX,
      targetValue: 0.5,
      actualValue: 0.8,
      weightage: 40,
      status: GoalStatus.ON_TRACK,
      categoryType: 'MANUFACTURING',
      lockedAt: new Date(),
      approvedBy: manager1.id,
      approvedAt: new Date()
    }
  });

  const goal6 = await prisma.goal.create({
    data: {
      employeeId: emp2.id,
      title: 'Increase L1 vendor procurement to 75%',
      description: 'Backward integration and direct raw material sourcing',
      thrustArea: 'Operational Excellence',
      uomType: UoMType.MIN,
      targetValue: 75,
      actualValue: 62,
      weightage: 30,
      status: GoalStatus.ON_TRACK,
      categoryType: 'MANUFACTURING',
      lockedAt: new Date(),
      approvedBy: manager1.id,
      approvedAt: new Date()
    }
  });

  const goal7 = await prisma.goal.create({
    data: {
      employeeId: emp2.id,
      title: 'Zero safety incidents in Pune facility',
      description: 'Maintain 100% safety record across all shifts',
      thrustArea: 'Operational Excellence',
      uomType: UoMType.ZERO,
      targetValue: 0,
      actualValue: 0,
      weightage: 30,
      status: GoalStatus.COMPLETED,
      categoryType: 'MANUFACTURING',
      lockedAt: new Date(),
      approvedBy: manager1.id,
      approvedAt: new Date()
    }
  });

  // Goals for Vikram (B2B)
  const goal8 = await prisma.goal.create({
    data: {
      employeeId: emp3.id,
      title: 'Deploy 500 fans in ceramic industry with 65% energy savings',
      description: 'B2B deployment to ceramic factories for 24/7 energy efficiency',
      thrustArea: 'Industrial Growth',
      uomType: UoMType.MIN,
      targetValue: 500,
      actualValue: 347,
      weightage: 35,
      status: GoalStatus.ON_TRACK,
      categoryType: 'B2B',
      channelType: 'B2B_INSTITUTIONAL',
      lockedAt: new Date(),
      approvedBy: manager2.id,
      approvedAt: new Date()
    }
  });

  const goal9 = await prisma.goal.create({
    data: {
      employeeId: emp3.id,
      title: 'Acquire 3 new textile factory contracts',
      description: 'Expand B2B footprint in textile industry for energy-efficient ventilation',
      thrustArea: 'Industrial Growth',
      uomType: UoMType.MIN,
      targetValue: 3,
      actualValue: 2,
      weightage: 25,
      status: GoalStatus.ON_TRACK,
      categoryType: 'B2B',
      channelType: 'B2B_INSTITUTIONAL',
      lockedAt: new Date(),
      approvedBy: manager2.id,
      approvedAt: new Date()
    }
  });

  const goal10 = await prisma.goal.create({
    data: {
      employeeId: emp3.id,
      title: 'Reduce B2B customer TAT to 48 hours',
      description: 'Turnaround time for B2B order fulfillment and installation',
      thrustArea: 'Operational Excellence',
      uomType: UoMType.MAX,
      targetValue: 48,
      actualValue: 52,
      weightage: 25,
      status: GoalStatus.ON_TRACK,
      categoryType: 'B2B',
      channelType: 'B2B_INSTITUTIONAL',
      lockedAt: new Date(),
      approvedBy: manager2.id,
      approvedAt: new Date()
    }
  });

  const goal11 = await prisma.goal.create({
    data: {
      employeeId: emp3.id,
      title: 'Launch mixer grinder pilot in 2 industrial canteens',
      description: 'New category market validation for commercial mixer grinder',
      thrustArea: 'Industrial Growth',
      uomType: UoMType.MIN,
      targetValue: 2,
      actualValue: 1,
      weightage: 15,
      status: GoalStatus.ON_TRACK,
      categoryType: 'B2B',
      channelType: 'B2B_INSTITUTIONAL',
      lockedAt: new Date(),
      approvedBy: manager2.id,
      approvedAt: new Date()
    }
  });

  // Create Check-ins
  await prisma.checkIn.create({
    data: { goalId: goal1.id, cycleId: cycle.id, quarter: 'Q2', plannedValue: 8, actualValue: 5.2, status: CheckInStatus.ON_TRACK, computedScore: 0.65, managerComment: 'Good progress on magnet optimization. Need to finalize vendor for new stator design.' }
  });

  await prisma.checkIn.create({
    data: { goalId: goal5.id, cycleId: cycle.id, quarter: 'Q2', plannedValue: 0.5, actualValue: 0.8, status: CheckInStatus.ON_TRACK, computedScore: 0.625, managerComment: 'Rejection rate still above target. Review paint viscosity calibration needed.' }
  });

  await prisma.checkIn.create({
    data: { goalId: goal8.id, cycleId: cycle.id, quarter: 'Q2', plannedValue: 500, actualValue: 347, status: CheckInStatus.ON_TRACK, computedScore: 0.694, managerComment: '3 deals stuck in procurement approval at client side. Escalation recommended.' }
  });

  // Create Audit Log
  await prisma.auditLog.create({
    data: { goalId: goal5.id, changedBy: admin.id, fieldName: 'targetValue', oldValue: '0.6', newValue: '0.5', actionType: 'ADMIN_UNLOCK', ipAddress: '127.0.0.1' }
  });

  // Create Escalation
  await prisma.escalation.create({
    data: { triggerType: 'CHECKIN_OVERDUE', triggeredForId: emp3.id, escalationLevel: 1, message: 'Q2 check-in pending for Vikram Desai' }
  });

  // Additional cycles for Phase 1
  await prisma.goalCycle.createMany({
    data: [
      { name: 'FY2026-Phase1', phase: 'GOAL_SETTING', status: 'CLOSED', startDate: new Date('2026-05-01'), endDate: new Date('2026-05-31') },
      { name: 'FY2026-Q1', phase: 'Q1', status: 'CLOSED', startDate: new Date('2026-07-01'), endDate: new Date('2026-07-31') },
      { name: 'FY2026-Q3', phase: 'Q3', status: 'UPCOMING', startDate: new Date('2027-01-01'), endDate: new Date('2027-01-31') },
      { name: 'FY2026-Q4', phase: 'Q4', status: 'UPCOMING', startDate: new Date('2027-03-01'), endDate: new Date('2027-04-30') },
    ]
  });

  // Default DB connection (Atomberg Legacy)
  await prisma.dbConnection.create({
    data: {
      name: 'Atomberg Legacy DB',
      dbType: 'postgresql',
      host: 'localhost',
      port: 5432,
      database: 'goal_portal',
      username: 'postgres',
      isReadOnly: true,
      isActive: true
    }
  });

  // Manufacturing: 3 lines × 30 days
  const mfgData: { date: Date; lineId: number; unitsProduced: number; rejectionRate: number; energyKwh: number }[] = [];
  const baseDate = new Date('2026-04-16');
  for (let day = 0; day < 30; day++) {
    const date = new Date(baseDate);
    date.setDate(date.getDate() + day);
    for (let line = 1; line <= 3; line++) {
      const rejectionBase = line === 3 ? 0.006 : line === 2 ? 0.0045 : 0.0038;
      mfgData.push({
        date,
        lineId: line,
        unitsProduced: 4200 + line * 180 + Math.floor(Math.random() * 400),
        rejectionRate: rejectionBase + (Math.random() * 0.002),
        energyKwh: 12500 + line * 800 + Math.random() * 500
      });
    }
  }
  await prisma.manufacturingDaily.createMany({ data: mfgData });

  // Sales: B2B/D2C × 12 months
  const salesData: { month: Date; channel: string; revenue: number; unitsSold: number; region: string }[] = [];
  for (let m = 0; m < 12; m++) {
    const month = new Date(2025, 4 + m, 1);
    salesData.push(
      { month, channel: 'B2B', revenue: 42_000_000 + m * 1_200_000, unitsSold: 8500 + m * 320, region: 'West' },
      { month, channel: 'D2C', revenue: 28_000_000 + m * 900_000, unitsSold: 12000 + m * 450, region: 'Pan-India' }
    );
  }
  await prisma.salesMonthly.createMany({ data: salesData });

  // Legacy employees (10)
  const legacyEmps = await Promise.all([
    prisma.legacyEmployee.create({ data: { name: 'Amit Patel', department: 'R&D', role: 'Engineer', managerId: null } }),
    prisma.legacyEmployee.create({ data: { name: 'Sneha Rao', department: 'Manufacturing', role: 'Supervisor', managerId: null } }),
    prisma.legacyEmployee.create({ data: { name: 'Vikram Desai', department: 'Sales', role: 'Account Manager', managerId: null } }),
    prisma.legacyEmployee.create({ data: { name: 'Rajesh Kumar', department: 'Manufacturing', role: 'Manager', managerId: null } }),
    prisma.legacyEmployee.create({ data: { name: 'Priya Sharma', department: 'Sales', role: 'Manager', managerId: null } }),
    prisma.legacyEmployee.create({ data: { name: 'Karan Mehta', department: 'R&D', role: 'Scientist', managerId: null } }),
    prisma.legacyEmployee.create({ data: { name: 'Divya Nair', department: 'Procurement', role: 'Lead', managerId: null } }),
    prisma.legacyEmployee.create({ data: { name: 'Rohit Singh', department: 'Manufacturing', role: 'Technician', managerId: null } }),
    prisma.legacyEmployee.create({ data: { name: 'Anita Joshi', department: 'Sales', role: 'Executive', managerId: null } }),
    prisma.legacyEmployee.create({ data: { name: 'Admin User', department: 'HQ', role: 'Admin', managerId: null } }),
  ]);

  const legacyGoalTitles = [
    { emp: 0, title: 'Reduce Renesa motor BOM cost by 8%', target: 8, actual: 5.2 },
    { emp: 1, title: 'Achieve paint shop rejection rate below 0.5%', target: 0.5, actual: 0.8 },
    { emp: 2, title: 'Deploy 500 fans in ceramic industry', target: 500, actual: 347 },
    { emp: 0, title: 'File 3 patents for next-gen motor topology', target: 3, actual: 1 },
    { emp: 1, title: 'Increase L1 vendor procurement to 75%', target: 75, actual: 62 },
    { emp: 1, title: 'Zero safety incidents in Pune facility', target: 0, actual: 0 },
    { emp: 2, title: 'Acquire 3 new textile factory contracts', target: 3, actual: 2 },
    { emp: 2, title: 'Reduce B2B customer TAT to 48 hours', target: 48, actual: 52 },
  ];

  for (const g of legacyGoalTitles) {
    await prisma.legacyGoal.create({
      data: {
        employeeId: legacyEmps[g.emp].id,
        title: g.title,
        target: g.target,
        actual: g.actual,
        quarter: 'Q2'
      }
    });
  }

  console.log('✅ Seed completed successfully!');
  console.log('\n🔑 Demo Credentials:');
  console.log('Admin: admin@atomberg.com / password123');
  console.log('Manager (Mfg): manager1@atomberg.com / password123');
  console.log('Manager (B2B): manager2@atomberg.com / password123');
  console.log('Employee (R&D): employee1@atomberg.com / password123');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
