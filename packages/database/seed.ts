import { PrismaClient, Role, UoMType, GoalStatus, CheckInStatus } from '@prisma/client';
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

  console.log('✅ Base seed completed. Seeding Enterprise additions...');

  // 1. SAP Mock Data
  const sapDepts = [
    { id: '1000', name: 'B2B Sales' },
    { id: '2000', name: 'Manufacturing' },
    { id: '3000', name: 'R&D' },
    { id: '4000', name: 'Supply Chain' },
    { id: '5000', name: 'Service' },
    { id: '6000', name: 'Retail' },
  ];

  for (const dept of sapDepts) {
    await prisma.sapDepartment.create({ data: dept });
  }

  const sapEmployees = [
    { pernr: '10001234', name: 'Rajesh Kumar', orgUnit: 'MFG-PUNE-01', costCenter: 'CC-MFG-01', department: 'Manufacturing', role: 'Plant Manager', email: 'rajesh.k@atomberg.com' },
    { pernr: '10001235', name: 'Priya Sharma', orgUnit: 'SLS-B2B-MUM', costCenter: 'CC-SLS-B2B', department: 'B2B Sales', role: 'Sales Director', email: 'priya.s@atomberg.com' },
    { pernr: '10001236', name: 'Amit Patel', orgUnit: 'RD-MOTOR-BLDC', costCenter: 'CC-RD-01', department: 'R&D', role: 'Senior Engineer', email: 'amit.p@atomberg.com' },
    { pernr: '10001237', name: 'Sneha Rao', orgUnit: 'MFG-PUNE-02', costCenter: 'CC-MFG-02', department: 'Manufacturing', role: 'Production Supervisor', email: 'sneha.r@atomberg.com' },
    { pernr: '10001238', name: 'Vikram Desai', orgUnit: 'SLS-B2B-BLR', costCenter: 'CC-SLS-B2B', department: 'B2B Sales', role: 'Account Manager', email: 'vikram.d@atomberg.com' },
    { pernr: '10001239', name: 'Anjali Gupta', orgUnit: 'SCM-LOG-PUNE', costCenter: 'CC-SCM-01', department: 'Supply Chain', role: 'Logistics Lead', email: 'anjali.g@atomberg.com' },
    { pernr: '10001240', name: 'Karan Malhotra', orgUnit: 'RTL-WEST-01', costCenter: 'CC-RTL-01', department: 'Retail', role: 'Area Manager', email: 'karan.m@atomberg.com' },
  ];

  for (const emp of sapEmployees) {
    await prisma.sapEmployee.create({ data: emp });
  }

  // Production Metrics
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
  for (const month of months) {
    await prisma.sapProductionMetric.create({
      data: {
        month,
        unitsProduced: 45000 + Math.floor(Math.random() * 5000),
        efficiency: 85.5 + Math.random() * 5,
        defectRate: 0.5 + Math.random() * 0.3,
      }
    });
    await prisma.sapSalesMetric.create({
      data: {
        month,
        region: 'West',
        revenue: 120000000 + Math.floor(Math.random() * 20000000),
        channel: 'B2B'
      }
    });
    await prisma.sapSalesMetric.create({
      data: {
        month,
        region: 'South',
        revenue: 95000000 + Math.floor(Math.random() * 15000000),
        channel: 'Retail'
      }
    });
  }

  // 2. Notifications
  await prisma.notification.createMany({
    data: [
      { userId: emp1.id, title: 'BEE 7-Star Energy Standard', description: 'BEE announces new 7-star rating for BLDC fans — compliance deadline Q3 2026', type: 'tech' },
      { userId: emp1.id, title: 'Competitor Alert: Havells', description: 'Havells launches smart IoT fan series — competitive threat in B2B', type: 'tech' },
      { userId: emp1.id, title: 'Goal Deadline Approaching', description: 'Reduce Renesa motor BOM cost goal is due in 3 days.', type: 'reminder' },
      { userId: emp1.id, title: 'System Update', description: 'New Tech Radar module added to portal.', type: 'system' },
      { userId: emp1.id, title: 'Ceramic industry energy mandate', description: 'Ceramic industry energy mandate: 24/7 efficiency required by 2027', type: 'tech' },
      { userId: emp1.id, title: 'New Government Grants', description: 'New textile factory automation grants announced by government', type: 'tech' },
    ]
  });

  // 3. Calendar Events
  await prisma.calendarEvent.createMany({
    data: [
      { title: 'Q2 Goal Setting Review', date: new Date('2026-10-15'), type: 'cycle', notes: 'Review Q2 goals with management team' },
      { title: 'BLDC Efficiency Workshop', date: new Date('2026-10-20'), type: 'manual', notes: 'Internal workshop on Gen 6 motor design' },
      { title: 'B2B Sales Strategy Meeting', date: new Date('2026-10-22'), type: 'manual', notes: 'Focus on ceramic industry expansion' },
      { title: 'Goal Deadline: Renesa BOM Cost', date: new Date('2026-10-25'), type: 'goal', notes: 'Deadline for 8% cost reduction targets' },
      { title: 'Check-in: Paint Shop Rejection', date: new Date('2026-10-28'), type: 'checkin', notes: 'Bi-weekly quality review' },
    ]
  });

  // 4. Innovation Hub
  const idea1 = await prisma.innovationIdea.create({
    data: {
      title: 'Solar-Powered HVLS Fans',
      description: 'Design a High Volume Low Speed (HVLS) fan that integrates directly with factory solar grids for zero-grid-consumption ventilation.',
      submittedBy: emp1.id,
      department: 'R&D',
      upvotes: 12,
      impactScore: 9,
      status: 'IN_PROGRESS'
    }
  });

  await prisma.innovationIdea.create({
    data: {
      title: 'AI Predictive Maintenance for BLDC',
      description: 'Implement a vibration-based AI model in the IoT module to predict bearing failure 30 days in advance.',
      submittedBy: emp1.id,
      department: 'R&D',
      upvotes: 8,
      impactScore: 8,
      status: 'IDEAS'
    }
  });

  await prisma.innovationIdea.create({
    data: {
      title: 'Biodegradable Fan Blade Composites',
      description: 'Replace ABS plastic with hemp-based bio-composites to reduce carbon footprint by 40%.',
      submittedBy: emp2.id,
      department: 'Manufacturing',
      upvotes: 15,
      impactScore: 7,
      status: 'IDEAS'
    }
  });

  // 5. Tech Radar
  await prisma.techRadarEntry.createMany({
    data: [
      { name: 'Next-Gen BLDC Motors', relevanceScore: 9, adoptionStage: 'Scaling', description: 'High-efficiency motor designs with 90%+ power factor.', impact: 'Direct reduction in BOM cost and energy savings.', adaptationPlan: 'Scale manufacturing in Pune Line 03 by Q1 2027.' },
      { name: 'IoT Smart Fan Ecosystems', relevanceScore: 8, adoptionStage: 'Pilot', description: 'Cloud-connected fans with mobile app and voice control.', impact: 'Increased ASP and customer loyalty.', adaptationPlan: 'Pilot in 500 households in Bangalore.' },
      { name: 'AI Predictive Maintenance', relevanceScore: 7, adoptionStage: 'Research', description: 'AI models to predict hardware failure.', impact: 'Reduced service costs and higher uptime for B2B.', adaptationPlan: 'Research phase with IIT Bombay.' },
      { name: 'BEE 7-Star Energy Standards', relevanceScore: 10, adoptionStage: 'Mandatory', description: 'Upcoming government mandate for maximum energy efficiency.', impact: 'Critical for market access.', adaptationPlan: 'Redesign all core models to meet 7-star by 2026.' },
      { name: 'Digital Twin Manufacturing', relevanceScore: 6, adoptionStage: 'Research', description: 'Virtual replicas of production lines.', impact: 'Optimized throughput and reduced downtime.', adaptationPlan: 'Evaluate vendors for Pune Line 01.' },
      { name: 'Sustainable Composite Materials', relevanceScore: 7, adoptionStage: 'Pilot', description: 'Eco-friendly materials for fan blades.', impact: 'ESG compliance and brand image.', adaptationPlan: 'Pilot with recycled ocean plastics.' },
      { name: 'B2B Energy-as-a-Service', relevanceScore: 8, adoptionStage: 'Scaling', description: 'Subscription model for industrial cooling.', impact: 'Stable recurring revenue.', adaptationPlan: 'Expand to 50+ textile factories.' },
      { name: 'BLE 5.3 Mesh Networks', relevanceScore: 9, adoptionStage: 'Adopted', description: 'Low energy communication for multi-fan control.', impact: 'Seamless B2B control for large halls.', adaptationPlan: 'Implemented in all industrial HVLS models.' },
    ]
  });

  // 6. Email Intelligence Seed
  const integration = await prisma.emailIntegration.create({
    data: {
      userId: manager2.id,
      email: 'support@atomberg.com',
      provider: 'GMAIL',
      accessToken: 'seed_token_123',
      isActive: true
    }
  });

  const mockEmails = [
    {
      sender: 'rahul.m@gmail.com',
      subject: 'Noise issue in my Renesa fan',
      body: 'My Efficio fan is making grinding noise after 2 months of use. It is very loud at night. Please help.',
      category: 'NOISE_MOTOR',
      sentiment: 'FRUSTRATED',
      priority: 'HIGH',
      isComplaint: true,
      receivedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
    },
    {
      sender: 'priyanka.v@yahoo.com',
      subject: 'Delivery delayed for Order #8821',
      body: 'Delivery was 5 days late, and when it arrived, the box was damaged. I haven\'t opened it yet.',
      category: 'DELIVERY',
      sentiment: 'ANGRY',
      priority: 'HIGH',
      isComplaint: true,
      receivedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
    },
    {
      sender: 'suresh.k@outlook.com',
      subject: 'App connectivity issues',
      body: 'The Atomberg app keeps disconnecting from my Renesa fan every time I restart my phone.',
      category: 'SMART_FEATURES',
      sentiment: 'FRUSTRATED',
      priority: 'MEDIUM',
      isComplaint: true,
      receivedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)
    },
    {
      sender: 'meena.s@gmail.com',
      subject: 'Installation team no-show',
      body: 'I scheduled an installation for yesterday 2 PM, but the team didn\'t show up or call.',
      category: 'INSTALLATION',
      sentiment: 'ANGRY',
      priority: 'HIGH',
      isComplaint: true,
      receivedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000)
    },
    {
      sender: 'karan.j@gmail.com',
      subject: 'Double billing for my mixer grinder',
      body: 'I was billed twice for the same order on your website. Please refund the extra amount.',
      category: 'BILLING',
      sentiment: 'FRUSTRATED',
      priority: 'HIGH',
      isComplaint: true,
      receivedAt: new Date(Date.now() - 12 * 60 * 60 * 1000)
    },
    {
      sender: 'anita.p@gmail.com',
      subject: 'Warranty claim for dead fan',
      body: 'My fan stopped working suddenly. It is still within the warranty period. How do I claim?',
      category: 'WARRANTY',
      sentiment: 'ANGRY',
      priority: 'HIGH',
      isComplaint: true,
      receivedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
    },
    {
      sender: 'deepak.r@gmail.com',
      subject: 'Love the new Studio series!',
      body: 'Great product, very silent and the air throw is amazing. Very happy with the purchase.',
      category: 'PRODUCT_QUALITY',
      sentiment: 'SATISFIED',
      priority: 'LOW',
      isComplaint: false,
      receivedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000)
    }
  ];

  for (const email of mockEmails) {
    await prisma.customerEmail.create({
      data: {
        ...email,
        integrationId: integration.id
      }
    });
  }

  console.log('✅ All seeds completed successfully!');
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
