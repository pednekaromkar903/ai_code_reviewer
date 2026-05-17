
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  passwordHash: 'passwordHash',
  name: 'name',
  role: 'role',
  departmentId: 'departmentId',
  managerId: 'managerId',
  isActive: 'isActive',
  createdAt: 'createdAt'
};

exports.Prisma.DepartmentScalarFieldEnum = {
  id: 'id',
  name: 'name',
  thrustArea: 'thrustArea',
  categoryLifecycle: 'categoryLifecycle'
};

exports.Prisma.GoalCycleScalarFieldEnum = {
  id: 'id',
  name: 'name',
  phase: 'phase',
  status: 'status',
  startDate: 'startDate',
  endDate: 'endDate'
};

exports.Prisma.GoalScalarFieldEnum = {
  id: 'id',
  cycleId: 'cycleId',
  employeeId: 'employeeId',
  title: 'title',
  description: 'description',
  thrustArea: 'thrustArea',
  uomType: 'uomType',
  targetValue: 'targetValue',
  actualValue: 'actualValue',
  weightage: 'weightage',
  status: 'status',
  categoryType: 'categoryType',
  channelType: 'channelType',
  isShared: 'isShared',
  parentGoalId: 'parentGoalId',
  lockedAt: 'lockedAt',
  approvedBy: 'approvedBy',
  approvedAt: 'approvedAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CheckInScalarFieldEnum = {
  id: 'id',
  goalId: 'goalId',
  cycleId: 'cycleId',
  quarter: 'quarter',
  plannedValue: 'plannedValue',
  actualValue: 'actualValue',
  status: 'status',
  managerComment: 'managerComment',
  computedScore: 'computedScore',
  checkInDate: 'checkInDate'
};

exports.Prisma.AuditLogScalarFieldEnum = {
  id: 'id',
  goalId: 'goalId',
  changedBy: 'changedBy',
  fieldName: 'fieldName',
  oldValue: 'oldValue',
  newValue: 'newValue',
  actionType: 'actionType',
  ipAddress: 'ipAddress',
  changedAt: 'changedAt'
};

exports.Prisma.EscalationScalarFieldEnum = {
  id: 'id',
  triggerType: 'triggerType',
  triggeredForId: 'triggeredForId',
  escalationLevel: 'escalationLevel',
  message: 'message',
  isResolved: 'isResolved',
  createdAt: 'createdAt',
  resolvedAt: 'resolvedAt'
};

exports.Prisma.ChatMessageScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  role: 'role',
  content: 'content',
  intentType: 'intentType',
  metadata: 'metadata',
  createdAt: 'createdAt'
};

exports.Prisma.DbConnectionScalarFieldEnum = {
  id: 'id',
  name: 'name',
  dbType: 'dbType',
  host: 'host',
  port: 'port',
  database: 'database',
  username: 'username',
  isActive: 'isActive',
  isReadOnly: 'isReadOnly',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ManufacturingDailyScalarFieldEnum = {
  id: 'id',
  date: 'date',
  lineId: 'lineId',
  unitsProduced: 'unitsProduced',
  rejectionRate: 'rejectionRate',
  energyKwh: 'energyKwh'
};

exports.Prisma.SalesMonthlyScalarFieldEnum = {
  id: 'id',
  month: 'month',
  channel: 'channel',
  revenue: 'revenue',
  unitsSold: 'unitsSold',
  region: 'region'
};

exports.Prisma.LegacyEmployeeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  department: 'department',
  managerId: 'managerId',
  role: 'role'
};

exports.Prisma.LegacyGoalScalarFieldEnum = {
  id: 'id',
  employeeId: 'employeeId',
  title: 'title',
  target: 'target',
  actual: 'actual',
  quarter: 'quarter'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Role = exports.$Enums.Role = {
  EMPLOYEE: 'EMPLOYEE',
  MANAGER: 'MANAGER',
  ADMIN: 'ADMIN'
};

exports.UoMType = exports.$Enums.UoMType = {
  MIN: 'MIN',
  MAX: 'MAX',
  TIMELINE: 'TIMELINE',
  ZERO: 'ZERO'
};

exports.GoalStatus = exports.$Enums.GoalStatus = {
  NOT_STARTED: 'NOT_STARTED',
  ON_TRACK: 'ON_TRACK',
  COMPLETED: 'COMPLETED',
  PENDING: 'PENDING'
};

exports.CheckInStatus = exports.$Enums.CheckInStatus = {
  NOT_STARTED: 'NOT_STARTED',
  ON_TRACK: 'ON_TRACK',
  COMPLETED: 'COMPLETED'
};

exports.Prisma.ModelName = {
  User: 'User',
  Department: 'Department',
  GoalCycle: 'GoalCycle',
  Goal: 'Goal',
  CheckIn: 'CheckIn',
  AuditLog: 'AuditLog',
  Escalation: 'Escalation',
  ChatMessage: 'ChatMessage',
  DbConnection: 'DbConnection',
  ManufacturingDaily: 'ManufacturingDaily',
  SalesMonthly: 'SalesMonthly',
  LegacyEmployee: 'LegacyEmployee',
  LegacyGoal: 'LegacyGoal'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
