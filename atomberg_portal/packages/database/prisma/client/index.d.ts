
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model GoalCycle
 * 
 */
export type GoalCycle = $Result.DefaultSelection<Prisma.$GoalCyclePayload>
/**
 * Model Goal
 * 
 */
export type Goal = $Result.DefaultSelection<Prisma.$GoalPayload>
/**
 * Model CheckIn
 * 
 */
export type CheckIn = $Result.DefaultSelection<Prisma.$CheckInPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model Escalation
 * 
 */
export type Escalation = $Result.DefaultSelection<Prisma.$EscalationPayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>
/**
 * Model DbConnection
 * 
 */
export type DbConnection = $Result.DefaultSelection<Prisma.$DbConnectionPayload>
/**
 * Model ManufacturingDaily
 * 
 */
export type ManufacturingDaily = $Result.DefaultSelection<Prisma.$ManufacturingDailyPayload>
/**
 * Model SalesMonthly
 * 
 */
export type SalesMonthly = $Result.DefaultSelection<Prisma.$SalesMonthlyPayload>
/**
 * Model LegacyEmployee
 * 
 */
export type LegacyEmployee = $Result.DefaultSelection<Prisma.$LegacyEmployeePayload>
/**
 * Model LegacyGoal
 * 
 */
export type LegacyGoal = $Result.DefaultSelection<Prisma.$LegacyGoalPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  EMPLOYEE: 'EMPLOYEE',
  MANAGER: 'MANAGER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const UoMType: {
  MIN: 'MIN',
  MAX: 'MAX',
  TIMELINE: 'TIMELINE',
  ZERO: 'ZERO'
};

export type UoMType = (typeof UoMType)[keyof typeof UoMType]


export const GoalStatus: {
  NOT_STARTED: 'NOT_STARTED',
  ON_TRACK: 'ON_TRACK',
  COMPLETED: 'COMPLETED',
  PENDING: 'PENDING'
};

export type GoalStatus = (typeof GoalStatus)[keyof typeof GoalStatus]


export const CheckInStatus: {
  NOT_STARTED: 'NOT_STARTED',
  ON_TRACK: 'ON_TRACK',
  COMPLETED: 'COMPLETED'
};

export type CheckInStatus = (typeof CheckInStatus)[keyof typeof CheckInStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type UoMType = $Enums.UoMType

export const UoMType: typeof $Enums.UoMType

export type GoalStatus = $Enums.GoalStatus

export const GoalStatus: typeof $Enums.GoalStatus

export type CheckInStatus = $Enums.CheckInStatus

export const CheckInStatus: typeof $Enums.CheckInStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs>;

  /**
   * `prisma.goalCycle`: Exposes CRUD operations for the **GoalCycle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GoalCycles
    * const goalCycles = await prisma.goalCycle.findMany()
    * ```
    */
  get goalCycle(): Prisma.GoalCycleDelegate<ExtArgs>;

  /**
   * `prisma.goal`: Exposes CRUD operations for the **Goal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Goals
    * const goals = await prisma.goal.findMany()
    * ```
    */
  get goal(): Prisma.GoalDelegate<ExtArgs>;

  /**
   * `prisma.checkIn`: Exposes CRUD operations for the **CheckIn** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CheckIns
    * const checkIns = await prisma.checkIn.findMany()
    * ```
    */
  get checkIn(): Prisma.CheckInDelegate<ExtArgs>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs>;

  /**
   * `prisma.escalation`: Exposes CRUD operations for the **Escalation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Escalations
    * const escalations = await prisma.escalation.findMany()
    * ```
    */
  get escalation(): Prisma.EscalationDelegate<ExtArgs>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs>;

  /**
   * `prisma.dbConnection`: Exposes CRUD operations for the **DbConnection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DbConnections
    * const dbConnections = await prisma.dbConnection.findMany()
    * ```
    */
  get dbConnection(): Prisma.DbConnectionDelegate<ExtArgs>;

  /**
   * `prisma.manufacturingDaily`: Exposes CRUD operations for the **ManufacturingDaily** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ManufacturingDailies
    * const manufacturingDailies = await prisma.manufacturingDaily.findMany()
    * ```
    */
  get manufacturingDaily(): Prisma.ManufacturingDailyDelegate<ExtArgs>;

  /**
   * `prisma.salesMonthly`: Exposes CRUD operations for the **SalesMonthly** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalesMonthlies
    * const salesMonthlies = await prisma.salesMonthly.findMany()
    * ```
    */
  get salesMonthly(): Prisma.SalesMonthlyDelegate<ExtArgs>;

  /**
   * `prisma.legacyEmployee`: Exposes CRUD operations for the **LegacyEmployee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LegacyEmployees
    * const legacyEmployees = await prisma.legacyEmployee.findMany()
    * ```
    */
  get legacyEmployee(): Prisma.LegacyEmployeeDelegate<ExtArgs>;

  /**
   * `prisma.legacyGoal`: Exposes CRUD operations for the **LegacyGoal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LegacyGoals
    * const legacyGoals = await prisma.legacyGoal.findMany()
    * ```
    */
  get legacyGoal(): Prisma.LegacyGoalDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "department" | "goalCycle" | "goal" | "checkIn" | "auditLog" | "escalation" | "chatMessage" | "dbConnection" | "manufacturingDaily" | "salesMonthly" | "legacyEmployee" | "legacyGoal"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      GoalCycle: {
        payload: Prisma.$GoalCyclePayload<ExtArgs>
        fields: Prisma.GoalCycleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoalCycleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalCyclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoalCycleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalCyclePayload>
          }
          findFirst: {
            args: Prisma.GoalCycleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalCyclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoalCycleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalCyclePayload>
          }
          findMany: {
            args: Prisma.GoalCycleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalCyclePayload>[]
          }
          create: {
            args: Prisma.GoalCycleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalCyclePayload>
          }
          createMany: {
            args: Prisma.GoalCycleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GoalCycleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalCyclePayload>[]
          }
          delete: {
            args: Prisma.GoalCycleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalCyclePayload>
          }
          update: {
            args: Prisma.GoalCycleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalCyclePayload>
          }
          deleteMany: {
            args: Prisma.GoalCycleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GoalCycleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GoalCycleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalCyclePayload>
          }
          aggregate: {
            args: Prisma.GoalCycleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoalCycle>
          }
          groupBy: {
            args: Prisma.GoalCycleGroupByArgs<ExtArgs>
            result: $Utils.Optional<GoalCycleGroupByOutputType>[]
          }
          count: {
            args: Prisma.GoalCycleCountArgs<ExtArgs>
            result: $Utils.Optional<GoalCycleCountAggregateOutputType> | number
          }
        }
      }
      Goal: {
        payload: Prisma.$GoalPayload<ExtArgs>
        fields: Prisma.GoalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findFirst: {
            args: Prisma.GoalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findMany: {
            args: Prisma.GoalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          create: {
            args: Prisma.GoalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          createMany: {
            args: Prisma.GoalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GoalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          delete: {
            args: Prisma.GoalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          update: {
            args: Prisma.GoalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          deleteMany: {
            args: Prisma.GoalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GoalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GoalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          aggregate: {
            args: Prisma.GoalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoal>
          }
          groupBy: {
            args: Prisma.GoalGroupByArgs<ExtArgs>
            result: $Utils.Optional<GoalGroupByOutputType>[]
          }
          count: {
            args: Prisma.GoalCountArgs<ExtArgs>
            result: $Utils.Optional<GoalCountAggregateOutputType> | number
          }
        }
      }
      CheckIn: {
        payload: Prisma.$CheckInPayload<ExtArgs>
        fields: Prisma.CheckInFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CheckInFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CheckInFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          findFirst: {
            args: Prisma.CheckInFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CheckInFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          findMany: {
            args: Prisma.CheckInFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>[]
          }
          create: {
            args: Prisma.CheckInCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          createMany: {
            args: Prisma.CheckInCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CheckInCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>[]
          }
          delete: {
            args: Prisma.CheckInDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          update: {
            args: Prisma.CheckInUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          deleteMany: {
            args: Prisma.CheckInDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CheckInUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CheckInUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          aggregate: {
            args: Prisma.CheckInAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCheckIn>
          }
          groupBy: {
            args: Prisma.CheckInGroupByArgs<ExtArgs>
            result: $Utils.Optional<CheckInGroupByOutputType>[]
          }
          count: {
            args: Prisma.CheckInCountArgs<ExtArgs>
            result: $Utils.Optional<CheckInCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      Escalation: {
        payload: Prisma.$EscalationPayload<ExtArgs>
        fields: Prisma.EscalationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EscalationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscalationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EscalationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscalationPayload>
          }
          findFirst: {
            args: Prisma.EscalationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscalationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EscalationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscalationPayload>
          }
          findMany: {
            args: Prisma.EscalationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscalationPayload>[]
          }
          create: {
            args: Prisma.EscalationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscalationPayload>
          }
          createMany: {
            args: Prisma.EscalationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EscalationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscalationPayload>[]
          }
          delete: {
            args: Prisma.EscalationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscalationPayload>
          }
          update: {
            args: Prisma.EscalationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscalationPayload>
          }
          deleteMany: {
            args: Prisma.EscalationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EscalationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EscalationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscalationPayload>
          }
          aggregate: {
            args: Prisma.EscalationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEscalation>
          }
          groupBy: {
            args: Prisma.EscalationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EscalationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EscalationCountArgs<ExtArgs>
            result: $Utils.Optional<EscalationCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
      DbConnection: {
        payload: Prisma.$DbConnectionPayload<ExtArgs>
        fields: Prisma.DbConnectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DbConnectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DbConnectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DbConnectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DbConnectionPayload>
          }
          findFirst: {
            args: Prisma.DbConnectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DbConnectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DbConnectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DbConnectionPayload>
          }
          findMany: {
            args: Prisma.DbConnectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DbConnectionPayload>[]
          }
          create: {
            args: Prisma.DbConnectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DbConnectionPayload>
          }
          createMany: {
            args: Prisma.DbConnectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DbConnectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DbConnectionPayload>[]
          }
          delete: {
            args: Prisma.DbConnectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DbConnectionPayload>
          }
          update: {
            args: Prisma.DbConnectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DbConnectionPayload>
          }
          deleteMany: {
            args: Prisma.DbConnectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DbConnectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DbConnectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DbConnectionPayload>
          }
          aggregate: {
            args: Prisma.DbConnectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDbConnection>
          }
          groupBy: {
            args: Prisma.DbConnectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DbConnectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DbConnectionCountArgs<ExtArgs>
            result: $Utils.Optional<DbConnectionCountAggregateOutputType> | number
          }
        }
      }
      ManufacturingDaily: {
        payload: Prisma.$ManufacturingDailyPayload<ExtArgs>
        fields: Prisma.ManufacturingDailyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ManufacturingDailyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturingDailyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ManufacturingDailyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturingDailyPayload>
          }
          findFirst: {
            args: Prisma.ManufacturingDailyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturingDailyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ManufacturingDailyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturingDailyPayload>
          }
          findMany: {
            args: Prisma.ManufacturingDailyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturingDailyPayload>[]
          }
          create: {
            args: Prisma.ManufacturingDailyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturingDailyPayload>
          }
          createMany: {
            args: Prisma.ManufacturingDailyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ManufacturingDailyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturingDailyPayload>[]
          }
          delete: {
            args: Prisma.ManufacturingDailyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturingDailyPayload>
          }
          update: {
            args: Prisma.ManufacturingDailyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturingDailyPayload>
          }
          deleteMany: {
            args: Prisma.ManufacturingDailyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ManufacturingDailyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ManufacturingDailyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturingDailyPayload>
          }
          aggregate: {
            args: Prisma.ManufacturingDailyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateManufacturingDaily>
          }
          groupBy: {
            args: Prisma.ManufacturingDailyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ManufacturingDailyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ManufacturingDailyCountArgs<ExtArgs>
            result: $Utils.Optional<ManufacturingDailyCountAggregateOutputType> | number
          }
        }
      }
      SalesMonthly: {
        payload: Prisma.$SalesMonthlyPayload<ExtArgs>
        fields: Prisma.SalesMonthlyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalesMonthlyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesMonthlyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalesMonthlyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesMonthlyPayload>
          }
          findFirst: {
            args: Prisma.SalesMonthlyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesMonthlyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalesMonthlyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesMonthlyPayload>
          }
          findMany: {
            args: Prisma.SalesMonthlyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesMonthlyPayload>[]
          }
          create: {
            args: Prisma.SalesMonthlyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesMonthlyPayload>
          }
          createMany: {
            args: Prisma.SalesMonthlyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalesMonthlyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesMonthlyPayload>[]
          }
          delete: {
            args: Prisma.SalesMonthlyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesMonthlyPayload>
          }
          update: {
            args: Prisma.SalesMonthlyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesMonthlyPayload>
          }
          deleteMany: {
            args: Prisma.SalesMonthlyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalesMonthlyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SalesMonthlyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesMonthlyPayload>
          }
          aggregate: {
            args: Prisma.SalesMonthlyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalesMonthly>
          }
          groupBy: {
            args: Prisma.SalesMonthlyGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalesMonthlyGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalesMonthlyCountArgs<ExtArgs>
            result: $Utils.Optional<SalesMonthlyCountAggregateOutputType> | number
          }
        }
      }
      LegacyEmployee: {
        payload: Prisma.$LegacyEmployeePayload<ExtArgs>
        fields: Prisma.LegacyEmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LegacyEmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyEmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LegacyEmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyEmployeePayload>
          }
          findFirst: {
            args: Prisma.LegacyEmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyEmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LegacyEmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyEmployeePayload>
          }
          findMany: {
            args: Prisma.LegacyEmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyEmployeePayload>[]
          }
          create: {
            args: Prisma.LegacyEmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyEmployeePayload>
          }
          createMany: {
            args: Prisma.LegacyEmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LegacyEmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyEmployeePayload>[]
          }
          delete: {
            args: Prisma.LegacyEmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyEmployeePayload>
          }
          update: {
            args: Prisma.LegacyEmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyEmployeePayload>
          }
          deleteMany: {
            args: Prisma.LegacyEmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LegacyEmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LegacyEmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyEmployeePayload>
          }
          aggregate: {
            args: Prisma.LegacyEmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLegacyEmployee>
          }
          groupBy: {
            args: Prisma.LegacyEmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<LegacyEmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.LegacyEmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<LegacyEmployeeCountAggregateOutputType> | number
          }
        }
      }
      LegacyGoal: {
        payload: Prisma.$LegacyGoalPayload<ExtArgs>
        fields: Prisma.LegacyGoalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LegacyGoalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyGoalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LegacyGoalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyGoalPayload>
          }
          findFirst: {
            args: Prisma.LegacyGoalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyGoalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LegacyGoalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyGoalPayload>
          }
          findMany: {
            args: Prisma.LegacyGoalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyGoalPayload>[]
          }
          create: {
            args: Prisma.LegacyGoalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyGoalPayload>
          }
          createMany: {
            args: Prisma.LegacyGoalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LegacyGoalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyGoalPayload>[]
          }
          delete: {
            args: Prisma.LegacyGoalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyGoalPayload>
          }
          update: {
            args: Prisma.LegacyGoalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyGoalPayload>
          }
          deleteMany: {
            args: Prisma.LegacyGoalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LegacyGoalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LegacyGoalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegacyGoalPayload>
          }
          aggregate: {
            args: Prisma.LegacyGoalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLegacyGoal>
          }
          groupBy: {
            args: Prisma.LegacyGoalGroupByArgs<ExtArgs>
            result: $Utils.Optional<LegacyGoalGroupByOutputType>[]
          }
          count: {
            args: Prisma.LegacyGoalCountArgs<ExtArgs>
            result: $Utils.Optional<LegacyGoalCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    subordinates: number
    goals: number
    auditLogs: number
    chatMessages: number
    escalations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subordinates?: boolean | UserCountOutputTypeCountSubordinatesArgs
    goals?: boolean | UserCountOutputTypeCountGoalsArgs
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
    chatMessages?: boolean | UserCountOutputTypeCountChatMessagesArgs
    escalations?: boolean | UserCountOutputTypeCountEscalationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubordinatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEscalationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EscalationWhereInput
  }


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    users: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | DepartmentCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type GoalCycleCountOutputType
   */

  export type GoalCycleCountOutputType = {
    goals: number
    checkIns: number
  }

  export type GoalCycleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goals?: boolean | GoalCycleCountOutputTypeCountGoalsArgs
    checkIns?: boolean | GoalCycleCountOutputTypeCountCheckInsArgs
  }

  // Custom InputTypes
  /**
   * GoalCycleCountOutputType without action
   */
  export type GoalCycleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalCycleCountOutputType
     */
    select?: GoalCycleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GoalCycleCountOutputType without action
   */
  export type GoalCycleCountOutputTypeCountGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
  }

  /**
   * GoalCycleCountOutputType without action
   */
  export type GoalCycleCountOutputTypeCountCheckInsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckInWhereInput
  }


  /**
   * Count Type GoalCountOutputType
   */

  export type GoalCountOutputType = {
    checkIns: number
    auditLogs: number
  }

  export type GoalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checkIns?: boolean | GoalCountOutputTypeCountCheckInsArgs
    auditLogs?: boolean | GoalCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * GoalCountOutputType without action
   */
  export type GoalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalCountOutputType
     */
    select?: GoalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GoalCountOutputType without action
   */
  export type GoalCountOutputTypeCountCheckInsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckInWhereInput
  }

  /**
   * GoalCountOutputType without action
   */
  export type GoalCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Count Type LegacyEmployeeCountOutputType
   */

  export type LegacyEmployeeCountOutputType = {
    goals: number
  }

  export type LegacyEmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goals?: boolean | LegacyEmployeeCountOutputTypeCountGoalsArgs
  }

  // Custom InputTypes
  /**
   * LegacyEmployeeCountOutputType without action
   */
  export type LegacyEmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyEmployeeCountOutputType
     */
    select?: LegacyEmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LegacyEmployeeCountOutputType without action
   */
  export type LegacyEmployeeCountOutputTypeCountGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LegacyGoalWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    role: $Enums.Role | null
    departmentId: string | null
    managerId: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    role: $Enums.Role | null
    departmentId: string | null
    managerId: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    name: number
    role: number
    departmentId: number
    managerId: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    departmentId?: true
    managerId?: true
    isActive?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    departmentId?: true
    managerId?: true
    isActive?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    departmentId?: true
    managerId?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    departmentId: string
    managerId: string | null
    isActive: boolean
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    departmentId?: boolean
    managerId?: boolean
    isActive?: boolean
    createdAt?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
    subordinates?: boolean | User$subordinatesArgs<ExtArgs>
    goals?: boolean | User$goalsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    chatMessages?: boolean | User$chatMessagesArgs<ExtArgs>
    escalations?: boolean | User$escalationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    departmentId?: boolean
    managerId?: boolean
    isActive?: boolean
    createdAt?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    departmentId?: boolean
    managerId?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
    subordinates?: boolean | User$subordinatesArgs<ExtArgs>
    goals?: boolean | User$goalsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    chatMessages?: boolean | User$chatMessagesArgs<ExtArgs>
    escalations?: boolean | User$escalationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      department: Prisma.$DepartmentPayload<ExtArgs>
      manager: Prisma.$UserPayload<ExtArgs> | null
      subordinates: Prisma.$UserPayload<ExtArgs>[]
      goals: Prisma.$GoalPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
      chatMessages: Prisma.$ChatMessagePayload<ExtArgs>[]
      escalations: Prisma.$EscalationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      name: string
      role: $Enums.Role
      departmentId: string
      managerId: string | null
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    department<T extends DepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentDefaultArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    manager<T extends User$managerArgs<ExtArgs> = {}>(args?: Subset<T, User$managerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    subordinates<T extends User$subordinatesArgs<ExtArgs> = {}>(args?: Subset<T, User$subordinatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    goals<T extends User$goalsArgs<ExtArgs> = {}>(args?: Subset<T, User$goalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany"> | Null>
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany"> | Null>
    chatMessages<T extends User$chatMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$chatMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany"> | Null>
    escalations<T extends User$escalationsArgs<ExtArgs> = {}>(args?: Subset<T, User$escalationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EscalationPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly departmentId: FieldRef<"User", 'String'>
    readonly managerId: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.manager
   */
  export type User$managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * User.subordinates
   */
  export type User$subordinatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.goals
   */
  export type User$goalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    cursor?: GoalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * User.chatMessages
   */
  export type User$chatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * User.escalations
   */
  export type User$escalationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escalation
     */
    select?: EscalationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscalationInclude<ExtArgs> | null
    where?: EscalationWhereInput
    orderBy?: EscalationOrderByWithRelationInput | EscalationOrderByWithRelationInput[]
    cursor?: EscalationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EscalationScalarFieldEnum | EscalationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentMinAggregateOutputType = {
    id: string | null
    name: string | null
    thrustArea: string | null
    categoryLifecycle: string | null
  }

  export type DepartmentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    thrustArea: string | null
    categoryLifecycle: string | null
  }

  export type DepartmentCountAggregateOutputType = {
    id: number
    name: number
    thrustArea: number
    categoryLifecycle: number
    _all: number
  }


  export type DepartmentMinAggregateInputType = {
    id?: true
    name?: true
    thrustArea?: true
    categoryLifecycle?: true
  }

  export type DepartmentMaxAggregateInputType = {
    id?: true
    name?: true
    thrustArea?: true
    categoryLifecycle?: true
  }

  export type DepartmentCountAggregateInputType = {
    id?: true
    name?: true
    thrustArea?: true
    categoryLifecycle?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    id: string
    name: string
    thrustArea: string
    categoryLifecycle: string
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    thrustArea?: boolean
    categoryLifecycle?: boolean
    users?: boolean | Department$usersArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    thrustArea?: boolean
    categoryLifecycle?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectScalar = {
    id?: boolean
    name?: boolean
    thrustArea?: boolean
    categoryLifecycle?: boolean
  }

  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Department$usersArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      thrustArea: string
      categoryLifecycle: string
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentWithIdOnly = await prisma.department.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {DepartmentCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Department$usersArgs<ExtArgs> = {}>(args?: Subset<T, Department$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Department model
   */ 
  interface DepartmentFieldRefs {
    readonly id: FieldRef<"Department", 'String'>
    readonly name: FieldRef<"Department", 'String'>
    readonly thrustArea: FieldRef<"Department", 'String'>
    readonly categoryLifecycle: FieldRef<"Department", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department createManyAndReturn
   */
  export type DepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
  }

  /**
   * Department.users
   */
  export type Department$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Model GoalCycle
   */

  export type AggregateGoalCycle = {
    _count: GoalCycleCountAggregateOutputType | null
    _min: GoalCycleMinAggregateOutputType | null
    _max: GoalCycleMaxAggregateOutputType | null
  }

  export type GoalCycleMinAggregateOutputType = {
    id: string | null
    name: string | null
    phase: string | null
    status: string | null
    startDate: Date | null
    endDate: Date | null
  }

  export type GoalCycleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phase: string | null
    status: string | null
    startDate: Date | null
    endDate: Date | null
  }

  export type GoalCycleCountAggregateOutputType = {
    id: number
    name: number
    phase: number
    status: number
    startDate: number
    endDate: number
    _all: number
  }


  export type GoalCycleMinAggregateInputType = {
    id?: true
    name?: true
    phase?: true
    status?: true
    startDate?: true
    endDate?: true
  }

  export type GoalCycleMaxAggregateInputType = {
    id?: true
    name?: true
    phase?: true
    status?: true
    startDate?: true
    endDate?: true
  }

  export type GoalCycleCountAggregateInputType = {
    id?: true
    name?: true
    phase?: true
    status?: true
    startDate?: true
    endDate?: true
    _all?: true
  }

  export type GoalCycleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GoalCycle to aggregate.
     */
    where?: GoalCycleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoalCycles to fetch.
     */
    orderBy?: GoalCycleOrderByWithRelationInput | GoalCycleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoalCycleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoalCycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoalCycles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GoalCycles
    **/
    _count?: true | GoalCycleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoalCycleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoalCycleMaxAggregateInputType
  }

  export type GetGoalCycleAggregateType<T extends GoalCycleAggregateArgs> = {
        [P in keyof T & keyof AggregateGoalCycle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoalCycle[P]>
      : GetScalarType<T[P], AggregateGoalCycle[P]>
  }




  export type GoalCycleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalCycleWhereInput
    orderBy?: GoalCycleOrderByWithAggregationInput | GoalCycleOrderByWithAggregationInput[]
    by: GoalCycleScalarFieldEnum[] | GoalCycleScalarFieldEnum
    having?: GoalCycleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoalCycleCountAggregateInputType | true
    _min?: GoalCycleMinAggregateInputType
    _max?: GoalCycleMaxAggregateInputType
  }

  export type GoalCycleGroupByOutputType = {
    id: string
    name: string
    phase: string
    status: string
    startDate: Date
    endDate: Date
    _count: GoalCycleCountAggregateOutputType | null
    _min: GoalCycleMinAggregateOutputType | null
    _max: GoalCycleMaxAggregateOutputType | null
  }

  type GetGoalCycleGroupByPayload<T extends GoalCycleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoalCycleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoalCycleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoalCycleGroupByOutputType[P]>
            : GetScalarType<T[P], GoalCycleGroupByOutputType[P]>
        }
      >
    >


  export type GoalCycleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phase?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    goals?: boolean | GoalCycle$goalsArgs<ExtArgs>
    checkIns?: boolean | GoalCycle$checkInsArgs<ExtArgs>
    _count?: boolean | GoalCycleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goalCycle"]>

  export type GoalCycleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phase?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
  }, ExtArgs["result"]["goalCycle"]>

  export type GoalCycleSelectScalar = {
    id?: boolean
    name?: boolean
    phase?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
  }

  export type GoalCycleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goals?: boolean | GoalCycle$goalsArgs<ExtArgs>
    checkIns?: boolean | GoalCycle$checkInsArgs<ExtArgs>
    _count?: boolean | GoalCycleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GoalCycleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GoalCyclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GoalCycle"
    objects: {
      goals: Prisma.$GoalPayload<ExtArgs>[]
      checkIns: Prisma.$CheckInPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phase: string
      status: string
      startDate: Date
      endDate: Date
    }, ExtArgs["result"]["goalCycle"]>
    composites: {}
  }

  type GoalCycleGetPayload<S extends boolean | null | undefined | GoalCycleDefaultArgs> = $Result.GetResult<Prisma.$GoalCyclePayload, S>

  type GoalCycleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GoalCycleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GoalCycleCountAggregateInputType | true
    }

  export interface GoalCycleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GoalCycle'], meta: { name: 'GoalCycle' } }
    /**
     * Find zero or one GoalCycle that matches the filter.
     * @param {GoalCycleFindUniqueArgs} args - Arguments to find a GoalCycle
     * @example
     * // Get one GoalCycle
     * const goalCycle = await prisma.goalCycle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GoalCycleFindUniqueArgs>(args: SelectSubset<T, GoalCycleFindUniqueArgs<ExtArgs>>): Prisma__GoalCycleClient<$Result.GetResult<Prisma.$GoalCyclePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one GoalCycle that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GoalCycleFindUniqueOrThrowArgs} args - Arguments to find a GoalCycle
     * @example
     * // Get one GoalCycle
     * const goalCycle = await prisma.goalCycle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GoalCycleFindUniqueOrThrowArgs>(args: SelectSubset<T, GoalCycleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GoalCycleClient<$Result.GetResult<Prisma.$GoalCyclePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first GoalCycle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalCycleFindFirstArgs} args - Arguments to find a GoalCycle
     * @example
     * // Get one GoalCycle
     * const goalCycle = await prisma.goalCycle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GoalCycleFindFirstArgs>(args?: SelectSubset<T, GoalCycleFindFirstArgs<ExtArgs>>): Prisma__GoalCycleClient<$Result.GetResult<Prisma.$GoalCyclePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first GoalCycle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalCycleFindFirstOrThrowArgs} args - Arguments to find a GoalCycle
     * @example
     * // Get one GoalCycle
     * const goalCycle = await prisma.goalCycle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GoalCycleFindFirstOrThrowArgs>(args?: SelectSubset<T, GoalCycleFindFirstOrThrowArgs<ExtArgs>>): Prisma__GoalCycleClient<$Result.GetResult<Prisma.$GoalCyclePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more GoalCycles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalCycleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GoalCycles
     * const goalCycles = await prisma.goalCycle.findMany()
     * 
     * // Get first 10 GoalCycles
     * const goalCycles = await prisma.goalCycle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const goalCycleWithIdOnly = await prisma.goalCycle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GoalCycleFindManyArgs>(args?: SelectSubset<T, GoalCycleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalCyclePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a GoalCycle.
     * @param {GoalCycleCreateArgs} args - Arguments to create a GoalCycle.
     * @example
     * // Create one GoalCycle
     * const GoalCycle = await prisma.goalCycle.create({
     *   data: {
     *     // ... data to create a GoalCycle
     *   }
     * })
     * 
     */
    create<T extends GoalCycleCreateArgs>(args: SelectSubset<T, GoalCycleCreateArgs<ExtArgs>>): Prisma__GoalCycleClient<$Result.GetResult<Prisma.$GoalCyclePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many GoalCycles.
     * @param {GoalCycleCreateManyArgs} args - Arguments to create many GoalCycles.
     * @example
     * // Create many GoalCycles
     * const goalCycle = await prisma.goalCycle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GoalCycleCreateManyArgs>(args?: SelectSubset<T, GoalCycleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GoalCycles and returns the data saved in the database.
     * @param {GoalCycleCreateManyAndReturnArgs} args - Arguments to create many GoalCycles.
     * @example
     * // Create many GoalCycles
     * const goalCycle = await prisma.goalCycle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GoalCycles and only return the `id`
     * const goalCycleWithIdOnly = await prisma.goalCycle.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GoalCycleCreateManyAndReturnArgs>(args?: SelectSubset<T, GoalCycleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalCyclePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a GoalCycle.
     * @param {GoalCycleDeleteArgs} args - Arguments to delete one GoalCycle.
     * @example
     * // Delete one GoalCycle
     * const GoalCycle = await prisma.goalCycle.delete({
     *   where: {
     *     // ... filter to delete one GoalCycle
     *   }
     * })
     * 
     */
    delete<T extends GoalCycleDeleteArgs>(args: SelectSubset<T, GoalCycleDeleteArgs<ExtArgs>>): Prisma__GoalCycleClient<$Result.GetResult<Prisma.$GoalCyclePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one GoalCycle.
     * @param {GoalCycleUpdateArgs} args - Arguments to update one GoalCycle.
     * @example
     * // Update one GoalCycle
     * const goalCycle = await prisma.goalCycle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GoalCycleUpdateArgs>(args: SelectSubset<T, GoalCycleUpdateArgs<ExtArgs>>): Prisma__GoalCycleClient<$Result.GetResult<Prisma.$GoalCyclePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more GoalCycles.
     * @param {GoalCycleDeleteManyArgs} args - Arguments to filter GoalCycles to delete.
     * @example
     * // Delete a few GoalCycles
     * const { count } = await prisma.goalCycle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GoalCycleDeleteManyArgs>(args?: SelectSubset<T, GoalCycleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GoalCycles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalCycleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GoalCycles
     * const goalCycle = await prisma.goalCycle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GoalCycleUpdateManyArgs>(args: SelectSubset<T, GoalCycleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GoalCycle.
     * @param {GoalCycleUpsertArgs} args - Arguments to update or create a GoalCycle.
     * @example
     * // Update or create a GoalCycle
     * const goalCycle = await prisma.goalCycle.upsert({
     *   create: {
     *     // ... data to create a GoalCycle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GoalCycle we want to update
     *   }
     * })
     */
    upsert<T extends GoalCycleUpsertArgs>(args: SelectSubset<T, GoalCycleUpsertArgs<ExtArgs>>): Prisma__GoalCycleClient<$Result.GetResult<Prisma.$GoalCyclePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of GoalCycles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalCycleCountArgs} args - Arguments to filter GoalCycles to count.
     * @example
     * // Count the number of GoalCycles
     * const count = await prisma.goalCycle.count({
     *   where: {
     *     // ... the filter for the GoalCycles we want to count
     *   }
     * })
    **/
    count<T extends GoalCycleCountArgs>(
      args?: Subset<T, GoalCycleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoalCycleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GoalCycle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalCycleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GoalCycleAggregateArgs>(args: Subset<T, GoalCycleAggregateArgs>): Prisma.PrismaPromise<GetGoalCycleAggregateType<T>>

    /**
     * Group by GoalCycle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalCycleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GoalCycleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoalCycleGroupByArgs['orderBy'] }
        : { orderBy?: GoalCycleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GoalCycleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoalCycleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GoalCycle model
   */
  readonly fields: GoalCycleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GoalCycle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoalCycleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    goals<T extends GoalCycle$goalsArgs<ExtArgs> = {}>(args?: Subset<T, GoalCycle$goalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany"> | Null>
    checkIns<T extends GoalCycle$checkInsArgs<ExtArgs> = {}>(args?: Subset<T, GoalCycle$checkInsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GoalCycle model
   */ 
  interface GoalCycleFieldRefs {
    readonly id: FieldRef<"GoalCycle", 'String'>
    readonly name: FieldRef<"GoalCycle", 'String'>
    readonly phase: FieldRef<"GoalCycle", 'String'>
    readonly status: FieldRef<"GoalCycle", 'String'>
    readonly startDate: FieldRef<"GoalCycle", 'DateTime'>
    readonly endDate: FieldRef<"GoalCycle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GoalCycle findUnique
   */
  export type GoalCycleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalCycle
     */
    select?: GoalCycleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalCycleInclude<ExtArgs> | null
    /**
     * Filter, which GoalCycle to fetch.
     */
    where: GoalCycleWhereUniqueInput
  }

  /**
   * GoalCycle findUniqueOrThrow
   */
  export type GoalCycleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalCycle
     */
    select?: GoalCycleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalCycleInclude<ExtArgs> | null
    /**
     * Filter, which GoalCycle to fetch.
     */
    where: GoalCycleWhereUniqueInput
  }

  /**
   * GoalCycle findFirst
   */
  export type GoalCycleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalCycle
     */
    select?: GoalCycleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalCycleInclude<ExtArgs> | null
    /**
     * Filter, which GoalCycle to fetch.
     */
    where?: GoalCycleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoalCycles to fetch.
     */
    orderBy?: GoalCycleOrderByWithRelationInput | GoalCycleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GoalCycles.
     */
    cursor?: GoalCycleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoalCycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoalCycles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GoalCycles.
     */
    distinct?: GoalCycleScalarFieldEnum | GoalCycleScalarFieldEnum[]
  }

  /**
   * GoalCycle findFirstOrThrow
   */
  export type GoalCycleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalCycle
     */
    select?: GoalCycleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalCycleInclude<ExtArgs> | null
    /**
     * Filter, which GoalCycle to fetch.
     */
    where?: GoalCycleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoalCycles to fetch.
     */
    orderBy?: GoalCycleOrderByWithRelationInput | GoalCycleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GoalCycles.
     */
    cursor?: GoalCycleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoalCycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoalCycles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GoalCycles.
     */
    distinct?: GoalCycleScalarFieldEnum | GoalCycleScalarFieldEnum[]
  }

  /**
   * GoalCycle findMany
   */
  export type GoalCycleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalCycle
     */
    select?: GoalCycleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalCycleInclude<ExtArgs> | null
    /**
     * Filter, which GoalCycles to fetch.
     */
    where?: GoalCycleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoalCycles to fetch.
     */
    orderBy?: GoalCycleOrderByWithRelationInput | GoalCycleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GoalCycles.
     */
    cursor?: GoalCycleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoalCycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoalCycles.
     */
    skip?: number
    distinct?: GoalCycleScalarFieldEnum | GoalCycleScalarFieldEnum[]
  }

  /**
   * GoalCycle create
   */
  export type GoalCycleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalCycle
     */
    select?: GoalCycleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalCycleInclude<ExtArgs> | null
    /**
     * The data needed to create a GoalCycle.
     */
    data: XOR<GoalCycleCreateInput, GoalCycleUncheckedCreateInput>
  }

  /**
   * GoalCycle createMany
   */
  export type GoalCycleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GoalCycles.
     */
    data: GoalCycleCreateManyInput | GoalCycleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GoalCycle createManyAndReturn
   */
  export type GoalCycleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalCycle
     */
    select?: GoalCycleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many GoalCycles.
     */
    data: GoalCycleCreateManyInput | GoalCycleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GoalCycle update
   */
  export type GoalCycleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalCycle
     */
    select?: GoalCycleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalCycleInclude<ExtArgs> | null
    /**
     * The data needed to update a GoalCycle.
     */
    data: XOR<GoalCycleUpdateInput, GoalCycleUncheckedUpdateInput>
    /**
     * Choose, which GoalCycle to update.
     */
    where: GoalCycleWhereUniqueInput
  }

  /**
   * GoalCycle updateMany
   */
  export type GoalCycleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GoalCycles.
     */
    data: XOR<GoalCycleUpdateManyMutationInput, GoalCycleUncheckedUpdateManyInput>
    /**
     * Filter which GoalCycles to update
     */
    where?: GoalCycleWhereInput
  }

  /**
   * GoalCycle upsert
   */
  export type GoalCycleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalCycle
     */
    select?: GoalCycleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalCycleInclude<ExtArgs> | null
    /**
     * The filter to search for the GoalCycle to update in case it exists.
     */
    where: GoalCycleWhereUniqueInput
    /**
     * In case the GoalCycle found by the `where` argument doesn't exist, create a new GoalCycle with this data.
     */
    create: XOR<GoalCycleCreateInput, GoalCycleUncheckedCreateInput>
    /**
     * In case the GoalCycle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoalCycleUpdateInput, GoalCycleUncheckedUpdateInput>
  }

  /**
   * GoalCycle delete
   */
  export type GoalCycleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalCycle
     */
    select?: GoalCycleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalCycleInclude<ExtArgs> | null
    /**
     * Filter which GoalCycle to delete.
     */
    where: GoalCycleWhereUniqueInput
  }

  /**
   * GoalCycle deleteMany
   */
  export type GoalCycleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GoalCycles to delete
     */
    where?: GoalCycleWhereInput
  }

  /**
   * GoalCycle.goals
   */
  export type GoalCycle$goalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    cursor?: GoalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * GoalCycle.checkIns
   */
  export type GoalCycle$checkInsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    where?: CheckInWhereInput
    orderBy?: CheckInOrderByWithRelationInput | CheckInOrderByWithRelationInput[]
    cursor?: CheckInWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CheckInScalarFieldEnum | CheckInScalarFieldEnum[]
  }

  /**
   * GoalCycle without action
   */
  export type GoalCycleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalCycle
     */
    select?: GoalCycleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalCycleInclude<ExtArgs> | null
  }


  /**
   * Model Goal
   */

  export type AggregateGoal = {
    _count: GoalCountAggregateOutputType | null
    _avg: GoalAvgAggregateOutputType | null
    _sum: GoalSumAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  export type GoalAvgAggregateOutputType = {
    targetValue: Decimal | null
    actualValue: Decimal | null
    weightage: number | null
  }

  export type GoalSumAggregateOutputType = {
    targetValue: Decimal | null
    actualValue: Decimal | null
    weightage: number | null
  }

  export type GoalMinAggregateOutputType = {
    id: string | null
    cycleId: string | null
    employeeId: string | null
    title: string | null
    description: string | null
    thrustArea: string | null
    uomType: $Enums.UoMType | null
    targetValue: Decimal | null
    actualValue: Decimal | null
    weightage: number | null
    status: $Enums.GoalStatus | null
    categoryType: string | null
    channelType: string | null
    isShared: boolean | null
    parentGoalId: string | null
    lockedAt: Date | null
    approvedBy: string | null
    approvedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoalMaxAggregateOutputType = {
    id: string | null
    cycleId: string | null
    employeeId: string | null
    title: string | null
    description: string | null
    thrustArea: string | null
    uomType: $Enums.UoMType | null
    targetValue: Decimal | null
    actualValue: Decimal | null
    weightage: number | null
    status: $Enums.GoalStatus | null
    categoryType: string | null
    channelType: string | null
    isShared: boolean | null
    parentGoalId: string | null
    lockedAt: Date | null
    approvedBy: string | null
    approvedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoalCountAggregateOutputType = {
    id: number
    cycleId: number
    employeeId: number
    title: number
    description: number
    thrustArea: number
    uomType: number
    targetValue: number
    actualValue: number
    weightage: number
    status: number
    categoryType: number
    channelType: number
    isShared: number
    parentGoalId: number
    lockedAt: number
    approvedBy: number
    approvedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GoalAvgAggregateInputType = {
    targetValue?: true
    actualValue?: true
    weightage?: true
  }

  export type GoalSumAggregateInputType = {
    targetValue?: true
    actualValue?: true
    weightage?: true
  }

  export type GoalMinAggregateInputType = {
    id?: true
    cycleId?: true
    employeeId?: true
    title?: true
    description?: true
    thrustArea?: true
    uomType?: true
    targetValue?: true
    actualValue?: true
    weightage?: true
    status?: true
    categoryType?: true
    channelType?: true
    isShared?: true
    parentGoalId?: true
    lockedAt?: true
    approvedBy?: true
    approvedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoalMaxAggregateInputType = {
    id?: true
    cycleId?: true
    employeeId?: true
    title?: true
    description?: true
    thrustArea?: true
    uomType?: true
    targetValue?: true
    actualValue?: true
    weightage?: true
    status?: true
    categoryType?: true
    channelType?: true
    isShared?: true
    parentGoalId?: true
    lockedAt?: true
    approvedBy?: true
    approvedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoalCountAggregateInputType = {
    id?: true
    cycleId?: true
    employeeId?: true
    title?: true
    description?: true
    thrustArea?: true
    uomType?: true
    targetValue?: true
    actualValue?: true
    weightage?: true
    status?: true
    categoryType?: true
    channelType?: true
    isShared?: true
    parentGoalId?: true
    lockedAt?: true
    approvedBy?: true
    approvedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goal to aggregate.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Goals
    **/
    _count?: true | GoalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GoalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GoalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoalMaxAggregateInputType
  }

  export type GetGoalAggregateType<T extends GoalAggregateArgs> = {
        [P in keyof T & keyof AggregateGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoal[P]>
      : GetScalarType<T[P], AggregateGoal[P]>
  }




  export type GoalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithAggregationInput | GoalOrderByWithAggregationInput[]
    by: GoalScalarFieldEnum[] | GoalScalarFieldEnum
    having?: GoalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoalCountAggregateInputType | true
    _avg?: GoalAvgAggregateInputType
    _sum?: GoalSumAggregateInputType
    _min?: GoalMinAggregateInputType
    _max?: GoalMaxAggregateInputType
  }

  export type GoalGroupByOutputType = {
    id: string
    cycleId: string | null
    employeeId: string
    title: string
    description: string | null
    thrustArea: string
    uomType: $Enums.UoMType
    targetValue: Decimal
    actualValue: Decimal
    weightage: number
    status: $Enums.GoalStatus
    categoryType: string
    channelType: string | null
    isShared: boolean
    parentGoalId: string | null
    lockedAt: Date | null
    approvedBy: string | null
    approvedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: GoalCountAggregateOutputType | null
    _avg: GoalAvgAggregateOutputType | null
    _sum: GoalSumAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  type GetGoalGroupByPayload<T extends GoalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoalGroupByOutputType[P]>
            : GetScalarType<T[P], GoalGroupByOutputType[P]>
        }
      >
    >


  export type GoalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cycleId?: boolean
    employeeId?: boolean
    title?: boolean
    description?: boolean
    thrustArea?: boolean
    uomType?: boolean
    targetValue?: boolean
    actualValue?: boolean
    weightage?: boolean
    status?: boolean
    categoryType?: boolean
    channelType?: boolean
    isShared?: boolean
    parentGoalId?: boolean
    lockedAt?: boolean
    approvedBy?: boolean
    approvedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | UserDefaultArgs<ExtArgs>
    cycle?: boolean | Goal$cycleArgs<ExtArgs>
    checkIns?: boolean | Goal$checkInsArgs<ExtArgs>
    auditLogs?: boolean | Goal$auditLogsArgs<ExtArgs>
    _count?: boolean | GoalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cycleId?: boolean
    employeeId?: boolean
    title?: boolean
    description?: boolean
    thrustArea?: boolean
    uomType?: boolean
    targetValue?: boolean
    actualValue?: boolean
    weightage?: boolean
    status?: boolean
    categoryType?: boolean
    channelType?: boolean
    isShared?: boolean
    parentGoalId?: boolean
    lockedAt?: boolean
    approvedBy?: boolean
    approvedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | UserDefaultArgs<ExtArgs>
    cycle?: boolean | Goal$cycleArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectScalar = {
    id?: boolean
    cycleId?: boolean
    employeeId?: boolean
    title?: boolean
    description?: boolean
    thrustArea?: boolean
    uomType?: boolean
    targetValue?: boolean
    actualValue?: boolean
    weightage?: boolean
    status?: boolean
    categoryType?: boolean
    channelType?: boolean
    isShared?: boolean
    parentGoalId?: boolean
    lockedAt?: boolean
    approvedBy?: boolean
    approvedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GoalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | UserDefaultArgs<ExtArgs>
    cycle?: boolean | Goal$cycleArgs<ExtArgs>
    checkIns?: boolean | Goal$checkInsArgs<ExtArgs>
    auditLogs?: boolean | Goal$auditLogsArgs<ExtArgs>
    _count?: boolean | GoalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GoalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | UserDefaultArgs<ExtArgs>
    cycle?: boolean | Goal$cycleArgs<ExtArgs>
  }

  export type $GoalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Goal"
    objects: {
      employee: Prisma.$UserPayload<ExtArgs>
      cycle: Prisma.$GoalCyclePayload<ExtArgs> | null
      checkIns: Prisma.$CheckInPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cycleId: string | null
      employeeId: string
      title: string
      description: string | null
      thrustArea: string
      uomType: $Enums.UoMType
      targetValue: Prisma.Decimal
      actualValue: Prisma.Decimal
      weightage: number
      status: $Enums.GoalStatus
      categoryType: string
      channelType: string | null
      isShared: boolean
      parentGoalId: string | null
      lockedAt: Date | null
      approvedBy: string | null
      approvedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["goal"]>
    composites: {}
  }

  type GoalGetPayload<S extends boolean | null | undefined | GoalDefaultArgs> = $Result.GetResult<Prisma.$GoalPayload, S>

  type GoalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GoalFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GoalCountAggregateInputType | true
    }

  export interface GoalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Goal'], meta: { name: 'Goal' } }
    /**
     * Find zero or one Goal that matches the filter.
     * @param {GoalFindUniqueArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GoalFindUniqueArgs>(args: SelectSubset<T, GoalFindUniqueArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Goal that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GoalFindUniqueOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GoalFindUniqueOrThrowArgs>(args: SelectSubset<T, GoalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Goal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GoalFindFirstArgs>(args?: SelectSubset<T, GoalFindFirstArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Goal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GoalFindFirstOrThrowArgs>(args?: SelectSubset<T, GoalFindFirstOrThrowArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Goals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Goals
     * const goals = await prisma.goal.findMany()
     * 
     * // Get first 10 Goals
     * const goals = await prisma.goal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const goalWithIdOnly = await prisma.goal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GoalFindManyArgs>(args?: SelectSubset<T, GoalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Goal.
     * @param {GoalCreateArgs} args - Arguments to create a Goal.
     * @example
     * // Create one Goal
     * const Goal = await prisma.goal.create({
     *   data: {
     *     // ... data to create a Goal
     *   }
     * })
     * 
     */
    create<T extends GoalCreateArgs>(args: SelectSubset<T, GoalCreateArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Goals.
     * @param {GoalCreateManyArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GoalCreateManyArgs>(args?: SelectSubset<T, GoalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Goals and returns the data saved in the database.
     * @param {GoalCreateManyAndReturnArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Goals and only return the `id`
     * const goalWithIdOnly = await prisma.goal.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GoalCreateManyAndReturnArgs>(args?: SelectSubset<T, GoalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Goal.
     * @param {GoalDeleteArgs} args - Arguments to delete one Goal.
     * @example
     * // Delete one Goal
     * const Goal = await prisma.goal.delete({
     *   where: {
     *     // ... filter to delete one Goal
     *   }
     * })
     * 
     */
    delete<T extends GoalDeleteArgs>(args: SelectSubset<T, GoalDeleteArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Goal.
     * @param {GoalUpdateArgs} args - Arguments to update one Goal.
     * @example
     * // Update one Goal
     * const goal = await prisma.goal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GoalUpdateArgs>(args: SelectSubset<T, GoalUpdateArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Goals.
     * @param {GoalDeleteManyArgs} args - Arguments to filter Goals to delete.
     * @example
     * // Delete a few Goals
     * const { count } = await prisma.goal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GoalDeleteManyArgs>(args?: SelectSubset<T, GoalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GoalUpdateManyArgs>(args: SelectSubset<T, GoalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Goal.
     * @param {GoalUpsertArgs} args - Arguments to update or create a Goal.
     * @example
     * // Update or create a Goal
     * const goal = await prisma.goal.upsert({
     *   create: {
     *     // ... data to create a Goal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Goal we want to update
     *   }
     * })
     */
    upsert<T extends GoalUpsertArgs>(args: SelectSubset<T, GoalUpsertArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalCountArgs} args - Arguments to filter Goals to count.
     * @example
     * // Count the number of Goals
     * const count = await prisma.goal.count({
     *   where: {
     *     // ... the filter for the Goals we want to count
     *   }
     * })
    **/
    count<T extends GoalCountArgs>(
      args?: Subset<T, GoalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GoalAggregateArgs>(args: Subset<T, GoalAggregateArgs>): Prisma.PrismaPromise<GetGoalAggregateType<T>>

    /**
     * Group by Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GoalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoalGroupByArgs['orderBy'] }
        : { orderBy?: GoalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GoalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Goal model
   */
  readonly fields: GoalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Goal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    cycle<T extends Goal$cycleArgs<ExtArgs> = {}>(args?: Subset<T, Goal$cycleArgs<ExtArgs>>): Prisma__GoalCycleClient<$Result.GetResult<Prisma.$GoalCyclePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    checkIns<T extends Goal$checkInsArgs<ExtArgs> = {}>(args?: Subset<T, Goal$checkInsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findMany"> | Null>
    auditLogs<T extends Goal$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, Goal$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Goal model
   */ 
  interface GoalFieldRefs {
    readonly id: FieldRef<"Goal", 'String'>
    readonly cycleId: FieldRef<"Goal", 'String'>
    readonly employeeId: FieldRef<"Goal", 'String'>
    readonly title: FieldRef<"Goal", 'String'>
    readonly description: FieldRef<"Goal", 'String'>
    readonly thrustArea: FieldRef<"Goal", 'String'>
    readonly uomType: FieldRef<"Goal", 'UoMType'>
    readonly targetValue: FieldRef<"Goal", 'Decimal'>
    readonly actualValue: FieldRef<"Goal", 'Decimal'>
    readonly weightage: FieldRef<"Goal", 'Int'>
    readonly status: FieldRef<"Goal", 'GoalStatus'>
    readonly categoryType: FieldRef<"Goal", 'String'>
    readonly channelType: FieldRef<"Goal", 'String'>
    readonly isShared: FieldRef<"Goal", 'Boolean'>
    readonly parentGoalId: FieldRef<"Goal", 'String'>
    readonly lockedAt: FieldRef<"Goal", 'DateTime'>
    readonly approvedBy: FieldRef<"Goal", 'String'>
    readonly approvedAt: FieldRef<"Goal", 'DateTime'>
    readonly createdAt: FieldRef<"Goal", 'DateTime'>
    readonly updatedAt: FieldRef<"Goal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Goal findUnique
   */
  export type GoalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findUniqueOrThrow
   */
  export type GoalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findFirst
   */
  export type GoalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findFirstOrThrow
   */
  export type GoalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findMany
   */
  export type GoalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goals to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal create
   */
  export type GoalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to create a Goal.
     */
    data: XOR<GoalCreateInput, GoalUncheckedCreateInput>
  }

  /**
   * Goal createMany
   */
  export type GoalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Goal createManyAndReturn
   */
  export type GoalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Goal update
   */
  export type GoalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to update a Goal.
     */
    data: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
    /**
     * Choose, which Goal to update.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal updateMany
   */
  export type GoalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Goals.
     */
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyInput>
    /**
     * Filter which Goals to update
     */
    where?: GoalWhereInput
  }

  /**
   * Goal upsert
   */
  export type GoalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The filter to search for the Goal to update in case it exists.
     */
    where: GoalWhereUniqueInput
    /**
     * In case the Goal found by the `where` argument doesn't exist, create a new Goal with this data.
     */
    create: XOR<GoalCreateInput, GoalUncheckedCreateInput>
    /**
     * In case the Goal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
  }

  /**
   * Goal delete
   */
  export type GoalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter which Goal to delete.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal deleteMany
   */
  export type GoalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goals to delete
     */
    where?: GoalWhereInput
  }

  /**
   * Goal.cycle
   */
  export type Goal$cycleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalCycle
     */
    select?: GoalCycleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalCycleInclude<ExtArgs> | null
    where?: GoalCycleWhereInput
  }

  /**
   * Goal.checkIns
   */
  export type Goal$checkInsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    where?: CheckInWhereInput
    orderBy?: CheckInOrderByWithRelationInput | CheckInOrderByWithRelationInput[]
    cursor?: CheckInWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CheckInScalarFieldEnum | CheckInScalarFieldEnum[]
  }

  /**
   * Goal.auditLogs
   */
  export type Goal$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * Goal without action
   */
  export type GoalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
  }


  /**
   * Model CheckIn
   */

  export type AggregateCheckIn = {
    _count: CheckInCountAggregateOutputType | null
    _avg: CheckInAvgAggregateOutputType | null
    _sum: CheckInSumAggregateOutputType | null
    _min: CheckInMinAggregateOutputType | null
    _max: CheckInMaxAggregateOutputType | null
  }

  export type CheckInAvgAggregateOutputType = {
    plannedValue: Decimal | null
    actualValue: Decimal | null
    computedScore: Decimal | null
  }

  export type CheckInSumAggregateOutputType = {
    plannedValue: Decimal | null
    actualValue: Decimal | null
    computedScore: Decimal | null
  }

  export type CheckInMinAggregateOutputType = {
    id: string | null
    goalId: string | null
    cycleId: string | null
    quarter: string | null
    plannedValue: Decimal | null
    actualValue: Decimal | null
    status: $Enums.CheckInStatus | null
    managerComment: string | null
    computedScore: Decimal | null
    checkInDate: Date | null
  }

  export type CheckInMaxAggregateOutputType = {
    id: string | null
    goalId: string | null
    cycleId: string | null
    quarter: string | null
    plannedValue: Decimal | null
    actualValue: Decimal | null
    status: $Enums.CheckInStatus | null
    managerComment: string | null
    computedScore: Decimal | null
    checkInDate: Date | null
  }

  export type CheckInCountAggregateOutputType = {
    id: number
    goalId: number
    cycleId: number
    quarter: number
    plannedValue: number
    actualValue: number
    status: number
    managerComment: number
    computedScore: number
    checkInDate: number
    _all: number
  }


  export type CheckInAvgAggregateInputType = {
    plannedValue?: true
    actualValue?: true
    computedScore?: true
  }

  export type CheckInSumAggregateInputType = {
    plannedValue?: true
    actualValue?: true
    computedScore?: true
  }

  export type CheckInMinAggregateInputType = {
    id?: true
    goalId?: true
    cycleId?: true
    quarter?: true
    plannedValue?: true
    actualValue?: true
    status?: true
    managerComment?: true
    computedScore?: true
    checkInDate?: true
  }

  export type CheckInMaxAggregateInputType = {
    id?: true
    goalId?: true
    cycleId?: true
    quarter?: true
    plannedValue?: true
    actualValue?: true
    status?: true
    managerComment?: true
    computedScore?: true
    checkInDate?: true
  }

  export type CheckInCountAggregateInputType = {
    id?: true
    goalId?: true
    cycleId?: true
    quarter?: true
    plannedValue?: true
    actualValue?: true
    status?: true
    managerComment?: true
    computedScore?: true
    checkInDate?: true
    _all?: true
  }

  export type CheckInAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CheckIn to aggregate.
     */
    where?: CheckInWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckIns to fetch.
     */
    orderBy?: CheckInOrderByWithRelationInput | CheckInOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CheckInWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckIns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckIns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CheckIns
    **/
    _count?: true | CheckInCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CheckInAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CheckInSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CheckInMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CheckInMaxAggregateInputType
  }

  export type GetCheckInAggregateType<T extends CheckInAggregateArgs> = {
        [P in keyof T & keyof AggregateCheckIn]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCheckIn[P]>
      : GetScalarType<T[P], AggregateCheckIn[P]>
  }




  export type CheckInGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckInWhereInput
    orderBy?: CheckInOrderByWithAggregationInput | CheckInOrderByWithAggregationInput[]
    by: CheckInScalarFieldEnum[] | CheckInScalarFieldEnum
    having?: CheckInScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CheckInCountAggregateInputType | true
    _avg?: CheckInAvgAggregateInputType
    _sum?: CheckInSumAggregateInputType
    _min?: CheckInMinAggregateInputType
    _max?: CheckInMaxAggregateInputType
  }

  export type CheckInGroupByOutputType = {
    id: string
    goalId: string
    cycleId: string | null
    quarter: string
    plannedValue: Decimal
    actualValue: Decimal
    status: $Enums.CheckInStatus
    managerComment: string | null
    computedScore: Decimal
    checkInDate: Date
    _count: CheckInCountAggregateOutputType | null
    _avg: CheckInAvgAggregateOutputType | null
    _sum: CheckInSumAggregateOutputType | null
    _min: CheckInMinAggregateOutputType | null
    _max: CheckInMaxAggregateOutputType | null
  }

  type GetCheckInGroupByPayload<T extends CheckInGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CheckInGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CheckInGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CheckInGroupByOutputType[P]>
            : GetScalarType<T[P], CheckInGroupByOutputType[P]>
        }
      >
    >


  export type CheckInSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    goalId?: boolean
    cycleId?: boolean
    quarter?: boolean
    plannedValue?: boolean
    actualValue?: boolean
    status?: boolean
    managerComment?: boolean
    computedScore?: boolean
    checkInDate?: boolean
    goal?: boolean | GoalDefaultArgs<ExtArgs>
    cycle?: boolean | CheckIn$cycleArgs<ExtArgs>
  }, ExtArgs["result"]["checkIn"]>

  export type CheckInSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    goalId?: boolean
    cycleId?: boolean
    quarter?: boolean
    plannedValue?: boolean
    actualValue?: boolean
    status?: boolean
    managerComment?: boolean
    computedScore?: boolean
    checkInDate?: boolean
    goal?: boolean | GoalDefaultArgs<ExtArgs>
    cycle?: boolean | CheckIn$cycleArgs<ExtArgs>
  }, ExtArgs["result"]["checkIn"]>

  export type CheckInSelectScalar = {
    id?: boolean
    goalId?: boolean
    cycleId?: boolean
    quarter?: boolean
    plannedValue?: boolean
    actualValue?: boolean
    status?: boolean
    managerComment?: boolean
    computedScore?: boolean
    checkInDate?: boolean
  }

  export type CheckInInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goal?: boolean | GoalDefaultArgs<ExtArgs>
    cycle?: boolean | CheckIn$cycleArgs<ExtArgs>
  }
  export type CheckInIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goal?: boolean | GoalDefaultArgs<ExtArgs>
    cycle?: boolean | CheckIn$cycleArgs<ExtArgs>
  }

  export type $CheckInPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CheckIn"
    objects: {
      goal: Prisma.$GoalPayload<ExtArgs>
      cycle: Prisma.$GoalCyclePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      goalId: string
      cycleId: string | null
      quarter: string
      plannedValue: Prisma.Decimal
      actualValue: Prisma.Decimal
      status: $Enums.CheckInStatus
      managerComment: string | null
      computedScore: Prisma.Decimal
      checkInDate: Date
    }, ExtArgs["result"]["checkIn"]>
    composites: {}
  }

  type CheckInGetPayload<S extends boolean | null | undefined | CheckInDefaultArgs> = $Result.GetResult<Prisma.$CheckInPayload, S>

  type CheckInCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CheckInFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CheckInCountAggregateInputType | true
    }

  export interface CheckInDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CheckIn'], meta: { name: 'CheckIn' } }
    /**
     * Find zero or one CheckIn that matches the filter.
     * @param {CheckInFindUniqueArgs} args - Arguments to find a CheckIn
     * @example
     * // Get one CheckIn
     * const checkIn = await prisma.checkIn.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CheckInFindUniqueArgs>(args: SelectSubset<T, CheckInFindUniqueArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CheckIn that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CheckInFindUniqueOrThrowArgs} args - Arguments to find a CheckIn
     * @example
     * // Get one CheckIn
     * const checkIn = await prisma.checkIn.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CheckInFindUniqueOrThrowArgs>(args: SelectSubset<T, CheckInFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CheckIn that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInFindFirstArgs} args - Arguments to find a CheckIn
     * @example
     * // Get one CheckIn
     * const checkIn = await prisma.checkIn.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CheckInFindFirstArgs>(args?: SelectSubset<T, CheckInFindFirstArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CheckIn that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInFindFirstOrThrowArgs} args - Arguments to find a CheckIn
     * @example
     * // Get one CheckIn
     * const checkIn = await prisma.checkIn.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CheckInFindFirstOrThrowArgs>(args?: SelectSubset<T, CheckInFindFirstOrThrowArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CheckIns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CheckIns
     * const checkIns = await prisma.checkIn.findMany()
     * 
     * // Get first 10 CheckIns
     * const checkIns = await prisma.checkIn.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checkInWithIdOnly = await prisma.checkIn.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CheckInFindManyArgs>(args?: SelectSubset<T, CheckInFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CheckIn.
     * @param {CheckInCreateArgs} args - Arguments to create a CheckIn.
     * @example
     * // Create one CheckIn
     * const CheckIn = await prisma.checkIn.create({
     *   data: {
     *     // ... data to create a CheckIn
     *   }
     * })
     * 
     */
    create<T extends CheckInCreateArgs>(args: SelectSubset<T, CheckInCreateArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CheckIns.
     * @param {CheckInCreateManyArgs} args - Arguments to create many CheckIns.
     * @example
     * // Create many CheckIns
     * const checkIn = await prisma.checkIn.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CheckInCreateManyArgs>(args?: SelectSubset<T, CheckInCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CheckIns and returns the data saved in the database.
     * @param {CheckInCreateManyAndReturnArgs} args - Arguments to create many CheckIns.
     * @example
     * // Create many CheckIns
     * const checkIn = await prisma.checkIn.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CheckIns and only return the `id`
     * const checkInWithIdOnly = await prisma.checkIn.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CheckInCreateManyAndReturnArgs>(args?: SelectSubset<T, CheckInCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CheckIn.
     * @param {CheckInDeleteArgs} args - Arguments to delete one CheckIn.
     * @example
     * // Delete one CheckIn
     * const CheckIn = await prisma.checkIn.delete({
     *   where: {
     *     // ... filter to delete one CheckIn
     *   }
     * })
     * 
     */
    delete<T extends CheckInDeleteArgs>(args: SelectSubset<T, CheckInDeleteArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CheckIn.
     * @param {CheckInUpdateArgs} args - Arguments to update one CheckIn.
     * @example
     * // Update one CheckIn
     * const checkIn = await prisma.checkIn.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CheckInUpdateArgs>(args: SelectSubset<T, CheckInUpdateArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CheckIns.
     * @param {CheckInDeleteManyArgs} args - Arguments to filter CheckIns to delete.
     * @example
     * // Delete a few CheckIns
     * const { count } = await prisma.checkIn.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CheckInDeleteManyArgs>(args?: SelectSubset<T, CheckInDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CheckIns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CheckIns
     * const checkIn = await prisma.checkIn.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CheckInUpdateManyArgs>(args: SelectSubset<T, CheckInUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CheckIn.
     * @param {CheckInUpsertArgs} args - Arguments to update or create a CheckIn.
     * @example
     * // Update or create a CheckIn
     * const checkIn = await prisma.checkIn.upsert({
     *   create: {
     *     // ... data to create a CheckIn
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CheckIn we want to update
     *   }
     * })
     */
    upsert<T extends CheckInUpsertArgs>(args: SelectSubset<T, CheckInUpsertArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CheckIns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInCountArgs} args - Arguments to filter CheckIns to count.
     * @example
     * // Count the number of CheckIns
     * const count = await prisma.checkIn.count({
     *   where: {
     *     // ... the filter for the CheckIns we want to count
     *   }
     * })
    **/
    count<T extends CheckInCountArgs>(
      args?: Subset<T, CheckInCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CheckInCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CheckIn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CheckInAggregateArgs>(args: Subset<T, CheckInAggregateArgs>): Prisma.PrismaPromise<GetCheckInAggregateType<T>>

    /**
     * Group by CheckIn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CheckInGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CheckInGroupByArgs['orderBy'] }
        : { orderBy?: CheckInGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CheckInGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheckInGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CheckIn model
   */
  readonly fields: CheckInFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CheckIn.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CheckInClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    goal<T extends GoalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GoalDefaultArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    cycle<T extends CheckIn$cycleArgs<ExtArgs> = {}>(args?: Subset<T, CheckIn$cycleArgs<ExtArgs>>): Prisma__GoalCycleClient<$Result.GetResult<Prisma.$GoalCyclePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CheckIn model
   */ 
  interface CheckInFieldRefs {
    readonly id: FieldRef<"CheckIn", 'String'>
    readonly goalId: FieldRef<"CheckIn", 'String'>
    readonly cycleId: FieldRef<"CheckIn", 'String'>
    readonly quarter: FieldRef<"CheckIn", 'String'>
    readonly plannedValue: FieldRef<"CheckIn", 'Decimal'>
    readonly actualValue: FieldRef<"CheckIn", 'Decimal'>
    readonly status: FieldRef<"CheckIn", 'CheckInStatus'>
    readonly managerComment: FieldRef<"CheckIn", 'String'>
    readonly computedScore: FieldRef<"CheckIn", 'Decimal'>
    readonly checkInDate: FieldRef<"CheckIn", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CheckIn findUnique
   */
  export type CheckInFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * Filter, which CheckIn to fetch.
     */
    where: CheckInWhereUniqueInput
  }

  /**
   * CheckIn findUniqueOrThrow
   */
  export type CheckInFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * Filter, which CheckIn to fetch.
     */
    where: CheckInWhereUniqueInput
  }

  /**
   * CheckIn findFirst
   */
  export type CheckInFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * Filter, which CheckIn to fetch.
     */
    where?: CheckInWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckIns to fetch.
     */
    orderBy?: CheckInOrderByWithRelationInput | CheckInOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CheckIns.
     */
    cursor?: CheckInWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckIns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckIns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CheckIns.
     */
    distinct?: CheckInScalarFieldEnum | CheckInScalarFieldEnum[]
  }

  /**
   * CheckIn findFirstOrThrow
   */
  export type CheckInFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * Filter, which CheckIn to fetch.
     */
    where?: CheckInWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckIns to fetch.
     */
    orderBy?: CheckInOrderByWithRelationInput | CheckInOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CheckIns.
     */
    cursor?: CheckInWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckIns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckIns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CheckIns.
     */
    distinct?: CheckInScalarFieldEnum | CheckInScalarFieldEnum[]
  }

  /**
   * CheckIn findMany
   */
  export type CheckInFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * Filter, which CheckIns to fetch.
     */
    where?: CheckInWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckIns to fetch.
     */
    orderBy?: CheckInOrderByWithRelationInput | CheckInOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CheckIns.
     */
    cursor?: CheckInWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckIns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckIns.
     */
    skip?: number
    distinct?: CheckInScalarFieldEnum | CheckInScalarFieldEnum[]
  }

  /**
   * CheckIn create
   */
  export type CheckInCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * The data needed to create a CheckIn.
     */
    data: XOR<CheckInCreateInput, CheckInUncheckedCreateInput>
  }

  /**
   * CheckIn createMany
   */
  export type CheckInCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CheckIns.
     */
    data: CheckInCreateManyInput | CheckInCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CheckIn createManyAndReturn
   */
  export type CheckInCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CheckIns.
     */
    data: CheckInCreateManyInput | CheckInCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CheckIn update
   */
  export type CheckInUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * The data needed to update a CheckIn.
     */
    data: XOR<CheckInUpdateInput, CheckInUncheckedUpdateInput>
    /**
     * Choose, which CheckIn to update.
     */
    where: CheckInWhereUniqueInput
  }

  /**
   * CheckIn updateMany
   */
  export type CheckInUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CheckIns.
     */
    data: XOR<CheckInUpdateManyMutationInput, CheckInUncheckedUpdateManyInput>
    /**
     * Filter which CheckIns to update
     */
    where?: CheckInWhereInput
  }

  /**
   * CheckIn upsert
   */
  export type CheckInUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * The filter to search for the CheckIn to update in case it exists.
     */
    where: CheckInWhereUniqueInput
    /**
     * In case the CheckIn found by the `where` argument doesn't exist, create a new CheckIn with this data.
     */
    create: XOR<CheckInCreateInput, CheckInUncheckedCreateInput>
    /**
     * In case the CheckIn was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CheckInUpdateInput, CheckInUncheckedUpdateInput>
  }

  /**
   * CheckIn delete
   */
  export type CheckInDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * Filter which CheckIn to delete.
     */
    where: CheckInWhereUniqueInput
  }

  /**
   * CheckIn deleteMany
   */
  export type CheckInDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CheckIns to delete
     */
    where?: CheckInWhereInput
  }

  /**
   * CheckIn.cycle
   */
  export type CheckIn$cycleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalCycle
     */
    select?: GoalCycleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalCycleInclude<ExtArgs> | null
    where?: GoalCycleWhereInput
  }

  /**
   * CheckIn without action
   */
  export type CheckInDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    goalId: string | null
    changedBy: string | null
    fieldName: string | null
    oldValue: string | null
    newValue: string | null
    actionType: string | null
    ipAddress: string | null
    changedAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    goalId: string | null
    changedBy: string | null
    fieldName: string | null
    oldValue: string | null
    newValue: string | null
    actionType: string | null
    ipAddress: string | null
    changedAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    goalId: number
    changedBy: number
    fieldName: number
    oldValue: number
    newValue: number
    actionType: number
    ipAddress: number
    changedAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    goalId?: true
    changedBy?: true
    fieldName?: true
    oldValue?: true
    newValue?: true
    actionType?: true
    ipAddress?: true
    changedAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    goalId?: true
    changedBy?: true
    fieldName?: true
    oldValue?: true
    newValue?: true
    actionType?: true
    ipAddress?: true
    changedAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    goalId?: true
    changedBy?: true
    fieldName?: true
    oldValue?: true
    newValue?: true
    actionType?: true
    ipAddress?: true
    changedAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    goalId: string
    changedBy: string
    fieldName: string
    oldValue: string | null
    newValue: string | null
    actionType: string
    ipAddress: string | null
    changedAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    goalId?: boolean
    changedBy?: boolean
    fieldName?: boolean
    oldValue?: boolean
    newValue?: boolean
    actionType?: boolean
    ipAddress?: boolean
    changedAt?: boolean
    goal?: boolean | GoalDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    goalId?: boolean
    changedBy?: boolean
    fieldName?: boolean
    oldValue?: boolean
    newValue?: boolean
    actionType?: boolean
    ipAddress?: boolean
    changedAt?: boolean
    goal?: boolean | GoalDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    goalId?: boolean
    changedBy?: boolean
    fieldName?: boolean
    oldValue?: boolean
    newValue?: boolean
    actionType?: boolean
    ipAddress?: boolean
    changedAt?: boolean
  }

  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goal?: boolean | GoalDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goal?: boolean | GoalDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      goal: Prisma.$GoalPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      goalId: string
      changedBy: string
      fieldName: string
      oldValue: string | null
      newValue: string | null
      actionType: string
      ipAddress: string | null
      changedAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    goal<T extends GoalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GoalDefaultArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */ 
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly goalId: FieldRef<"AuditLog", 'String'>
    readonly changedBy: FieldRef<"AuditLog", 'String'>
    readonly fieldName: FieldRef<"AuditLog", 'String'>
    readonly oldValue: FieldRef<"AuditLog", 'String'>
    readonly newValue: FieldRef<"AuditLog", 'String'>
    readonly actionType: FieldRef<"AuditLog", 'String'>
    readonly ipAddress: FieldRef<"AuditLog", 'String'>
    readonly changedAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Model Escalation
   */

  export type AggregateEscalation = {
    _count: EscalationCountAggregateOutputType | null
    _avg: EscalationAvgAggregateOutputType | null
    _sum: EscalationSumAggregateOutputType | null
    _min: EscalationMinAggregateOutputType | null
    _max: EscalationMaxAggregateOutputType | null
  }

  export type EscalationAvgAggregateOutputType = {
    escalationLevel: number | null
  }

  export type EscalationSumAggregateOutputType = {
    escalationLevel: number | null
  }

  export type EscalationMinAggregateOutputType = {
    id: string | null
    triggerType: string | null
    triggeredForId: string | null
    escalationLevel: number | null
    message: string | null
    isResolved: boolean | null
    createdAt: Date | null
    resolvedAt: Date | null
  }

  export type EscalationMaxAggregateOutputType = {
    id: string | null
    triggerType: string | null
    triggeredForId: string | null
    escalationLevel: number | null
    message: string | null
    isResolved: boolean | null
    createdAt: Date | null
    resolvedAt: Date | null
  }

  export type EscalationCountAggregateOutputType = {
    id: number
    triggerType: number
    triggeredForId: number
    escalationLevel: number
    message: number
    isResolved: number
    createdAt: number
    resolvedAt: number
    _all: number
  }


  export type EscalationAvgAggregateInputType = {
    escalationLevel?: true
  }

  export type EscalationSumAggregateInputType = {
    escalationLevel?: true
  }

  export type EscalationMinAggregateInputType = {
    id?: true
    triggerType?: true
    triggeredForId?: true
    escalationLevel?: true
    message?: true
    isResolved?: true
    createdAt?: true
    resolvedAt?: true
  }

  export type EscalationMaxAggregateInputType = {
    id?: true
    triggerType?: true
    triggeredForId?: true
    escalationLevel?: true
    message?: true
    isResolved?: true
    createdAt?: true
    resolvedAt?: true
  }

  export type EscalationCountAggregateInputType = {
    id?: true
    triggerType?: true
    triggeredForId?: true
    escalationLevel?: true
    message?: true
    isResolved?: true
    createdAt?: true
    resolvedAt?: true
    _all?: true
  }

  export type EscalationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Escalation to aggregate.
     */
    where?: EscalationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Escalations to fetch.
     */
    orderBy?: EscalationOrderByWithRelationInput | EscalationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EscalationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Escalations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Escalations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Escalations
    **/
    _count?: true | EscalationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EscalationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EscalationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EscalationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EscalationMaxAggregateInputType
  }

  export type GetEscalationAggregateType<T extends EscalationAggregateArgs> = {
        [P in keyof T & keyof AggregateEscalation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEscalation[P]>
      : GetScalarType<T[P], AggregateEscalation[P]>
  }




  export type EscalationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EscalationWhereInput
    orderBy?: EscalationOrderByWithAggregationInput | EscalationOrderByWithAggregationInput[]
    by: EscalationScalarFieldEnum[] | EscalationScalarFieldEnum
    having?: EscalationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EscalationCountAggregateInputType | true
    _avg?: EscalationAvgAggregateInputType
    _sum?: EscalationSumAggregateInputType
    _min?: EscalationMinAggregateInputType
    _max?: EscalationMaxAggregateInputType
  }

  export type EscalationGroupByOutputType = {
    id: string
    triggerType: string
    triggeredForId: string
    escalationLevel: number
    message: string
    isResolved: boolean
    createdAt: Date
    resolvedAt: Date | null
    _count: EscalationCountAggregateOutputType | null
    _avg: EscalationAvgAggregateOutputType | null
    _sum: EscalationSumAggregateOutputType | null
    _min: EscalationMinAggregateOutputType | null
    _max: EscalationMaxAggregateOutputType | null
  }

  type GetEscalationGroupByPayload<T extends EscalationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EscalationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EscalationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EscalationGroupByOutputType[P]>
            : GetScalarType<T[P], EscalationGroupByOutputType[P]>
        }
      >
    >


  export type EscalationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    triggerType?: boolean
    triggeredForId?: boolean
    escalationLevel?: boolean
    message?: boolean
    isResolved?: boolean
    createdAt?: boolean
    resolvedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["escalation"]>

  export type EscalationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    triggerType?: boolean
    triggeredForId?: boolean
    escalationLevel?: boolean
    message?: boolean
    isResolved?: boolean
    createdAt?: boolean
    resolvedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["escalation"]>

  export type EscalationSelectScalar = {
    id?: boolean
    triggerType?: boolean
    triggeredForId?: boolean
    escalationLevel?: boolean
    message?: boolean
    isResolved?: boolean
    createdAt?: boolean
    resolvedAt?: boolean
  }

  export type EscalationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EscalationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EscalationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Escalation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      triggerType: string
      triggeredForId: string
      escalationLevel: number
      message: string
      isResolved: boolean
      createdAt: Date
      resolvedAt: Date | null
    }, ExtArgs["result"]["escalation"]>
    composites: {}
  }

  type EscalationGetPayload<S extends boolean | null | undefined | EscalationDefaultArgs> = $Result.GetResult<Prisma.$EscalationPayload, S>

  type EscalationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EscalationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EscalationCountAggregateInputType | true
    }

  export interface EscalationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Escalation'], meta: { name: 'Escalation' } }
    /**
     * Find zero or one Escalation that matches the filter.
     * @param {EscalationFindUniqueArgs} args - Arguments to find a Escalation
     * @example
     * // Get one Escalation
     * const escalation = await prisma.escalation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EscalationFindUniqueArgs>(args: SelectSubset<T, EscalationFindUniqueArgs<ExtArgs>>): Prisma__EscalationClient<$Result.GetResult<Prisma.$EscalationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Escalation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EscalationFindUniqueOrThrowArgs} args - Arguments to find a Escalation
     * @example
     * // Get one Escalation
     * const escalation = await prisma.escalation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EscalationFindUniqueOrThrowArgs>(args: SelectSubset<T, EscalationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EscalationClient<$Result.GetResult<Prisma.$EscalationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Escalation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscalationFindFirstArgs} args - Arguments to find a Escalation
     * @example
     * // Get one Escalation
     * const escalation = await prisma.escalation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EscalationFindFirstArgs>(args?: SelectSubset<T, EscalationFindFirstArgs<ExtArgs>>): Prisma__EscalationClient<$Result.GetResult<Prisma.$EscalationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Escalation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscalationFindFirstOrThrowArgs} args - Arguments to find a Escalation
     * @example
     * // Get one Escalation
     * const escalation = await prisma.escalation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EscalationFindFirstOrThrowArgs>(args?: SelectSubset<T, EscalationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EscalationClient<$Result.GetResult<Prisma.$EscalationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Escalations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscalationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Escalations
     * const escalations = await prisma.escalation.findMany()
     * 
     * // Get first 10 Escalations
     * const escalations = await prisma.escalation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const escalationWithIdOnly = await prisma.escalation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EscalationFindManyArgs>(args?: SelectSubset<T, EscalationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EscalationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Escalation.
     * @param {EscalationCreateArgs} args - Arguments to create a Escalation.
     * @example
     * // Create one Escalation
     * const Escalation = await prisma.escalation.create({
     *   data: {
     *     // ... data to create a Escalation
     *   }
     * })
     * 
     */
    create<T extends EscalationCreateArgs>(args: SelectSubset<T, EscalationCreateArgs<ExtArgs>>): Prisma__EscalationClient<$Result.GetResult<Prisma.$EscalationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Escalations.
     * @param {EscalationCreateManyArgs} args - Arguments to create many Escalations.
     * @example
     * // Create many Escalations
     * const escalation = await prisma.escalation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EscalationCreateManyArgs>(args?: SelectSubset<T, EscalationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Escalations and returns the data saved in the database.
     * @param {EscalationCreateManyAndReturnArgs} args - Arguments to create many Escalations.
     * @example
     * // Create many Escalations
     * const escalation = await prisma.escalation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Escalations and only return the `id`
     * const escalationWithIdOnly = await prisma.escalation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EscalationCreateManyAndReturnArgs>(args?: SelectSubset<T, EscalationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EscalationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Escalation.
     * @param {EscalationDeleteArgs} args - Arguments to delete one Escalation.
     * @example
     * // Delete one Escalation
     * const Escalation = await prisma.escalation.delete({
     *   where: {
     *     // ... filter to delete one Escalation
     *   }
     * })
     * 
     */
    delete<T extends EscalationDeleteArgs>(args: SelectSubset<T, EscalationDeleteArgs<ExtArgs>>): Prisma__EscalationClient<$Result.GetResult<Prisma.$EscalationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Escalation.
     * @param {EscalationUpdateArgs} args - Arguments to update one Escalation.
     * @example
     * // Update one Escalation
     * const escalation = await prisma.escalation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EscalationUpdateArgs>(args: SelectSubset<T, EscalationUpdateArgs<ExtArgs>>): Prisma__EscalationClient<$Result.GetResult<Prisma.$EscalationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Escalations.
     * @param {EscalationDeleteManyArgs} args - Arguments to filter Escalations to delete.
     * @example
     * // Delete a few Escalations
     * const { count } = await prisma.escalation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EscalationDeleteManyArgs>(args?: SelectSubset<T, EscalationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Escalations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscalationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Escalations
     * const escalation = await prisma.escalation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EscalationUpdateManyArgs>(args: SelectSubset<T, EscalationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Escalation.
     * @param {EscalationUpsertArgs} args - Arguments to update or create a Escalation.
     * @example
     * // Update or create a Escalation
     * const escalation = await prisma.escalation.upsert({
     *   create: {
     *     // ... data to create a Escalation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Escalation we want to update
     *   }
     * })
     */
    upsert<T extends EscalationUpsertArgs>(args: SelectSubset<T, EscalationUpsertArgs<ExtArgs>>): Prisma__EscalationClient<$Result.GetResult<Prisma.$EscalationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Escalations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscalationCountArgs} args - Arguments to filter Escalations to count.
     * @example
     * // Count the number of Escalations
     * const count = await prisma.escalation.count({
     *   where: {
     *     // ... the filter for the Escalations we want to count
     *   }
     * })
    **/
    count<T extends EscalationCountArgs>(
      args?: Subset<T, EscalationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EscalationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Escalation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscalationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EscalationAggregateArgs>(args: Subset<T, EscalationAggregateArgs>): Prisma.PrismaPromise<GetEscalationAggregateType<T>>

    /**
     * Group by Escalation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscalationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EscalationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EscalationGroupByArgs['orderBy'] }
        : { orderBy?: EscalationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EscalationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEscalationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Escalation model
   */
  readonly fields: EscalationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Escalation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EscalationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Escalation model
   */ 
  interface EscalationFieldRefs {
    readonly id: FieldRef<"Escalation", 'String'>
    readonly triggerType: FieldRef<"Escalation", 'String'>
    readonly triggeredForId: FieldRef<"Escalation", 'String'>
    readonly escalationLevel: FieldRef<"Escalation", 'Int'>
    readonly message: FieldRef<"Escalation", 'String'>
    readonly isResolved: FieldRef<"Escalation", 'Boolean'>
    readonly createdAt: FieldRef<"Escalation", 'DateTime'>
    readonly resolvedAt: FieldRef<"Escalation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Escalation findUnique
   */
  export type EscalationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escalation
     */
    select?: EscalationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscalationInclude<ExtArgs> | null
    /**
     * Filter, which Escalation to fetch.
     */
    where: EscalationWhereUniqueInput
  }

  /**
   * Escalation findUniqueOrThrow
   */
  export type EscalationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escalation
     */
    select?: EscalationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscalationInclude<ExtArgs> | null
    /**
     * Filter, which Escalation to fetch.
     */
    where: EscalationWhereUniqueInput
  }

  /**
   * Escalation findFirst
   */
  export type EscalationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escalation
     */
    select?: EscalationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscalationInclude<ExtArgs> | null
    /**
     * Filter, which Escalation to fetch.
     */
    where?: EscalationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Escalations to fetch.
     */
    orderBy?: EscalationOrderByWithRelationInput | EscalationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Escalations.
     */
    cursor?: EscalationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Escalations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Escalations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Escalations.
     */
    distinct?: EscalationScalarFieldEnum | EscalationScalarFieldEnum[]
  }

  /**
   * Escalation findFirstOrThrow
   */
  export type EscalationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escalation
     */
    select?: EscalationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscalationInclude<ExtArgs> | null
    /**
     * Filter, which Escalation to fetch.
     */
    where?: EscalationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Escalations to fetch.
     */
    orderBy?: EscalationOrderByWithRelationInput | EscalationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Escalations.
     */
    cursor?: EscalationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Escalations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Escalations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Escalations.
     */
    distinct?: EscalationScalarFieldEnum | EscalationScalarFieldEnum[]
  }

  /**
   * Escalation findMany
   */
  export type EscalationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escalation
     */
    select?: EscalationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscalationInclude<ExtArgs> | null
    /**
     * Filter, which Escalations to fetch.
     */
    where?: EscalationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Escalations to fetch.
     */
    orderBy?: EscalationOrderByWithRelationInput | EscalationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Escalations.
     */
    cursor?: EscalationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Escalations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Escalations.
     */
    skip?: number
    distinct?: EscalationScalarFieldEnum | EscalationScalarFieldEnum[]
  }

  /**
   * Escalation create
   */
  export type EscalationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escalation
     */
    select?: EscalationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscalationInclude<ExtArgs> | null
    /**
     * The data needed to create a Escalation.
     */
    data: XOR<EscalationCreateInput, EscalationUncheckedCreateInput>
  }

  /**
   * Escalation createMany
   */
  export type EscalationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Escalations.
     */
    data: EscalationCreateManyInput | EscalationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Escalation createManyAndReturn
   */
  export type EscalationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escalation
     */
    select?: EscalationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Escalations.
     */
    data: EscalationCreateManyInput | EscalationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscalationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Escalation update
   */
  export type EscalationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escalation
     */
    select?: EscalationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscalationInclude<ExtArgs> | null
    /**
     * The data needed to update a Escalation.
     */
    data: XOR<EscalationUpdateInput, EscalationUncheckedUpdateInput>
    /**
     * Choose, which Escalation to update.
     */
    where: EscalationWhereUniqueInput
  }

  /**
   * Escalation updateMany
   */
  export type EscalationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Escalations.
     */
    data: XOR<EscalationUpdateManyMutationInput, EscalationUncheckedUpdateManyInput>
    /**
     * Filter which Escalations to update
     */
    where?: EscalationWhereInput
  }

  /**
   * Escalation upsert
   */
  export type EscalationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escalation
     */
    select?: EscalationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscalationInclude<ExtArgs> | null
    /**
     * The filter to search for the Escalation to update in case it exists.
     */
    where: EscalationWhereUniqueInput
    /**
     * In case the Escalation found by the `where` argument doesn't exist, create a new Escalation with this data.
     */
    create: XOR<EscalationCreateInput, EscalationUncheckedCreateInput>
    /**
     * In case the Escalation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EscalationUpdateInput, EscalationUncheckedUpdateInput>
  }

  /**
   * Escalation delete
   */
  export type EscalationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escalation
     */
    select?: EscalationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscalationInclude<ExtArgs> | null
    /**
     * Filter which Escalation to delete.
     */
    where: EscalationWhereUniqueInput
  }

  /**
   * Escalation deleteMany
   */
  export type EscalationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Escalations to delete
     */
    where?: EscalationWhereInput
  }

  /**
   * Escalation without action
   */
  export type EscalationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escalation
     */
    select?: EscalationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscalationInclude<ExtArgs> | null
  }


  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: string | null
    userId: string | null
    role: string | null
    content: string | null
    intentType: string | null
    metadata: string | null
    createdAt: Date | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    role: string | null
    content: string | null
    intentType: string | null
    metadata: string | null
    createdAt: Date | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    userId: number
    role: number
    content: number
    intentType: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type ChatMessageMinAggregateInputType = {
    id?: true
    userId?: true
    role?: true
    content?: true
    intentType?: true
    metadata?: true
    createdAt?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    userId?: true
    role?: true
    content?: true
    intentType?: true
    metadata?: true
    createdAt?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    userId?: true
    role?: true
    content?: true
    intentType?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: string
    userId: string
    role: string
    content: string
    intentType: string | null
    metadata: string | null
    createdAt: Date
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    role?: boolean
    content?: boolean
    intentType?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    role?: boolean
    content?: boolean
    intentType?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    id?: boolean
    userId?: boolean
    role?: boolean
    content?: boolean
    intentType?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type ChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      role: string
      content: string
      intentType: string | null
      metadata: string | null
      createdAt: Date
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageFindUniqueArgs>(args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageFindFirstArgs>(args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessageFindManyArgs>(args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends ChatMessageCreateArgs>(args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ChatMessages.
     * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessageCreateManyArgs>(args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMessages and returns the data saved in the database.
     * @param {ChatMessageCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends ChatMessageDeleteArgs>(args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessageUpdateArgs>(args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessageUpdateManyArgs>(args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageUpsertArgs>(args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatMessage model
   */ 
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'String'>
    readonly userId: FieldRef<"ChatMessage", 'String'>
    readonly role: FieldRef<"ChatMessage", 'String'>
    readonly content: FieldRef<"ChatMessage", 'String'>
    readonly intentType: FieldRef<"ChatMessage", 'String'>
    readonly metadata: FieldRef<"ChatMessage", 'String'>
    readonly createdAt: FieldRef<"ChatMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessage createManyAndReturn
   */
  export type ChatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
  }

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
  }

  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
  }


  /**
   * Model DbConnection
   */

  export type AggregateDbConnection = {
    _count: DbConnectionCountAggregateOutputType | null
    _avg: DbConnectionAvgAggregateOutputType | null
    _sum: DbConnectionSumAggregateOutputType | null
    _min: DbConnectionMinAggregateOutputType | null
    _max: DbConnectionMaxAggregateOutputType | null
  }

  export type DbConnectionAvgAggregateOutputType = {
    port: number | null
  }

  export type DbConnectionSumAggregateOutputType = {
    port: number | null
  }

  export type DbConnectionMinAggregateOutputType = {
    id: string | null
    name: string | null
    dbType: string | null
    host: string | null
    port: number | null
    database: string | null
    username: string | null
    isActive: boolean | null
    isReadOnly: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DbConnectionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    dbType: string | null
    host: string | null
    port: number | null
    database: string | null
    username: string | null
    isActive: boolean | null
    isReadOnly: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DbConnectionCountAggregateOutputType = {
    id: number
    name: number
    dbType: number
    host: number
    port: number
    database: number
    username: number
    isActive: number
    isReadOnly: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DbConnectionAvgAggregateInputType = {
    port?: true
  }

  export type DbConnectionSumAggregateInputType = {
    port?: true
  }

  export type DbConnectionMinAggregateInputType = {
    id?: true
    name?: true
    dbType?: true
    host?: true
    port?: true
    database?: true
    username?: true
    isActive?: true
    isReadOnly?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DbConnectionMaxAggregateInputType = {
    id?: true
    name?: true
    dbType?: true
    host?: true
    port?: true
    database?: true
    username?: true
    isActive?: true
    isReadOnly?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DbConnectionCountAggregateInputType = {
    id?: true
    name?: true
    dbType?: true
    host?: true
    port?: true
    database?: true
    username?: true
    isActive?: true
    isReadOnly?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DbConnectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DbConnection to aggregate.
     */
    where?: DbConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DbConnections to fetch.
     */
    orderBy?: DbConnectionOrderByWithRelationInput | DbConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DbConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DbConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DbConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DbConnections
    **/
    _count?: true | DbConnectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DbConnectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DbConnectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DbConnectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DbConnectionMaxAggregateInputType
  }

  export type GetDbConnectionAggregateType<T extends DbConnectionAggregateArgs> = {
        [P in keyof T & keyof AggregateDbConnection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDbConnection[P]>
      : GetScalarType<T[P], AggregateDbConnection[P]>
  }




  export type DbConnectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DbConnectionWhereInput
    orderBy?: DbConnectionOrderByWithAggregationInput | DbConnectionOrderByWithAggregationInput[]
    by: DbConnectionScalarFieldEnum[] | DbConnectionScalarFieldEnum
    having?: DbConnectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DbConnectionCountAggregateInputType | true
    _avg?: DbConnectionAvgAggregateInputType
    _sum?: DbConnectionSumAggregateInputType
    _min?: DbConnectionMinAggregateInputType
    _max?: DbConnectionMaxAggregateInputType
  }

  export type DbConnectionGroupByOutputType = {
    id: string
    name: string
    dbType: string
    host: string
    port: number
    database: string
    username: string
    isActive: boolean
    isReadOnly: boolean
    createdAt: Date
    updatedAt: Date
    _count: DbConnectionCountAggregateOutputType | null
    _avg: DbConnectionAvgAggregateOutputType | null
    _sum: DbConnectionSumAggregateOutputType | null
    _min: DbConnectionMinAggregateOutputType | null
    _max: DbConnectionMaxAggregateOutputType | null
  }

  type GetDbConnectionGroupByPayload<T extends DbConnectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DbConnectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DbConnectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DbConnectionGroupByOutputType[P]>
            : GetScalarType<T[P], DbConnectionGroupByOutputType[P]>
        }
      >
    >


  export type DbConnectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dbType?: boolean
    host?: boolean
    port?: boolean
    database?: boolean
    username?: boolean
    isActive?: boolean
    isReadOnly?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dbConnection"]>

  export type DbConnectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dbType?: boolean
    host?: boolean
    port?: boolean
    database?: boolean
    username?: boolean
    isActive?: boolean
    isReadOnly?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dbConnection"]>

  export type DbConnectionSelectScalar = {
    id?: boolean
    name?: boolean
    dbType?: boolean
    host?: boolean
    port?: boolean
    database?: boolean
    username?: boolean
    isActive?: boolean
    isReadOnly?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $DbConnectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DbConnection"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      dbType: string
      host: string
      port: number
      database: string
      username: string
      isActive: boolean
      isReadOnly: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dbConnection"]>
    composites: {}
  }

  type DbConnectionGetPayload<S extends boolean | null | undefined | DbConnectionDefaultArgs> = $Result.GetResult<Prisma.$DbConnectionPayload, S>

  type DbConnectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DbConnectionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DbConnectionCountAggregateInputType | true
    }

  export interface DbConnectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DbConnection'], meta: { name: 'DbConnection' } }
    /**
     * Find zero or one DbConnection that matches the filter.
     * @param {DbConnectionFindUniqueArgs} args - Arguments to find a DbConnection
     * @example
     * // Get one DbConnection
     * const dbConnection = await prisma.dbConnection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DbConnectionFindUniqueArgs>(args: SelectSubset<T, DbConnectionFindUniqueArgs<ExtArgs>>): Prisma__DbConnectionClient<$Result.GetResult<Prisma.$DbConnectionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DbConnection that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DbConnectionFindUniqueOrThrowArgs} args - Arguments to find a DbConnection
     * @example
     * // Get one DbConnection
     * const dbConnection = await prisma.dbConnection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DbConnectionFindUniqueOrThrowArgs>(args: SelectSubset<T, DbConnectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DbConnectionClient<$Result.GetResult<Prisma.$DbConnectionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DbConnection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DbConnectionFindFirstArgs} args - Arguments to find a DbConnection
     * @example
     * // Get one DbConnection
     * const dbConnection = await prisma.dbConnection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DbConnectionFindFirstArgs>(args?: SelectSubset<T, DbConnectionFindFirstArgs<ExtArgs>>): Prisma__DbConnectionClient<$Result.GetResult<Prisma.$DbConnectionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DbConnection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DbConnectionFindFirstOrThrowArgs} args - Arguments to find a DbConnection
     * @example
     * // Get one DbConnection
     * const dbConnection = await prisma.dbConnection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DbConnectionFindFirstOrThrowArgs>(args?: SelectSubset<T, DbConnectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DbConnectionClient<$Result.GetResult<Prisma.$DbConnectionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DbConnections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DbConnectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DbConnections
     * const dbConnections = await prisma.dbConnection.findMany()
     * 
     * // Get first 10 DbConnections
     * const dbConnections = await prisma.dbConnection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dbConnectionWithIdOnly = await prisma.dbConnection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DbConnectionFindManyArgs>(args?: SelectSubset<T, DbConnectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DbConnectionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DbConnection.
     * @param {DbConnectionCreateArgs} args - Arguments to create a DbConnection.
     * @example
     * // Create one DbConnection
     * const DbConnection = await prisma.dbConnection.create({
     *   data: {
     *     // ... data to create a DbConnection
     *   }
     * })
     * 
     */
    create<T extends DbConnectionCreateArgs>(args: SelectSubset<T, DbConnectionCreateArgs<ExtArgs>>): Prisma__DbConnectionClient<$Result.GetResult<Prisma.$DbConnectionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DbConnections.
     * @param {DbConnectionCreateManyArgs} args - Arguments to create many DbConnections.
     * @example
     * // Create many DbConnections
     * const dbConnection = await prisma.dbConnection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DbConnectionCreateManyArgs>(args?: SelectSubset<T, DbConnectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DbConnections and returns the data saved in the database.
     * @param {DbConnectionCreateManyAndReturnArgs} args - Arguments to create many DbConnections.
     * @example
     * // Create many DbConnections
     * const dbConnection = await prisma.dbConnection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DbConnections and only return the `id`
     * const dbConnectionWithIdOnly = await prisma.dbConnection.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DbConnectionCreateManyAndReturnArgs>(args?: SelectSubset<T, DbConnectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DbConnectionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DbConnection.
     * @param {DbConnectionDeleteArgs} args - Arguments to delete one DbConnection.
     * @example
     * // Delete one DbConnection
     * const DbConnection = await prisma.dbConnection.delete({
     *   where: {
     *     // ... filter to delete one DbConnection
     *   }
     * })
     * 
     */
    delete<T extends DbConnectionDeleteArgs>(args: SelectSubset<T, DbConnectionDeleteArgs<ExtArgs>>): Prisma__DbConnectionClient<$Result.GetResult<Prisma.$DbConnectionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DbConnection.
     * @param {DbConnectionUpdateArgs} args - Arguments to update one DbConnection.
     * @example
     * // Update one DbConnection
     * const dbConnection = await prisma.dbConnection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DbConnectionUpdateArgs>(args: SelectSubset<T, DbConnectionUpdateArgs<ExtArgs>>): Prisma__DbConnectionClient<$Result.GetResult<Prisma.$DbConnectionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DbConnections.
     * @param {DbConnectionDeleteManyArgs} args - Arguments to filter DbConnections to delete.
     * @example
     * // Delete a few DbConnections
     * const { count } = await prisma.dbConnection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DbConnectionDeleteManyArgs>(args?: SelectSubset<T, DbConnectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DbConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DbConnectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DbConnections
     * const dbConnection = await prisma.dbConnection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DbConnectionUpdateManyArgs>(args: SelectSubset<T, DbConnectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DbConnection.
     * @param {DbConnectionUpsertArgs} args - Arguments to update or create a DbConnection.
     * @example
     * // Update or create a DbConnection
     * const dbConnection = await prisma.dbConnection.upsert({
     *   create: {
     *     // ... data to create a DbConnection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DbConnection we want to update
     *   }
     * })
     */
    upsert<T extends DbConnectionUpsertArgs>(args: SelectSubset<T, DbConnectionUpsertArgs<ExtArgs>>): Prisma__DbConnectionClient<$Result.GetResult<Prisma.$DbConnectionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DbConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DbConnectionCountArgs} args - Arguments to filter DbConnections to count.
     * @example
     * // Count the number of DbConnections
     * const count = await prisma.dbConnection.count({
     *   where: {
     *     // ... the filter for the DbConnections we want to count
     *   }
     * })
    **/
    count<T extends DbConnectionCountArgs>(
      args?: Subset<T, DbConnectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DbConnectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DbConnection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DbConnectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DbConnectionAggregateArgs>(args: Subset<T, DbConnectionAggregateArgs>): Prisma.PrismaPromise<GetDbConnectionAggregateType<T>>

    /**
     * Group by DbConnection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DbConnectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DbConnectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DbConnectionGroupByArgs['orderBy'] }
        : { orderBy?: DbConnectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DbConnectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDbConnectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DbConnection model
   */
  readonly fields: DbConnectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DbConnection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DbConnectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DbConnection model
   */ 
  interface DbConnectionFieldRefs {
    readonly id: FieldRef<"DbConnection", 'String'>
    readonly name: FieldRef<"DbConnection", 'String'>
    readonly dbType: FieldRef<"DbConnection", 'String'>
    readonly host: FieldRef<"DbConnection", 'String'>
    readonly port: FieldRef<"DbConnection", 'Int'>
    readonly database: FieldRef<"DbConnection", 'String'>
    readonly username: FieldRef<"DbConnection", 'String'>
    readonly isActive: FieldRef<"DbConnection", 'Boolean'>
    readonly isReadOnly: FieldRef<"DbConnection", 'Boolean'>
    readonly createdAt: FieldRef<"DbConnection", 'DateTime'>
    readonly updatedAt: FieldRef<"DbConnection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DbConnection findUnique
   */
  export type DbConnectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DbConnection
     */
    select?: DbConnectionSelect<ExtArgs> | null
    /**
     * Filter, which DbConnection to fetch.
     */
    where: DbConnectionWhereUniqueInput
  }

  /**
   * DbConnection findUniqueOrThrow
   */
  export type DbConnectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DbConnection
     */
    select?: DbConnectionSelect<ExtArgs> | null
    /**
     * Filter, which DbConnection to fetch.
     */
    where: DbConnectionWhereUniqueInput
  }

  /**
   * DbConnection findFirst
   */
  export type DbConnectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DbConnection
     */
    select?: DbConnectionSelect<ExtArgs> | null
    /**
     * Filter, which DbConnection to fetch.
     */
    where?: DbConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DbConnections to fetch.
     */
    orderBy?: DbConnectionOrderByWithRelationInput | DbConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DbConnections.
     */
    cursor?: DbConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DbConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DbConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DbConnections.
     */
    distinct?: DbConnectionScalarFieldEnum | DbConnectionScalarFieldEnum[]
  }

  /**
   * DbConnection findFirstOrThrow
   */
  export type DbConnectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DbConnection
     */
    select?: DbConnectionSelect<ExtArgs> | null
    /**
     * Filter, which DbConnection to fetch.
     */
    where?: DbConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DbConnections to fetch.
     */
    orderBy?: DbConnectionOrderByWithRelationInput | DbConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DbConnections.
     */
    cursor?: DbConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DbConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DbConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DbConnections.
     */
    distinct?: DbConnectionScalarFieldEnum | DbConnectionScalarFieldEnum[]
  }

  /**
   * DbConnection findMany
   */
  export type DbConnectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DbConnection
     */
    select?: DbConnectionSelect<ExtArgs> | null
    /**
     * Filter, which DbConnections to fetch.
     */
    where?: DbConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DbConnections to fetch.
     */
    orderBy?: DbConnectionOrderByWithRelationInput | DbConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DbConnections.
     */
    cursor?: DbConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DbConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DbConnections.
     */
    skip?: number
    distinct?: DbConnectionScalarFieldEnum | DbConnectionScalarFieldEnum[]
  }

  /**
   * DbConnection create
   */
  export type DbConnectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DbConnection
     */
    select?: DbConnectionSelect<ExtArgs> | null
    /**
     * The data needed to create a DbConnection.
     */
    data: XOR<DbConnectionCreateInput, DbConnectionUncheckedCreateInput>
  }

  /**
   * DbConnection createMany
   */
  export type DbConnectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DbConnections.
     */
    data: DbConnectionCreateManyInput | DbConnectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DbConnection createManyAndReturn
   */
  export type DbConnectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DbConnection
     */
    select?: DbConnectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DbConnections.
     */
    data: DbConnectionCreateManyInput | DbConnectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DbConnection update
   */
  export type DbConnectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DbConnection
     */
    select?: DbConnectionSelect<ExtArgs> | null
    /**
     * The data needed to update a DbConnection.
     */
    data: XOR<DbConnectionUpdateInput, DbConnectionUncheckedUpdateInput>
    /**
     * Choose, which DbConnection to update.
     */
    where: DbConnectionWhereUniqueInput
  }

  /**
   * DbConnection updateMany
   */
  export type DbConnectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DbConnections.
     */
    data: XOR<DbConnectionUpdateManyMutationInput, DbConnectionUncheckedUpdateManyInput>
    /**
     * Filter which DbConnections to update
     */
    where?: DbConnectionWhereInput
  }

  /**
   * DbConnection upsert
   */
  export type DbConnectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DbConnection
     */
    select?: DbConnectionSelect<ExtArgs> | null
    /**
     * The filter to search for the DbConnection to update in case it exists.
     */
    where: DbConnectionWhereUniqueInput
    /**
     * In case the DbConnection found by the `where` argument doesn't exist, create a new DbConnection with this data.
     */
    create: XOR<DbConnectionCreateInput, DbConnectionUncheckedCreateInput>
    /**
     * In case the DbConnection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DbConnectionUpdateInput, DbConnectionUncheckedUpdateInput>
  }

  /**
   * DbConnection delete
   */
  export type DbConnectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DbConnection
     */
    select?: DbConnectionSelect<ExtArgs> | null
    /**
     * Filter which DbConnection to delete.
     */
    where: DbConnectionWhereUniqueInput
  }

  /**
   * DbConnection deleteMany
   */
  export type DbConnectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DbConnections to delete
     */
    where?: DbConnectionWhereInput
  }

  /**
   * DbConnection without action
   */
  export type DbConnectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DbConnection
     */
    select?: DbConnectionSelect<ExtArgs> | null
  }


  /**
   * Model ManufacturingDaily
   */

  export type AggregateManufacturingDaily = {
    _count: ManufacturingDailyCountAggregateOutputType | null
    _avg: ManufacturingDailyAvgAggregateOutputType | null
    _sum: ManufacturingDailySumAggregateOutputType | null
    _min: ManufacturingDailyMinAggregateOutputType | null
    _max: ManufacturingDailyMaxAggregateOutputType | null
  }

  export type ManufacturingDailyAvgAggregateOutputType = {
    lineId: number | null
    unitsProduced: number | null
    rejectionRate: Decimal | null
    energyKwh: Decimal | null
  }

  export type ManufacturingDailySumAggregateOutputType = {
    lineId: number | null
    unitsProduced: number | null
    rejectionRate: Decimal | null
    energyKwh: Decimal | null
  }

  export type ManufacturingDailyMinAggregateOutputType = {
    id: string | null
    date: Date | null
    lineId: number | null
    unitsProduced: number | null
    rejectionRate: Decimal | null
    energyKwh: Decimal | null
  }

  export type ManufacturingDailyMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    lineId: number | null
    unitsProduced: number | null
    rejectionRate: Decimal | null
    energyKwh: Decimal | null
  }

  export type ManufacturingDailyCountAggregateOutputType = {
    id: number
    date: number
    lineId: number
    unitsProduced: number
    rejectionRate: number
    energyKwh: number
    _all: number
  }


  export type ManufacturingDailyAvgAggregateInputType = {
    lineId?: true
    unitsProduced?: true
    rejectionRate?: true
    energyKwh?: true
  }

  export type ManufacturingDailySumAggregateInputType = {
    lineId?: true
    unitsProduced?: true
    rejectionRate?: true
    energyKwh?: true
  }

  export type ManufacturingDailyMinAggregateInputType = {
    id?: true
    date?: true
    lineId?: true
    unitsProduced?: true
    rejectionRate?: true
    energyKwh?: true
  }

  export type ManufacturingDailyMaxAggregateInputType = {
    id?: true
    date?: true
    lineId?: true
    unitsProduced?: true
    rejectionRate?: true
    energyKwh?: true
  }

  export type ManufacturingDailyCountAggregateInputType = {
    id?: true
    date?: true
    lineId?: true
    unitsProduced?: true
    rejectionRate?: true
    energyKwh?: true
    _all?: true
  }

  export type ManufacturingDailyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ManufacturingDaily to aggregate.
     */
    where?: ManufacturingDailyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManufacturingDailies to fetch.
     */
    orderBy?: ManufacturingDailyOrderByWithRelationInput | ManufacturingDailyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ManufacturingDailyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManufacturingDailies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManufacturingDailies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ManufacturingDailies
    **/
    _count?: true | ManufacturingDailyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ManufacturingDailyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ManufacturingDailySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ManufacturingDailyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ManufacturingDailyMaxAggregateInputType
  }

  export type GetManufacturingDailyAggregateType<T extends ManufacturingDailyAggregateArgs> = {
        [P in keyof T & keyof AggregateManufacturingDaily]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManufacturingDaily[P]>
      : GetScalarType<T[P], AggregateManufacturingDaily[P]>
  }




  export type ManufacturingDailyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManufacturingDailyWhereInput
    orderBy?: ManufacturingDailyOrderByWithAggregationInput | ManufacturingDailyOrderByWithAggregationInput[]
    by: ManufacturingDailyScalarFieldEnum[] | ManufacturingDailyScalarFieldEnum
    having?: ManufacturingDailyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ManufacturingDailyCountAggregateInputType | true
    _avg?: ManufacturingDailyAvgAggregateInputType
    _sum?: ManufacturingDailySumAggregateInputType
    _min?: ManufacturingDailyMinAggregateInputType
    _max?: ManufacturingDailyMaxAggregateInputType
  }

  export type ManufacturingDailyGroupByOutputType = {
    id: string
    date: Date
    lineId: number
    unitsProduced: number
    rejectionRate: Decimal
    energyKwh: Decimal
    _count: ManufacturingDailyCountAggregateOutputType | null
    _avg: ManufacturingDailyAvgAggregateOutputType | null
    _sum: ManufacturingDailySumAggregateOutputType | null
    _min: ManufacturingDailyMinAggregateOutputType | null
    _max: ManufacturingDailyMaxAggregateOutputType | null
  }

  type GetManufacturingDailyGroupByPayload<T extends ManufacturingDailyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ManufacturingDailyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ManufacturingDailyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ManufacturingDailyGroupByOutputType[P]>
            : GetScalarType<T[P], ManufacturingDailyGroupByOutputType[P]>
        }
      >
    >


  export type ManufacturingDailySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    lineId?: boolean
    unitsProduced?: boolean
    rejectionRate?: boolean
    energyKwh?: boolean
  }, ExtArgs["result"]["manufacturingDaily"]>

  export type ManufacturingDailySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    lineId?: boolean
    unitsProduced?: boolean
    rejectionRate?: boolean
    energyKwh?: boolean
  }, ExtArgs["result"]["manufacturingDaily"]>

  export type ManufacturingDailySelectScalar = {
    id?: boolean
    date?: boolean
    lineId?: boolean
    unitsProduced?: boolean
    rejectionRate?: boolean
    energyKwh?: boolean
  }


  export type $ManufacturingDailyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ManufacturingDaily"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      lineId: number
      unitsProduced: number
      rejectionRate: Prisma.Decimal
      energyKwh: Prisma.Decimal
    }, ExtArgs["result"]["manufacturingDaily"]>
    composites: {}
  }

  type ManufacturingDailyGetPayload<S extends boolean | null | undefined | ManufacturingDailyDefaultArgs> = $Result.GetResult<Prisma.$ManufacturingDailyPayload, S>

  type ManufacturingDailyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ManufacturingDailyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ManufacturingDailyCountAggregateInputType | true
    }

  export interface ManufacturingDailyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ManufacturingDaily'], meta: { name: 'ManufacturingDaily' } }
    /**
     * Find zero or one ManufacturingDaily that matches the filter.
     * @param {ManufacturingDailyFindUniqueArgs} args - Arguments to find a ManufacturingDaily
     * @example
     * // Get one ManufacturingDaily
     * const manufacturingDaily = await prisma.manufacturingDaily.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ManufacturingDailyFindUniqueArgs>(args: SelectSubset<T, ManufacturingDailyFindUniqueArgs<ExtArgs>>): Prisma__ManufacturingDailyClient<$Result.GetResult<Prisma.$ManufacturingDailyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ManufacturingDaily that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ManufacturingDailyFindUniqueOrThrowArgs} args - Arguments to find a ManufacturingDaily
     * @example
     * // Get one ManufacturingDaily
     * const manufacturingDaily = await prisma.manufacturingDaily.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ManufacturingDailyFindUniqueOrThrowArgs>(args: SelectSubset<T, ManufacturingDailyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ManufacturingDailyClient<$Result.GetResult<Prisma.$ManufacturingDailyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ManufacturingDaily that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturingDailyFindFirstArgs} args - Arguments to find a ManufacturingDaily
     * @example
     * // Get one ManufacturingDaily
     * const manufacturingDaily = await prisma.manufacturingDaily.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ManufacturingDailyFindFirstArgs>(args?: SelectSubset<T, ManufacturingDailyFindFirstArgs<ExtArgs>>): Prisma__ManufacturingDailyClient<$Result.GetResult<Prisma.$ManufacturingDailyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ManufacturingDaily that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturingDailyFindFirstOrThrowArgs} args - Arguments to find a ManufacturingDaily
     * @example
     * // Get one ManufacturingDaily
     * const manufacturingDaily = await prisma.manufacturingDaily.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ManufacturingDailyFindFirstOrThrowArgs>(args?: SelectSubset<T, ManufacturingDailyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ManufacturingDailyClient<$Result.GetResult<Prisma.$ManufacturingDailyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ManufacturingDailies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturingDailyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ManufacturingDailies
     * const manufacturingDailies = await prisma.manufacturingDaily.findMany()
     * 
     * // Get first 10 ManufacturingDailies
     * const manufacturingDailies = await prisma.manufacturingDaily.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const manufacturingDailyWithIdOnly = await prisma.manufacturingDaily.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ManufacturingDailyFindManyArgs>(args?: SelectSubset<T, ManufacturingDailyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManufacturingDailyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ManufacturingDaily.
     * @param {ManufacturingDailyCreateArgs} args - Arguments to create a ManufacturingDaily.
     * @example
     * // Create one ManufacturingDaily
     * const ManufacturingDaily = await prisma.manufacturingDaily.create({
     *   data: {
     *     // ... data to create a ManufacturingDaily
     *   }
     * })
     * 
     */
    create<T extends ManufacturingDailyCreateArgs>(args: SelectSubset<T, ManufacturingDailyCreateArgs<ExtArgs>>): Prisma__ManufacturingDailyClient<$Result.GetResult<Prisma.$ManufacturingDailyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ManufacturingDailies.
     * @param {ManufacturingDailyCreateManyArgs} args - Arguments to create many ManufacturingDailies.
     * @example
     * // Create many ManufacturingDailies
     * const manufacturingDaily = await prisma.manufacturingDaily.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ManufacturingDailyCreateManyArgs>(args?: SelectSubset<T, ManufacturingDailyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ManufacturingDailies and returns the data saved in the database.
     * @param {ManufacturingDailyCreateManyAndReturnArgs} args - Arguments to create many ManufacturingDailies.
     * @example
     * // Create many ManufacturingDailies
     * const manufacturingDaily = await prisma.manufacturingDaily.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ManufacturingDailies and only return the `id`
     * const manufacturingDailyWithIdOnly = await prisma.manufacturingDaily.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ManufacturingDailyCreateManyAndReturnArgs>(args?: SelectSubset<T, ManufacturingDailyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManufacturingDailyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ManufacturingDaily.
     * @param {ManufacturingDailyDeleteArgs} args - Arguments to delete one ManufacturingDaily.
     * @example
     * // Delete one ManufacturingDaily
     * const ManufacturingDaily = await prisma.manufacturingDaily.delete({
     *   where: {
     *     // ... filter to delete one ManufacturingDaily
     *   }
     * })
     * 
     */
    delete<T extends ManufacturingDailyDeleteArgs>(args: SelectSubset<T, ManufacturingDailyDeleteArgs<ExtArgs>>): Prisma__ManufacturingDailyClient<$Result.GetResult<Prisma.$ManufacturingDailyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ManufacturingDaily.
     * @param {ManufacturingDailyUpdateArgs} args - Arguments to update one ManufacturingDaily.
     * @example
     * // Update one ManufacturingDaily
     * const manufacturingDaily = await prisma.manufacturingDaily.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ManufacturingDailyUpdateArgs>(args: SelectSubset<T, ManufacturingDailyUpdateArgs<ExtArgs>>): Prisma__ManufacturingDailyClient<$Result.GetResult<Prisma.$ManufacturingDailyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ManufacturingDailies.
     * @param {ManufacturingDailyDeleteManyArgs} args - Arguments to filter ManufacturingDailies to delete.
     * @example
     * // Delete a few ManufacturingDailies
     * const { count } = await prisma.manufacturingDaily.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ManufacturingDailyDeleteManyArgs>(args?: SelectSubset<T, ManufacturingDailyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ManufacturingDailies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturingDailyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ManufacturingDailies
     * const manufacturingDaily = await prisma.manufacturingDaily.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ManufacturingDailyUpdateManyArgs>(args: SelectSubset<T, ManufacturingDailyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ManufacturingDaily.
     * @param {ManufacturingDailyUpsertArgs} args - Arguments to update or create a ManufacturingDaily.
     * @example
     * // Update or create a ManufacturingDaily
     * const manufacturingDaily = await prisma.manufacturingDaily.upsert({
     *   create: {
     *     // ... data to create a ManufacturingDaily
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ManufacturingDaily we want to update
     *   }
     * })
     */
    upsert<T extends ManufacturingDailyUpsertArgs>(args: SelectSubset<T, ManufacturingDailyUpsertArgs<ExtArgs>>): Prisma__ManufacturingDailyClient<$Result.GetResult<Prisma.$ManufacturingDailyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ManufacturingDailies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturingDailyCountArgs} args - Arguments to filter ManufacturingDailies to count.
     * @example
     * // Count the number of ManufacturingDailies
     * const count = await prisma.manufacturingDaily.count({
     *   where: {
     *     // ... the filter for the ManufacturingDailies we want to count
     *   }
     * })
    **/
    count<T extends ManufacturingDailyCountArgs>(
      args?: Subset<T, ManufacturingDailyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ManufacturingDailyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ManufacturingDaily.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturingDailyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ManufacturingDailyAggregateArgs>(args: Subset<T, ManufacturingDailyAggregateArgs>): Prisma.PrismaPromise<GetManufacturingDailyAggregateType<T>>

    /**
     * Group by ManufacturingDaily.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturingDailyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ManufacturingDailyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ManufacturingDailyGroupByArgs['orderBy'] }
        : { orderBy?: ManufacturingDailyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ManufacturingDailyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManufacturingDailyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ManufacturingDaily model
   */
  readonly fields: ManufacturingDailyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ManufacturingDaily.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ManufacturingDailyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ManufacturingDaily model
   */ 
  interface ManufacturingDailyFieldRefs {
    readonly id: FieldRef<"ManufacturingDaily", 'String'>
    readonly date: FieldRef<"ManufacturingDaily", 'DateTime'>
    readonly lineId: FieldRef<"ManufacturingDaily", 'Int'>
    readonly unitsProduced: FieldRef<"ManufacturingDaily", 'Int'>
    readonly rejectionRate: FieldRef<"ManufacturingDaily", 'Decimal'>
    readonly energyKwh: FieldRef<"ManufacturingDaily", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * ManufacturingDaily findUnique
   */
  export type ManufacturingDailyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturingDaily
     */
    select?: ManufacturingDailySelect<ExtArgs> | null
    /**
     * Filter, which ManufacturingDaily to fetch.
     */
    where: ManufacturingDailyWhereUniqueInput
  }

  /**
   * ManufacturingDaily findUniqueOrThrow
   */
  export type ManufacturingDailyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturingDaily
     */
    select?: ManufacturingDailySelect<ExtArgs> | null
    /**
     * Filter, which ManufacturingDaily to fetch.
     */
    where: ManufacturingDailyWhereUniqueInput
  }

  /**
   * ManufacturingDaily findFirst
   */
  export type ManufacturingDailyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturingDaily
     */
    select?: ManufacturingDailySelect<ExtArgs> | null
    /**
     * Filter, which ManufacturingDaily to fetch.
     */
    where?: ManufacturingDailyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManufacturingDailies to fetch.
     */
    orderBy?: ManufacturingDailyOrderByWithRelationInput | ManufacturingDailyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ManufacturingDailies.
     */
    cursor?: ManufacturingDailyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManufacturingDailies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManufacturingDailies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ManufacturingDailies.
     */
    distinct?: ManufacturingDailyScalarFieldEnum | ManufacturingDailyScalarFieldEnum[]
  }

  /**
   * ManufacturingDaily findFirstOrThrow
   */
  export type ManufacturingDailyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturingDaily
     */
    select?: ManufacturingDailySelect<ExtArgs> | null
    /**
     * Filter, which ManufacturingDaily to fetch.
     */
    where?: ManufacturingDailyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManufacturingDailies to fetch.
     */
    orderBy?: ManufacturingDailyOrderByWithRelationInput | ManufacturingDailyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ManufacturingDailies.
     */
    cursor?: ManufacturingDailyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManufacturingDailies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManufacturingDailies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ManufacturingDailies.
     */
    distinct?: ManufacturingDailyScalarFieldEnum | ManufacturingDailyScalarFieldEnum[]
  }

  /**
   * ManufacturingDaily findMany
   */
  export type ManufacturingDailyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturingDaily
     */
    select?: ManufacturingDailySelect<ExtArgs> | null
    /**
     * Filter, which ManufacturingDailies to fetch.
     */
    where?: ManufacturingDailyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManufacturingDailies to fetch.
     */
    orderBy?: ManufacturingDailyOrderByWithRelationInput | ManufacturingDailyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ManufacturingDailies.
     */
    cursor?: ManufacturingDailyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManufacturingDailies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManufacturingDailies.
     */
    skip?: number
    distinct?: ManufacturingDailyScalarFieldEnum | ManufacturingDailyScalarFieldEnum[]
  }

  /**
   * ManufacturingDaily create
   */
  export type ManufacturingDailyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturingDaily
     */
    select?: ManufacturingDailySelect<ExtArgs> | null
    /**
     * The data needed to create a ManufacturingDaily.
     */
    data: XOR<ManufacturingDailyCreateInput, ManufacturingDailyUncheckedCreateInput>
  }

  /**
   * ManufacturingDaily createMany
   */
  export type ManufacturingDailyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ManufacturingDailies.
     */
    data: ManufacturingDailyCreateManyInput | ManufacturingDailyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ManufacturingDaily createManyAndReturn
   */
  export type ManufacturingDailyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturingDaily
     */
    select?: ManufacturingDailySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ManufacturingDailies.
     */
    data: ManufacturingDailyCreateManyInput | ManufacturingDailyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ManufacturingDaily update
   */
  export type ManufacturingDailyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturingDaily
     */
    select?: ManufacturingDailySelect<ExtArgs> | null
    /**
     * The data needed to update a ManufacturingDaily.
     */
    data: XOR<ManufacturingDailyUpdateInput, ManufacturingDailyUncheckedUpdateInput>
    /**
     * Choose, which ManufacturingDaily to update.
     */
    where: ManufacturingDailyWhereUniqueInput
  }

  /**
   * ManufacturingDaily updateMany
   */
  export type ManufacturingDailyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ManufacturingDailies.
     */
    data: XOR<ManufacturingDailyUpdateManyMutationInput, ManufacturingDailyUncheckedUpdateManyInput>
    /**
     * Filter which ManufacturingDailies to update
     */
    where?: ManufacturingDailyWhereInput
  }

  /**
   * ManufacturingDaily upsert
   */
  export type ManufacturingDailyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturingDaily
     */
    select?: ManufacturingDailySelect<ExtArgs> | null
    /**
     * The filter to search for the ManufacturingDaily to update in case it exists.
     */
    where: ManufacturingDailyWhereUniqueInput
    /**
     * In case the ManufacturingDaily found by the `where` argument doesn't exist, create a new ManufacturingDaily with this data.
     */
    create: XOR<ManufacturingDailyCreateInput, ManufacturingDailyUncheckedCreateInput>
    /**
     * In case the ManufacturingDaily was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ManufacturingDailyUpdateInput, ManufacturingDailyUncheckedUpdateInput>
  }

  /**
   * ManufacturingDaily delete
   */
  export type ManufacturingDailyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturingDaily
     */
    select?: ManufacturingDailySelect<ExtArgs> | null
    /**
     * Filter which ManufacturingDaily to delete.
     */
    where: ManufacturingDailyWhereUniqueInput
  }

  /**
   * ManufacturingDaily deleteMany
   */
  export type ManufacturingDailyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ManufacturingDailies to delete
     */
    where?: ManufacturingDailyWhereInput
  }

  /**
   * ManufacturingDaily without action
   */
  export type ManufacturingDailyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturingDaily
     */
    select?: ManufacturingDailySelect<ExtArgs> | null
  }


  /**
   * Model SalesMonthly
   */

  export type AggregateSalesMonthly = {
    _count: SalesMonthlyCountAggregateOutputType | null
    _avg: SalesMonthlyAvgAggregateOutputType | null
    _sum: SalesMonthlySumAggregateOutputType | null
    _min: SalesMonthlyMinAggregateOutputType | null
    _max: SalesMonthlyMaxAggregateOutputType | null
  }

  export type SalesMonthlyAvgAggregateOutputType = {
    revenue: Decimal | null
    unitsSold: number | null
  }

  export type SalesMonthlySumAggregateOutputType = {
    revenue: Decimal | null
    unitsSold: number | null
  }

  export type SalesMonthlyMinAggregateOutputType = {
    id: string | null
    month: Date | null
    channel: string | null
    revenue: Decimal | null
    unitsSold: number | null
    region: string | null
  }

  export type SalesMonthlyMaxAggregateOutputType = {
    id: string | null
    month: Date | null
    channel: string | null
    revenue: Decimal | null
    unitsSold: number | null
    region: string | null
  }

  export type SalesMonthlyCountAggregateOutputType = {
    id: number
    month: number
    channel: number
    revenue: number
    unitsSold: number
    region: number
    _all: number
  }


  export type SalesMonthlyAvgAggregateInputType = {
    revenue?: true
    unitsSold?: true
  }

  export type SalesMonthlySumAggregateInputType = {
    revenue?: true
    unitsSold?: true
  }

  export type SalesMonthlyMinAggregateInputType = {
    id?: true
    month?: true
    channel?: true
    revenue?: true
    unitsSold?: true
    region?: true
  }

  export type SalesMonthlyMaxAggregateInputType = {
    id?: true
    month?: true
    channel?: true
    revenue?: true
    unitsSold?: true
    region?: true
  }

  export type SalesMonthlyCountAggregateInputType = {
    id?: true
    month?: true
    channel?: true
    revenue?: true
    unitsSold?: true
    region?: true
    _all?: true
  }

  export type SalesMonthlyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesMonthly to aggregate.
     */
    where?: SalesMonthlyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesMonthlies to fetch.
     */
    orderBy?: SalesMonthlyOrderByWithRelationInput | SalesMonthlyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalesMonthlyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesMonthlies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesMonthlies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalesMonthlies
    **/
    _count?: true | SalesMonthlyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalesMonthlyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalesMonthlySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesMonthlyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesMonthlyMaxAggregateInputType
  }

  export type GetSalesMonthlyAggregateType<T extends SalesMonthlyAggregateArgs> = {
        [P in keyof T & keyof AggregateSalesMonthly]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalesMonthly[P]>
      : GetScalarType<T[P], AggregateSalesMonthly[P]>
  }




  export type SalesMonthlyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesMonthlyWhereInput
    orderBy?: SalesMonthlyOrderByWithAggregationInput | SalesMonthlyOrderByWithAggregationInput[]
    by: SalesMonthlyScalarFieldEnum[] | SalesMonthlyScalarFieldEnum
    having?: SalesMonthlyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesMonthlyCountAggregateInputType | true
    _avg?: SalesMonthlyAvgAggregateInputType
    _sum?: SalesMonthlySumAggregateInputType
    _min?: SalesMonthlyMinAggregateInputType
    _max?: SalesMonthlyMaxAggregateInputType
  }

  export type SalesMonthlyGroupByOutputType = {
    id: string
    month: Date
    channel: string
    revenue: Decimal
    unitsSold: number
    region: string
    _count: SalesMonthlyCountAggregateOutputType | null
    _avg: SalesMonthlyAvgAggregateOutputType | null
    _sum: SalesMonthlySumAggregateOutputType | null
    _min: SalesMonthlyMinAggregateOutputType | null
    _max: SalesMonthlyMaxAggregateOutputType | null
  }

  type GetSalesMonthlyGroupByPayload<T extends SalesMonthlyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesMonthlyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesMonthlyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesMonthlyGroupByOutputType[P]>
            : GetScalarType<T[P], SalesMonthlyGroupByOutputType[P]>
        }
      >
    >


  export type SalesMonthlySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    month?: boolean
    channel?: boolean
    revenue?: boolean
    unitsSold?: boolean
    region?: boolean
  }, ExtArgs["result"]["salesMonthly"]>

  export type SalesMonthlySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    month?: boolean
    channel?: boolean
    revenue?: boolean
    unitsSold?: boolean
    region?: boolean
  }, ExtArgs["result"]["salesMonthly"]>

  export type SalesMonthlySelectScalar = {
    id?: boolean
    month?: boolean
    channel?: boolean
    revenue?: boolean
    unitsSold?: boolean
    region?: boolean
  }


  export type $SalesMonthlyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalesMonthly"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      month: Date
      channel: string
      revenue: Prisma.Decimal
      unitsSold: number
      region: string
    }, ExtArgs["result"]["salesMonthly"]>
    composites: {}
  }

  type SalesMonthlyGetPayload<S extends boolean | null | undefined | SalesMonthlyDefaultArgs> = $Result.GetResult<Prisma.$SalesMonthlyPayload, S>

  type SalesMonthlyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SalesMonthlyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SalesMonthlyCountAggregateInputType | true
    }

  export interface SalesMonthlyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalesMonthly'], meta: { name: 'SalesMonthly' } }
    /**
     * Find zero or one SalesMonthly that matches the filter.
     * @param {SalesMonthlyFindUniqueArgs} args - Arguments to find a SalesMonthly
     * @example
     * // Get one SalesMonthly
     * const salesMonthly = await prisma.salesMonthly.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalesMonthlyFindUniqueArgs>(args: SelectSubset<T, SalesMonthlyFindUniqueArgs<ExtArgs>>): Prisma__SalesMonthlyClient<$Result.GetResult<Prisma.$SalesMonthlyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SalesMonthly that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SalesMonthlyFindUniqueOrThrowArgs} args - Arguments to find a SalesMonthly
     * @example
     * // Get one SalesMonthly
     * const salesMonthly = await prisma.salesMonthly.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalesMonthlyFindUniqueOrThrowArgs>(args: SelectSubset<T, SalesMonthlyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalesMonthlyClient<$Result.GetResult<Prisma.$SalesMonthlyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SalesMonthly that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesMonthlyFindFirstArgs} args - Arguments to find a SalesMonthly
     * @example
     * // Get one SalesMonthly
     * const salesMonthly = await prisma.salesMonthly.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalesMonthlyFindFirstArgs>(args?: SelectSubset<T, SalesMonthlyFindFirstArgs<ExtArgs>>): Prisma__SalesMonthlyClient<$Result.GetResult<Prisma.$SalesMonthlyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SalesMonthly that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesMonthlyFindFirstOrThrowArgs} args - Arguments to find a SalesMonthly
     * @example
     * // Get one SalesMonthly
     * const salesMonthly = await prisma.salesMonthly.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalesMonthlyFindFirstOrThrowArgs>(args?: SelectSubset<T, SalesMonthlyFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalesMonthlyClient<$Result.GetResult<Prisma.$SalesMonthlyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SalesMonthlies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesMonthlyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalesMonthlies
     * const salesMonthlies = await prisma.salesMonthly.findMany()
     * 
     * // Get first 10 SalesMonthlies
     * const salesMonthlies = await prisma.salesMonthly.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salesMonthlyWithIdOnly = await prisma.salesMonthly.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalesMonthlyFindManyArgs>(args?: SelectSubset<T, SalesMonthlyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesMonthlyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SalesMonthly.
     * @param {SalesMonthlyCreateArgs} args - Arguments to create a SalesMonthly.
     * @example
     * // Create one SalesMonthly
     * const SalesMonthly = await prisma.salesMonthly.create({
     *   data: {
     *     // ... data to create a SalesMonthly
     *   }
     * })
     * 
     */
    create<T extends SalesMonthlyCreateArgs>(args: SelectSubset<T, SalesMonthlyCreateArgs<ExtArgs>>): Prisma__SalesMonthlyClient<$Result.GetResult<Prisma.$SalesMonthlyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SalesMonthlies.
     * @param {SalesMonthlyCreateManyArgs} args - Arguments to create many SalesMonthlies.
     * @example
     * // Create many SalesMonthlies
     * const salesMonthly = await prisma.salesMonthly.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalesMonthlyCreateManyArgs>(args?: SelectSubset<T, SalesMonthlyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SalesMonthlies and returns the data saved in the database.
     * @param {SalesMonthlyCreateManyAndReturnArgs} args - Arguments to create many SalesMonthlies.
     * @example
     * // Create many SalesMonthlies
     * const salesMonthly = await prisma.salesMonthly.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SalesMonthlies and only return the `id`
     * const salesMonthlyWithIdOnly = await prisma.salesMonthly.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalesMonthlyCreateManyAndReturnArgs>(args?: SelectSubset<T, SalesMonthlyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesMonthlyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SalesMonthly.
     * @param {SalesMonthlyDeleteArgs} args - Arguments to delete one SalesMonthly.
     * @example
     * // Delete one SalesMonthly
     * const SalesMonthly = await prisma.salesMonthly.delete({
     *   where: {
     *     // ... filter to delete one SalesMonthly
     *   }
     * })
     * 
     */
    delete<T extends SalesMonthlyDeleteArgs>(args: SelectSubset<T, SalesMonthlyDeleteArgs<ExtArgs>>): Prisma__SalesMonthlyClient<$Result.GetResult<Prisma.$SalesMonthlyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SalesMonthly.
     * @param {SalesMonthlyUpdateArgs} args - Arguments to update one SalesMonthly.
     * @example
     * // Update one SalesMonthly
     * const salesMonthly = await prisma.salesMonthly.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalesMonthlyUpdateArgs>(args: SelectSubset<T, SalesMonthlyUpdateArgs<ExtArgs>>): Prisma__SalesMonthlyClient<$Result.GetResult<Prisma.$SalesMonthlyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SalesMonthlies.
     * @param {SalesMonthlyDeleteManyArgs} args - Arguments to filter SalesMonthlies to delete.
     * @example
     * // Delete a few SalesMonthlies
     * const { count } = await prisma.salesMonthly.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalesMonthlyDeleteManyArgs>(args?: SelectSubset<T, SalesMonthlyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesMonthlies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesMonthlyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalesMonthlies
     * const salesMonthly = await prisma.salesMonthly.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalesMonthlyUpdateManyArgs>(args: SelectSubset<T, SalesMonthlyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SalesMonthly.
     * @param {SalesMonthlyUpsertArgs} args - Arguments to update or create a SalesMonthly.
     * @example
     * // Update or create a SalesMonthly
     * const salesMonthly = await prisma.salesMonthly.upsert({
     *   create: {
     *     // ... data to create a SalesMonthly
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalesMonthly we want to update
     *   }
     * })
     */
    upsert<T extends SalesMonthlyUpsertArgs>(args: SelectSubset<T, SalesMonthlyUpsertArgs<ExtArgs>>): Prisma__SalesMonthlyClient<$Result.GetResult<Prisma.$SalesMonthlyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SalesMonthlies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesMonthlyCountArgs} args - Arguments to filter SalesMonthlies to count.
     * @example
     * // Count the number of SalesMonthlies
     * const count = await prisma.salesMonthly.count({
     *   where: {
     *     // ... the filter for the SalesMonthlies we want to count
     *   }
     * })
    **/
    count<T extends SalesMonthlyCountArgs>(
      args?: Subset<T, SalesMonthlyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesMonthlyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalesMonthly.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesMonthlyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SalesMonthlyAggregateArgs>(args: Subset<T, SalesMonthlyAggregateArgs>): Prisma.PrismaPromise<GetSalesMonthlyAggregateType<T>>

    /**
     * Group by SalesMonthly.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesMonthlyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SalesMonthlyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalesMonthlyGroupByArgs['orderBy'] }
        : { orderBy?: SalesMonthlyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SalesMonthlyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesMonthlyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalesMonthly model
   */
  readonly fields: SalesMonthlyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalesMonthly.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalesMonthlyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SalesMonthly model
   */ 
  interface SalesMonthlyFieldRefs {
    readonly id: FieldRef<"SalesMonthly", 'String'>
    readonly month: FieldRef<"SalesMonthly", 'DateTime'>
    readonly channel: FieldRef<"SalesMonthly", 'String'>
    readonly revenue: FieldRef<"SalesMonthly", 'Decimal'>
    readonly unitsSold: FieldRef<"SalesMonthly", 'Int'>
    readonly region: FieldRef<"SalesMonthly", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SalesMonthly findUnique
   */
  export type SalesMonthlyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesMonthly
     */
    select?: SalesMonthlySelect<ExtArgs> | null
    /**
     * Filter, which SalesMonthly to fetch.
     */
    where: SalesMonthlyWhereUniqueInput
  }

  /**
   * SalesMonthly findUniqueOrThrow
   */
  export type SalesMonthlyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesMonthly
     */
    select?: SalesMonthlySelect<ExtArgs> | null
    /**
     * Filter, which SalesMonthly to fetch.
     */
    where: SalesMonthlyWhereUniqueInput
  }

  /**
   * SalesMonthly findFirst
   */
  export type SalesMonthlyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesMonthly
     */
    select?: SalesMonthlySelect<ExtArgs> | null
    /**
     * Filter, which SalesMonthly to fetch.
     */
    where?: SalesMonthlyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesMonthlies to fetch.
     */
    orderBy?: SalesMonthlyOrderByWithRelationInput | SalesMonthlyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesMonthlies.
     */
    cursor?: SalesMonthlyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesMonthlies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesMonthlies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesMonthlies.
     */
    distinct?: SalesMonthlyScalarFieldEnum | SalesMonthlyScalarFieldEnum[]
  }

  /**
   * SalesMonthly findFirstOrThrow
   */
  export type SalesMonthlyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesMonthly
     */
    select?: SalesMonthlySelect<ExtArgs> | null
    /**
     * Filter, which SalesMonthly to fetch.
     */
    where?: SalesMonthlyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesMonthlies to fetch.
     */
    orderBy?: SalesMonthlyOrderByWithRelationInput | SalesMonthlyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesMonthlies.
     */
    cursor?: SalesMonthlyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesMonthlies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesMonthlies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesMonthlies.
     */
    distinct?: SalesMonthlyScalarFieldEnum | SalesMonthlyScalarFieldEnum[]
  }

  /**
   * SalesMonthly findMany
   */
  export type SalesMonthlyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesMonthly
     */
    select?: SalesMonthlySelect<ExtArgs> | null
    /**
     * Filter, which SalesMonthlies to fetch.
     */
    where?: SalesMonthlyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesMonthlies to fetch.
     */
    orderBy?: SalesMonthlyOrderByWithRelationInput | SalesMonthlyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalesMonthlies.
     */
    cursor?: SalesMonthlyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesMonthlies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesMonthlies.
     */
    skip?: number
    distinct?: SalesMonthlyScalarFieldEnum | SalesMonthlyScalarFieldEnum[]
  }

  /**
   * SalesMonthly create
   */
  export type SalesMonthlyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesMonthly
     */
    select?: SalesMonthlySelect<ExtArgs> | null
    /**
     * The data needed to create a SalesMonthly.
     */
    data: XOR<SalesMonthlyCreateInput, SalesMonthlyUncheckedCreateInput>
  }

  /**
   * SalesMonthly createMany
   */
  export type SalesMonthlyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalesMonthlies.
     */
    data: SalesMonthlyCreateManyInput | SalesMonthlyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalesMonthly createManyAndReturn
   */
  export type SalesMonthlyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesMonthly
     */
    select?: SalesMonthlySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SalesMonthlies.
     */
    data: SalesMonthlyCreateManyInput | SalesMonthlyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalesMonthly update
   */
  export type SalesMonthlyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesMonthly
     */
    select?: SalesMonthlySelect<ExtArgs> | null
    /**
     * The data needed to update a SalesMonthly.
     */
    data: XOR<SalesMonthlyUpdateInput, SalesMonthlyUncheckedUpdateInput>
    /**
     * Choose, which SalesMonthly to update.
     */
    where: SalesMonthlyWhereUniqueInput
  }

  /**
   * SalesMonthly updateMany
   */
  export type SalesMonthlyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalesMonthlies.
     */
    data: XOR<SalesMonthlyUpdateManyMutationInput, SalesMonthlyUncheckedUpdateManyInput>
    /**
     * Filter which SalesMonthlies to update
     */
    where?: SalesMonthlyWhereInput
  }

  /**
   * SalesMonthly upsert
   */
  export type SalesMonthlyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesMonthly
     */
    select?: SalesMonthlySelect<ExtArgs> | null
    /**
     * The filter to search for the SalesMonthly to update in case it exists.
     */
    where: SalesMonthlyWhereUniqueInput
    /**
     * In case the SalesMonthly found by the `where` argument doesn't exist, create a new SalesMonthly with this data.
     */
    create: XOR<SalesMonthlyCreateInput, SalesMonthlyUncheckedCreateInput>
    /**
     * In case the SalesMonthly was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalesMonthlyUpdateInput, SalesMonthlyUncheckedUpdateInput>
  }

  /**
   * SalesMonthly delete
   */
  export type SalesMonthlyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesMonthly
     */
    select?: SalesMonthlySelect<ExtArgs> | null
    /**
     * Filter which SalesMonthly to delete.
     */
    where: SalesMonthlyWhereUniqueInput
  }

  /**
   * SalesMonthly deleteMany
   */
  export type SalesMonthlyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesMonthlies to delete
     */
    where?: SalesMonthlyWhereInput
  }

  /**
   * SalesMonthly without action
   */
  export type SalesMonthlyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesMonthly
     */
    select?: SalesMonthlySelect<ExtArgs> | null
  }


  /**
   * Model LegacyEmployee
   */

  export type AggregateLegacyEmployee = {
    _count: LegacyEmployeeCountAggregateOutputType | null
    _min: LegacyEmployeeMinAggregateOutputType | null
    _max: LegacyEmployeeMaxAggregateOutputType | null
  }

  export type LegacyEmployeeMinAggregateOutputType = {
    id: string | null
    name: string | null
    department: string | null
    managerId: string | null
    role: string | null
  }

  export type LegacyEmployeeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    department: string | null
    managerId: string | null
    role: string | null
  }

  export type LegacyEmployeeCountAggregateOutputType = {
    id: number
    name: number
    department: number
    managerId: number
    role: number
    _all: number
  }


  export type LegacyEmployeeMinAggregateInputType = {
    id?: true
    name?: true
    department?: true
    managerId?: true
    role?: true
  }

  export type LegacyEmployeeMaxAggregateInputType = {
    id?: true
    name?: true
    department?: true
    managerId?: true
    role?: true
  }

  export type LegacyEmployeeCountAggregateInputType = {
    id?: true
    name?: true
    department?: true
    managerId?: true
    role?: true
    _all?: true
  }

  export type LegacyEmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LegacyEmployee to aggregate.
     */
    where?: LegacyEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegacyEmployees to fetch.
     */
    orderBy?: LegacyEmployeeOrderByWithRelationInput | LegacyEmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LegacyEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegacyEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegacyEmployees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LegacyEmployees
    **/
    _count?: true | LegacyEmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LegacyEmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LegacyEmployeeMaxAggregateInputType
  }

  export type GetLegacyEmployeeAggregateType<T extends LegacyEmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateLegacyEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLegacyEmployee[P]>
      : GetScalarType<T[P], AggregateLegacyEmployee[P]>
  }




  export type LegacyEmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LegacyEmployeeWhereInput
    orderBy?: LegacyEmployeeOrderByWithAggregationInput | LegacyEmployeeOrderByWithAggregationInput[]
    by: LegacyEmployeeScalarFieldEnum[] | LegacyEmployeeScalarFieldEnum
    having?: LegacyEmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LegacyEmployeeCountAggregateInputType | true
    _min?: LegacyEmployeeMinAggregateInputType
    _max?: LegacyEmployeeMaxAggregateInputType
  }

  export type LegacyEmployeeGroupByOutputType = {
    id: string
    name: string
    department: string
    managerId: string | null
    role: string
    _count: LegacyEmployeeCountAggregateOutputType | null
    _min: LegacyEmployeeMinAggregateOutputType | null
    _max: LegacyEmployeeMaxAggregateOutputType | null
  }

  type GetLegacyEmployeeGroupByPayload<T extends LegacyEmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LegacyEmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LegacyEmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LegacyEmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], LegacyEmployeeGroupByOutputType[P]>
        }
      >
    >


  export type LegacyEmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    department?: boolean
    managerId?: boolean
    role?: boolean
    goals?: boolean | LegacyEmployee$goalsArgs<ExtArgs>
    _count?: boolean | LegacyEmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["legacyEmployee"]>

  export type LegacyEmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    department?: boolean
    managerId?: boolean
    role?: boolean
  }, ExtArgs["result"]["legacyEmployee"]>

  export type LegacyEmployeeSelectScalar = {
    id?: boolean
    name?: boolean
    department?: boolean
    managerId?: boolean
    role?: boolean
  }

  export type LegacyEmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goals?: boolean | LegacyEmployee$goalsArgs<ExtArgs>
    _count?: boolean | LegacyEmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LegacyEmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LegacyEmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LegacyEmployee"
    objects: {
      goals: Prisma.$LegacyGoalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      department: string
      managerId: string | null
      role: string
    }, ExtArgs["result"]["legacyEmployee"]>
    composites: {}
  }

  type LegacyEmployeeGetPayload<S extends boolean | null | undefined | LegacyEmployeeDefaultArgs> = $Result.GetResult<Prisma.$LegacyEmployeePayload, S>

  type LegacyEmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LegacyEmployeeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LegacyEmployeeCountAggregateInputType | true
    }

  export interface LegacyEmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LegacyEmployee'], meta: { name: 'LegacyEmployee' } }
    /**
     * Find zero or one LegacyEmployee that matches the filter.
     * @param {LegacyEmployeeFindUniqueArgs} args - Arguments to find a LegacyEmployee
     * @example
     * // Get one LegacyEmployee
     * const legacyEmployee = await prisma.legacyEmployee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LegacyEmployeeFindUniqueArgs>(args: SelectSubset<T, LegacyEmployeeFindUniqueArgs<ExtArgs>>): Prisma__LegacyEmployeeClient<$Result.GetResult<Prisma.$LegacyEmployeePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LegacyEmployee that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LegacyEmployeeFindUniqueOrThrowArgs} args - Arguments to find a LegacyEmployee
     * @example
     * // Get one LegacyEmployee
     * const legacyEmployee = await prisma.legacyEmployee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LegacyEmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, LegacyEmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LegacyEmployeeClient<$Result.GetResult<Prisma.$LegacyEmployeePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LegacyEmployee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegacyEmployeeFindFirstArgs} args - Arguments to find a LegacyEmployee
     * @example
     * // Get one LegacyEmployee
     * const legacyEmployee = await prisma.legacyEmployee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LegacyEmployeeFindFirstArgs>(args?: SelectSubset<T, LegacyEmployeeFindFirstArgs<ExtArgs>>): Prisma__LegacyEmployeeClient<$Result.GetResult<Prisma.$LegacyEmployeePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LegacyEmployee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegacyEmployeeFindFirstOrThrowArgs} args - Arguments to find a LegacyEmployee
     * @example
     * // Get one LegacyEmployee
     * const legacyEmployee = await prisma.legacyEmployee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LegacyEmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, LegacyEmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__LegacyEmployeeClient<$Result.GetResult<Prisma.$LegacyEmployeePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LegacyEmployees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegacyEmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LegacyEmployees
     * const legacyEmployees = await prisma.legacyEmployee.findMany()
     * 
     * // Get first 10 LegacyEmployees
     * const legacyEmployees = await prisma.legacyEmployee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const legacyEmployeeWithIdOnly = await prisma.legacyEmployee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LegacyEmployeeFindManyArgs>(args?: SelectSubset<T, LegacyEmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegacyEmployeePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LegacyEmployee.
     * @param {LegacyEmployeeCreateArgs} args - Arguments to create a LegacyEmployee.
     * @example
     * // Create one LegacyEmployee
     * const LegacyEmployee = await prisma.legacyEmployee.create({
     *   data: {
     *     // ... data to create a LegacyEmployee
     *   }
     * })
     * 
     */
    create<T extends LegacyEmployeeCreateArgs>(args: SelectSubset<T, LegacyEmployeeCreateArgs<ExtArgs>>): Prisma__LegacyEmployeeClient<$Result.GetResult<Prisma.$LegacyEmployeePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LegacyEmployees.
     * @param {LegacyEmployeeCreateManyArgs} args - Arguments to create many LegacyEmployees.
     * @example
     * // Create many LegacyEmployees
     * const legacyEmployee = await prisma.legacyEmployee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LegacyEmployeeCreateManyArgs>(args?: SelectSubset<T, LegacyEmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LegacyEmployees and returns the data saved in the database.
     * @param {LegacyEmployeeCreateManyAndReturnArgs} args - Arguments to create many LegacyEmployees.
     * @example
     * // Create many LegacyEmployees
     * const legacyEmployee = await prisma.legacyEmployee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LegacyEmployees and only return the `id`
     * const legacyEmployeeWithIdOnly = await prisma.legacyEmployee.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LegacyEmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, LegacyEmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegacyEmployeePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LegacyEmployee.
     * @param {LegacyEmployeeDeleteArgs} args - Arguments to delete one LegacyEmployee.
     * @example
     * // Delete one LegacyEmployee
     * const LegacyEmployee = await prisma.legacyEmployee.delete({
     *   where: {
     *     // ... filter to delete one LegacyEmployee
     *   }
     * })
     * 
     */
    delete<T extends LegacyEmployeeDeleteArgs>(args: SelectSubset<T, LegacyEmployeeDeleteArgs<ExtArgs>>): Prisma__LegacyEmployeeClient<$Result.GetResult<Prisma.$LegacyEmployeePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LegacyEmployee.
     * @param {LegacyEmployeeUpdateArgs} args - Arguments to update one LegacyEmployee.
     * @example
     * // Update one LegacyEmployee
     * const legacyEmployee = await prisma.legacyEmployee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LegacyEmployeeUpdateArgs>(args: SelectSubset<T, LegacyEmployeeUpdateArgs<ExtArgs>>): Prisma__LegacyEmployeeClient<$Result.GetResult<Prisma.$LegacyEmployeePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LegacyEmployees.
     * @param {LegacyEmployeeDeleteManyArgs} args - Arguments to filter LegacyEmployees to delete.
     * @example
     * // Delete a few LegacyEmployees
     * const { count } = await prisma.legacyEmployee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LegacyEmployeeDeleteManyArgs>(args?: SelectSubset<T, LegacyEmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LegacyEmployees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegacyEmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LegacyEmployees
     * const legacyEmployee = await prisma.legacyEmployee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LegacyEmployeeUpdateManyArgs>(args: SelectSubset<T, LegacyEmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LegacyEmployee.
     * @param {LegacyEmployeeUpsertArgs} args - Arguments to update or create a LegacyEmployee.
     * @example
     * // Update or create a LegacyEmployee
     * const legacyEmployee = await prisma.legacyEmployee.upsert({
     *   create: {
     *     // ... data to create a LegacyEmployee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LegacyEmployee we want to update
     *   }
     * })
     */
    upsert<T extends LegacyEmployeeUpsertArgs>(args: SelectSubset<T, LegacyEmployeeUpsertArgs<ExtArgs>>): Prisma__LegacyEmployeeClient<$Result.GetResult<Prisma.$LegacyEmployeePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LegacyEmployees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegacyEmployeeCountArgs} args - Arguments to filter LegacyEmployees to count.
     * @example
     * // Count the number of LegacyEmployees
     * const count = await prisma.legacyEmployee.count({
     *   where: {
     *     // ... the filter for the LegacyEmployees we want to count
     *   }
     * })
    **/
    count<T extends LegacyEmployeeCountArgs>(
      args?: Subset<T, LegacyEmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LegacyEmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LegacyEmployee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegacyEmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LegacyEmployeeAggregateArgs>(args: Subset<T, LegacyEmployeeAggregateArgs>): Prisma.PrismaPromise<GetLegacyEmployeeAggregateType<T>>

    /**
     * Group by LegacyEmployee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegacyEmployeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LegacyEmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LegacyEmployeeGroupByArgs['orderBy'] }
        : { orderBy?: LegacyEmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LegacyEmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLegacyEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LegacyEmployee model
   */
  readonly fields: LegacyEmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LegacyEmployee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LegacyEmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    goals<T extends LegacyEmployee$goalsArgs<ExtArgs> = {}>(args?: Subset<T, LegacyEmployee$goalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegacyGoalPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LegacyEmployee model
   */ 
  interface LegacyEmployeeFieldRefs {
    readonly id: FieldRef<"LegacyEmployee", 'String'>
    readonly name: FieldRef<"LegacyEmployee", 'String'>
    readonly department: FieldRef<"LegacyEmployee", 'String'>
    readonly managerId: FieldRef<"LegacyEmployee", 'String'>
    readonly role: FieldRef<"LegacyEmployee", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LegacyEmployee findUnique
   */
  export type LegacyEmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyEmployee
     */
    select?: LegacyEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which LegacyEmployee to fetch.
     */
    where: LegacyEmployeeWhereUniqueInput
  }

  /**
   * LegacyEmployee findUniqueOrThrow
   */
  export type LegacyEmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyEmployee
     */
    select?: LegacyEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which LegacyEmployee to fetch.
     */
    where: LegacyEmployeeWhereUniqueInput
  }

  /**
   * LegacyEmployee findFirst
   */
  export type LegacyEmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyEmployee
     */
    select?: LegacyEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which LegacyEmployee to fetch.
     */
    where?: LegacyEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegacyEmployees to fetch.
     */
    orderBy?: LegacyEmployeeOrderByWithRelationInput | LegacyEmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LegacyEmployees.
     */
    cursor?: LegacyEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegacyEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegacyEmployees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LegacyEmployees.
     */
    distinct?: LegacyEmployeeScalarFieldEnum | LegacyEmployeeScalarFieldEnum[]
  }

  /**
   * LegacyEmployee findFirstOrThrow
   */
  export type LegacyEmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyEmployee
     */
    select?: LegacyEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which LegacyEmployee to fetch.
     */
    where?: LegacyEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegacyEmployees to fetch.
     */
    orderBy?: LegacyEmployeeOrderByWithRelationInput | LegacyEmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LegacyEmployees.
     */
    cursor?: LegacyEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegacyEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegacyEmployees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LegacyEmployees.
     */
    distinct?: LegacyEmployeeScalarFieldEnum | LegacyEmployeeScalarFieldEnum[]
  }

  /**
   * LegacyEmployee findMany
   */
  export type LegacyEmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyEmployee
     */
    select?: LegacyEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which LegacyEmployees to fetch.
     */
    where?: LegacyEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegacyEmployees to fetch.
     */
    orderBy?: LegacyEmployeeOrderByWithRelationInput | LegacyEmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LegacyEmployees.
     */
    cursor?: LegacyEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegacyEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegacyEmployees.
     */
    skip?: number
    distinct?: LegacyEmployeeScalarFieldEnum | LegacyEmployeeScalarFieldEnum[]
  }

  /**
   * LegacyEmployee create
   */
  export type LegacyEmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyEmployee
     */
    select?: LegacyEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyEmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a LegacyEmployee.
     */
    data: XOR<LegacyEmployeeCreateInput, LegacyEmployeeUncheckedCreateInput>
  }

  /**
   * LegacyEmployee createMany
   */
  export type LegacyEmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LegacyEmployees.
     */
    data: LegacyEmployeeCreateManyInput | LegacyEmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LegacyEmployee createManyAndReturn
   */
  export type LegacyEmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyEmployee
     */
    select?: LegacyEmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LegacyEmployees.
     */
    data: LegacyEmployeeCreateManyInput | LegacyEmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LegacyEmployee update
   */
  export type LegacyEmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyEmployee
     */
    select?: LegacyEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyEmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a LegacyEmployee.
     */
    data: XOR<LegacyEmployeeUpdateInput, LegacyEmployeeUncheckedUpdateInput>
    /**
     * Choose, which LegacyEmployee to update.
     */
    where: LegacyEmployeeWhereUniqueInput
  }

  /**
   * LegacyEmployee updateMany
   */
  export type LegacyEmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LegacyEmployees.
     */
    data: XOR<LegacyEmployeeUpdateManyMutationInput, LegacyEmployeeUncheckedUpdateManyInput>
    /**
     * Filter which LegacyEmployees to update
     */
    where?: LegacyEmployeeWhereInput
  }

  /**
   * LegacyEmployee upsert
   */
  export type LegacyEmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyEmployee
     */
    select?: LegacyEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyEmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the LegacyEmployee to update in case it exists.
     */
    where: LegacyEmployeeWhereUniqueInput
    /**
     * In case the LegacyEmployee found by the `where` argument doesn't exist, create a new LegacyEmployee with this data.
     */
    create: XOR<LegacyEmployeeCreateInput, LegacyEmployeeUncheckedCreateInput>
    /**
     * In case the LegacyEmployee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LegacyEmployeeUpdateInput, LegacyEmployeeUncheckedUpdateInput>
  }

  /**
   * LegacyEmployee delete
   */
  export type LegacyEmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyEmployee
     */
    select?: LegacyEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyEmployeeInclude<ExtArgs> | null
    /**
     * Filter which LegacyEmployee to delete.
     */
    where: LegacyEmployeeWhereUniqueInput
  }

  /**
   * LegacyEmployee deleteMany
   */
  export type LegacyEmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LegacyEmployees to delete
     */
    where?: LegacyEmployeeWhereInput
  }

  /**
   * LegacyEmployee.goals
   */
  export type LegacyEmployee$goalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyGoal
     */
    select?: LegacyGoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyGoalInclude<ExtArgs> | null
    where?: LegacyGoalWhereInput
    orderBy?: LegacyGoalOrderByWithRelationInput | LegacyGoalOrderByWithRelationInput[]
    cursor?: LegacyGoalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LegacyGoalScalarFieldEnum | LegacyGoalScalarFieldEnum[]
  }

  /**
   * LegacyEmployee without action
   */
  export type LegacyEmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyEmployee
     */
    select?: LegacyEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyEmployeeInclude<ExtArgs> | null
  }


  /**
   * Model LegacyGoal
   */

  export type AggregateLegacyGoal = {
    _count: LegacyGoalCountAggregateOutputType | null
    _avg: LegacyGoalAvgAggregateOutputType | null
    _sum: LegacyGoalSumAggregateOutputType | null
    _min: LegacyGoalMinAggregateOutputType | null
    _max: LegacyGoalMaxAggregateOutputType | null
  }

  export type LegacyGoalAvgAggregateOutputType = {
    target: Decimal | null
    actual: Decimal | null
  }

  export type LegacyGoalSumAggregateOutputType = {
    target: Decimal | null
    actual: Decimal | null
  }

  export type LegacyGoalMinAggregateOutputType = {
    id: string | null
    employeeId: string | null
    title: string | null
    target: Decimal | null
    actual: Decimal | null
    quarter: string | null
  }

  export type LegacyGoalMaxAggregateOutputType = {
    id: string | null
    employeeId: string | null
    title: string | null
    target: Decimal | null
    actual: Decimal | null
    quarter: string | null
  }

  export type LegacyGoalCountAggregateOutputType = {
    id: number
    employeeId: number
    title: number
    target: number
    actual: number
    quarter: number
    _all: number
  }


  export type LegacyGoalAvgAggregateInputType = {
    target?: true
    actual?: true
  }

  export type LegacyGoalSumAggregateInputType = {
    target?: true
    actual?: true
  }

  export type LegacyGoalMinAggregateInputType = {
    id?: true
    employeeId?: true
    title?: true
    target?: true
    actual?: true
    quarter?: true
  }

  export type LegacyGoalMaxAggregateInputType = {
    id?: true
    employeeId?: true
    title?: true
    target?: true
    actual?: true
    quarter?: true
  }

  export type LegacyGoalCountAggregateInputType = {
    id?: true
    employeeId?: true
    title?: true
    target?: true
    actual?: true
    quarter?: true
    _all?: true
  }

  export type LegacyGoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LegacyGoal to aggregate.
     */
    where?: LegacyGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegacyGoals to fetch.
     */
    orderBy?: LegacyGoalOrderByWithRelationInput | LegacyGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LegacyGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegacyGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegacyGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LegacyGoals
    **/
    _count?: true | LegacyGoalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LegacyGoalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LegacyGoalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LegacyGoalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LegacyGoalMaxAggregateInputType
  }

  export type GetLegacyGoalAggregateType<T extends LegacyGoalAggregateArgs> = {
        [P in keyof T & keyof AggregateLegacyGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLegacyGoal[P]>
      : GetScalarType<T[P], AggregateLegacyGoal[P]>
  }




  export type LegacyGoalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LegacyGoalWhereInput
    orderBy?: LegacyGoalOrderByWithAggregationInput | LegacyGoalOrderByWithAggregationInput[]
    by: LegacyGoalScalarFieldEnum[] | LegacyGoalScalarFieldEnum
    having?: LegacyGoalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LegacyGoalCountAggregateInputType | true
    _avg?: LegacyGoalAvgAggregateInputType
    _sum?: LegacyGoalSumAggregateInputType
    _min?: LegacyGoalMinAggregateInputType
    _max?: LegacyGoalMaxAggregateInputType
  }

  export type LegacyGoalGroupByOutputType = {
    id: string
    employeeId: string
    title: string
    target: Decimal
    actual: Decimal
    quarter: string
    _count: LegacyGoalCountAggregateOutputType | null
    _avg: LegacyGoalAvgAggregateOutputType | null
    _sum: LegacyGoalSumAggregateOutputType | null
    _min: LegacyGoalMinAggregateOutputType | null
    _max: LegacyGoalMaxAggregateOutputType | null
  }

  type GetLegacyGoalGroupByPayload<T extends LegacyGoalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LegacyGoalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LegacyGoalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LegacyGoalGroupByOutputType[P]>
            : GetScalarType<T[P], LegacyGoalGroupByOutputType[P]>
        }
      >
    >


  export type LegacyGoalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    title?: boolean
    target?: boolean
    actual?: boolean
    quarter?: boolean
    employee?: boolean | LegacyEmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["legacyGoal"]>

  export type LegacyGoalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    title?: boolean
    target?: boolean
    actual?: boolean
    quarter?: boolean
    employee?: boolean | LegacyEmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["legacyGoal"]>

  export type LegacyGoalSelectScalar = {
    id?: boolean
    employeeId?: boolean
    title?: boolean
    target?: boolean
    actual?: boolean
    quarter?: boolean
  }

  export type LegacyGoalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | LegacyEmployeeDefaultArgs<ExtArgs>
  }
  export type LegacyGoalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | LegacyEmployeeDefaultArgs<ExtArgs>
  }

  export type $LegacyGoalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LegacyGoal"
    objects: {
      employee: Prisma.$LegacyEmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeeId: string
      title: string
      target: Prisma.Decimal
      actual: Prisma.Decimal
      quarter: string
    }, ExtArgs["result"]["legacyGoal"]>
    composites: {}
  }

  type LegacyGoalGetPayload<S extends boolean | null | undefined | LegacyGoalDefaultArgs> = $Result.GetResult<Prisma.$LegacyGoalPayload, S>

  type LegacyGoalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LegacyGoalFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LegacyGoalCountAggregateInputType | true
    }

  export interface LegacyGoalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LegacyGoal'], meta: { name: 'LegacyGoal' } }
    /**
     * Find zero or one LegacyGoal that matches the filter.
     * @param {LegacyGoalFindUniqueArgs} args - Arguments to find a LegacyGoal
     * @example
     * // Get one LegacyGoal
     * const legacyGoal = await prisma.legacyGoal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LegacyGoalFindUniqueArgs>(args: SelectSubset<T, LegacyGoalFindUniqueArgs<ExtArgs>>): Prisma__LegacyGoalClient<$Result.GetResult<Prisma.$LegacyGoalPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LegacyGoal that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LegacyGoalFindUniqueOrThrowArgs} args - Arguments to find a LegacyGoal
     * @example
     * // Get one LegacyGoal
     * const legacyGoal = await prisma.legacyGoal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LegacyGoalFindUniqueOrThrowArgs>(args: SelectSubset<T, LegacyGoalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LegacyGoalClient<$Result.GetResult<Prisma.$LegacyGoalPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LegacyGoal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegacyGoalFindFirstArgs} args - Arguments to find a LegacyGoal
     * @example
     * // Get one LegacyGoal
     * const legacyGoal = await prisma.legacyGoal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LegacyGoalFindFirstArgs>(args?: SelectSubset<T, LegacyGoalFindFirstArgs<ExtArgs>>): Prisma__LegacyGoalClient<$Result.GetResult<Prisma.$LegacyGoalPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LegacyGoal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegacyGoalFindFirstOrThrowArgs} args - Arguments to find a LegacyGoal
     * @example
     * // Get one LegacyGoal
     * const legacyGoal = await prisma.legacyGoal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LegacyGoalFindFirstOrThrowArgs>(args?: SelectSubset<T, LegacyGoalFindFirstOrThrowArgs<ExtArgs>>): Prisma__LegacyGoalClient<$Result.GetResult<Prisma.$LegacyGoalPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LegacyGoals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegacyGoalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LegacyGoals
     * const legacyGoals = await prisma.legacyGoal.findMany()
     * 
     * // Get first 10 LegacyGoals
     * const legacyGoals = await prisma.legacyGoal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const legacyGoalWithIdOnly = await prisma.legacyGoal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LegacyGoalFindManyArgs>(args?: SelectSubset<T, LegacyGoalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegacyGoalPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LegacyGoal.
     * @param {LegacyGoalCreateArgs} args - Arguments to create a LegacyGoal.
     * @example
     * // Create one LegacyGoal
     * const LegacyGoal = await prisma.legacyGoal.create({
     *   data: {
     *     // ... data to create a LegacyGoal
     *   }
     * })
     * 
     */
    create<T extends LegacyGoalCreateArgs>(args: SelectSubset<T, LegacyGoalCreateArgs<ExtArgs>>): Prisma__LegacyGoalClient<$Result.GetResult<Prisma.$LegacyGoalPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LegacyGoals.
     * @param {LegacyGoalCreateManyArgs} args - Arguments to create many LegacyGoals.
     * @example
     * // Create many LegacyGoals
     * const legacyGoal = await prisma.legacyGoal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LegacyGoalCreateManyArgs>(args?: SelectSubset<T, LegacyGoalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LegacyGoals and returns the data saved in the database.
     * @param {LegacyGoalCreateManyAndReturnArgs} args - Arguments to create many LegacyGoals.
     * @example
     * // Create many LegacyGoals
     * const legacyGoal = await prisma.legacyGoal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LegacyGoals and only return the `id`
     * const legacyGoalWithIdOnly = await prisma.legacyGoal.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LegacyGoalCreateManyAndReturnArgs>(args?: SelectSubset<T, LegacyGoalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegacyGoalPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LegacyGoal.
     * @param {LegacyGoalDeleteArgs} args - Arguments to delete one LegacyGoal.
     * @example
     * // Delete one LegacyGoal
     * const LegacyGoal = await prisma.legacyGoal.delete({
     *   where: {
     *     // ... filter to delete one LegacyGoal
     *   }
     * })
     * 
     */
    delete<T extends LegacyGoalDeleteArgs>(args: SelectSubset<T, LegacyGoalDeleteArgs<ExtArgs>>): Prisma__LegacyGoalClient<$Result.GetResult<Prisma.$LegacyGoalPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LegacyGoal.
     * @param {LegacyGoalUpdateArgs} args - Arguments to update one LegacyGoal.
     * @example
     * // Update one LegacyGoal
     * const legacyGoal = await prisma.legacyGoal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LegacyGoalUpdateArgs>(args: SelectSubset<T, LegacyGoalUpdateArgs<ExtArgs>>): Prisma__LegacyGoalClient<$Result.GetResult<Prisma.$LegacyGoalPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LegacyGoals.
     * @param {LegacyGoalDeleteManyArgs} args - Arguments to filter LegacyGoals to delete.
     * @example
     * // Delete a few LegacyGoals
     * const { count } = await prisma.legacyGoal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LegacyGoalDeleteManyArgs>(args?: SelectSubset<T, LegacyGoalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LegacyGoals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegacyGoalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LegacyGoals
     * const legacyGoal = await prisma.legacyGoal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LegacyGoalUpdateManyArgs>(args: SelectSubset<T, LegacyGoalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LegacyGoal.
     * @param {LegacyGoalUpsertArgs} args - Arguments to update or create a LegacyGoal.
     * @example
     * // Update or create a LegacyGoal
     * const legacyGoal = await prisma.legacyGoal.upsert({
     *   create: {
     *     // ... data to create a LegacyGoal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LegacyGoal we want to update
     *   }
     * })
     */
    upsert<T extends LegacyGoalUpsertArgs>(args: SelectSubset<T, LegacyGoalUpsertArgs<ExtArgs>>): Prisma__LegacyGoalClient<$Result.GetResult<Prisma.$LegacyGoalPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LegacyGoals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegacyGoalCountArgs} args - Arguments to filter LegacyGoals to count.
     * @example
     * // Count the number of LegacyGoals
     * const count = await prisma.legacyGoal.count({
     *   where: {
     *     // ... the filter for the LegacyGoals we want to count
     *   }
     * })
    **/
    count<T extends LegacyGoalCountArgs>(
      args?: Subset<T, LegacyGoalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LegacyGoalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LegacyGoal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegacyGoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LegacyGoalAggregateArgs>(args: Subset<T, LegacyGoalAggregateArgs>): Prisma.PrismaPromise<GetLegacyGoalAggregateType<T>>

    /**
     * Group by LegacyGoal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegacyGoalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LegacyGoalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LegacyGoalGroupByArgs['orderBy'] }
        : { orderBy?: LegacyGoalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LegacyGoalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLegacyGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LegacyGoal model
   */
  readonly fields: LegacyGoalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LegacyGoal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LegacyGoalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends LegacyEmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LegacyEmployeeDefaultArgs<ExtArgs>>): Prisma__LegacyEmployeeClient<$Result.GetResult<Prisma.$LegacyEmployeePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LegacyGoal model
   */ 
  interface LegacyGoalFieldRefs {
    readonly id: FieldRef<"LegacyGoal", 'String'>
    readonly employeeId: FieldRef<"LegacyGoal", 'String'>
    readonly title: FieldRef<"LegacyGoal", 'String'>
    readonly target: FieldRef<"LegacyGoal", 'Decimal'>
    readonly actual: FieldRef<"LegacyGoal", 'Decimal'>
    readonly quarter: FieldRef<"LegacyGoal", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LegacyGoal findUnique
   */
  export type LegacyGoalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyGoal
     */
    select?: LegacyGoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyGoalInclude<ExtArgs> | null
    /**
     * Filter, which LegacyGoal to fetch.
     */
    where: LegacyGoalWhereUniqueInput
  }

  /**
   * LegacyGoal findUniqueOrThrow
   */
  export type LegacyGoalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyGoal
     */
    select?: LegacyGoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyGoalInclude<ExtArgs> | null
    /**
     * Filter, which LegacyGoal to fetch.
     */
    where: LegacyGoalWhereUniqueInput
  }

  /**
   * LegacyGoal findFirst
   */
  export type LegacyGoalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyGoal
     */
    select?: LegacyGoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyGoalInclude<ExtArgs> | null
    /**
     * Filter, which LegacyGoal to fetch.
     */
    where?: LegacyGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegacyGoals to fetch.
     */
    orderBy?: LegacyGoalOrderByWithRelationInput | LegacyGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LegacyGoals.
     */
    cursor?: LegacyGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegacyGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegacyGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LegacyGoals.
     */
    distinct?: LegacyGoalScalarFieldEnum | LegacyGoalScalarFieldEnum[]
  }

  /**
   * LegacyGoal findFirstOrThrow
   */
  export type LegacyGoalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyGoal
     */
    select?: LegacyGoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyGoalInclude<ExtArgs> | null
    /**
     * Filter, which LegacyGoal to fetch.
     */
    where?: LegacyGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegacyGoals to fetch.
     */
    orderBy?: LegacyGoalOrderByWithRelationInput | LegacyGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LegacyGoals.
     */
    cursor?: LegacyGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegacyGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegacyGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LegacyGoals.
     */
    distinct?: LegacyGoalScalarFieldEnum | LegacyGoalScalarFieldEnum[]
  }

  /**
   * LegacyGoal findMany
   */
  export type LegacyGoalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyGoal
     */
    select?: LegacyGoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyGoalInclude<ExtArgs> | null
    /**
     * Filter, which LegacyGoals to fetch.
     */
    where?: LegacyGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegacyGoals to fetch.
     */
    orderBy?: LegacyGoalOrderByWithRelationInput | LegacyGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LegacyGoals.
     */
    cursor?: LegacyGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegacyGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegacyGoals.
     */
    skip?: number
    distinct?: LegacyGoalScalarFieldEnum | LegacyGoalScalarFieldEnum[]
  }

  /**
   * LegacyGoal create
   */
  export type LegacyGoalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyGoal
     */
    select?: LegacyGoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyGoalInclude<ExtArgs> | null
    /**
     * The data needed to create a LegacyGoal.
     */
    data: XOR<LegacyGoalCreateInput, LegacyGoalUncheckedCreateInput>
  }

  /**
   * LegacyGoal createMany
   */
  export type LegacyGoalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LegacyGoals.
     */
    data: LegacyGoalCreateManyInput | LegacyGoalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LegacyGoal createManyAndReturn
   */
  export type LegacyGoalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyGoal
     */
    select?: LegacyGoalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LegacyGoals.
     */
    data: LegacyGoalCreateManyInput | LegacyGoalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyGoalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LegacyGoal update
   */
  export type LegacyGoalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyGoal
     */
    select?: LegacyGoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyGoalInclude<ExtArgs> | null
    /**
     * The data needed to update a LegacyGoal.
     */
    data: XOR<LegacyGoalUpdateInput, LegacyGoalUncheckedUpdateInput>
    /**
     * Choose, which LegacyGoal to update.
     */
    where: LegacyGoalWhereUniqueInput
  }

  /**
   * LegacyGoal updateMany
   */
  export type LegacyGoalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LegacyGoals.
     */
    data: XOR<LegacyGoalUpdateManyMutationInput, LegacyGoalUncheckedUpdateManyInput>
    /**
     * Filter which LegacyGoals to update
     */
    where?: LegacyGoalWhereInput
  }

  /**
   * LegacyGoal upsert
   */
  export type LegacyGoalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyGoal
     */
    select?: LegacyGoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyGoalInclude<ExtArgs> | null
    /**
     * The filter to search for the LegacyGoal to update in case it exists.
     */
    where: LegacyGoalWhereUniqueInput
    /**
     * In case the LegacyGoal found by the `where` argument doesn't exist, create a new LegacyGoal with this data.
     */
    create: XOR<LegacyGoalCreateInput, LegacyGoalUncheckedCreateInput>
    /**
     * In case the LegacyGoal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LegacyGoalUpdateInput, LegacyGoalUncheckedUpdateInput>
  }

  /**
   * LegacyGoal delete
   */
  export type LegacyGoalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyGoal
     */
    select?: LegacyGoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyGoalInclude<ExtArgs> | null
    /**
     * Filter which LegacyGoal to delete.
     */
    where: LegacyGoalWhereUniqueInput
  }

  /**
   * LegacyGoal deleteMany
   */
  export type LegacyGoalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LegacyGoals to delete
     */
    where?: LegacyGoalWhereInput
  }

  /**
   * LegacyGoal without action
   */
  export type LegacyGoalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegacyGoal
     */
    select?: LegacyGoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegacyGoalInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    thrustArea: 'thrustArea',
    categoryLifecycle: 'categoryLifecycle'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const GoalCycleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phase: 'phase',
    status: 'status',
    startDate: 'startDate',
    endDate: 'endDate'
  };

  export type GoalCycleScalarFieldEnum = (typeof GoalCycleScalarFieldEnum)[keyof typeof GoalCycleScalarFieldEnum]


  export const GoalScalarFieldEnum: {
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

  export type GoalScalarFieldEnum = (typeof GoalScalarFieldEnum)[keyof typeof GoalScalarFieldEnum]


  export const CheckInScalarFieldEnum: {
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

  export type CheckInScalarFieldEnum = (typeof CheckInScalarFieldEnum)[keyof typeof CheckInScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
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

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const EscalationScalarFieldEnum: {
    id: 'id',
    triggerType: 'triggerType',
    triggeredForId: 'triggeredForId',
    escalationLevel: 'escalationLevel',
    message: 'message',
    isResolved: 'isResolved',
    createdAt: 'createdAt',
    resolvedAt: 'resolvedAt'
  };

  export type EscalationScalarFieldEnum = (typeof EscalationScalarFieldEnum)[keyof typeof EscalationScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    role: 'role',
    content: 'content',
    intentType: 'intentType',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const DbConnectionScalarFieldEnum: {
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

  export type DbConnectionScalarFieldEnum = (typeof DbConnectionScalarFieldEnum)[keyof typeof DbConnectionScalarFieldEnum]


  export const ManufacturingDailyScalarFieldEnum: {
    id: 'id',
    date: 'date',
    lineId: 'lineId',
    unitsProduced: 'unitsProduced',
    rejectionRate: 'rejectionRate',
    energyKwh: 'energyKwh'
  };

  export type ManufacturingDailyScalarFieldEnum = (typeof ManufacturingDailyScalarFieldEnum)[keyof typeof ManufacturingDailyScalarFieldEnum]


  export const SalesMonthlyScalarFieldEnum: {
    id: 'id',
    month: 'month',
    channel: 'channel',
    revenue: 'revenue',
    unitsSold: 'unitsSold',
    region: 'region'
  };

  export type SalesMonthlyScalarFieldEnum = (typeof SalesMonthlyScalarFieldEnum)[keyof typeof SalesMonthlyScalarFieldEnum]


  export const LegacyEmployeeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    department: 'department',
    managerId: 'managerId',
    role: 'role'
  };

  export type LegacyEmployeeScalarFieldEnum = (typeof LegacyEmployeeScalarFieldEnum)[keyof typeof LegacyEmployeeScalarFieldEnum]


  export const LegacyGoalScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    title: 'title',
    target: 'target',
    actual: 'actual',
    quarter: 'quarter'
  };

  export type LegacyGoalScalarFieldEnum = (typeof LegacyGoalScalarFieldEnum)[keyof typeof LegacyGoalScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UoMType'
   */
  export type EnumUoMTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UoMType'>
    


  /**
   * Reference to a field of type 'UoMType[]'
   */
  export type ListEnumUoMTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UoMType[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'GoalStatus'
   */
  export type EnumGoalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalStatus'>
    


  /**
   * Reference to a field of type 'GoalStatus[]'
   */
  export type ListEnumGoalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalStatus[]'>
    


  /**
   * Reference to a field of type 'CheckInStatus'
   */
  export type EnumCheckInStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CheckInStatus'>
    


  /**
   * Reference to a field of type 'CheckInStatus[]'
   */
  export type ListEnumCheckInStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CheckInStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    departmentId?: StringFilter<"User"> | string
    managerId?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    department?: XOR<DepartmentRelationFilter, DepartmentWhereInput>
    manager?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    subordinates?: UserListRelationFilter
    goals?: GoalListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    chatMessages?: ChatMessageListRelationFilter
    escalations?: EscalationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    departmentId?: SortOrder
    managerId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    department?: DepartmentOrderByWithRelationInput
    manager?: UserOrderByWithRelationInput
    subordinates?: UserOrderByRelationAggregateInput
    goals?: GoalOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
    chatMessages?: ChatMessageOrderByRelationAggregateInput
    escalations?: EscalationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    departmentId?: StringFilter<"User"> | string
    managerId?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    department?: XOR<DepartmentRelationFilter, DepartmentWhereInput>
    manager?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    subordinates?: UserListRelationFilter
    goals?: GoalListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    chatMessages?: ChatMessageListRelationFilter
    escalations?: EscalationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    departmentId?: SortOrder
    managerId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    departmentId?: StringWithAggregatesFilter<"User"> | string
    managerId?: StringNullableWithAggregatesFilter<"User"> | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    id?: StringFilter<"Department"> | string
    name?: StringFilter<"Department"> | string
    thrustArea?: StringFilter<"Department"> | string
    categoryLifecycle?: StringFilter<"Department"> | string
    users?: UserListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    thrustArea?: SortOrder
    categoryLifecycle?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    thrustArea?: StringFilter<"Department"> | string
    categoryLifecycle?: StringFilter<"Department"> | string
    users?: UserListRelationFilter
  }, "id" | "name">

  export type DepartmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    thrustArea?: SortOrder
    categoryLifecycle?: SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Department"> | string
    name?: StringWithAggregatesFilter<"Department"> | string
    thrustArea?: StringWithAggregatesFilter<"Department"> | string
    categoryLifecycle?: StringWithAggregatesFilter<"Department"> | string
  }

  export type GoalCycleWhereInput = {
    AND?: GoalCycleWhereInput | GoalCycleWhereInput[]
    OR?: GoalCycleWhereInput[]
    NOT?: GoalCycleWhereInput | GoalCycleWhereInput[]
    id?: StringFilter<"GoalCycle"> | string
    name?: StringFilter<"GoalCycle"> | string
    phase?: StringFilter<"GoalCycle"> | string
    status?: StringFilter<"GoalCycle"> | string
    startDate?: DateTimeFilter<"GoalCycle"> | Date | string
    endDate?: DateTimeFilter<"GoalCycle"> | Date | string
    goals?: GoalListRelationFilter
    checkIns?: CheckInListRelationFilter
  }

  export type GoalCycleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phase?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    goals?: GoalOrderByRelationAggregateInput
    checkIns?: CheckInOrderByRelationAggregateInput
  }

  export type GoalCycleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GoalCycleWhereInput | GoalCycleWhereInput[]
    OR?: GoalCycleWhereInput[]
    NOT?: GoalCycleWhereInput | GoalCycleWhereInput[]
    name?: StringFilter<"GoalCycle"> | string
    phase?: StringFilter<"GoalCycle"> | string
    status?: StringFilter<"GoalCycle"> | string
    startDate?: DateTimeFilter<"GoalCycle"> | Date | string
    endDate?: DateTimeFilter<"GoalCycle"> | Date | string
    goals?: GoalListRelationFilter
    checkIns?: CheckInListRelationFilter
  }, "id">

  export type GoalCycleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phase?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    _count?: GoalCycleCountOrderByAggregateInput
    _max?: GoalCycleMaxOrderByAggregateInput
    _min?: GoalCycleMinOrderByAggregateInput
  }

  export type GoalCycleScalarWhereWithAggregatesInput = {
    AND?: GoalCycleScalarWhereWithAggregatesInput | GoalCycleScalarWhereWithAggregatesInput[]
    OR?: GoalCycleScalarWhereWithAggregatesInput[]
    NOT?: GoalCycleScalarWhereWithAggregatesInput | GoalCycleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GoalCycle"> | string
    name?: StringWithAggregatesFilter<"GoalCycle"> | string
    phase?: StringWithAggregatesFilter<"GoalCycle"> | string
    status?: StringWithAggregatesFilter<"GoalCycle"> | string
    startDate?: DateTimeWithAggregatesFilter<"GoalCycle"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"GoalCycle"> | Date | string
  }

  export type GoalWhereInput = {
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    id?: StringFilter<"Goal"> | string
    cycleId?: StringNullableFilter<"Goal"> | string | null
    employeeId?: StringFilter<"Goal"> | string
    title?: StringFilter<"Goal"> | string
    description?: StringNullableFilter<"Goal"> | string | null
    thrustArea?: StringFilter<"Goal"> | string
    uomType?: EnumUoMTypeFilter<"Goal"> | $Enums.UoMType
    targetValue?: DecimalFilter<"Goal"> | Decimal | DecimalJsLike | number | string
    actualValue?: DecimalFilter<"Goal"> | Decimal | DecimalJsLike | number | string
    weightage?: IntFilter<"Goal"> | number
    status?: EnumGoalStatusFilter<"Goal"> | $Enums.GoalStatus
    categoryType?: StringFilter<"Goal"> | string
    channelType?: StringNullableFilter<"Goal"> | string | null
    isShared?: BoolFilter<"Goal"> | boolean
    parentGoalId?: StringNullableFilter<"Goal"> | string | null
    lockedAt?: DateTimeNullableFilter<"Goal"> | Date | string | null
    approvedBy?: StringNullableFilter<"Goal"> | string | null
    approvedAt?: DateTimeNullableFilter<"Goal"> | Date | string | null
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
    employee?: XOR<UserRelationFilter, UserWhereInput>
    cycle?: XOR<GoalCycleNullableRelationFilter, GoalCycleWhereInput> | null
    checkIns?: CheckInListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }

  export type GoalOrderByWithRelationInput = {
    id?: SortOrder
    cycleId?: SortOrderInput | SortOrder
    employeeId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    thrustArea?: SortOrder
    uomType?: SortOrder
    targetValue?: SortOrder
    actualValue?: SortOrder
    weightage?: SortOrder
    status?: SortOrder
    categoryType?: SortOrder
    channelType?: SortOrderInput | SortOrder
    isShared?: SortOrder
    parentGoalId?: SortOrderInput | SortOrder
    lockedAt?: SortOrderInput | SortOrder
    approvedBy?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employee?: UserOrderByWithRelationInput
    cycle?: GoalCycleOrderByWithRelationInput
    checkIns?: CheckInOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
  }

  export type GoalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    cycleId?: StringNullableFilter<"Goal"> | string | null
    employeeId?: StringFilter<"Goal"> | string
    title?: StringFilter<"Goal"> | string
    description?: StringNullableFilter<"Goal"> | string | null
    thrustArea?: StringFilter<"Goal"> | string
    uomType?: EnumUoMTypeFilter<"Goal"> | $Enums.UoMType
    targetValue?: DecimalFilter<"Goal"> | Decimal | DecimalJsLike | number | string
    actualValue?: DecimalFilter<"Goal"> | Decimal | DecimalJsLike | number | string
    weightage?: IntFilter<"Goal"> | number
    status?: EnumGoalStatusFilter<"Goal"> | $Enums.GoalStatus
    categoryType?: StringFilter<"Goal"> | string
    channelType?: StringNullableFilter<"Goal"> | string | null
    isShared?: BoolFilter<"Goal"> | boolean
    parentGoalId?: StringNullableFilter<"Goal"> | string | null
    lockedAt?: DateTimeNullableFilter<"Goal"> | Date | string | null
    approvedBy?: StringNullableFilter<"Goal"> | string | null
    approvedAt?: DateTimeNullableFilter<"Goal"> | Date | string | null
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
    employee?: XOR<UserRelationFilter, UserWhereInput>
    cycle?: XOR<GoalCycleNullableRelationFilter, GoalCycleWhereInput> | null
    checkIns?: CheckInListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }, "id">

  export type GoalOrderByWithAggregationInput = {
    id?: SortOrder
    cycleId?: SortOrderInput | SortOrder
    employeeId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    thrustArea?: SortOrder
    uomType?: SortOrder
    targetValue?: SortOrder
    actualValue?: SortOrder
    weightage?: SortOrder
    status?: SortOrder
    categoryType?: SortOrder
    channelType?: SortOrderInput | SortOrder
    isShared?: SortOrder
    parentGoalId?: SortOrderInput | SortOrder
    lockedAt?: SortOrderInput | SortOrder
    approvedBy?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GoalCountOrderByAggregateInput
    _avg?: GoalAvgOrderByAggregateInput
    _max?: GoalMaxOrderByAggregateInput
    _min?: GoalMinOrderByAggregateInput
    _sum?: GoalSumOrderByAggregateInput
  }

  export type GoalScalarWhereWithAggregatesInput = {
    AND?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    OR?: GoalScalarWhereWithAggregatesInput[]
    NOT?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Goal"> | string
    cycleId?: StringNullableWithAggregatesFilter<"Goal"> | string | null
    employeeId?: StringWithAggregatesFilter<"Goal"> | string
    title?: StringWithAggregatesFilter<"Goal"> | string
    description?: StringNullableWithAggregatesFilter<"Goal"> | string | null
    thrustArea?: StringWithAggregatesFilter<"Goal"> | string
    uomType?: EnumUoMTypeWithAggregatesFilter<"Goal"> | $Enums.UoMType
    targetValue?: DecimalWithAggregatesFilter<"Goal"> | Decimal | DecimalJsLike | number | string
    actualValue?: DecimalWithAggregatesFilter<"Goal"> | Decimal | DecimalJsLike | number | string
    weightage?: IntWithAggregatesFilter<"Goal"> | number
    status?: EnumGoalStatusWithAggregatesFilter<"Goal"> | $Enums.GoalStatus
    categoryType?: StringWithAggregatesFilter<"Goal"> | string
    channelType?: StringNullableWithAggregatesFilter<"Goal"> | string | null
    isShared?: BoolWithAggregatesFilter<"Goal"> | boolean
    parentGoalId?: StringNullableWithAggregatesFilter<"Goal"> | string | null
    lockedAt?: DateTimeNullableWithAggregatesFilter<"Goal"> | Date | string | null
    approvedBy?: StringNullableWithAggregatesFilter<"Goal"> | string | null
    approvedAt?: DateTimeNullableWithAggregatesFilter<"Goal"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
  }

  export type CheckInWhereInput = {
    AND?: CheckInWhereInput | CheckInWhereInput[]
    OR?: CheckInWhereInput[]
    NOT?: CheckInWhereInput | CheckInWhereInput[]
    id?: StringFilter<"CheckIn"> | string
    goalId?: StringFilter<"CheckIn"> | string
    cycleId?: StringNullableFilter<"CheckIn"> | string | null
    quarter?: StringFilter<"CheckIn"> | string
    plannedValue?: DecimalFilter<"CheckIn"> | Decimal | DecimalJsLike | number | string
    actualValue?: DecimalFilter<"CheckIn"> | Decimal | DecimalJsLike | number | string
    status?: EnumCheckInStatusFilter<"CheckIn"> | $Enums.CheckInStatus
    managerComment?: StringNullableFilter<"CheckIn"> | string | null
    computedScore?: DecimalFilter<"CheckIn"> | Decimal | DecimalJsLike | number | string
    checkInDate?: DateTimeFilter<"CheckIn"> | Date | string
    goal?: XOR<GoalRelationFilter, GoalWhereInput>
    cycle?: XOR<GoalCycleNullableRelationFilter, GoalCycleWhereInput> | null
  }

  export type CheckInOrderByWithRelationInput = {
    id?: SortOrder
    goalId?: SortOrder
    cycleId?: SortOrderInput | SortOrder
    quarter?: SortOrder
    plannedValue?: SortOrder
    actualValue?: SortOrder
    status?: SortOrder
    managerComment?: SortOrderInput | SortOrder
    computedScore?: SortOrder
    checkInDate?: SortOrder
    goal?: GoalOrderByWithRelationInput
    cycle?: GoalCycleOrderByWithRelationInput
  }

  export type CheckInWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CheckInWhereInput | CheckInWhereInput[]
    OR?: CheckInWhereInput[]
    NOT?: CheckInWhereInput | CheckInWhereInput[]
    goalId?: StringFilter<"CheckIn"> | string
    cycleId?: StringNullableFilter<"CheckIn"> | string | null
    quarter?: StringFilter<"CheckIn"> | string
    plannedValue?: DecimalFilter<"CheckIn"> | Decimal | DecimalJsLike | number | string
    actualValue?: DecimalFilter<"CheckIn"> | Decimal | DecimalJsLike | number | string
    status?: EnumCheckInStatusFilter<"CheckIn"> | $Enums.CheckInStatus
    managerComment?: StringNullableFilter<"CheckIn"> | string | null
    computedScore?: DecimalFilter<"CheckIn"> | Decimal | DecimalJsLike | number | string
    checkInDate?: DateTimeFilter<"CheckIn"> | Date | string
    goal?: XOR<GoalRelationFilter, GoalWhereInput>
    cycle?: XOR<GoalCycleNullableRelationFilter, GoalCycleWhereInput> | null
  }, "id">

  export type CheckInOrderByWithAggregationInput = {
    id?: SortOrder
    goalId?: SortOrder
    cycleId?: SortOrderInput | SortOrder
    quarter?: SortOrder
    plannedValue?: SortOrder
    actualValue?: SortOrder
    status?: SortOrder
    managerComment?: SortOrderInput | SortOrder
    computedScore?: SortOrder
    checkInDate?: SortOrder
    _count?: CheckInCountOrderByAggregateInput
    _avg?: CheckInAvgOrderByAggregateInput
    _max?: CheckInMaxOrderByAggregateInput
    _min?: CheckInMinOrderByAggregateInput
    _sum?: CheckInSumOrderByAggregateInput
  }

  export type CheckInScalarWhereWithAggregatesInput = {
    AND?: CheckInScalarWhereWithAggregatesInput | CheckInScalarWhereWithAggregatesInput[]
    OR?: CheckInScalarWhereWithAggregatesInput[]
    NOT?: CheckInScalarWhereWithAggregatesInput | CheckInScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CheckIn"> | string
    goalId?: StringWithAggregatesFilter<"CheckIn"> | string
    cycleId?: StringNullableWithAggregatesFilter<"CheckIn"> | string | null
    quarter?: StringWithAggregatesFilter<"CheckIn"> | string
    plannedValue?: DecimalWithAggregatesFilter<"CheckIn"> | Decimal | DecimalJsLike | number | string
    actualValue?: DecimalWithAggregatesFilter<"CheckIn"> | Decimal | DecimalJsLike | number | string
    status?: EnumCheckInStatusWithAggregatesFilter<"CheckIn"> | $Enums.CheckInStatus
    managerComment?: StringNullableWithAggregatesFilter<"CheckIn"> | string | null
    computedScore?: DecimalWithAggregatesFilter<"CheckIn"> | Decimal | DecimalJsLike | number | string
    checkInDate?: DateTimeWithAggregatesFilter<"CheckIn"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    goalId?: StringFilter<"AuditLog"> | string
    changedBy?: StringFilter<"AuditLog"> | string
    fieldName?: StringFilter<"AuditLog"> | string
    oldValue?: StringNullableFilter<"AuditLog"> | string | null
    newValue?: StringNullableFilter<"AuditLog"> | string | null
    actionType?: StringFilter<"AuditLog"> | string
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    changedAt?: DateTimeFilter<"AuditLog"> | Date | string
    goal?: XOR<GoalRelationFilter, GoalWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    goalId?: SortOrder
    changedBy?: SortOrder
    fieldName?: SortOrder
    oldValue?: SortOrderInput | SortOrder
    newValue?: SortOrderInput | SortOrder
    actionType?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    changedAt?: SortOrder
    goal?: GoalOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    goalId?: StringFilter<"AuditLog"> | string
    changedBy?: StringFilter<"AuditLog"> | string
    fieldName?: StringFilter<"AuditLog"> | string
    oldValue?: StringNullableFilter<"AuditLog"> | string | null
    newValue?: StringNullableFilter<"AuditLog"> | string | null
    actionType?: StringFilter<"AuditLog"> | string
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    changedAt?: DateTimeFilter<"AuditLog"> | Date | string
    goal?: XOR<GoalRelationFilter, GoalWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    goalId?: SortOrder
    changedBy?: SortOrder
    fieldName?: SortOrder
    oldValue?: SortOrderInput | SortOrder
    newValue?: SortOrderInput | SortOrder
    actionType?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    changedAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    goalId?: StringWithAggregatesFilter<"AuditLog"> | string
    changedBy?: StringWithAggregatesFilter<"AuditLog"> | string
    fieldName?: StringWithAggregatesFilter<"AuditLog"> | string
    oldValue?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    newValue?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    actionType?: StringWithAggregatesFilter<"AuditLog"> | string
    ipAddress?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    changedAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type EscalationWhereInput = {
    AND?: EscalationWhereInput | EscalationWhereInput[]
    OR?: EscalationWhereInput[]
    NOT?: EscalationWhereInput | EscalationWhereInput[]
    id?: StringFilter<"Escalation"> | string
    triggerType?: StringFilter<"Escalation"> | string
    triggeredForId?: StringFilter<"Escalation"> | string
    escalationLevel?: IntFilter<"Escalation"> | number
    message?: StringFilter<"Escalation"> | string
    isResolved?: BoolFilter<"Escalation"> | boolean
    createdAt?: DateTimeFilter<"Escalation"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Escalation"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type EscalationOrderByWithRelationInput = {
    id?: SortOrder
    triggerType?: SortOrder
    triggeredForId?: SortOrder
    escalationLevel?: SortOrder
    message?: SortOrder
    isResolved?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type EscalationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EscalationWhereInput | EscalationWhereInput[]
    OR?: EscalationWhereInput[]
    NOT?: EscalationWhereInput | EscalationWhereInput[]
    triggerType?: StringFilter<"Escalation"> | string
    triggeredForId?: StringFilter<"Escalation"> | string
    escalationLevel?: IntFilter<"Escalation"> | number
    message?: StringFilter<"Escalation"> | string
    isResolved?: BoolFilter<"Escalation"> | boolean
    createdAt?: DateTimeFilter<"Escalation"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Escalation"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type EscalationOrderByWithAggregationInput = {
    id?: SortOrder
    triggerType?: SortOrder
    triggeredForId?: SortOrder
    escalationLevel?: SortOrder
    message?: SortOrder
    isResolved?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    _count?: EscalationCountOrderByAggregateInput
    _avg?: EscalationAvgOrderByAggregateInput
    _max?: EscalationMaxOrderByAggregateInput
    _min?: EscalationMinOrderByAggregateInput
    _sum?: EscalationSumOrderByAggregateInput
  }

  export type EscalationScalarWhereWithAggregatesInput = {
    AND?: EscalationScalarWhereWithAggregatesInput | EscalationScalarWhereWithAggregatesInput[]
    OR?: EscalationScalarWhereWithAggregatesInput[]
    NOT?: EscalationScalarWhereWithAggregatesInput | EscalationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Escalation"> | string
    triggerType?: StringWithAggregatesFilter<"Escalation"> | string
    triggeredForId?: StringWithAggregatesFilter<"Escalation"> | string
    escalationLevel?: IntWithAggregatesFilter<"Escalation"> | number
    message?: StringWithAggregatesFilter<"Escalation"> | string
    isResolved?: BoolWithAggregatesFilter<"Escalation"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Escalation"> | Date | string
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"Escalation"> | Date | string | null
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    userId?: StringFilter<"ChatMessage"> | string
    role?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    intentType?: StringNullableFilter<"ChatMessage"> | string | null
    metadata?: StringNullableFilter<"ChatMessage"> | string | null
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    intentType?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    userId?: StringFilter<"ChatMessage"> | string
    role?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    intentType?: StringNullableFilter<"ChatMessage"> | string | null
    metadata?: StringNullableFilter<"ChatMessage"> | string | null
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    intentType?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatMessage"> | string
    userId?: StringWithAggregatesFilter<"ChatMessage"> | string
    role?: StringWithAggregatesFilter<"ChatMessage"> | string
    content?: StringWithAggregatesFilter<"ChatMessage"> | string
    intentType?: StringNullableWithAggregatesFilter<"ChatMessage"> | string | null
    metadata?: StringNullableWithAggregatesFilter<"ChatMessage"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
  }

  export type DbConnectionWhereInput = {
    AND?: DbConnectionWhereInput | DbConnectionWhereInput[]
    OR?: DbConnectionWhereInput[]
    NOT?: DbConnectionWhereInput | DbConnectionWhereInput[]
    id?: StringFilter<"DbConnection"> | string
    name?: StringFilter<"DbConnection"> | string
    dbType?: StringFilter<"DbConnection"> | string
    host?: StringFilter<"DbConnection"> | string
    port?: IntFilter<"DbConnection"> | number
    database?: StringFilter<"DbConnection"> | string
    username?: StringFilter<"DbConnection"> | string
    isActive?: BoolFilter<"DbConnection"> | boolean
    isReadOnly?: BoolFilter<"DbConnection"> | boolean
    createdAt?: DateTimeFilter<"DbConnection"> | Date | string
    updatedAt?: DateTimeFilter<"DbConnection"> | Date | string
  }

  export type DbConnectionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    dbType?: SortOrder
    host?: SortOrder
    port?: SortOrder
    database?: SortOrder
    username?: SortOrder
    isActive?: SortOrder
    isReadOnly?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DbConnectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DbConnectionWhereInput | DbConnectionWhereInput[]
    OR?: DbConnectionWhereInput[]
    NOT?: DbConnectionWhereInput | DbConnectionWhereInput[]
    name?: StringFilter<"DbConnection"> | string
    dbType?: StringFilter<"DbConnection"> | string
    host?: StringFilter<"DbConnection"> | string
    port?: IntFilter<"DbConnection"> | number
    database?: StringFilter<"DbConnection"> | string
    username?: StringFilter<"DbConnection"> | string
    isActive?: BoolFilter<"DbConnection"> | boolean
    isReadOnly?: BoolFilter<"DbConnection"> | boolean
    createdAt?: DateTimeFilter<"DbConnection"> | Date | string
    updatedAt?: DateTimeFilter<"DbConnection"> | Date | string
  }, "id">

  export type DbConnectionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    dbType?: SortOrder
    host?: SortOrder
    port?: SortOrder
    database?: SortOrder
    username?: SortOrder
    isActive?: SortOrder
    isReadOnly?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DbConnectionCountOrderByAggregateInput
    _avg?: DbConnectionAvgOrderByAggregateInput
    _max?: DbConnectionMaxOrderByAggregateInput
    _min?: DbConnectionMinOrderByAggregateInput
    _sum?: DbConnectionSumOrderByAggregateInput
  }

  export type DbConnectionScalarWhereWithAggregatesInput = {
    AND?: DbConnectionScalarWhereWithAggregatesInput | DbConnectionScalarWhereWithAggregatesInput[]
    OR?: DbConnectionScalarWhereWithAggregatesInput[]
    NOT?: DbConnectionScalarWhereWithAggregatesInput | DbConnectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DbConnection"> | string
    name?: StringWithAggregatesFilter<"DbConnection"> | string
    dbType?: StringWithAggregatesFilter<"DbConnection"> | string
    host?: StringWithAggregatesFilter<"DbConnection"> | string
    port?: IntWithAggregatesFilter<"DbConnection"> | number
    database?: StringWithAggregatesFilter<"DbConnection"> | string
    username?: StringWithAggregatesFilter<"DbConnection"> | string
    isActive?: BoolWithAggregatesFilter<"DbConnection"> | boolean
    isReadOnly?: BoolWithAggregatesFilter<"DbConnection"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"DbConnection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DbConnection"> | Date | string
  }

  export type ManufacturingDailyWhereInput = {
    AND?: ManufacturingDailyWhereInput | ManufacturingDailyWhereInput[]
    OR?: ManufacturingDailyWhereInput[]
    NOT?: ManufacturingDailyWhereInput | ManufacturingDailyWhereInput[]
    id?: StringFilter<"ManufacturingDaily"> | string
    date?: DateTimeFilter<"ManufacturingDaily"> | Date | string
    lineId?: IntFilter<"ManufacturingDaily"> | number
    unitsProduced?: IntFilter<"ManufacturingDaily"> | number
    rejectionRate?: DecimalFilter<"ManufacturingDaily"> | Decimal | DecimalJsLike | number | string
    energyKwh?: DecimalFilter<"ManufacturingDaily"> | Decimal | DecimalJsLike | number | string
  }

  export type ManufacturingDailyOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    lineId?: SortOrder
    unitsProduced?: SortOrder
    rejectionRate?: SortOrder
    energyKwh?: SortOrder
  }

  export type ManufacturingDailyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ManufacturingDailyWhereInput | ManufacturingDailyWhereInput[]
    OR?: ManufacturingDailyWhereInput[]
    NOT?: ManufacturingDailyWhereInput | ManufacturingDailyWhereInput[]
    date?: DateTimeFilter<"ManufacturingDaily"> | Date | string
    lineId?: IntFilter<"ManufacturingDaily"> | number
    unitsProduced?: IntFilter<"ManufacturingDaily"> | number
    rejectionRate?: DecimalFilter<"ManufacturingDaily"> | Decimal | DecimalJsLike | number | string
    energyKwh?: DecimalFilter<"ManufacturingDaily"> | Decimal | DecimalJsLike | number | string
  }, "id">

  export type ManufacturingDailyOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    lineId?: SortOrder
    unitsProduced?: SortOrder
    rejectionRate?: SortOrder
    energyKwh?: SortOrder
    _count?: ManufacturingDailyCountOrderByAggregateInput
    _avg?: ManufacturingDailyAvgOrderByAggregateInput
    _max?: ManufacturingDailyMaxOrderByAggregateInput
    _min?: ManufacturingDailyMinOrderByAggregateInput
    _sum?: ManufacturingDailySumOrderByAggregateInput
  }

  export type ManufacturingDailyScalarWhereWithAggregatesInput = {
    AND?: ManufacturingDailyScalarWhereWithAggregatesInput | ManufacturingDailyScalarWhereWithAggregatesInput[]
    OR?: ManufacturingDailyScalarWhereWithAggregatesInput[]
    NOT?: ManufacturingDailyScalarWhereWithAggregatesInput | ManufacturingDailyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ManufacturingDaily"> | string
    date?: DateTimeWithAggregatesFilter<"ManufacturingDaily"> | Date | string
    lineId?: IntWithAggregatesFilter<"ManufacturingDaily"> | number
    unitsProduced?: IntWithAggregatesFilter<"ManufacturingDaily"> | number
    rejectionRate?: DecimalWithAggregatesFilter<"ManufacturingDaily"> | Decimal | DecimalJsLike | number | string
    energyKwh?: DecimalWithAggregatesFilter<"ManufacturingDaily"> | Decimal | DecimalJsLike | number | string
  }

  export type SalesMonthlyWhereInput = {
    AND?: SalesMonthlyWhereInput | SalesMonthlyWhereInput[]
    OR?: SalesMonthlyWhereInput[]
    NOT?: SalesMonthlyWhereInput | SalesMonthlyWhereInput[]
    id?: StringFilter<"SalesMonthly"> | string
    month?: DateTimeFilter<"SalesMonthly"> | Date | string
    channel?: StringFilter<"SalesMonthly"> | string
    revenue?: DecimalFilter<"SalesMonthly"> | Decimal | DecimalJsLike | number | string
    unitsSold?: IntFilter<"SalesMonthly"> | number
    region?: StringFilter<"SalesMonthly"> | string
  }

  export type SalesMonthlyOrderByWithRelationInput = {
    id?: SortOrder
    month?: SortOrder
    channel?: SortOrder
    revenue?: SortOrder
    unitsSold?: SortOrder
    region?: SortOrder
  }

  export type SalesMonthlyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SalesMonthlyWhereInput | SalesMonthlyWhereInput[]
    OR?: SalesMonthlyWhereInput[]
    NOT?: SalesMonthlyWhereInput | SalesMonthlyWhereInput[]
    month?: DateTimeFilter<"SalesMonthly"> | Date | string
    channel?: StringFilter<"SalesMonthly"> | string
    revenue?: DecimalFilter<"SalesMonthly"> | Decimal | DecimalJsLike | number | string
    unitsSold?: IntFilter<"SalesMonthly"> | number
    region?: StringFilter<"SalesMonthly"> | string
  }, "id">

  export type SalesMonthlyOrderByWithAggregationInput = {
    id?: SortOrder
    month?: SortOrder
    channel?: SortOrder
    revenue?: SortOrder
    unitsSold?: SortOrder
    region?: SortOrder
    _count?: SalesMonthlyCountOrderByAggregateInput
    _avg?: SalesMonthlyAvgOrderByAggregateInput
    _max?: SalesMonthlyMaxOrderByAggregateInput
    _min?: SalesMonthlyMinOrderByAggregateInput
    _sum?: SalesMonthlySumOrderByAggregateInput
  }

  export type SalesMonthlyScalarWhereWithAggregatesInput = {
    AND?: SalesMonthlyScalarWhereWithAggregatesInput | SalesMonthlyScalarWhereWithAggregatesInput[]
    OR?: SalesMonthlyScalarWhereWithAggregatesInput[]
    NOT?: SalesMonthlyScalarWhereWithAggregatesInput | SalesMonthlyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SalesMonthly"> | string
    month?: DateTimeWithAggregatesFilter<"SalesMonthly"> | Date | string
    channel?: StringWithAggregatesFilter<"SalesMonthly"> | string
    revenue?: DecimalWithAggregatesFilter<"SalesMonthly"> | Decimal | DecimalJsLike | number | string
    unitsSold?: IntWithAggregatesFilter<"SalesMonthly"> | number
    region?: StringWithAggregatesFilter<"SalesMonthly"> | string
  }

  export type LegacyEmployeeWhereInput = {
    AND?: LegacyEmployeeWhereInput | LegacyEmployeeWhereInput[]
    OR?: LegacyEmployeeWhereInput[]
    NOT?: LegacyEmployeeWhereInput | LegacyEmployeeWhereInput[]
    id?: StringFilter<"LegacyEmployee"> | string
    name?: StringFilter<"LegacyEmployee"> | string
    department?: StringFilter<"LegacyEmployee"> | string
    managerId?: StringNullableFilter<"LegacyEmployee"> | string | null
    role?: StringFilter<"LegacyEmployee"> | string
    goals?: LegacyGoalListRelationFilter
  }

  export type LegacyEmployeeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    department?: SortOrder
    managerId?: SortOrderInput | SortOrder
    role?: SortOrder
    goals?: LegacyGoalOrderByRelationAggregateInput
  }

  export type LegacyEmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LegacyEmployeeWhereInput | LegacyEmployeeWhereInput[]
    OR?: LegacyEmployeeWhereInput[]
    NOT?: LegacyEmployeeWhereInput | LegacyEmployeeWhereInput[]
    name?: StringFilter<"LegacyEmployee"> | string
    department?: StringFilter<"LegacyEmployee"> | string
    managerId?: StringNullableFilter<"LegacyEmployee"> | string | null
    role?: StringFilter<"LegacyEmployee"> | string
    goals?: LegacyGoalListRelationFilter
  }, "id">

  export type LegacyEmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    department?: SortOrder
    managerId?: SortOrderInput | SortOrder
    role?: SortOrder
    _count?: LegacyEmployeeCountOrderByAggregateInput
    _max?: LegacyEmployeeMaxOrderByAggregateInput
    _min?: LegacyEmployeeMinOrderByAggregateInput
  }

  export type LegacyEmployeeScalarWhereWithAggregatesInput = {
    AND?: LegacyEmployeeScalarWhereWithAggregatesInput | LegacyEmployeeScalarWhereWithAggregatesInput[]
    OR?: LegacyEmployeeScalarWhereWithAggregatesInput[]
    NOT?: LegacyEmployeeScalarWhereWithAggregatesInput | LegacyEmployeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LegacyEmployee"> | string
    name?: StringWithAggregatesFilter<"LegacyEmployee"> | string
    department?: StringWithAggregatesFilter<"LegacyEmployee"> | string
    managerId?: StringNullableWithAggregatesFilter<"LegacyEmployee"> | string | null
    role?: StringWithAggregatesFilter<"LegacyEmployee"> | string
  }

  export type LegacyGoalWhereInput = {
    AND?: LegacyGoalWhereInput | LegacyGoalWhereInput[]
    OR?: LegacyGoalWhereInput[]
    NOT?: LegacyGoalWhereInput | LegacyGoalWhereInput[]
    id?: StringFilter<"LegacyGoal"> | string
    employeeId?: StringFilter<"LegacyGoal"> | string
    title?: StringFilter<"LegacyGoal"> | string
    target?: DecimalFilter<"LegacyGoal"> | Decimal | DecimalJsLike | number | string
    actual?: DecimalFilter<"LegacyGoal"> | Decimal | DecimalJsLike | number | string
    quarter?: StringFilter<"LegacyGoal"> | string
    employee?: XOR<LegacyEmployeeRelationFilter, LegacyEmployeeWhereInput>
  }

  export type LegacyGoalOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    title?: SortOrder
    target?: SortOrder
    actual?: SortOrder
    quarter?: SortOrder
    employee?: LegacyEmployeeOrderByWithRelationInput
  }

  export type LegacyGoalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LegacyGoalWhereInput | LegacyGoalWhereInput[]
    OR?: LegacyGoalWhereInput[]
    NOT?: LegacyGoalWhereInput | LegacyGoalWhereInput[]
    employeeId?: StringFilter<"LegacyGoal"> | string
    title?: StringFilter<"LegacyGoal"> | string
    target?: DecimalFilter<"LegacyGoal"> | Decimal | DecimalJsLike | number | string
    actual?: DecimalFilter<"LegacyGoal"> | Decimal | DecimalJsLike | number | string
    quarter?: StringFilter<"LegacyGoal"> | string
    employee?: XOR<LegacyEmployeeRelationFilter, LegacyEmployeeWhereInput>
  }, "id">

  export type LegacyGoalOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    title?: SortOrder
    target?: SortOrder
    actual?: SortOrder
    quarter?: SortOrder
    _count?: LegacyGoalCountOrderByAggregateInput
    _avg?: LegacyGoalAvgOrderByAggregateInput
    _max?: LegacyGoalMaxOrderByAggregateInput
    _min?: LegacyGoalMinOrderByAggregateInput
    _sum?: LegacyGoalSumOrderByAggregateInput
  }

  export type LegacyGoalScalarWhereWithAggregatesInput = {
    AND?: LegacyGoalScalarWhereWithAggregatesInput | LegacyGoalScalarWhereWithAggregatesInput[]
    OR?: LegacyGoalScalarWhereWithAggregatesInput[]
    NOT?: LegacyGoalScalarWhereWithAggregatesInput | LegacyGoalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LegacyGoal"> | string
    employeeId?: StringWithAggregatesFilter<"LegacyGoal"> | string
    title?: StringWithAggregatesFilter<"LegacyGoal"> | string
    target?: DecimalWithAggregatesFilter<"LegacyGoal"> | Decimal | DecimalJsLike | number | string
    actual?: DecimalWithAggregatesFilter<"LegacyGoal"> | Decimal | DecimalJsLike | number | string
    quarter?: StringWithAggregatesFilter<"LegacyGoal"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    department: DepartmentCreateNestedOneWithoutUsersInput
    manager?: UserCreateNestedOneWithoutSubordinatesInput
    subordinates?: UserCreateNestedManyWithoutManagerInput
    goals?: GoalCreateNestedManyWithoutEmployeeInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    escalations?: EscalationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    departmentId: string
    managerId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    subordinates?: UserUncheckedCreateNestedManyWithoutManagerInput
    goals?: GoalUncheckedCreateNestedManyWithoutEmployeeInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    escalations?: EscalationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneRequiredWithoutUsersNestedInput
    manager?: UserUpdateOneWithoutSubordinatesNestedInput
    subordinates?: UserUpdateManyWithoutManagerNestedInput
    goals?: GoalUpdateManyWithoutEmployeeNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    escalations?: EscalationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    departmentId?: StringFieldUpdateOperationsInput | string
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subordinates?: UserUncheckedUpdateManyWithoutManagerNestedInput
    goals?: GoalUncheckedUpdateManyWithoutEmployeeNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    escalations?: EscalationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    departmentId: string
    managerId?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    departmentId?: StringFieldUpdateOperationsInput | string
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentCreateInput = {
    id?: string
    name: string
    thrustArea: string
    categoryLifecycle?: string
    users?: UserCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    id?: string
    name: string
    thrustArea: string
    categoryLifecycle?: string
    users?: UserUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    thrustArea?: StringFieldUpdateOperationsInput | string
    categoryLifecycle?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    thrustArea?: StringFieldUpdateOperationsInput | string
    categoryLifecycle?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    id?: string
    name: string
    thrustArea: string
    categoryLifecycle?: string
  }

  export type DepartmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    thrustArea?: StringFieldUpdateOperationsInput | string
    categoryLifecycle?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    thrustArea?: StringFieldUpdateOperationsInput | string
    categoryLifecycle?: StringFieldUpdateOperationsInput | string
  }

  export type GoalCycleCreateInput = {
    id?: string
    name: string
    phase: string
    status?: string
    startDate: Date | string
    endDate: Date | string
    goals?: GoalCreateNestedManyWithoutCycleInput
    checkIns?: CheckInCreateNestedManyWithoutCycleInput
  }

  export type GoalCycleUncheckedCreateInput = {
    id?: string
    name: string
    phase: string
    status?: string
    startDate: Date | string
    endDate: Date | string
    goals?: GoalUncheckedCreateNestedManyWithoutCycleInput
    checkIns?: CheckInUncheckedCreateNestedManyWithoutCycleInput
  }

  export type GoalCycleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phase?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUpdateManyWithoutCycleNestedInput
    checkIns?: CheckInUpdateManyWithoutCycleNestedInput
  }

  export type GoalCycleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phase?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUncheckedUpdateManyWithoutCycleNestedInput
    checkIns?: CheckInUncheckedUpdateManyWithoutCycleNestedInput
  }

  export type GoalCycleCreateManyInput = {
    id?: string
    name: string
    phase: string
    status?: string
    startDate: Date | string
    endDate: Date | string
  }

  export type GoalCycleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phase?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalCycleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phase?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalCreateInput = {
    id?: string
    title: string
    description?: string | null
    thrustArea: string
    uomType: $Enums.UoMType
    targetValue?: Decimal | DecimalJsLike | number | string
    actualValue?: Decimal | DecimalJsLike | number | string
    weightage: number
    status?: $Enums.GoalStatus
    categoryType?: string
    channelType?: string | null
    isShared?: boolean
    parentGoalId?: string | null
    lockedAt?: Date | string | null
    approvedBy?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: UserCreateNestedOneWithoutGoalsInput
    cycle?: GoalCycleCreateNestedOneWithoutGoalsInput
    checkIns?: CheckInCreateNestedManyWithoutGoalInput
    auditLogs?: AuditLogCreateNestedManyWithoutGoalInput
  }

  export type GoalUncheckedCreateInput = {
    id?: string
    cycleId?: string | null
    employeeId: string
    title: string
    description?: string | null
    thrustArea: string
    uomType: $Enums.UoMType
    targetValue?: Decimal | DecimalJsLike | number | string
    actualValue?: Decimal | DecimalJsLike | number | string
    weightage: number
    status?: $Enums.GoalStatus
    categoryType?: string
    channelType?: string | null
    isShared?: boolean
    parentGoalId?: string | null
    lockedAt?: Date | string | null
    approvedBy?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    checkIns?: CheckInUncheckedCreateNestedManyWithoutGoalInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutGoalInput
  }

  export type GoalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thrustArea?: StringFieldUpdateOperationsInput | string
    uomType?: EnumUoMTypeFieldUpdateOperationsInput | $Enums.UoMType
    targetValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    actualValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weightage?: IntFieldUpdateOperationsInput | number
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    categoryType?: StringFieldUpdateOperationsInput | string
    channelType?: NullableStringFieldUpdateOperationsInput | string | null
    isShared?: BoolFieldUpdateOperationsInput | boolean
    parentGoalId?: NullableStringFieldUpdateOperationsInput | string | null
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: UserUpdateOneRequiredWithoutGoalsNestedInput
    cycle?: GoalCycleUpdateOneWithoutGoalsNestedInput
    checkIns?: CheckInUpdateManyWithoutGoalNestedInput
    auditLogs?: AuditLogUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleId?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thrustArea?: StringFieldUpdateOperationsInput | string
    uomType?: EnumUoMTypeFieldUpdateOperationsInput | $Enums.UoMType
    targetValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    actualValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weightage?: IntFieldUpdateOperationsInput | number
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    categoryType?: StringFieldUpdateOperationsInput | string
    channelType?: NullableStringFieldUpdateOperationsInput | string | null
    isShared?: BoolFieldUpdateOperationsInput | boolean
    parentGoalId?: NullableStringFieldUpdateOperationsInput | string | null
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkIns?: CheckInUncheckedUpdateManyWithoutGoalNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutGoalNestedInput
  }

  export type GoalCreateManyInput = {
    id?: string
    cycleId?: string | null
    employeeId: string
    title: string
    description?: string | null
    thrustArea: string
    uomType: $Enums.UoMType
    targetValue?: Decimal | DecimalJsLike | number | string
    actualValue?: Decimal | DecimalJsLike | number | string
    weightage: number
    status?: $Enums.GoalStatus
    categoryType?: string
    channelType?: string | null
    isShared?: boolean
    parentGoalId?: string | null
    lockedAt?: Date | string | null
    approvedBy?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thrustArea?: StringFieldUpdateOperationsInput | string
    uomType?: EnumUoMTypeFieldUpdateOperationsInput | $Enums.UoMType
    targetValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    actualValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weightage?: IntFieldUpdateOperationsInput | number
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    categoryType?: StringFieldUpdateOperationsInput | string
    channelType?: NullableStringFieldUpdateOperationsInput | string | null
    isShared?: BoolFieldUpdateOperationsInput | boolean
    parentGoalId?: NullableStringFieldUpdateOperationsInput | string | null
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleId?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thrustArea?: StringFieldUpdateOperationsInput | string
    uomType?: EnumUoMTypeFieldUpdateOperationsInput | $Enums.UoMType
    targetValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    actualValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weightage?: IntFieldUpdateOperationsInput | number
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    categoryType?: StringFieldUpdateOperationsInput | string
    channelType?: NullableStringFieldUpdateOperationsInput | string | null
    isShared?: BoolFieldUpdateOperationsInput | boolean
    parentGoalId?: NullableStringFieldUpdateOperationsInput | string | null
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInCreateInput = {
    id?: string
    quarter: string
    plannedValue?: Decimal | DecimalJsLike | number | string
    actualValue?: Decimal | DecimalJsLike | number | string
    status?: $Enums.CheckInStatus
    managerComment?: string | null
    computedScore?: Decimal | DecimalJsLike | number | string
    checkInDate?: Date | string
    goal: GoalCreateNestedOneWithoutCheckInsInput
    cycle?: GoalCycleCreateNestedOneWithoutCheckInsInput
  }

  export type CheckInUncheckedCreateInput = {
    id?: string
    goalId: string
    cycleId?: string | null
    quarter: string
    plannedValue?: Decimal | DecimalJsLike | number | string
    actualValue?: Decimal | DecimalJsLike | number | string
    status?: $Enums.CheckInStatus
    managerComment?: string | null
    computedScore?: Decimal | DecimalJsLike | number | string
    checkInDate?: Date | string
  }

  export type CheckInUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quarter?: StringFieldUpdateOperationsInput | string
    plannedValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    actualValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus
    managerComment?: NullableStringFieldUpdateOperationsInput | string | null
    computedScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    goal?: GoalUpdateOneRequiredWithoutCheckInsNestedInput
    cycle?: GoalCycleUpdateOneWithoutCheckInsNestedInput
  }

  export type CheckInUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    goalId?: StringFieldUpdateOperationsInput | string
    cycleId?: NullableStringFieldUpdateOperationsInput | string | null
    quarter?: StringFieldUpdateOperationsInput | string
    plannedValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    actualValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus
    managerComment?: NullableStringFieldUpdateOperationsInput | string | null
    computedScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInCreateManyInput = {
    id?: string
    goalId: string
    cycleId?: string | null
    quarter: string
    plannedValue?: Decimal | DecimalJsLike | number | string
    actualValue?: Decimal | DecimalJsLike | number | string
    status?: $Enums.CheckInStatus
    managerComment?: string | null
    computedScore?: Decimal | DecimalJsLike | number | string
    checkInDate?: Date | string
  }

  export type CheckInUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quarter?: StringFieldUpdateOperationsInput | string
    plannedValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    actualValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus
    managerComment?: NullableStringFieldUpdateOperationsInput | string | null
    computedScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    goalId?: StringFieldUpdateOperationsInput | string
    cycleId?: NullableStringFieldUpdateOperationsInput | string | null
    quarter?: StringFieldUpdateOperationsInput | string
    plannedValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    actualValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus
    managerComment?: NullableStringFieldUpdateOperationsInput | string | null
    computedScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    fieldName: string
    oldValue?: string | null
    newValue?: string | null
    actionType: string
    ipAddress?: string | null
    changedAt?: Date | string
    goal: GoalCreateNestedOneWithoutAuditLogsInput
    user: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    goalId: string
    changedBy: string
    fieldName: string
    oldValue?: string | null
    newValue?: string | null
    actionType: string
    ipAddress?: string | null
    changedAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldName?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    actionType?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goal?: GoalUpdateOneRequiredWithoutAuditLogsNestedInput
    user?: UserUpdateOneRequiredWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    goalId?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
    fieldName?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    actionType?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    goalId: string
    changedBy: string
    fieldName: string
    oldValue?: string | null
    newValue?: string | null
    actionType: string
    ipAddress?: string | null
    changedAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldName?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    actionType?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    goalId?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
    fieldName?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    actionType?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EscalationCreateInput = {
    id?: string
    triggerType: string
    escalationLevel?: number
    message: string
    isResolved?: boolean
    createdAt?: Date | string
    resolvedAt?: Date | string | null
    user: UserCreateNestedOneWithoutEscalationsInput
  }

  export type EscalationUncheckedCreateInput = {
    id?: string
    triggerType: string
    triggeredForId: string
    escalationLevel?: number
    message: string
    isResolved?: boolean
    createdAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type EscalationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerType?: StringFieldUpdateOperationsInput | string
    escalationLevel?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutEscalationsNestedInput
  }

  export type EscalationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerType?: StringFieldUpdateOperationsInput | string
    triggeredForId?: StringFieldUpdateOperationsInput | string
    escalationLevel?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EscalationCreateManyInput = {
    id?: string
    triggerType: string
    triggeredForId: string
    escalationLevel?: number
    message: string
    isResolved?: boolean
    createdAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type EscalationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerType?: StringFieldUpdateOperationsInput | string
    escalationLevel?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EscalationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerType?: StringFieldUpdateOperationsInput | string
    triggeredForId?: StringFieldUpdateOperationsInput | string
    escalationLevel?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChatMessageCreateInput = {
    id?: string
    role: string
    content: string
    intentType?: string | null
    metadata?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutChatMessagesInput
  }

  export type ChatMessageUncheckedCreateInput = {
    id?: string
    userId: string
    role: string
    content: string
    intentType?: string | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type ChatMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    intentType?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    intentType?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyInput = {
    id?: string
    userId: string
    role: string
    content: string
    intentType?: string | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type ChatMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    intentType?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    intentType?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DbConnectionCreateInput = {
    id?: string
    name?: string
    dbType?: string
    host: string
    port?: number
    database: string
    username: string
    isActive?: boolean
    isReadOnly?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DbConnectionUncheckedCreateInput = {
    id?: string
    name?: string
    dbType?: string
    host: string
    port?: number
    database: string
    username: string
    isActive?: boolean
    isReadOnly?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DbConnectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dbType?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    database?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isReadOnly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DbConnectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dbType?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    database?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isReadOnly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DbConnectionCreateManyInput = {
    id?: string
    name?: string
    dbType?: string
    host: string
    port?: number
    database: string
    username: string
    isActive?: boolean
    isReadOnly?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DbConnectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dbType?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    database?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isReadOnly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DbConnectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dbType?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    database?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isReadOnly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManufacturingDailyCreateInput = {
    id?: string
    date: Date | string
    lineId: number
    unitsProduced: number
    rejectionRate: Decimal | DecimalJsLike | number | string
    energyKwh: Decimal | DecimalJsLike | number | string
  }

  export type ManufacturingDailyUncheckedCreateInput = {
    id?: string
    date: Date | string
    lineId: number
    unitsProduced: number
    rejectionRate: Decimal | DecimalJsLike | number | string
    energyKwh: Decimal | DecimalJsLike | number | string
  }

  export type ManufacturingDailyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    lineId?: IntFieldUpdateOperationsInput | number
    unitsProduced?: IntFieldUpdateOperationsInput | number
    rejectionRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    energyKwh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ManufacturingDailyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    lineId?: IntFieldUpdateOperationsInput | number
    unitsProduced?: IntFieldUpdateOperationsInput | number
    rejectionRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    energyKwh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ManufacturingDailyCreateManyInput = {
    id?: string
    date: Date | string
    lineId: number
    unitsProduced: number
    rejectionRate: Decimal | DecimalJsLike | number | string
    energyKwh: Decimal | DecimalJsLike | number | string
  }

  export type ManufacturingDailyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    lineId?: IntFieldUpdateOperationsInput | number
    unitsProduced?: IntFieldUpdateOperationsInput | number
    rejectionRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    energyKwh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ManufacturingDailyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    lineId?: IntFieldUpdateOperationsInput | number
    unitsProduced?: IntFieldUpdateOperationsInput | number
    rejectionRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    energyKwh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SalesMonthlyCreateInput = {
    id?: string
    month: Date | string
    channel: string
    revenue: Decimal | DecimalJsLike | number | string
    unitsSold: number
    region: string
  }

  export type SalesMonthlyUncheckedCreateInput = {
    id?: string
    month: Date | string
    channel: string
    revenue: Decimal | DecimalJsLike | number | string
    unitsSold: number
    region: string
  }

  export type SalesMonthlyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: StringFieldUpdateOperationsInput | string
    revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitsSold?: IntFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
  }

  export type SalesMonthlyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: StringFieldUpdateOperationsInput | string
    revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitsSold?: IntFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
  }

  export type SalesMonthlyCreateManyInput = {
    id?: string
    month: Date | string
    channel: string
    revenue: Decimal | DecimalJsLike | number | string
    unitsSold: number
    region: string
  }

  export type SalesMonthlyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: StringFieldUpdateOperationsInput | string
    revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitsSold?: IntFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
  }

  export type SalesMonthlyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: StringFieldUpdateOperationsInput | string
    revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitsSold?: IntFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
  }

  export type LegacyEmployeeCreateInput = {
    id?: string
    name: string
    department: string
    managerId?: string | null
    role: string
    goals?: LegacyGoalCreateNestedManyWithoutEmployeeInput
  }

  export type LegacyEmployeeUncheckedCreateInput = {
    id?: string
    name: string
    department: string
    managerId?: string | null
    role: string
    goals?: LegacyGoalUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type LegacyEmployeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    goals?: LegacyGoalUpdateManyWithoutEmployeeNestedInput
  }

  export type LegacyEmployeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    goals?: LegacyGoalUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type LegacyEmployeeCreateManyInput = {
    id?: string
    name: string
    department: string
    managerId?: string | null
    role: string
  }

  export type LegacyEmployeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type LegacyEmployeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type LegacyGoalCreateInput = {
    id?: string
    title: string
    target: Decimal | DecimalJsLike | number | string
    actual: Decimal | DecimalJsLike | number | string
    quarter: string
    employee: LegacyEmployeeCreateNestedOneWithoutGoalsInput
  }

  export type LegacyGoalUncheckedCreateInput = {
    id?: string
    employeeId: string
    title: string
    target: Decimal | DecimalJsLike | number | string
    actual: Decimal | DecimalJsLike | number | string
    quarter: string
  }

  export type LegacyGoalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    target?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    actual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quarter?: StringFieldUpdateOperationsInput | string
    employee?: LegacyEmployeeUpdateOneRequiredWithoutGoalsNestedInput
  }

  export type LegacyGoalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    target?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    actual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quarter?: StringFieldUpdateOperationsInput | string
  }

  export type LegacyGoalCreateManyInput = {
    id?: string
    employeeId: string
    title: string
    target: Decimal | DecimalJsLike | number | string
    actual: Decimal | DecimalJsLike | number | string
    quarter: string
  }

  export type LegacyGoalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    target?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    actual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quarter?: StringFieldUpdateOperationsInput | string
  }

  export type LegacyGoalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    target?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    actual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quarter?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DepartmentRelationFilter = {
    is?: DepartmentWhereInput
    isNot?: DepartmentWhereInput
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type GoalListRelationFilter = {
    every?: GoalWhereInput
    some?: GoalWhereInput
    none?: GoalWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type ChatMessageListRelationFilter = {
    every?: ChatMessageWhereInput
    some?: ChatMessageWhereInput
    none?: ChatMessageWhereInput
  }

  export type EscalationListRelationFilter = {
    every?: EscalationWhereInput
    some?: EscalationWhereInput
    none?: EscalationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GoalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EscalationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    departmentId?: SortOrder
    managerId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    departmentId?: SortOrder
    managerId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    departmentId?: SortOrder
    managerId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DepartmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    thrustArea?: SortOrder
    categoryLifecycle?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    thrustArea?: SortOrder
    categoryLifecycle?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    thrustArea?: SortOrder
    categoryLifecycle?: SortOrder
  }

  export type CheckInListRelationFilter = {
    every?: CheckInWhereInput
    some?: CheckInWhereInput
    none?: CheckInWhereInput
  }

  export type CheckInOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GoalCycleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phase?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type GoalCycleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phase?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type GoalCycleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phase?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type EnumUoMTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UoMType | EnumUoMTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UoMType[] | ListEnumUoMTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UoMType[] | ListEnumUoMTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUoMTypeFilter<$PrismaModel> | $Enums.UoMType
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumGoalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | EnumGoalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalStatusFilter<$PrismaModel> | $Enums.GoalStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type GoalCycleNullableRelationFilter = {
    is?: GoalCycleWhereInput | null
    isNot?: GoalCycleWhereInput | null
  }

  export type GoalCountOrderByAggregateInput = {
    id?: SortOrder
    cycleId?: SortOrder
    employeeId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thrustArea?: SortOrder
    uomType?: SortOrder
    targetValue?: SortOrder
    actualValue?: SortOrder
    weightage?: SortOrder
    status?: SortOrder
    categoryType?: SortOrder
    channelType?: SortOrder
    isShared?: SortOrder
    parentGoalId?: SortOrder
    lockedAt?: SortOrder
    approvedBy?: SortOrder
    approvedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoalAvgOrderByAggregateInput = {
    targetValue?: SortOrder
    actualValue?: SortOrder
    weightage?: SortOrder
  }

  export type GoalMaxOrderByAggregateInput = {
    id?: SortOrder
    cycleId?: SortOrder
    employeeId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thrustArea?: SortOrder
    uomType?: SortOrder
    targetValue?: SortOrder
    actualValue?: SortOrder
    weightage?: SortOrder
    status?: SortOrder
    categoryType?: SortOrder
    channelType?: SortOrder
    isShared?: SortOrder
    parentGoalId?: SortOrder
    lockedAt?: SortOrder
    approvedBy?: SortOrder
    approvedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoalMinOrderByAggregateInput = {
    id?: SortOrder
    cycleId?: SortOrder
    employeeId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thrustArea?: SortOrder
    uomType?: SortOrder
    targetValue?: SortOrder
    actualValue?: SortOrder
    weightage?: SortOrder
    status?: SortOrder
    categoryType?: SortOrder
    channelType?: SortOrder
    isShared?: SortOrder
    parentGoalId?: SortOrder
    lockedAt?: SortOrder
    approvedBy?: SortOrder
    approvedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoalSumOrderByAggregateInput = {
    targetValue?: SortOrder
    actualValue?: SortOrder
    weightage?: SortOrder
  }

  export type EnumUoMTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UoMType | EnumUoMTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UoMType[] | ListEnumUoMTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UoMType[] | ListEnumUoMTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUoMTypeWithAggregatesFilter<$PrismaModel> | $Enums.UoMType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUoMTypeFilter<$PrismaModel>
    _max?: NestedEnumUoMTypeFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumGoalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | EnumGoalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalStatusWithAggregatesFilter<$PrismaModel> | $Enums.GoalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalStatusFilter<$PrismaModel>
    _max?: NestedEnumGoalStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumCheckInStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckInStatus | EnumCheckInStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CheckInStatus[] | ListEnumCheckInStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CheckInStatus[] | ListEnumCheckInStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCheckInStatusFilter<$PrismaModel> | $Enums.CheckInStatus
  }

  export type GoalRelationFilter = {
    is?: GoalWhereInput
    isNot?: GoalWhereInput
  }

  export type CheckInCountOrderByAggregateInput = {
    id?: SortOrder
    goalId?: SortOrder
    cycleId?: SortOrder
    quarter?: SortOrder
    plannedValue?: SortOrder
    actualValue?: SortOrder
    status?: SortOrder
    managerComment?: SortOrder
    computedScore?: SortOrder
    checkInDate?: SortOrder
  }

  export type CheckInAvgOrderByAggregateInput = {
    plannedValue?: SortOrder
    actualValue?: SortOrder
    computedScore?: SortOrder
  }

  export type CheckInMaxOrderByAggregateInput = {
    id?: SortOrder
    goalId?: SortOrder
    cycleId?: SortOrder
    quarter?: SortOrder
    plannedValue?: SortOrder
    actualValue?: SortOrder
    status?: SortOrder
    managerComment?: SortOrder
    computedScore?: SortOrder
    checkInDate?: SortOrder
  }

  export type CheckInMinOrderByAggregateInput = {
    id?: SortOrder
    goalId?: SortOrder
    cycleId?: SortOrder
    quarter?: SortOrder
    plannedValue?: SortOrder
    actualValue?: SortOrder
    status?: SortOrder
    managerComment?: SortOrder
    computedScore?: SortOrder
    checkInDate?: SortOrder
  }

  export type CheckInSumOrderByAggregateInput = {
    plannedValue?: SortOrder
    actualValue?: SortOrder
    computedScore?: SortOrder
  }

  export type EnumCheckInStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckInStatus | EnumCheckInStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CheckInStatus[] | ListEnumCheckInStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CheckInStatus[] | ListEnumCheckInStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCheckInStatusWithAggregatesFilter<$PrismaModel> | $Enums.CheckInStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCheckInStatusFilter<$PrismaModel>
    _max?: NestedEnumCheckInStatusFilter<$PrismaModel>
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    goalId?: SortOrder
    changedBy?: SortOrder
    fieldName?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    actionType?: SortOrder
    ipAddress?: SortOrder
    changedAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    goalId?: SortOrder
    changedBy?: SortOrder
    fieldName?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    actionType?: SortOrder
    ipAddress?: SortOrder
    changedAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    goalId?: SortOrder
    changedBy?: SortOrder
    fieldName?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    actionType?: SortOrder
    ipAddress?: SortOrder
    changedAt?: SortOrder
  }

  export type EscalationCountOrderByAggregateInput = {
    id?: SortOrder
    triggerType?: SortOrder
    triggeredForId?: SortOrder
    escalationLevel?: SortOrder
    message?: SortOrder
    isResolved?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type EscalationAvgOrderByAggregateInput = {
    escalationLevel?: SortOrder
  }

  export type EscalationMaxOrderByAggregateInput = {
    id?: SortOrder
    triggerType?: SortOrder
    triggeredForId?: SortOrder
    escalationLevel?: SortOrder
    message?: SortOrder
    isResolved?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type EscalationMinOrderByAggregateInput = {
    id?: SortOrder
    triggerType?: SortOrder
    triggeredForId?: SortOrder
    escalationLevel?: SortOrder
    message?: SortOrder
    isResolved?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type EscalationSumOrderByAggregateInput = {
    escalationLevel?: SortOrder
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    intentType?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    intentType?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    intentType?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type DbConnectionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dbType?: SortOrder
    host?: SortOrder
    port?: SortOrder
    database?: SortOrder
    username?: SortOrder
    isActive?: SortOrder
    isReadOnly?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DbConnectionAvgOrderByAggregateInput = {
    port?: SortOrder
  }

  export type DbConnectionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dbType?: SortOrder
    host?: SortOrder
    port?: SortOrder
    database?: SortOrder
    username?: SortOrder
    isActive?: SortOrder
    isReadOnly?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DbConnectionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dbType?: SortOrder
    host?: SortOrder
    port?: SortOrder
    database?: SortOrder
    username?: SortOrder
    isActive?: SortOrder
    isReadOnly?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DbConnectionSumOrderByAggregateInput = {
    port?: SortOrder
  }

  export type ManufacturingDailyCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    lineId?: SortOrder
    unitsProduced?: SortOrder
    rejectionRate?: SortOrder
    energyKwh?: SortOrder
  }

  export type ManufacturingDailyAvgOrderByAggregateInput = {
    lineId?: SortOrder
    unitsProduced?: SortOrder
    rejectionRate?: SortOrder
    energyKwh?: SortOrder
  }

  export type ManufacturingDailyMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    lineId?: SortOrder
    unitsProduced?: SortOrder
    rejectionRate?: SortOrder
    energyKwh?: SortOrder
  }

  export type ManufacturingDailyMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    lineId?: SortOrder
    unitsProduced?: SortOrder
    rejectionRate?: SortOrder
    energyKwh?: SortOrder
  }

  export type ManufacturingDailySumOrderByAggregateInput = {
    lineId?: SortOrder
    unitsProduced?: SortOrder
    rejectionRate?: SortOrder
    energyKwh?: SortOrder
  }

  export type SalesMonthlyCountOrderByAggregateInput = {
    id?: SortOrder
    month?: SortOrder
    channel?: SortOrder
    revenue?: SortOrder
    unitsSold?: SortOrder
    region?: SortOrder
  }

  export type SalesMonthlyAvgOrderByAggregateInput = {
    revenue?: SortOrder
    unitsSold?: SortOrder
  }

  export type SalesMonthlyMaxOrderByAggregateInput = {
    id?: SortOrder
    month?: SortOrder
    channel?: SortOrder
    revenue?: SortOrder
    unitsSold?: SortOrder
    region?: SortOrder
  }

  export type SalesMonthlyMinOrderByAggregateInput = {
    id?: SortOrder
    month?: SortOrder
    channel?: SortOrder
    revenue?: SortOrder
    unitsSold?: SortOrder
    region?: SortOrder
  }

  export type SalesMonthlySumOrderByAggregateInput = {
    revenue?: SortOrder
    unitsSold?: SortOrder
  }

  export type LegacyGoalListRelationFilter = {
    every?: LegacyGoalWhereInput
    some?: LegacyGoalWhereInput
    none?: LegacyGoalWhereInput
  }

  export type LegacyGoalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LegacyEmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    department?: SortOrder
    managerId?: SortOrder
    role?: SortOrder
  }

  export type LegacyEmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    department?: SortOrder
    managerId?: SortOrder
    role?: SortOrder
  }

  export type LegacyEmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    department?: SortOrder
    managerId?: SortOrder
    role?: SortOrder
  }

  export type LegacyEmployeeRelationFilter = {
    is?: LegacyEmployeeWhereInput
    isNot?: LegacyEmployeeWhereInput
  }

  export type LegacyGoalCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    title?: SortOrder
    target?: SortOrder
    actual?: SortOrder
    quarter?: SortOrder
  }

  export type LegacyGoalAvgOrderByAggregateInput = {
    target?: SortOrder
    actual?: SortOrder
  }

  export type LegacyGoalMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    title?: SortOrder
    target?: SortOrder
    actual?: SortOrder
    quarter?: SortOrder
  }

  export type LegacyGoalMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    title?: SortOrder
    target?: SortOrder
    actual?: SortOrder
    quarter?: SortOrder
  }

  export type LegacyGoalSumOrderByAggregateInput = {
    target?: SortOrder
    actual?: SortOrder
  }

  export type DepartmentCreateNestedOneWithoutUsersInput = {
    create?: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutUsersInput
    connect?: DepartmentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSubordinatesInput = {
    create?: XOR<UserCreateWithoutSubordinatesInput, UserUncheckedCreateWithoutSubordinatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubordinatesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutManagerInput = {
    create?: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput> | UserCreateWithoutManagerInput[] | UserUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutManagerInput | UserCreateOrConnectWithoutManagerInput[]
    createMany?: UserCreateManyManagerInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type GoalCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<GoalCreateWithoutEmployeeInput, GoalUncheckedCreateWithoutEmployeeInput> | GoalCreateWithoutEmployeeInput[] | GoalUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutEmployeeInput | GoalCreateOrConnectWithoutEmployeeInput[]
    createMany?: GoalCreateManyEmployeeInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type ChatMessageCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type EscalationCreateNestedManyWithoutUserInput = {
    create?: XOR<EscalationCreateWithoutUserInput, EscalationUncheckedCreateWithoutUserInput> | EscalationCreateWithoutUserInput[] | EscalationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EscalationCreateOrConnectWithoutUserInput | EscalationCreateOrConnectWithoutUserInput[]
    createMany?: EscalationCreateManyUserInputEnvelope
    connect?: EscalationWhereUniqueInput | EscalationWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutManagerInput = {
    create?: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput> | UserCreateWithoutManagerInput[] | UserUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutManagerInput | UserCreateOrConnectWithoutManagerInput[]
    createMany?: UserCreateManyManagerInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type GoalUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<GoalCreateWithoutEmployeeInput, GoalUncheckedCreateWithoutEmployeeInput> | GoalCreateWithoutEmployeeInput[] | GoalUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutEmployeeInput | GoalCreateOrConnectWithoutEmployeeInput[]
    createMany?: GoalCreateManyEmployeeInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type EscalationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EscalationCreateWithoutUserInput, EscalationUncheckedCreateWithoutUserInput> | EscalationCreateWithoutUserInput[] | EscalationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EscalationCreateOrConnectWithoutUserInput | EscalationCreateOrConnectWithoutUserInput[]
    createMany?: EscalationCreateManyUserInputEnvelope
    connect?: EscalationWhereUniqueInput | EscalationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DepartmentUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutUsersInput
    upsert?: DepartmentUpsertWithoutUsersInput
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutUsersInput, DepartmentUpdateWithoutUsersInput>, DepartmentUncheckedUpdateWithoutUsersInput>
  }

  export type UserUpdateOneWithoutSubordinatesNestedInput = {
    create?: XOR<UserCreateWithoutSubordinatesInput, UserUncheckedCreateWithoutSubordinatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubordinatesInput
    upsert?: UserUpsertWithoutSubordinatesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubordinatesInput, UserUpdateWithoutSubordinatesInput>, UserUncheckedUpdateWithoutSubordinatesInput>
  }

  export type UserUpdateManyWithoutManagerNestedInput = {
    create?: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput> | UserCreateWithoutManagerInput[] | UserUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutManagerInput | UserCreateOrConnectWithoutManagerInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutManagerInput | UserUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: UserCreateManyManagerInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutManagerInput | UserUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: UserUpdateManyWithWhereWithoutManagerInput | UserUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type GoalUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<GoalCreateWithoutEmployeeInput, GoalUncheckedCreateWithoutEmployeeInput> | GoalCreateWithoutEmployeeInput[] | GoalUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutEmployeeInput | GoalCreateOrConnectWithoutEmployeeInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutEmployeeInput | GoalUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: GoalCreateManyEmployeeInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutEmployeeInput | GoalUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutEmployeeInput | GoalUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type ChatMessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutUserInput | ChatMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutUserInput | ChatMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutUserInput | ChatMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type EscalationUpdateManyWithoutUserNestedInput = {
    create?: XOR<EscalationCreateWithoutUserInput, EscalationUncheckedCreateWithoutUserInput> | EscalationCreateWithoutUserInput[] | EscalationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EscalationCreateOrConnectWithoutUserInput | EscalationCreateOrConnectWithoutUserInput[]
    upsert?: EscalationUpsertWithWhereUniqueWithoutUserInput | EscalationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EscalationCreateManyUserInputEnvelope
    set?: EscalationWhereUniqueInput | EscalationWhereUniqueInput[]
    disconnect?: EscalationWhereUniqueInput | EscalationWhereUniqueInput[]
    delete?: EscalationWhereUniqueInput | EscalationWhereUniqueInput[]
    connect?: EscalationWhereUniqueInput | EscalationWhereUniqueInput[]
    update?: EscalationUpdateWithWhereUniqueWithoutUserInput | EscalationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EscalationUpdateManyWithWhereWithoutUserInput | EscalationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EscalationScalarWhereInput | EscalationScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUncheckedUpdateManyWithoutManagerNestedInput = {
    create?: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput> | UserCreateWithoutManagerInput[] | UserUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutManagerInput | UserCreateOrConnectWithoutManagerInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutManagerInput | UserUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: UserCreateManyManagerInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutManagerInput | UserUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: UserUpdateManyWithWhereWithoutManagerInput | UserUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type GoalUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<GoalCreateWithoutEmployeeInput, GoalUncheckedCreateWithoutEmployeeInput> | GoalCreateWithoutEmployeeInput[] | GoalUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutEmployeeInput | GoalCreateOrConnectWithoutEmployeeInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutEmployeeInput | GoalUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: GoalCreateManyEmployeeInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutEmployeeInput | GoalUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutEmployeeInput | GoalUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutUserInput | ChatMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutUserInput | ChatMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutUserInput | ChatMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type EscalationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EscalationCreateWithoutUserInput, EscalationUncheckedCreateWithoutUserInput> | EscalationCreateWithoutUserInput[] | EscalationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EscalationCreateOrConnectWithoutUserInput | EscalationCreateOrConnectWithoutUserInput[]
    upsert?: EscalationUpsertWithWhereUniqueWithoutUserInput | EscalationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EscalationCreateManyUserInputEnvelope
    set?: EscalationWhereUniqueInput | EscalationWhereUniqueInput[]
    disconnect?: EscalationWhereUniqueInput | EscalationWhereUniqueInput[]
    delete?: EscalationWhereUniqueInput | EscalationWhereUniqueInput[]
    connect?: EscalationWhereUniqueInput | EscalationWhereUniqueInput[]
    update?: EscalationUpdateWithWhereUniqueWithoutUserInput | EscalationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EscalationUpdateManyWithWhereWithoutUserInput | EscalationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EscalationScalarWhereInput | EscalationScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDepartmentInput | UserUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDepartmentInput | UserUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDepartmentInput | UserUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDepartmentInput | UserUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDepartmentInput | UserUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDepartmentInput | UserUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type GoalCreateNestedManyWithoutCycleInput = {
    create?: XOR<GoalCreateWithoutCycleInput, GoalUncheckedCreateWithoutCycleInput> | GoalCreateWithoutCycleInput[] | GoalUncheckedCreateWithoutCycleInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutCycleInput | GoalCreateOrConnectWithoutCycleInput[]
    createMany?: GoalCreateManyCycleInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type CheckInCreateNestedManyWithoutCycleInput = {
    create?: XOR<CheckInCreateWithoutCycleInput, CheckInUncheckedCreateWithoutCycleInput> | CheckInCreateWithoutCycleInput[] | CheckInUncheckedCreateWithoutCycleInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutCycleInput | CheckInCreateOrConnectWithoutCycleInput[]
    createMany?: CheckInCreateManyCycleInputEnvelope
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
  }

  export type GoalUncheckedCreateNestedManyWithoutCycleInput = {
    create?: XOR<GoalCreateWithoutCycleInput, GoalUncheckedCreateWithoutCycleInput> | GoalCreateWithoutCycleInput[] | GoalUncheckedCreateWithoutCycleInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutCycleInput | GoalCreateOrConnectWithoutCycleInput[]
    createMany?: GoalCreateManyCycleInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type CheckInUncheckedCreateNestedManyWithoutCycleInput = {
    create?: XOR<CheckInCreateWithoutCycleInput, CheckInUncheckedCreateWithoutCycleInput> | CheckInCreateWithoutCycleInput[] | CheckInUncheckedCreateWithoutCycleInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutCycleInput | CheckInCreateOrConnectWithoutCycleInput[]
    createMany?: CheckInCreateManyCycleInputEnvelope
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
  }

  export type GoalUpdateManyWithoutCycleNestedInput = {
    create?: XOR<GoalCreateWithoutCycleInput, GoalUncheckedCreateWithoutCycleInput> | GoalCreateWithoutCycleInput[] | GoalUncheckedCreateWithoutCycleInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutCycleInput | GoalCreateOrConnectWithoutCycleInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutCycleInput | GoalUpsertWithWhereUniqueWithoutCycleInput[]
    createMany?: GoalCreateManyCycleInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutCycleInput | GoalUpdateWithWhereUniqueWithoutCycleInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutCycleInput | GoalUpdateManyWithWhereWithoutCycleInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type CheckInUpdateManyWithoutCycleNestedInput = {
    create?: XOR<CheckInCreateWithoutCycleInput, CheckInUncheckedCreateWithoutCycleInput> | CheckInCreateWithoutCycleInput[] | CheckInUncheckedCreateWithoutCycleInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutCycleInput | CheckInCreateOrConnectWithoutCycleInput[]
    upsert?: CheckInUpsertWithWhereUniqueWithoutCycleInput | CheckInUpsertWithWhereUniqueWithoutCycleInput[]
    createMany?: CheckInCreateManyCycleInputEnvelope
    set?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    disconnect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    delete?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    update?: CheckInUpdateWithWhereUniqueWithoutCycleInput | CheckInUpdateWithWhereUniqueWithoutCycleInput[]
    updateMany?: CheckInUpdateManyWithWhereWithoutCycleInput | CheckInUpdateManyWithWhereWithoutCycleInput[]
    deleteMany?: CheckInScalarWhereInput | CheckInScalarWhereInput[]
  }

  export type GoalUncheckedUpdateManyWithoutCycleNestedInput = {
    create?: XOR<GoalCreateWithoutCycleInput, GoalUncheckedCreateWithoutCycleInput> | GoalCreateWithoutCycleInput[] | GoalUncheckedCreateWithoutCycleInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutCycleInput | GoalCreateOrConnectWithoutCycleInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutCycleInput | GoalUpsertWithWhereUniqueWithoutCycleInput[]
    createMany?: GoalCreateManyCycleInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutCycleInput | GoalUpdateWithWhereUniqueWithoutCycleInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutCycleInput | GoalUpdateManyWithWhereWithoutCycleInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type CheckInUncheckedUpdateManyWithoutCycleNestedInput = {
    create?: XOR<CheckInCreateWithoutCycleInput, CheckInUncheckedCreateWithoutCycleInput> | CheckInCreateWithoutCycleInput[] | CheckInUncheckedCreateWithoutCycleInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutCycleInput | CheckInCreateOrConnectWithoutCycleInput[]
    upsert?: CheckInUpsertWithWhereUniqueWithoutCycleInput | CheckInUpsertWithWhereUniqueWithoutCycleInput[]
    createMany?: CheckInCreateManyCycleInputEnvelope
    set?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    disconnect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    delete?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    update?: CheckInUpdateWithWhereUniqueWithoutCycleInput | CheckInUpdateWithWhereUniqueWithoutCycleInput[]
    updateMany?: CheckInUpdateManyWithWhereWithoutCycleInput | CheckInUpdateManyWithWhereWithoutCycleInput[]
    deleteMany?: CheckInScalarWhereInput | CheckInScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGoalsInput = {
    create?: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoalsInput
    connect?: UserWhereUniqueInput
  }

  export type GoalCycleCreateNestedOneWithoutGoalsInput = {
    create?: XOR<GoalCycleCreateWithoutGoalsInput, GoalCycleUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: GoalCycleCreateOrConnectWithoutGoalsInput
    connect?: GoalCycleWhereUniqueInput
  }

  export type CheckInCreateNestedManyWithoutGoalInput = {
    create?: XOR<CheckInCreateWithoutGoalInput, CheckInUncheckedCreateWithoutGoalInput> | CheckInCreateWithoutGoalInput[] | CheckInUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutGoalInput | CheckInCreateOrConnectWithoutGoalInput[]
    createMany?: CheckInCreateManyGoalInputEnvelope
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutGoalInput = {
    create?: XOR<AuditLogCreateWithoutGoalInput, AuditLogUncheckedCreateWithoutGoalInput> | AuditLogCreateWithoutGoalInput[] | AuditLogUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutGoalInput | AuditLogCreateOrConnectWithoutGoalInput[]
    createMany?: AuditLogCreateManyGoalInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type CheckInUncheckedCreateNestedManyWithoutGoalInput = {
    create?: XOR<CheckInCreateWithoutGoalInput, CheckInUncheckedCreateWithoutGoalInput> | CheckInCreateWithoutGoalInput[] | CheckInUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutGoalInput | CheckInCreateOrConnectWithoutGoalInput[]
    createMany?: CheckInCreateManyGoalInputEnvelope
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutGoalInput = {
    create?: XOR<AuditLogCreateWithoutGoalInput, AuditLogUncheckedCreateWithoutGoalInput> | AuditLogCreateWithoutGoalInput[] | AuditLogUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutGoalInput | AuditLogCreateOrConnectWithoutGoalInput[]
    createMany?: AuditLogCreateManyGoalInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type EnumUoMTypeFieldUpdateOperationsInput = {
    set?: $Enums.UoMType
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumGoalStatusFieldUpdateOperationsInput = {
    set?: $Enums.GoalStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutGoalsNestedInput = {
    create?: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoalsInput
    upsert?: UserUpsertWithoutGoalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGoalsInput, UserUpdateWithoutGoalsInput>, UserUncheckedUpdateWithoutGoalsInput>
  }

  export type GoalCycleUpdateOneWithoutGoalsNestedInput = {
    create?: XOR<GoalCycleCreateWithoutGoalsInput, GoalCycleUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: GoalCycleCreateOrConnectWithoutGoalsInput
    upsert?: GoalCycleUpsertWithoutGoalsInput
    disconnect?: GoalCycleWhereInput | boolean
    delete?: GoalCycleWhereInput | boolean
    connect?: GoalCycleWhereUniqueInput
    update?: XOR<XOR<GoalCycleUpdateToOneWithWhereWithoutGoalsInput, GoalCycleUpdateWithoutGoalsInput>, GoalCycleUncheckedUpdateWithoutGoalsInput>
  }

  export type CheckInUpdateManyWithoutGoalNestedInput = {
    create?: XOR<CheckInCreateWithoutGoalInput, CheckInUncheckedCreateWithoutGoalInput> | CheckInCreateWithoutGoalInput[] | CheckInUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutGoalInput | CheckInCreateOrConnectWithoutGoalInput[]
    upsert?: CheckInUpsertWithWhereUniqueWithoutGoalInput | CheckInUpsertWithWhereUniqueWithoutGoalInput[]
    createMany?: CheckInCreateManyGoalInputEnvelope
    set?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    disconnect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    delete?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    update?: CheckInUpdateWithWhereUniqueWithoutGoalInput | CheckInUpdateWithWhereUniqueWithoutGoalInput[]
    updateMany?: CheckInUpdateManyWithWhereWithoutGoalInput | CheckInUpdateManyWithWhereWithoutGoalInput[]
    deleteMany?: CheckInScalarWhereInput | CheckInScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutGoalNestedInput = {
    create?: XOR<AuditLogCreateWithoutGoalInput, AuditLogUncheckedCreateWithoutGoalInput> | AuditLogCreateWithoutGoalInput[] | AuditLogUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutGoalInput | AuditLogCreateOrConnectWithoutGoalInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutGoalInput | AuditLogUpsertWithWhereUniqueWithoutGoalInput[]
    createMany?: AuditLogCreateManyGoalInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutGoalInput | AuditLogUpdateWithWhereUniqueWithoutGoalInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutGoalInput | AuditLogUpdateManyWithWhereWithoutGoalInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type CheckInUncheckedUpdateManyWithoutGoalNestedInput = {
    create?: XOR<CheckInCreateWithoutGoalInput, CheckInUncheckedCreateWithoutGoalInput> | CheckInCreateWithoutGoalInput[] | CheckInUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutGoalInput | CheckInCreateOrConnectWithoutGoalInput[]
    upsert?: CheckInUpsertWithWhereUniqueWithoutGoalInput | CheckInUpsertWithWhereUniqueWithoutGoalInput[]
    createMany?: CheckInCreateManyGoalInputEnvelope
    set?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    disconnect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    delete?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    update?: CheckInUpdateWithWhereUniqueWithoutGoalInput | CheckInUpdateWithWhereUniqueWithoutGoalInput[]
    updateMany?: CheckInUpdateManyWithWhereWithoutGoalInput | CheckInUpdateManyWithWhereWithoutGoalInput[]
    deleteMany?: CheckInScalarWhereInput | CheckInScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutGoalNestedInput = {
    create?: XOR<AuditLogCreateWithoutGoalInput, AuditLogUncheckedCreateWithoutGoalInput> | AuditLogCreateWithoutGoalInput[] | AuditLogUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutGoalInput | AuditLogCreateOrConnectWithoutGoalInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutGoalInput | AuditLogUpsertWithWhereUniqueWithoutGoalInput[]
    createMany?: AuditLogCreateManyGoalInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutGoalInput | AuditLogUpdateWithWhereUniqueWithoutGoalInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutGoalInput | AuditLogUpdateManyWithWhereWithoutGoalInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type GoalCreateNestedOneWithoutCheckInsInput = {
    create?: XOR<GoalCreateWithoutCheckInsInput, GoalUncheckedCreateWithoutCheckInsInput>
    connectOrCreate?: GoalCreateOrConnectWithoutCheckInsInput
    connect?: GoalWhereUniqueInput
  }

  export type GoalCycleCreateNestedOneWithoutCheckInsInput = {
    create?: XOR<GoalCycleCreateWithoutCheckInsInput, GoalCycleUncheckedCreateWithoutCheckInsInput>
    connectOrCreate?: GoalCycleCreateOrConnectWithoutCheckInsInput
    connect?: GoalCycleWhereUniqueInput
  }

  export type EnumCheckInStatusFieldUpdateOperationsInput = {
    set?: $Enums.CheckInStatus
  }

  export type GoalUpdateOneRequiredWithoutCheckInsNestedInput = {
    create?: XOR<GoalCreateWithoutCheckInsInput, GoalUncheckedCreateWithoutCheckInsInput>
    connectOrCreate?: GoalCreateOrConnectWithoutCheckInsInput
    upsert?: GoalUpsertWithoutCheckInsInput
    connect?: GoalWhereUniqueInput
    update?: XOR<XOR<GoalUpdateToOneWithWhereWithoutCheckInsInput, GoalUpdateWithoutCheckInsInput>, GoalUncheckedUpdateWithoutCheckInsInput>
  }

  export type GoalCycleUpdateOneWithoutCheckInsNestedInput = {
    create?: XOR<GoalCycleCreateWithoutCheckInsInput, GoalCycleUncheckedCreateWithoutCheckInsInput>
    connectOrCreate?: GoalCycleCreateOrConnectWithoutCheckInsInput
    upsert?: GoalCycleUpsertWithoutCheckInsInput
    disconnect?: GoalCycleWhereInput | boolean
    delete?: GoalCycleWhereInput | boolean
    connect?: GoalCycleWhereUniqueInput
    update?: XOR<XOR<GoalCycleUpdateToOneWithWhereWithoutCheckInsInput, GoalCycleUpdateWithoutCheckInsInput>, GoalCycleUncheckedUpdateWithoutCheckInsInput>
  }

  export type GoalCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<GoalCreateWithoutAuditLogsInput, GoalUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: GoalCreateOrConnectWithoutAuditLogsInput
    connect?: GoalWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type GoalUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<GoalCreateWithoutAuditLogsInput, GoalUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: GoalCreateOrConnectWithoutAuditLogsInput
    upsert?: GoalUpsertWithoutAuditLogsInput
    connect?: GoalWhereUniqueInput
    update?: XOR<XOR<GoalUpdateToOneWithWhereWithoutAuditLogsInput, GoalUpdateWithoutAuditLogsInput>, GoalUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserCreateNestedOneWithoutEscalationsInput = {
    create?: XOR<UserCreateWithoutEscalationsInput, UserUncheckedCreateWithoutEscalationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEscalationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEscalationsNestedInput = {
    create?: XOR<UserCreateWithoutEscalationsInput, UserUncheckedCreateWithoutEscalationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEscalationsInput
    upsert?: UserUpsertWithoutEscalationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEscalationsInput, UserUpdateWithoutEscalationsInput>, UserUncheckedUpdateWithoutEscalationsInput>
  }

  export type UserCreateNestedOneWithoutChatMessagesInput = {
    create?: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutChatMessagesNestedInput = {
    create?: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMessagesInput
    upsert?: UserUpsertWithoutChatMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatMessagesInput, UserUpdateWithoutChatMessagesInput>, UserUncheckedUpdateWithoutChatMessagesInput>
  }

  export type LegacyGoalCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<LegacyGoalCreateWithoutEmployeeInput, LegacyGoalUncheckedCreateWithoutEmployeeInput> | LegacyGoalCreateWithoutEmployeeInput[] | LegacyGoalUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: LegacyGoalCreateOrConnectWithoutEmployeeInput | LegacyGoalCreateOrConnectWithoutEmployeeInput[]
    createMany?: LegacyGoalCreateManyEmployeeInputEnvelope
    connect?: LegacyGoalWhereUniqueInput | LegacyGoalWhereUniqueInput[]
  }

  export type LegacyGoalUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<LegacyGoalCreateWithoutEmployeeInput, LegacyGoalUncheckedCreateWithoutEmployeeInput> | LegacyGoalCreateWithoutEmployeeInput[] | LegacyGoalUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: LegacyGoalCreateOrConnectWithoutEmployeeInput | LegacyGoalCreateOrConnectWithoutEmployeeInput[]
    createMany?: LegacyGoalCreateManyEmployeeInputEnvelope
    connect?: LegacyGoalWhereUniqueInput | LegacyGoalWhereUniqueInput[]
  }

  export type LegacyGoalUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<LegacyGoalCreateWithoutEmployeeInput, LegacyGoalUncheckedCreateWithoutEmployeeInput> | LegacyGoalCreateWithoutEmployeeInput[] | LegacyGoalUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: LegacyGoalCreateOrConnectWithoutEmployeeInput | LegacyGoalCreateOrConnectWithoutEmployeeInput[]
    upsert?: LegacyGoalUpsertWithWhereUniqueWithoutEmployeeInput | LegacyGoalUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: LegacyGoalCreateManyEmployeeInputEnvelope
    set?: LegacyGoalWhereUniqueInput | LegacyGoalWhereUniqueInput[]
    disconnect?: LegacyGoalWhereUniqueInput | LegacyGoalWhereUniqueInput[]
    delete?: LegacyGoalWhereUniqueInput | LegacyGoalWhereUniqueInput[]
    connect?: LegacyGoalWhereUniqueInput | LegacyGoalWhereUniqueInput[]
    update?: LegacyGoalUpdateWithWhereUniqueWithoutEmployeeInput | LegacyGoalUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: LegacyGoalUpdateManyWithWhereWithoutEmployeeInput | LegacyGoalUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: LegacyGoalScalarWhereInput | LegacyGoalScalarWhereInput[]
  }

  export type LegacyGoalUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<LegacyGoalCreateWithoutEmployeeInput, LegacyGoalUncheckedCreateWithoutEmployeeInput> | LegacyGoalCreateWithoutEmployeeInput[] | LegacyGoalUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: LegacyGoalCreateOrConnectWithoutEmployeeInput | LegacyGoalCreateOrConnectWithoutEmployeeInput[]
    upsert?: LegacyGoalUpsertWithWhereUniqueWithoutEmployeeInput | LegacyGoalUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: LegacyGoalCreateManyEmployeeInputEnvelope
    set?: LegacyGoalWhereUniqueInput | LegacyGoalWhereUniqueInput[]
    disconnect?: LegacyGoalWhereUniqueInput | LegacyGoalWhereUniqueInput[]
    delete?: LegacyGoalWhereUniqueInput | LegacyGoalWhereUniqueInput[]
    connect?: LegacyGoalWhereUniqueInput | LegacyGoalWhereUniqueInput[]
    update?: LegacyGoalUpdateWithWhereUniqueWithoutEmployeeInput | LegacyGoalUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: LegacyGoalUpdateManyWithWhereWithoutEmployeeInput | LegacyGoalUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: LegacyGoalScalarWhereInput | LegacyGoalScalarWhereInput[]
  }

  export type LegacyEmployeeCreateNestedOneWithoutGoalsInput = {
    create?: XOR<LegacyEmployeeCreateWithoutGoalsInput, LegacyEmployeeUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: LegacyEmployeeCreateOrConnectWithoutGoalsInput
    connect?: LegacyEmployeeWhereUniqueInput
  }

  export type LegacyEmployeeUpdateOneRequiredWithoutGoalsNestedInput = {
    create?: XOR<LegacyEmployeeCreateWithoutGoalsInput, LegacyEmployeeUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: LegacyEmployeeCreateOrConnectWithoutGoalsInput
    upsert?: LegacyEmployeeUpsertWithoutGoalsInput
    connect?: LegacyEmployeeWhereUniqueInput
    update?: XOR<XOR<LegacyEmployeeUpdateToOneWithWhereWithoutGoalsInput, LegacyEmployeeUpdateWithoutGoalsInput>, LegacyEmployeeUncheckedUpdateWithoutGoalsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumUoMTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UoMType | EnumUoMTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UoMType[] | ListEnumUoMTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UoMType[] | ListEnumUoMTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUoMTypeFilter<$PrismaModel> | $Enums.UoMType
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumGoalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | EnumGoalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalStatusFilter<$PrismaModel> | $Enums.GoalStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumUoMTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UoMType | EnumUoMTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UoMType[] | ListEnumUoMTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UoMType[] | ListEnumUoMTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUoMTypeWithAggregatesFilter<$PrismaModel> | $Enums.UoMType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUoMTypeFilter<$PrismaModel>
    _max?: NestedEnumUoMTypeFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumGoalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | EnumGoalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalStatusWithAggregatesFilter<$PrismaModel> | $Enums.GoalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalStatusFilter<$PrismaModel>
    _max?: NestedEnumGoalStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumCheckInStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckInStatus | EnumCheckInStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CheckInStatus[] | ListEnumCheckInStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CheckInStatus[] | ListEnumCheckInStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCheckInStatusFilter<$PrismaModel> | $Enums.CheckInStatus
  }

  export type NestedEnumCheckInStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckInStatus | EnumCheckInStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CheckInStatus[] | ListEnumCheckInStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CheckInStatus[] | ListEnumCheckInStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCheckInStatusWithAggregatesFilter<$PrismaModel> | $Enums.CheckInStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCheckInStatusFilter<$PrismaModel>
    _max?: NestedEnumCheckInStatusFilter<$PrismaModel>
  }

  export type DepartmentCreateWithoutUsersInput = {
    id?: string
    name: string
    thrustArea: string
    categoryLifecycle?: string
  }

  export type DepartmentUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    thrustArea: string
    categoryLifecycle?: string
  }

  export type DepartmentCreateOrConnectWithoutUsersInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
  }

  export type UserCreateWithoutSubordinatesInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    department: DepartmentCreateNestedOneWithoutUsersInput
    manager?: UserCreateNestedOneWithoutSubordinatesInput
    goals?: GoalCreateNestedManyWithoutEmployeeInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    escalations?: EscalationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubordinatesInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    departmentId: string
    managerId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    goals?: GoalUncheckedCreateNestedManyWithoutEmployeeInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    escalations?: EscalationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubordinatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubordinatesInput, UserUncheckedCreateWithoutSubordinatesInput>
  }

  export type UserCreateWithoutManagerInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    department: DepartmentCreateNestedOneWithoutUsersInput
    subordinates?: UserCreateNestedManyWithoutManagerInput
    goals?: GoalCreateNestedManyWithoutEmployeeInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    escalations?: EscalationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutManagerInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    departmentId: string
    isActive?: boolean
    createdAt?: Date | string
    subordinates?: UserUncheckedCreateNestedManyWithoutManagerInput
    goals?: GoalUncheckedCreateNestedManyWithoutEmployeeInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    escalations?: EscalationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutManagerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput>
  }

  export type UserCreateManyManagerInputEnvelope = {
    data: UserCreateManyManagerInput | UserCreateManyManagerInput[]
    skipDuplicates?: boolean
  }

  export type GoalCreateWithoutEmployeeInput = {
    id?: string
    title: string
    description?: string | null
    thrustArea: string
    uomType: $Enums.UoMType
    targetValue?: Decimal | DecimalJsLike | number | string
    actualValue?: Decimal | DecimalJsLike | number | string
    weightage: number
    status?: $Enums.GoalStatus
    categoryType?: string
    channelType?: string | null
    isShared?: boolean
    parentGoalId?: string | null
    lockedAt?: Date | string | null
    approvedBy?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cycle?: GoalCycleCreateNestedOneWithoutGoalsInput
    checkIns?: CheckInCreateNestedManyWithoutGoalInput
    auditLogs?: AuditLogCreateNestedManyWithoutGoalInput
  }

  export type GoalUncheckedCreateWithoutEmployeeInput = {
    id?: string
    cycleId?: string | null
    title: string
    description?: string | null
    thrustArea: string
    uomType: $Enums.UoMType
    targetValue?: Decimal | DecimalJsLike | number | string
    actualValue?: Decimal | DecimalJsLike | number | string
    weightage: number
    status?: $Enums.GoalStatus
    categoryType?: string
    channelType?: string | null
    isShared?: boolean
    parentGoalId?: string | null
    lockedAt?: Date | string | null
    approvedBy?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    checkIns?: CheckInUncheckedCreateNestedManyWithoutGoalInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutGoalInput
  }

  export type GoalCreateOrConnectWithoutEmployeeInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutEmployeeInput, GoalUncheckedCreateWithoutEmployeeInput>
  }

  export type GoalCreateManyEmployeeInputEnvelope = {
    data: GoalCreateManyEmployeeInput | GoalCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutUserInput = {
    id?: string
    fieldName: string
    oldValue?: string | null
    newValue?: string | null
    actionType: string
    ipAddress?: string | null
    changedAt?: Date | string
    goal: GoalCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateWithoutUserInput = {
    id?: string
    goalId: string
    fieldName: string
    oldValue?: string | null
    newValue?: string | null
    actionType: string
    ipAddress?: string | null
    changedAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogCreateManyUserInputEnvelope = {
    data: AuditLogCreateManyUserInput | AuditLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessageCreateWithoutUserInput = {
    id?: string
    role: string
    content: string
    intentType?: string | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type ChatMessageUncheckedCreateWithoutUserInput = {
    id?: string
    role: string
    content: string
    intentType?: string | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type ChatMessageCreateOrConnectWithoutUserInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput>
  }

  export type ChatMessageCreateManyUserInputEnvelope = {
    data: ChatMessageCreateManyUserInput | ChatMessageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EscalationCreateWithoutUserInput = {
    id?: string
    triggerType: string
    escalationLevel?: number
    message: string
    isResolved?: boolean
    createdAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type EscalationUncheckedCreateWithoutUserInput = {
    id?: string
    triggerType: string
    escalationLevel?: number
    message: string
    isResolved?: boolean
    createdAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type EscalationCreateOrConnectWithoutUserInput = {
    where: EscalationWhereUniqueInput
    create: XOR<EscalationCreateWithoutUserInput, EscalationUncheckedCreateWithoutUserInput>
  }

  export type EscalationCreateManyUserInputEnvelope = {
    data: EscalationCreateManyUserInput | EscalationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentUpsertWithoutUsersInput = {
    update: XOR<DepartmentUpdateWithoutUsersInput, DepartmentUncheckedUpdateWithoutUsersInput>
    create: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutUsersInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutUsersInput, DepartmentUncheckedUpdateWithoutUsersInput>
  }

  export type DepartmentUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    thrustArea?: StringFieldUpdateOperationsInput | string
    categoryLifecycle?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    thrustArea?: StringFieldUpdateOperationsInput | string
    categoryLifecycle?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutSubordinatesInput = {
    update: XOR<UserUpdateWithoutSubordinatesInput, UserUncheckedUpdateWithoutSubordinatesInput>
    create: XOR<UserCreateWithoutSubordinatesInput, UserUncheckedCreateWithoutSubordinatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubordinatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubordinatesInput, UserUncheckedUpdateWithoutSubordinatesInput>
  }

  export type UserUpdateWithoutSubordinatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneRequiredWithoutUsersNestedInput
    manager?: UserUpdateOneWithoutSubordinatesNestedInput
    goals?: GoalUpdateManyWithoutEmployeeNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    escalations?: EscalationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubordinatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    departmentId?: StringFieldUpdateOperationsInput | string
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUncheckedUpdateManyWithoutEmployeeNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    escalations?: EscalationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutManagerInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutManagerInput, UserUncheckedUpdateWithoutManagerInput>
    create: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput>
  }

  export type UserUpdateWithWhereUniqueWithoutManagerInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutManagerInput, UserUncheckedUpdateWithoutManagerInput>
  }

  export type UserUpdateManyWithWhereWithoutManagerInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutManagerInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    departmentId?: StringFilter<"User"> | string
    managerId?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type GoalUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: GoalWhereUniqueInput
    update: XOR<GoalUpdateWithoutEmployeeInput, GoalUncheckedUpdateWithoutEmployeeInput>
    create: XOR<GoalCreateWithoutEmployeeInput, GoalUncheckedCreateWithoutEmployeeInput>
  }

  export type GoalUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: GoalWhereUniqueInput
    data: XOR<GoalUpdateWithoutEmployeeInput, GoalUncheckedUpdateWithoutEmployeeInput>
  }

  export type GoalUpdateManyWithWhereWithoutEmployeeInput = {
    where: GoalScalarWhereInput
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type GoalScalarWhereInput = {
    AND?: GoalScalarWhereInput | GoalScalarWhereInput[]
    OR?: GoalScalarWhereInput[]
    NOT?: GoalScalarWhereInput | GoalScalarWhereInput[]
    id?: StringFilter<"Goal"> | string
    cycleId?: StringNullableFilter<"Goal"> | string | null
    employeeId?: StringFilter<"Goal"> | string
    title?: StringFilter<"Goal"> | string
    description?: StringNullableFilter<"Goal"> | string | null
    thrustArea?: StringFilter<"Goal"> | string
    uomType?: EnumUoMTypeFilter<"Goal"> | $Enums.UoMType
    targetValue?: DecimalFilter<"Goal"> | Decimal | DecimalJsLike | number | string
    actualValue?: DecimalFilter<"Goal"> | Decimal | DecimalJsLike | number | string
    weightage?: IntFilter<"Goal"> | number
    status?: EnumGoalStatusFilter<"Goal"> | $Enums.GoalStatus
    categoryType?: StringFilter<"Goal"> | string
    channelType?: StringNullableFilter<"Goal"> | string | null
    isShared?: BoolFilter<"Goal"> | boolean
    parentGoalId?: StringNullableFilter<"Goal"> | string | null
    lockedAt?: DateTimeNullableFilter<"Goal"> | Date | string | null
    approvedBy?: StringNullableFilter<"Goal"> | string | null
    approvedAt?: DateTimeNullableFilter<"Goal"> | Date | string | null
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
  }

  export type AuditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutUserInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutUserInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    goalId?: StringFilter<"AuditLog"> | string
    changedBy?: StringFilter<"AuditLog"> | string
    fieldName?: StringFilter<"AuditLog"> | string
    oldValue?: StringNullableFilter<"AuditLog"> | string | null
    newValue?: StringNullableFilter<"AuditLog"> | string | null
    actionType?: StringFilter<"AuditLog"> | string
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    changedAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutUserInput, ChatMessageUncheckedUpdateWithoutUserInput>
    create: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutUserInput, ChatMessageUncheckedUpdateWithoutUserInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutUserInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatMessageScalarWhereInput = {
    AND?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    OR?: ChatMessageScalarWhereInput[]
    NOT?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    userId?: StringFilter<"ChatMessage"> | string
    role?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    intentType?: StringNullableFilter<"ChatMessage"> | string | null
    metadata?: StringNullableFilter<"ChatMessage"> | string | null
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
  }

  export type EscalationUpsertWithWhereUniqueWithoutUserInput = {
    where: EscalationWhereUniqueInput
    update: XOR<EscalationUpdateWithoutUserInput, EscalationUncheckedUpdateWithoutUserInput>
    create: XOR<EscalationCreateWithoutUserInput, EscalationUncheckedCreateWithoutUserInput>
  }

  export type EscalationUpdateWithWhereUniqueWithoutUserInput = {
    where: EscalationWhereUniqueInput
    data: XOR<EscalationUpdateWithoutUserInput, EscalationUncheckedUpdateWithoutUserInput>
  }

  export type EscalationUpdateManyWithWhereWithoutUserInput = {
    where: EscalationScalarWhereInput
    data: XOR<EscalationUpdateManyMutationInput, EscalationUncheckedUpdateManyWithoutUserInput>
  }

  export type EscalationScalarWhereInput = {
    AND?: EscalationScalarWhereInput | EscalationScalarWhereInput[]
    OR?: EscalationScalarWhereInput[]
    NOT?: EscalationScalarWhereInput | EscalationScalarWhereInput[]
    id?: StringFilter<"Escalation"> | string
    triggerType?: StringFilter<"Escalation"> | string
    triggeredForId?: StringFilter<"Escalation"> | string
    escalationLevel?: IntFilter<"Escalation"> | number
    message?: StringFilter<"Escalation"> | string
    isResolved?: BoolFilter<"Escalation"> | boolean
    createdAt?: DateTimeFilter<"Escalation"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Escalation"> | Date | string | null
  }

  export type UserCreateWithoutDepartmentInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    manager?: UserCreateNestedOneWithoutSubordinatesInput
    subordinates?: UserCreateNestedManyWithoutManagerInput
    goals?: GoalCreateNestedManyWithoutEmployeeInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    escalations?: EscalationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDepartmentInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    managerId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    subordinates?: UserUncheckedCreateNestedManyWithoutManagerInput
    goals?: GoalUncheckedCreateNestedManyWithoutEmployeeInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    escalations?: EscalationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDepartmentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput>
  }

  export type UserCreateManyDepartmentInputEnvelope = {
    data: UserCreateManyDepartmentInput | UserCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutDepartmentInput, UserUncheckedUpdateWithoutDepartmentInput>
    create: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput>
  }

  export type UserUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutDepartmentInput, UserUncheckedUpdateWithoutDepartmentInput>
  }

  export type UserUpdateManyWithWhereWithoutDepartmentInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type GoalCreateWithoutCycleInput = {
    id?: string
    title: string
    description?: string | null
    thrustArea: string
    uomType: $Enums.UoMType
    targetValue?: Decimal | DecimalJsLike | number | string
    actualValue?: Decimal | DecimalJsLike | number | string
    weightage: number
    status?: $Enums.GoalStatus
    categoryType?: string
    channelType?: string | null
    isShared?: boolean
    parentGoalId?: string | null
    lockedAt?: Date | string | null
    approvedBy?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: UserCreateNestedOneWithoutGoalsInput
    checkIns?: CheckInCreateNestedManyWithoutGoalInput
    auditLogs?: AuditLogCreateNestedManyWithoutGoalInput
  }

  export type GoalUncheckedCreateWithoutCycleInput = {
    id?: string
    employeeId: string
    title: string
    description?: string | null
    thrustArea: string
    uomType: $Enums.UoMType
    targetValue?: Decimal | DecimalJsLike | number | string
    actualValue?: Decimal | DecimalJsLike | number | string
    weightage: number
    status?: $Enums.GoalStatus
    categoryType?: string
    channelType?: string | null
    isShared?: boolean
    parentGoalId?: string | null
    lockedAt?: Date | string | null
    approvedBy?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    checkIns?: CheckInUncheckedCreateNestedManyWithoutGoalInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutGoalInput
  }

  export type GoalCreateOrConnectWithoutCycleInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutCycleInput, GoalUncheckedCreateWithoutCycleInput>
  }

  export type GoalCreateManyCycleInputEnvelope = {
    data: GoalCreateManyCycleInput | GoalCreateManyCycleInput[]
    skipDuplicates?: boolean
  }

  export type CheckInCreateWithoutCycleInput = {
    id?: string
    quarter: string
    plannedValue?: Decimal | DecimalJsLike | number | string
    actualValue?: Decimal | DecimalJsLike | number | string
    status?: $Enums.CheckInStatus
    managerComment?: string | null
    computedScore?: Decimal | DecimalJsLike | number | string
    checkInDate?: Date | string
    goal: GoalCreateNestedOneWithoutCheckInsInput
  }

  export type CheckInUncheckedCreateWithoutCycleInput = {
    id?: string
    goalId: string
    quarter: string
    plannedValue?: Decimal | DecimalJsLike | number | string
    actualValue?: Decimal | DecimalJsLike | number | string
    status?: $Enums.CheckInStatus
    managerComment?: string | null
    computedScore?: Decimal | DecimalJsLike | number | string
    checkInDate?: Date | string
  }

  export type CheckInCreateOrConnectWithoutCycleInput = {
    where: CheckInWhereUniqueInput
    create: XOR<CheckInCreateWithoutCycleInput, CheckInUncheckedCreateWithoutCycleInput>
  }

  export type CheckInCreateManyCycleInputEnvelope = {
    data: CheckInCreateManyCycleInput | CheckInCreateManyCycleInput[]
    skipDuplicates?: boolean
  }

  export type GoalUpsertWithWhereUniqueWithoutCycleInput = {
    where: GoalWhereUniqueInput
    update: XOR<GoalUpdateWithoutCycleInput, GoalUncheckedUpdateWithoutCycleInput>
    create: XOR<GoalCreateWithoutCycleInput, GoalUncheckedCreateWithoutCycleInput>
  }

  export type GoalUpdateWithWhereUniqueWithoutCycleInput = {
    where: GoalWhereUniqueInput
    data: XOR<GoalUpdateWithoutCycleInput, GoalUncheckedUpdateWithoutCycleInput>
  }

  export type GoalUpdateManyWithWhereWithoutCycleInput = {
    where: GoalScalarWhereInput
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyWithoutCycleInput>
  }

  export type CheckInUpsertWithWhereUniqueWithoutCycleInput = {
    where: CheckInWhereUniqueInput
    update: XOR<CheckInUpdateWithoutCycleInput, CheckInUncheckedUpdateWithoutCycleInput>
    create: XOR<CheckInCreateWithoutCycleInput, CheckInUncheckedCreateWithoutCycleInput>
  }

  export type CheckInUpdateWithWhereUniqueWithoutCycleInput = {
    where: CheckInWhereUniqueInput
    data: XOR<CheckInUpdateWithoutCycleInput, CheckInUncheckedUpdateWithoutCycleInput>
  }

  export type CheckInUpdateManyWithWhereWithoutCycleInput = {
    where: CheckInScalarWhereInput
    data: XOR<CheckInUpdateManyMutationInput, CheckInUncheckedUpdateManyWithoutCycleInput>
  }

  export type CheckInScalarWhereInput = {
    AND?: CheckInScalarWhereInput | CheckInScalarWhereInput[]
    OR?: CheckInScalarWhereInput[]
    NOT?: CheckInScalarWhereInput | CheckInScalarWhereInput[]
    id?: StringFilter<"CheckIn"> | string
    goalId?: StringFilter<"CheckIn"> | string
    cycleId?: StringNullableFilter<"CheckIn"> | string | null
    quarter?: StringFilter<"CheckIn"> | string
    plannedValue?: DecimalFilter<"CheckIn"> | Decimal | DecimalJsLike | number | string
    actualValue?: DecimalFilter<"CheckIn"> | Decimal | DecimalJsLike | number | string
    status?: EnumCheckInStatusFilter<"CheckIn"> | $Enums.CheckInStatus
    managerComment?: StringNullableFilter<"CheckIn"> | string | null
    computedScore?: DecimalFilter<"CheckIn"> | Decimal | DecimalJsLike | number | string
    checkInDate?: DateTimeFilter<"CheckIn"> | Date | string
  }

  export type UserCreateWithoutGoalsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    department: DepartmentCreateNestedOneWithoutUsersInput
    manager?: UserCreateNestedOneWithoutSubordinatesInput
    subordinates?: UserCreateNestedManyWithoutManagerInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    escalations?: EscalationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGoalsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    departmentId: string
    managerId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    subordinates?: UserUncheckedCreateNestedManyWithoutManagerInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    escalations?: EscalationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGoalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
  }

  export type GoalCycleCreateWithoutGoalsInput = {
    id?: string
    name: string
    phase: string
    status?: string
    startDate: Date | string
    endDate: Date | string
    checkIns?: CheckInCreateNestedManyWithoutCycleInput
  }

  export type GoalCycleUncheckedCreateWithoutGoalsInput = {
    id?: string
    name: string
    phase: string
    status?: string
    startDate: Date | string
    endDate: Date | string
    checkIns?: CheckInUncheckedCreateNestedManyWithoutCycleInput
  }

  export type GoalCycleCreateOrConnectWithoutGoalsInput = {
    where: GoalCycleWhereUniqueInput
    create: XOR<GoalCycleCreateWithoutGoalsInput, GoalCycleUncheckedCreateWithoutGoalsInput>
  }

  export type CheckInCreateWithoutGoalInput = {
    id?: string
    quarter: string
    plannedValue?: Decimal | DecimalJsLike | number | string
    actualValue?: Decimal | DecimalJsLike | number | string
    status?: $Enums.CheckInStatus
    managerComment?: string | null
    computedScore?: Decimal | DecimalJsLike | number | string
    checkInDate?: Date | string
    cycle?: GoalCycleCreateNestedOneWithoutCheckInsInput
  }

  export type CheckInUncheckedCreateWithoutGoalInput = {
    id?: string
    cycleId?: string | null
    quarter: string
    plannedValue?: Decimal | DecimalJsLike | number | string
    actualValue?: Decimal | DecimalJsLike | number | string
    status?: $Enums.CheckInStatus
    managerComment?: string | null
    computedScore?: Decimal | DecimalJsLike | number | string
    checkInDate?: Date | string
  }

  export type CheckInCreateOrConnectWithoutGoalInput = {
    where: CheckInWhereUniqueInput
    create: XOR<CheckInCreateWithoutGoalInput, CheckInUncheckedCreateWithoutGoalInput>
  }

  export type CheckInCreateManyGoalInputEnvelope = {
    data: CheckInCreateManyGoalInput | CheckInCreateManyGoalInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutGoalInput = {
    id?: string
    fieldName: string
    oldValue?: string | null
    newValue?: string | null
    actionType: string
    ipAddress?: string | null
    changedAt?: Date | string
    user: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateWithoutGoalInput = {
    id?: string
    changedBy: string
    fieldName: string
    oldValue?: string | null
    newValue?: string | null
    actionType: string
    ipAddress?: string | null
    changedAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutGoalInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutGoalInput, AuditLogUncheckedCreateWithoutGoalInput>
  }

  export type AuditLogCreateManyGoalInputEnvelope = {
    data: AuditLogCreateManyGoalInput | AuditLogCreateManyGoalInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutGoalsInput = {
    update: XOR<UserUpdateWithoutGoalsInput, UserUncheckedUpdateWithoutGoalsInput>
    create: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGoalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGoalsInput, UserUncheckedUpdateWithoutGoalsInput>
  }

  export type UserUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneRequiredWithoutUsersNestedInput
    manager?: UserUpdateOneWithoutSubordinatesNestedInput
    subordinates?: UserUpdateManyWithoutManagerNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    escalations?: EscalationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    departmentId?: StringFieldUpdateOperationsInput | string
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subordinates?: UserUncheckedUpdateManyWithoutManagerNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    escalations?: EscalationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GoalCycleUpsertWithoutGoalsInput = {
    update: XOR<GoalCycleUpdateWithoutGoalsInput, GoalCycleUncheckedUpdateWithoutGoalsInput>
    create: XOR<GoalCycleCreateWithoutGoalsInput, GoalCycleUncheckedCreateWithoutGoalsInput>
    where?: GoalCycleWhereInput
  }

  export type GoalCycleUpdateToOneWithWhereWithoutGoalsInput = {
    where?: GoalCycleWhereInput
    data: XOR<GoalCycleUpdateWithoutGoalsInput, GoalCycleUncheckedUpdateWithoutGoalsInput>
  }

  export type GoalCycleUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phase?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkIns?: CheckInUpdateManyWithoutCycleNestedInput
  }

  export type GoalCycleUncheckedUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phase?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkIns?: CheckInUncheckedUpdateManyWithoutCycleNestedInput
  }

  export type CheckInUpsertWithWhereUniqueWithoutGoalInput = {
    where: CheckInWhereUniqueInput
    update: XOR<CheckInUpdateWithoutGoalInput, CheckInUncheckedUpdateWithoutGoalInput>
    create: XOR<CheckInCreateWithoutGoalInput, CheckInUncheckedCreateWithoutGoalInput>
  }

  export type CheckInUpdateWithWhereUniqueWithoutGoalInput = {
    where: CheckInWhereUniqueInput
    data: XOR<CheckInUpdateWithoutGoalInput, CheckInUncheckedUpdateWithoutGoalInput>
  }

  export type CheckInUpdateManyWithWhereWithoutGoalInput = {
    where: CheckInScalarWhereInput
    data: XOR<CheckInUpdateManyMutationInput, CheckInUncheckedUpdateManyWithoutGoalInput>
  }

  export type AuditLogUpsertWithWhereUniqueWithoutGoalInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutGoalInput, AuditLogUncheckedUpdateWithoutGoalInput>
    create: XOR<AuditLogCreateWithoutGoalInput, AuditLogUncheckedCreateWithoutGoalInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutGoalInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutGoalInput, AuditLogUncheckedUpdateWithoutGoalInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutGoalInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutGoalInput>
  }

  export type GoalCreateWithoutCheckInsInput = {
    id?: string
    title: string
    description?: string | null
    thrustArea: string
    uomType: $Enums.UoMType
    targetValue?: Decimal | DecimalJsLike | number | string
    actualValue?: Decimal | DecimalJsLike | number | string
    weightage: number
    status?: $Enums.GoalStatus
    categoryType?: string
    channelType?: string | null
    isShared?: boolean
    parentGoalId?: string | null
    lockedAt?: Date | string | null
    approvedBy?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: UserCreateNestedOneWithoutGoalsInput
    cycle?: GoalCycleCreateNestedOneWithoutGoalsInput
    auditLogs?: AuditLogCreateNestedManyWithoutGoalInput
  }

  export type GoalUncheckedCreateWithoutCheckInsInput = {
    id?: string
    cycleId?: string | null
    employeeId: string
    title: string
    description?: string | null
    thrustArea: string
    uomType: $Enums.UoMType
    targetValue?: Decimal | DecimalJsLike | number | string
    actualValue?: Decimal | DecimalJsLike | number | string
    weightage: number
    status?: $Enums.GoalStatus
    categoryType?: string
    channelType?: string | null
    isShared?: boolean
    parentGoalId?: string | null
    lockedAt?: Date | string | null
    approvedBy?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutGoalInput
  }

  export type GoalCreateOrConnectWithoutCheckInsInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutCheckInsInput, GoalUncheckedCreateWithoutCheckInsInput>
  }

  export type GoalCycleCreateWithoutCheckInsInput = {
    id?: string
    name: string
    phase: string
    status?: string
    startDate: Date | string
    endDate: Date | string
    goals?: GoalCreateNestedManyWithoutCycleInput
  }

  export type GoalCycleUncheckedCreateWithoutCheckInsInput = {
    id?: string
    name: string
    phase: string
    status?: string
    startDate: Date | string
    endDate: Date | string
    goals?: GoalUncheckedCreateNestedManyWithoutCycleInput
  }

  export type GoalCycleCreateOrConnectWithoutCheckInsInput = {
    where: GoalCycleWhereUniqueInput
    create: XOR<GoalCycleCreateWithoutCheckInsInput, GoalCycleUncheckedCreateWithoutCheckInsInput>
  }

  export type GoalUpsertWithoutCheckInsInput = {
    update: XOR<GoalUpdateWithoutCheckInsInput, GoalUncheckedUpdateWithoutCheckInsInput>
    create: XOR<GoalCreateWithoutCheckInsInput, GoalUncheckedCreateWithoutCheckInsInput>
    where?: GoalWhereInput
  }

  export type GoalUpdateToOneWithWhereWithoutCheckInsInput = {
    where?: GoalWhereInput
    data: XOR<GoalUpdateWithoutCheckInsInput, GoalUncheckedUpdateWithoutCheckInsInput>
  }

  export type GoalUpdateWithoutCheckInsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thrustArea?: StringFieldUpdateOperationsInput | string
    uomType?: EnumUoMTypeFieldUpdateOperationsInput | $Enums.UoMType
    targetValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    actualValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weightage?: IntFieldUpdateOperationsInput | number
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    categoryType?: StringFieldUpdateOperationsInput | string
    channelType?: NullableStringFieldUpdateOperationsInput | string | null
    isShared?: BoolFieldUpdateOperationsInput | boolean
    parentGoalId?: NullableStringFieldUpdateOperationsInput | string | null
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: UserUpdateOneRequiredWithoutGoalsNestedInput
    cycle?: GoalCycleUpdateOneWithoutGoalsNestedInput
    auditLogs?: AuditLogUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateWithoutCheckInsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleId?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thrustArea?: StringFieldUpdateOperationsInput | string
    uomType?: EnumUoMTypeFieldUpdateOperationsInput | $Enums.UoMType
    targetValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    actualValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weightage?: IntFieldUpdateOperationsInput | number
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    categoryType?: StringFieldUpdateOperationsInput | string
    channelType?: NullableStringFieldUpdateOperationsInput | string | null
    isShared?: BoolFieldUpdateOperationsInput | boolean
    parentGoalId?: NullableStringFieldUpdateOperationsInput | string | null
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUncheckedUpdateManyWithoutGoalNestedInput
  }

  export type GoalCycleUpsertWithoutCheckInsInput = {
    update: XOR<GoalCycleUpdateWithoutCheckInsInput, GoalCycleUncheckedUpdateWithoutCheckInsInput>
    create: XOR<GoalCycleCreateWithoutCheckInsInput, GoalCycleUncheckedCreateWithoutCheckInsInput>
    where?: GoalCycleWhereInput
  }

  export type GoalCycleUpdateToOneWithWhereWithoutCheckInsInput = {
    where?: GoalCycleWhereInput
    data: XOR<GoalCycleUpdateWithoutCheckInsInput, GoalCycleUncheckedUpdateWithoutCheckInsInput>
  }

  export type GoalCycleUpdateWithoutCheckInsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phase?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUpdateManyWithoutCycleNestedInput
  }

  export type GoalCycleUncheckedUpdateWithoutCheckInsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phase?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUncheckedUpdateManyWithoutCycleNestedInput
  }

  export type GoalCreateWithoutAuditLogsInput = {
    id?: string
    title: string
    description?: string | null
    thrustArea: string
    uomType: $Enums.UoMType
    targetValue?: Decimal | DecimalJsLike | number | string
    actualValue?: Decimal | DecimalJsLike | number | string
    weightage: number
    status?: $Enums.GoalStatus
    categoryType?: string
    channelType?: string | null
    isShared?: boolean
    parentGoalId?: string | null
    lockedAt?: Date | string | null
    approvedBy?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: UserCreateNestedOneWithoutGoalsInput
    cycle?: GoalCycleCreateNestedOneWithoutGoalsInput
    checkIns?: CheckInCreateNestedManyWithoutGoalInput
  }

  export type GoalUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    cycleId?: string | null
    employeeId: string
    title: string
    description?: string | null
    thrustArea: string
    uomType: $Enums.UoMType
    targetValue?: Decimal | DecimalJsLike | number | string
    actualValue?: Decimal | DecimalJsLike | number | string
    weightage: number
    status?: $Enums.GoalStatus
    categoryType?: string
    channelType?: string | null
    isShared?: boolean
    parentGoalId?: string | null
    lockedAt?: Date | string | null
    approvedBy?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    checkIns?: CheckInUncheckedCreateNestedManyWithoutGoalInput
  }

  export type GoalCreateOrConnectWithoutAuditLogsInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutAuditLogsInput, GoalUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    department: DepartmentCreateNestedOneWithoutUsersInput
    manager?: UserCreateNestedOneWithoutSubordinatesInput
    subordinates?: UserCreateNestedManyWithoutManagerInput
    goals?: GoalCreateNestedManyWithoutEmployeeInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    escalations?: EscalationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    departmentId: string
    managerId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    subordinates?: UserUncheckedCreateNestedManyWithoutManagerInput
    goals?: GoalUncheckedCreateNestedManyWithoutEmployeeInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    escalations?: EscalationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type GoalUpsertWithoutAuditLogsInput = {
    update: XOR<GoalUpdateWithoutAuditLogsInput, GoalUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<GoalCreateWithoutAuditLogsInput, GoalUncheckedCreateWithoutAuditLogsInput>
    where?: GoalWhereInput
  }

  export type GoalUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: GoalWhereInput
    data: XOR<GoalUpdateWithoutAuditLogsInput, GoalUncheckedUpdateWithoutAuditLogsInput>
  }

  export type GoalUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thrustArea?: StringFieldUpdateOperationsInput | string
    uomType?: EnumUoMTypeFieldUpdateOperationsInput | $Enums.UoMType
    targetValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    actualValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weightage?: IntFieldUpdateOperationsInput | number
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    categoryType?: StringFieldUpdateOperationsInput | string
    channelType?: NullableStringFieldUpdateOperationsInput | string | null
    isShared?: BoolFieldUpdateOperationsInput | boolean
    parentGoalId?: NullableStringFieldUpdateOperationsInput | string | null
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: UserUpdateOneRequiredWithoutGoalsNestedInput
    cycle?: GoalCycleUpdateOneWithoutGoalsNestedInput
    checkIns?: CheckInUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleId?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thrustArea?: StringFieldUpdateOperationsInput | string
    uomType?: EnumUoMTypeFieldUpdateOperationsInput | $Enums.UoMType
    targetValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    actualValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weightage?: IntFieldUpdateOperationsInput | number
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    categoryType?: StringFieldUpdateOperationsInput | string
    channelType?: NullableStringFieldUpdateOperationsInput | string | null
    isShared?: BoolFieldUpdateOperationsInput | boolean
    parentGoalId?: NullableStringFieldUpdateOperationsInput | string | null
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkIns?: CheckInUncheckedUpdateManyWithoutGoalNestedInput
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneRequiredWithoutUsersNestedInput
    manager?: UserUpdateOneWithoutSubordinatesNestedInput
    subordinates?: UserUpdateManyWithoutManagerNestedInput
    goals?: GoalUpdateManyWithoutEmployeeNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    escalations?: EscalationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    departmentId?: StringFieldUpdateOperationsInput | string
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subordinates?: UserUncheckedUpdateManyWithoutManagerNestedInput
    goals?: GoalUncheckedUpdateManyWithoutEmployeeNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    escalations?: EscalationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutEscalationsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    department: DepartmentCreateNestedOneWithoutUsersInput
    manager?: UserCreateNestedOneWithoutSubordinatesInput
    subordinates?: UserCreateNestedManyWithoutManagerInput
    goals?: GoalCreateNestedManyWithoutEmployeeInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEscalationsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    departmentId: string
    managerId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    subordinates?: UserUncheckedCreateNestedManyWithoutManagerInput
    goals?: GoalUncheckedCreateNestedManyWithoutEmployeeInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEscalationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEscalationsInput, UserUncheckedCreateWithoutEscalationsInput>
  }

  export type UserUpsertWithoutEscalationsInput = {
    update: XOR<UserUpdateWithoutEscalationsInput, UserUncheckedUpdateWithoutEscalationsInput>
    create: XOR<UserCreateWithoutEscalationsInput, UserUncheckedCreateWithoutEscalationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEscalationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEscalationsInput, UserUncheckedUpdateWithoutEscalationsInput>
  }

  export type UserUpdateWithoutEscalationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneRequiredWithoutUsersNestedInput
    manager?: UserUpdateOneWithoutSubordinatesNestedInput
    subordinates?: UserUpdateManyWithoutManagerNestedInput
    goals?: GoalUpdateManyWithoutEmployeeNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEscalationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    departmentId?: StringFieldUpdateOperationsInput | string
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subordinates?: UserUncheckedUpdateManyWithoutManagerNestedInput
    goals?: GoalUncheckedUpdateManyWithoutEmployeeNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutChatMessagesInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    department: DepartmentCreateNestedOneWithoutUsersInput
    manager?: UserCreateNestedOneWithoutSubordinatesInput
    subordinates?: UserCreateNestedManyWithoutManagerInput
    goals?: GoalCreateNestedManyWithoutEmployeeInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    escalations?: EscalationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatMessagesInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    departmentId: string
    managerId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    subordinates?: UserUncheckedCreateNestedManyWithoutManagerInput
    goals?: GoalUncheckedCreateNestedManyWithoutEmployeeInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    escalations?: EscalationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
  }

  export type UserUpsertWithoutChatMessagesInput = {
    update: XOR<UserUpdateWithoutChatMessagesInput, UserUncheckedUpdateWithoutChatMessagesInput>
    create: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatMessagesInput, UserUncheckedUpdateWithoutChatMessagesInput>
  }

  export type UserUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneRequiredWithoutUsersNestedInput
    manager?: UserUpdateOneWithoutSubordinatesNestedInput
    subordinates?: UserUpdateManyWithoutManagerNestedInput
    goals?: GoalUpdateManyWithoutEmployeeNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    escalations?: EscalationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    departmentId?: StringFieldUpdateOperationsInput | string
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subordinates?: UserUncheckedUpdateManyWithoutManagerNestedInput
    goals?: GoalUncheckedUpdateManyWithoutEmployeeNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    escalations?: EscalationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LegacyGoalCreateWithoutEmployeeInput = {
    id?: string
    title: string
    target: Decimal | DecimalJsLike | number | string
    actual: Decimal | DecimalJsLike | number | string
    quarter: string
  }

  export type LegacyGoalUncheckedCreateWithoutEmployeeInput = {
    id?: string
    title: string
    target: Decimal | DecimalJsLike | number | string
    actual: Decimal | DecimalJsLike | number | string
    quarter: string
  }

  export type LegacyGoalCreateOrConnectWithoutEmployeeInput = {
    where: LegacyGoalWhereUniqueInput
    create: XOR<LegacyGoalCreateWithoutEmployeeInput, LegacyGoalUncheckedCreateWithoutEmployeeInput>
  }

  export type LegacyGoalCreateManyEmployeeInputEnvelope = {
    data: LegacyGoalCreateManyEmployeeInput | LegacyGoalCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type LegacyGoalUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: LegacyGoalWhereUniqueInput
    update: XOR<LegacyGoalUpdateWithoutEmployeeInput, LegacyGoalUncheckedUpdateWithoutEmployeeInput>
    create: XOR<LegacyGoalCreateWithoutEmployeeInput, LegacyGoalUncheckedCreateWithoutEmployeeInput>
  }

  export type LegacyGoalUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: LegacyGoalWhereUniqueInput
    data: XOR<LegacyGoalUpdateWithoutEmployeeInput, LegacyGoalUncheckedUpdateWithoutEmployeeInput>
  }

  export type LegacyGoalUpdateManyWithWhereWithoutEmployeeInput = {
    where: LegacyGoalScalarWhereInput
    data: XOR<LegacyGoalUpdateManyMutationInput, LegacyGoalUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type LegacyGoalScalarWhereInput = {
    AND?: LegacyGoalScalarWhereInput | LegacyGoalScalarWhereInput[]
    OR?: LegacyGoalScalarWhereInput[]
    NOT?: LegacyGoalScalarWhereInput | LegacyGoalScalarWhereInput[]
    id?: StringFilter<"LegacyGoal"> | string
    employeeId?: StringFilter<"LegacyGoal"> | string
    title?: StringFilter<"LegacyGoal"> | string
    target?: DecimalFilter<"LegacyGoal"> | Decimal | DecimalJsLike | number | string
    actual?: DecimalFilter<"LegacyGoal"> | Decimal | DecimalJsLike | number | string
    quarter?: StringFilter<"LegacyGoal"> | string
  }

  export type LegacyEmployeeCreateWithoutGoalsInput = {
    id?: string
    name: string
    department: string
    managerId?: string | null
    role: string
  }

  export type LegacyEmployeeUncheckedCreateWithoutGoalsInput = {
    id?: string
    name: string
    department: string
    managerId?: string | null
    role: string
  }

  export type LegacyEmployeeCreateOrConnectWithoutGoalsInput = {
    where: LegacyEmployeeWhereUniqueInput
    create: XOR<LegacyEmployeeCreateWithoutGoalsInput, LegacyEmployeeUncheckedCreateWithoutGoalsInput>
  }

  export type LegacyEmployeeUpsertWithoutGoalsInput = {
    update: XOR<LegacyEmployeeUpdateWithoutGoalsInput, LegacyEmployeeUncheckedUpdateWithoutGoalsInput>
    create: XOR<LegacyEmployeeCreateWithoutGoalsInput, LegacyEmployeeUncheckedCreateWithoutGoalsInput>
    where?: LegacyEmployeeWhereInput
  }

  export type LegacyEmployeeUpdateToOneWithWhereWithoutGoalsInput = {
    where?: LegacyEmployeeWhereInput
    data: XOR<LegacyEmployeeUpdateWithoutGoalsInput, LegacyEmployeeUncheckedUpdateWithoutGoalsInput>
  }

  export type LegacyEmployeeUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type LegacyEmployeeUncheckedUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyManagerInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    departmentId: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type GoalCreateManyEmployeeInput = {
    id?: string
    cycleId?: string | null
    title: string
    description?: string | null
    thrustArea: string
    uomType: $Enums.UoMType
    targetValue?: Decimal | DecimalJsLike | number | string
    actualValue?: Decimal | DecimalJsLike | number | string
    weightage: number
    status?: $Enums.GoalStatus
    categoryType?: string
    channelType?: string | null
    isShared?: boolean
    parentGoalId?: string | null
    lockedAt?: Date | string | null
    approvedBy?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuditLogCreateManyUserInput = {
    id?: string
    goalId: string
    fieldName: string
    oldValue?: string | null
    newValue?: string | null
    actionType: string
    ipAddress?: string | null
    changedAt?: Date | string
  }

  export type ChatMessageCreateManyUserInput = {
    id?: string
    role: string
    content: string
    intentType?: string | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type EscalationCreateManyUserInput = {
    id?: string
    triggerType: string
    escalationLevel?: number
    message: string
    isResolved?: boolean
    createdAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type UserUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneRequiredWithoutUsersNestedInput
    subordinates?: UserUpdateManyWithoutManagerNestedInput
    goals?: GoalUpdateManyWithoutEmployeeNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    escalations?: EscalationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    departmentId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subordinates?: UserUncheckedUpdateManyWithoutManagerNestedInput
    goals?: GoalUncheckedUpdateManyWithoutEmployeeNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    escalations?: EscalationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    departmentId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thrustArea?: StringFieldUpdateOperationsInput | string
    uomType?: EnumUoMTypeFieldUpdateOperationsInput | $Enums.UoMType
    targetValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    actualValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weightage?: IntFieldUpdateOperationsInput | number
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    categoryType?: StringFieldUpdateOperationsInput | string
    channelType?: NullableStringFieldUpdateOperationsInput | string | null
    isShared?: BoolFieldUpdateOperationsInput | boolean
    parentGoalId?: NullableStringFieldUpdateOperationsInput | string | null
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cycle?: GoalCycleUpdateOneWithoutGoalsNestedInput
    checkIns?: CheckInUpdateManyWithoutGoalNestedInput
    auditLogs?: AuditLogUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thrustArea?: StringFieldUpdateOperationsInput | string
    uomType?: EnumUoMTypeFieldUpdateOperationsInput | $Enums.UoMType
    targetValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    actualValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weightage?: IntFieldUpdateOperationsInput | number
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    categoryType?: StringFieldUpdateOperationsInput | string
    channelType?: NullableStringFieldUpdateOperationsInput | string | null
    isShared?: BoolFieldUpdateOperationsInput | boolean
    parentGoalId?: NullableStringFieldUpdateOperationsInput | string | null
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkIns?: CheckInUncheckedUpdateManyWithoutGoalNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thrustArea?: StringFieldUpdateOperationsInput | string
    uomType?: EnumUoMTypeFieldUpdateOperationsInput | $Enums.UoMType
    targetValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    actualValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weightage?: IntFieldUpdateOperationsInput | number
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    categoryType?: StringFieldUpdateOperationsInput | string
    channelType?: NullableStringFieldUpdateOperationsInput | string | null
    isShared?: BoolFieldUpdateOperationsInput | boolean
    parentGoalId?: NullableStringFieldUpdateOperationsInput | string | null
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldName?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    actionType?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goal?: GoalUpdateOneRequiredWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    goalId?: StringFieldUpdateOperationsInput | string
    fieldName?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    actionType?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    goalId?: StringFieldUpdateOperationsInput | string
    fieldName?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    actionType?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    intentType?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    intentType?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    intentType?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EscalationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerType?: StringFieldUpdateOperationsInput | string
    escalationLevel?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EscalationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerType?: StringFieldUpdateOperationsInput | string
    escalationLevel?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EscalationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerType?: StringFieldUpdateOperationsInput | string
    escalationLevel?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateManyDepartmentInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    managerId?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type UserUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UserUpdateOneWithoutSubordinatesNestedInput
    subordinates?: UserUpdateManyWithoutManagerNestedInput
    goals?: GoalUpdateManyWithoutEmployeeNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    escalations?: EscalationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subordinates?: UserUncheckedUpdateManyWithoutManagerNestedInput
    goals?: GoalUncheckedUpdateManyWithoutEmployeeNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    escalations?: EscalationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalCreateManyCycleInput = {
    id?: string
    employeeId: string
    title: string
    description?: string | null
    thrustArea: string
    uomType: $Enums.UoMType
    targetValue?: Decimal | DecimalJsLike | number | string
    actualValue?: Decimal | DecimalJsLike | number | string
    weightage: number
    status?: $Enums.GoalStatus
    categoryType?: string
    channelType?: string | null
    isShared?: boolean
    parentGoalId?: string | null
    lockedAt?: Date | string | null
    approvedBy?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CheckInCreateManyCycleInput = {
    id?: string
    goalId: string
    quarter: string
    plannedValue?: Decimal | DecimalJsLike | number | string
    actualValue?: Decimal | DecimalJsLike | number | string
    status?: $Enums.CheckInStatus
    managerComment?: string | null
    computedScore?: Decimal | DecimalJsLike | number | string
    checkInDate?: Date | string
  }

  export type GoalUpdateWithoutCycleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thrustArea?: StringFieldUpdateOperationsInput | string
    uomType?: EnumUoMTypeFieldUpdateOperationsInput | $Enums.UoMType
    targetValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    actualValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weightage?: IntFieldUpdateOperationsInput | number
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    categoryType?: StringFieldUpdateOperationsInput | string
    channelType?: NullableStringFieldUpdateOperationsInput | string | null
    isShared?: BoolFieldUpdateOperationsInput | boolean
    parentGoalId?: NullableStringFieldUpdateOperationsInput | string | null
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: UserUpdateOneRequiredWithoutGoalsNestedInput
    checkIns?: CheckInUpdateManyWithoutGoalNestedInput
    auditLogs?: AuditLogUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateWithoutCycleInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thrustArea?: StringFieldUpdateOperationsInput | string
    uomType?: EnumUoMTypeFieldUpdateOperationsInput | $Enums.UoMType
    targetValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    actualValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weightage?: IntFieldUpdateOperationsInput | number
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    categoryType?: StringFieldUpdateOperationsInput | string
    channelType?: NullableStringFieldUpdateOperationsInput | string | null
    isShared?: BoolFieldUpdateOperationsInput | boolean
    parentGoalId?: NullableStringFieldUpdateOperationsInput | string | null
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkIns?: CheckInUncheckedUpdateManyWithoutGoalNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateManyWithoutCycleInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thrustArea?: StringFieldUpdateOperationsInput | string
    uomType?: EnumUoMTypeFieldUpdateOperationsInput | $Enums.UoMType
    targetValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    actualValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weightage?: IntFieldUpdateOperationsInput | number
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    categoryType?: StringFieldUpdateOperationsInput | string
    channelType?: NullableStringFieldUpdateOperationsInput | string | null
    isShared?: BoolFieldUpdateOperationsInput | boolean
    parentGoalId?: NullableStringFieldUpdateOperationsInput | string | null
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInUpdateWithoutCycleInput = {
    id?: StringFieldUpdateOperationsInput | string
    quarter?: StringFieldUpdateOperationsInput | string
    plannedValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    actualValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus
    managerComment?: NullableStringFieldUpdateOperationsInput | string | null
    computedScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    goal?: GoalUpdateOneRequiredWithoutCheckInsNestedInput
  }

  export type CheckInUncheckedUpdateWithoutCycleInput = {
    id?: StringFieldUpdateOperationsInput | string
    goalId?: StringFieldUpdateOperationsInput | string
    quarter?: StringFieldUpdateOperationsInput | string
    plannedValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    actualValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus
    managerComment?: NullableStringFieldUpdateOperationsInput | string | null
    computedScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInUncheckedUpdateManyWithoutCycleInput = {
    id?: StringFieldUpdateOperationsInput | string
    goalId?: StringFieldUpdateOperationsInput | string
    quarter?: StringFieldUpdateOperationsInput | string
    plannedValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    actualValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus
    managerComment?: NullableStringFieldUpdateOperationsInput | string | null
    computedScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInCreateManyGoalInput = {
    id?: string
    cycleId?: string | null
    quarter: string
    plannedValue?: Decimal | DecimalJsLike | number | string
    actualValue?: Decimal | DecimalJsLike | number | string
    status?: $Enums.CheckInStatus
    managerComment?: string | null
    computedScore?: Decimal | DecimalJsLike | number | string
    checkInDate?: Date | string
  }

  export type AuditLogCreateManyGoalInput = {
    id?: string
    changedBy: string
    fieldName: string
    oldValue?: string | null
    newValue?: string | null
    actionType: string
    ipAddress?: string | null
    changedAt?: Date | string
  }

  export type CheckInUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    quarter?: StringFieldUpdateOperationsInput | string
    plannedValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    actualValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus
    managerComment?: NullableStringFieldUpdateOperationsInput | string | null
    computedScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cycle?: GoalCycleUpdateOneWithoutCheckInsNestedInput
  }

  export type CheckInUncheckedUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleId?: NullableStringFieldUpdateOperationsInput | string | null
    quarter?: StringFieldUpdateOperationsInput | string
    plannedValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    actualValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus
    managerComment?: NullableStringFieldUpdateOperationsInput | string | null
    computedScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInUncheckedUpdateManyWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleId?: NullableStringFieldUpdateOperationsInput | string | null
    quarter?: StringFieldUpdateOperationsInput | string
    plannedValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    actualValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus
    managerComment?: NullableStringFieldUpdateOperationsInput | string | null
    computedScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldName?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    actionType?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
    fieldName?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    actionType?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
    fieldName?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    actionType?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegacyGoalCreateManyEmployeeInput = {
    id?: string
    title: string
    target: Decimal | DecimalJsLike | number | string
    actual: Decimal | DecimalJsLike | number | string
    quarter: string
  }

  export type LegacyGoalUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    target?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    actual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quarter?: StringFieldUpdateOperationsInput | string
  }

  export type LegacyGoalUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    target?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    actual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quarter?: StringFieldUpdateOperationsInput | string
  }

  export type LegacyGoalUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    target?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    actual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quarter?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DepartmentCountOutputTypeDefaultArgs instead
     */
    export type DepartmentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DepartmentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GoalCycleCountOutputTypeDefaultArgs instead
     */
    export type GoalCycleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GoalCycleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GoalCountOutputTypeDefaultArgs instead
     */
    export type GoalCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GoalCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LegacyEmployeeCountOutputTypeDefaultArgs instead
     */
    export type LegacyEmployeeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LegacyEmployeeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DepartmentDefaultArgs instead
     */
    export type DepartmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DepartmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GoalCycleDefaultArgs instead
     */
    export type GoalCycleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GoalCycleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GoalDefaultArgs instead
     */
    export type GoalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GoalDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CheckInDefaultArgs instead
     */
    export type CheckInArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CheckInDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuditLogDefaultArgs instead
     */
    export type AuditLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuditLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EscalationDefaultArgs instead
     */
    export type EscalationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EscalationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatMessageDefaultArgs instead
     */
    export type ChatMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatMessageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DbConnectionDefaultArgs instead
     */
    export type DbConnectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DbConnectionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ManufacturingDailyDefaultArgs instead
     */
    export type ManufacturingDailyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ManufacturingDailyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SalesMonthlyDefaultArgs instead
     */
    export type SalesMonthlyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SalesMonthlyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LegacyEmployeeDefaultArgs instead
     */
    export type LegacyEmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LegacyEmployeeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LegacyGoalDefaultArgs instead
     */
    export type LegacyGoalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LegacyGoalDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}