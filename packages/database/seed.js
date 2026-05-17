const { PrismaClient } = require('./prisma/client');
const { Role } = require('./prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Clean up users and departments (keep minimal to avoid referencing models that may not exist)
  try {
    await prisma.user.deleteMany();
  } catch (e) {
    // ignore if model/table doesn't exist yet
  }
  try {
    await prisma.department.deleteMany();
  } catch (e) {
    // ignore
  }

  const deptRnD = await prisma.department.create({
    data: { name: 'R&D', thrustArea: 'Product Innovation', categoryLifecycle: 'MATURE' }
  });
  const deptMfg = await prisma.department.create({
    data: { name: 'Manufacturing', thrustArea: 'Operational Excellence', categoryLifecycle: 'MATURE' }
  });
  const deptB2B = await prisma.department.create({
    data: { name: 'B2B Sales', thrustArea: 'Industrial Growth', categoryLifecycle: 'GROWTH' }
  });

  const hash = bcrypt.hashSync('password123', 10);

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

  console.log('✅ Seed completed successfully!');
  console.log('\n🔑 Demo Credentials:');
  console.log('Admin: admin@atomberg.com / password123');
  console.log('Manager (Mfg): manager1@atomberg.com / password123');
  console.log('Manager (B2B): manager2@atomberg.com / password123');
  console.log('Employee (R&D): employee1@atomberg.com / password123');
  console.log('Employee (Mfg): employee2@atomberg.com / password123');
  console.log('Employee (B2B): employee3@atomberg.com / password123');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
