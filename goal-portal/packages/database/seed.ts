import { PrismaClient, Role, CategoryLifecycle, GoalPhase, GoalStatus, UomType, GoalProgressStatus, CategoryType, ActionType, AIInteractionRole } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('password123', 10);

  // 1. Create Departments
  const rnd = await prisma.department.create({
    data: {
      name: 'R&D',
      thrustArea: 'Product Innovation',
      categoryLifecycle: 'GROWTH',
    },
  });

  const manufacturing = await prisma.department.create({
    data: {
      name: 'Manufacturing',
      thrustArea: 'Operational Excellence',
      categoryLifecycle: 'MATURE',
    },
  });

  const b2b = await prisma.department.create({
    data: {
      name: 'B2B Sales',
      thrustArea: 'Industrial Growth',
      categoryLifecycle: 'NEW',
    },
  });

  // 2. Create Goal Cycle
  const cycle = await prisma.goalCycle.create({
    data: {
      name: 'FY2026-Q2',
      phase: 'Q2',
      status: 'ACTIVE',
      startDate: new Date('2025-07-01'),
      endDate: new Date('2026-06-30'),
    },
  });

  // 3. Create Users
  const admin = await prisma.user.create({
    data: {
      email: 'admin@atomberg.com',
      passwordHash,
      name: 'Admin User',
      role: 'ADMIN',
      departmentId: rnd.id,
    },
  });

  const managerRnd = await prisma.user.create({
    data: {
      email: 'manager1@atomberg.com',
      passwordHash,
      name: 'R&D Manager',
      role: 'MANAGER',
      departmentId: rnd.id,
    },
  });

  const managerB2b = await prisma.user.create({
    data: {
      email: 'manager2@atomberg.com',
      passwordHash,
      name: 'B2B Manager',
      role: 'MANAGER',
      departmentId: b2b.id,
    },
  });

  const employeeRnd = await prisma.user.create({
    data: {
      email: 'employee1@atomberg.com',
      passwordHash,
      name: 'R&D Engineer',
      role: 'EMPLOYEE',
      departmentId: rnd.id,
      managerId: managerRnd.id,
    },
  });

  const employeeMan = await prisma.user.create({
    data: {
      email: 'employee2@atomberg.com',
      passwordHash,
      name: 'Production Lead',
      role: 'EMPLOYEE',
      departmentId: manufacturing.id,
      managerId: managerRnd.id, // Direct report to R&D Manager for demo
    },
  });

  const employeeB2b = await prisma.user.create({
    data: {
      email: 'employee3@atomberg.com',
      passwordHash,
      name: 'Sales Executive',
      role: 'EMPLOYEE',
      departmentId: b2b.id,
      managerId: managerB2b.id,
    },
  });

  // 4. Create Goals
  const goal1 = await prisma.goal.create({
    data: {
      employeeId: employeeRnd.id,
      title: 'Reduce Renesa motor BOM cost by 8%',
      description: 'Optimize components and sourcing for Renesa motor',
      thrustArea: 'Product Innovation',
      uomType: 'MIN',
      targetValue: 8,
      actualValue: 2,
      weightage: 30,
      status: 'ON_TRACK',
      categoryType: 'RND',
    },
  });

  const goal2 = await prisma.goal.create({
    data: {
      employeeId: employeeMan.id,
      title: 'Achieve paint shop rejection rate below 0.5%',
      description: 'Implement new QA protocols in paint shop',
      thrustArea: 'Operational Excellence',
      uomType: 'MAX',
      targetValue: 0.5,
      actualValue: 0.7,
      weightage: 40,
      status: 'ON_TRACK',
      categoryType: 'MANUFACTURING',
    },
  });

  const goal3 = await prisma.goal.create({
    data: {
      employeeId: employeeB2b.id,
      title: 'Deploy 500 fans in ceramic industry',
      description: 'Expand B2B footprint in energy-intensive sectors',
      thrustArea: 'Industrial Growth',
      uomType: 'MIN',
      targetValue: 500,
      actualValue: 150,
      weightage: 30,
      status: 'ON_TRACK',
      categoryType: 'B2B',
    },
  });

  // 5. Create Check-ins
  await prisma.checkIn.create({
    data: {
      goalId: goal1.id,
      cycleId: cycle.id,
      quarter: 'Q1',
      plannedValue: 2,
      actualValue: 2,
      status: 'COMPLETED',
      computedScore: 1.0,
      managerComment: 'Good start on BOM reduction.',
    },
  });

  // 6. Create Audit Log
  await prisma.auditLog.create({
    data: {
      goalId: goal1.id,
      changedBy: admin.id,
      fieldName: 'targetValue',
      oldValue: '10',
      newValue: '8',
      actionType: 'UNLOCK',
    },
  });

  console.log('Seed data created successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
