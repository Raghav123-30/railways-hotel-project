
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Checkout
 * 
 */
export type Checkout = $Result.DefaultSelection<Prisma.$CheckoutPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customer.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs>;

  /**
   * `prisma.checkout`: Exposes CRUD operations for the **Checkout** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Checkouts
    * const checkouts = await prisma.checkout.findMany()
    * ```
    */
  get checkout(): Prisma.CheckoutDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.8.1
   * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
    Customer: 'Customer',
    Room: 'Room',
    Employee: 'Employee',
    Checkout: 'Checkout'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'customer' | 'room' | 'employee' | 'checkout'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>,
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>,
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>,
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Checkout: {
        payload: Prisma.$CheckoutPayload<ExtArgs>
        fields: Prisma.CheckoutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CheckoutFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CheckoutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CheckoutFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CheckoutPayload>
          }
          findFirst: {
            args: Prisma.CheckoutFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CheckoutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CheckoutFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CheckoutPayload>
          }
          findMany: {
            args: Prisma.CheckoutFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CheckoutPayload>[]
          }
          create: {
            args: Prisma.CheckoutCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CheckoutPayload>
          }
          createMany: {
            args: Prisma.CheckoutCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CheckoutDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CheckoutPayload>
          }
          update: {
            args: Prisma.CheckoutUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CheckoutPayload>
          }
          deleteMany: {
            args: Prisma.CheckoutDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CheckoutUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CheckoutUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CheckoutPayload>
          }
          aggregate: {
            args: Prisma.CheckoutAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCheckout>
          }
          groupBy: {
            args: Prisma.CheckoutGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CheckoutGroupByOutputType>[]
          }
          count: {
            args: Prisma.CheckoutCountArgs<ExtArgs>,
            result: $Utils.Optional<CheckoutCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
   * Models
   */

  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    customerId: number | null
    roomNumber: number | null
  }

  export type CustomerSumAggregateOutputType = {
    customerId: number | null
    roomNumber: number | null
  }

  export type CustomerMinAggregateOutputType = {
    customerId: number | null
    phone: string | null
    fullName: string | null
    gender: string | null
    country: string | null
    roomNumber: number | null
    deposit: string | null
    checkInTime: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    customerId: number | null
    phone: string | null
    fullName: string | null
    gender: string | null
    country: string | null
    roomNumber: number | null
    deposit: string | null
    checkInTime: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    customerId: number
    phone: number
    fullName: number
    gender: number
    country: number
    roomNumber: number
    deposit: number
    checkInTime: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    customerId?: true
    roomNumber?: true
  }

  export type CustomerSumAggregateInputType = {
    customerId?: true
    roomNumber?: true
  }

  export type CustomerMinAggregateInputType = {
    customerId?: true
    phone?: true
    fullName?: true
    gender?: true
    country?: true
    roomNumber?: true
    deposit?: true
    checkInTime?: true
  }

  export type CustomerMaxAggregateInputType = {
    customerId?: true
    phone?: true
    fullName?: true
    gender?: true
    country?: true
    roomNumber?: true
    deposit?: true
    checkInTime?: true
  }

  export type CustomerCountAggregateInputType = {
    customerId?: true
    phone?: true
    fullName?: true
    gender?: true
    country?: true
    roomNumber?: true
    deposit?: true
    checkInTime?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    customerId: number
    phone: string
    fullName: string
    gender: string
    country: string
    roomNumber: number
    deposit: string
    checkInTime: Date
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customerId?: boolean
    phone?: boolean
    fullName?: boolean
    gender?: boolean
    country?: boolean
    roomNumber?: boolean
    deposit?: boolean
    checkInTime?: boolean
    checkout?: boolean | Customer$checkoutArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    customerId?: boolean
    phone?: boolean
    fullName?: boolean
    gender?: boolean
    country?: boolean
    roomNumber?: boolean
    deposit?: boolean
    checkInTime?: boolean
  }

  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checkout?: boolean | Customer$checkoutArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }


  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      checkout: Prisma.$CheckoutPayload<ExtArgs> | null
      room: Prisma.$RoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      customerId: number
      phone: string
      fullName: string
      gender: string
      country: string
      roomNumber: number
      deposit: string
      checkInTime: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }


  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CustomerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Customer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CustomerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `customerId`
     * const customerWithCustomerIdOnly = await prisma.customer.findMany({ select: { customerId: true } })
     * 
    **/
    findMany<T extends CustomerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
    **/
    create<T extends CustomerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Customers.
     *     @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     *     @example
     *     // Create many Customers
     *     const customer = await prisma.customer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CustomerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
    **/
    delete<T extends CustomerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CustomerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CustomerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CustomerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
    **/
    upsert<T extends CustomerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    checkout<T extends Customer$checkoutArgs<ExtArgs> = {}>(args?: Subset<T, Customer$checkoutArgs<ExtArgs>>): Prisma__CheckoutClient<$Result.GetResult<Prisma.$CheckoutPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Customer model
   */ 
  interface CustomerFieldRefs {
    readonly customerId: FieldRef<"Customer", 'Int'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly fullName: FieldRef<"Customer", 'String'>
    readonly gender: FieldRef<"Customer", 'String'>
    readonly country: FieldRef<"Customer", 'String'>
    readonly roomNumber: FieldRef<"Customer", 'Int'>
    readonly deposit: FieldRef<"Customer", 'String'>
    readonly checkInTime: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }


  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }


  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }


  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }


  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
  }


  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }


  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
  }


  /**
   * Customer.checkout
   */
  export type Customer$checkoutArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkout
     */
    select?: CheckoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CheckoutInclude<ExtArgs> | null
    where?: CheckoutWhereInput
  }


  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
  }



  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    roomNumber: number | null
  }

  export type RoomSumAggregateOutputType = {
    roomNumber: number | null
  }

  export type RoomMinAggregateOutputType = {
    roomNumber: number | null
    availability: string | null
    cleaningStatus: string | null
    price: string | null
    bedType: string | null
  }

  export type RoomMaxAggregateOutputType = {
    roomNumber: number | null
    availability: string | null
    cleaningStatus: string | null
    price: string | null
    bedType: string | null
  }

  export type RoomCountAggregateOutputType = {
    roomNumber: number
    availability: number
    cleaningStatus: number
    price: number
    bedType: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    roomNumber?: true
  }

  export type RoomSumAggregateInputType = {
    roomNumber?: true
  }

  export type RoomMinAggregateInputType = {
    roomNumber?: true
    availability?: true
    cleaningStatus?: true
    price?: true
    bedType?: true
  }

  export type RoomMaxAggregateInputType = {
    roomNumber?: true
    availability?: true
    cleaningStatus?: true
    price?: true
    bedType?: true
  }

  export type RoomCountAggregateInputType = {
    roomNumber?: true
    availability?: true
    cleaningStatus?: true
    price?: true
    bedType?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    roomNumber: number
    availability: string
    cleaningStatus: string
    price: string
    bedType: string
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roomNumber?: boolean
    availability?: boolean
    cleaningStatus?: boolean
    price?: boolean
    bedType?: boolean
    customers?: boolean | Room$customersArgs<ExtArgs>
    checkout?: boolean | Room$checkoutArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectScalar = {
    roomNumber?: boolean
    availability?: boolean
    cleaningStatus?: boolean
    price?: boolean
    bedType?: boolean
  }

  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | Room$customersArgs<ExtArgs>
    checkout?: boolean | Room$checkoutArgs<ExtArgs>
  }


  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      customers: Prisma.$CustomerPayload<ExtArgs> | null
      checkout: Prisma.$CheckoutPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      roomNumber: number
      availability: string
      cleaningStatus: string
      price: string
      bedType: string
    }, ExtArgs["result"]["room"]>
    composites: {}
  }


  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoomFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>
    ): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Room that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoomFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>
    ): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `roomNumber`
     * const roomWithRoomNumberOnly = await prisma.room.findMany({ select: { roomNumber: true } })
     * 
    **/
    findMany<T extends RoomFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
    **/
    create<T extends RoomCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RoomCreateArgs<ExtArgs>>
    ): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Rooms.
     *     @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     *     @example
     *     // Create many Rooms
     *     const room = await prisma.room.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RoomCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
    **/
    delete<T extends RoomDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>
    ): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoomUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>
    ): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoomDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoomUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
    **/
    upsert<T extends RoomUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>
    ): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
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
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    customers<T extends Room$customersArgs<ExtArgs> = {}>(args?: Subset<T, Room$customersArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    checkout<T extends Room$checkoutArgs<ExtArgs> = {}>(args?: Subset<T, Room$checkoutArgs<ExtArgs>>): Prisma__CheckoutClient<$Result.GetResult<Prisma.$CheckoutPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Room model
   */ 
  interface RoomFieldRefs {
    readonly roomNumber: FieldRef<"Room", 'Int'>
    readonly availability: FieldRef<"Room", 'String'>
    readonly cleaningStatus: FieldRef<"Room", 'String'>
    readonly price: FieldRef<"Room", 'String'>
    readonly bedType: FieldRef<"Room", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }


  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }


  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }


  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }


  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }


  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }


  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }


  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
  }


  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }


  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }


  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
  }


  /**
   * Room.customers
   */
  export type Room$customersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
  }


  /**
   * Room.checkout
   */
  export type Room$checkoutArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkout
     */
    select?: CheckoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CheckoutInclude<ExtArgs> | null
    where?: CheckoutWhereInput
  }


  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomInclude<ExtArgs> | null
  }



  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    employeeId: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    employeeId: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    employeeId: number | null
    fullName: string | null
    job: string | null
    gender: string | null
    age: string | null
    salary: string | null
    phone: string | null
    adhar: string | null
    email: string | null
  }

  export type EmployeeMaxAggregateOutputType = {
    employeeId: number | null
    fullName: string | null
    job: string | null
    gender: string | null
    age: string | null
    salary: string | null
    phone: string | null
    adhar: string | null
    email: string | null
  }

  export type EmployeeCountAggregateOutputType = {
    employeeId: number
    fullName: number
    job: number
    gender: number
    age: number
    salary: number
    phone: number
    adhar: number
    email: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    employeeId?: true
  }

  export type EmployeeSumAggregateInputType = {
    employeeId?: true
  }

  export type EmployeeMinAggregateInputType = {
    employeeId?: true
    fullName?: true
    job?: true
    gender?: true
    age?: true
    salary?: true
    phone?: true
    adhar?: true
    email?: true
  }

  export type EmployeeMaxAggregateInputType = {
    employeeId?: true
    fullName?: true
    job?: true
    gender?: true
    age?: true
    salary?: true
    phone?: true
    adhar?: true
    email?: true
  }

  export type EmployeeCountAggregateInputType = {
    employeeId?: true
    fullName?: true
    job?: true
    gender?: true
    age?: true
    salary?: true
    phone?: true
    adhar?: true
    email?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    employeeId: number
    fullName: string
    job: string
    gender: string
    age: string
    salary: string
    phone: string
    adhar: string
    email: string
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    employeeId?: boolean
    fullName?: boolean
    job?: boolean
    gender?: boolean
    age?: boolean
    salary?: boolean
    phone?: boolean
    adhar?: boolean
    email?: boolean
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    employeeId?: boolean
    fullName?: boolean
    job?: boolean
    gender?: boolean
    age?: boolean
    salary?: boolean
    phone?: boolean
    adhar?: boolean
    email?: boolean
  }


  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      employeeId: number
      fullName: string
      job: string
      gender: string
      age: string
      salary: string
      phone: string
      adhar: string
      email: string
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }


  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EmployeeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>
    ): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Employee that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EmployeeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>
    ): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `employeeId`
     * const employeeWithEmployeeIdOnly = await prisma.employee.findMany({ select: { employeeId: true } })
     * 
    **/
    findMany<T extends EmployeeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
    **/
    create<T extends EmployeeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>
    ): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Employees.
     *     @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     *     @example
     *     // Create many Employees
     *     const employee = await prisma.employee.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EmployeeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
    **/
    delete<T extends EmployeeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>
    ): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EmployeeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>
    ): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EmployeeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EmployeeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
    **/
    upsert<T extends EmployeeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>
    ): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
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
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Employee model
   */ 
  interface EmployeeFieldRefs {
    readonly employeeId: FieldRef<"Employee", 'Int'>
    readonly fullName: FieldRef<"Employee", 'String'>
    readonly job: FieldRef<"Employee", 'String'>
    readonly gender: FieldRef<"Employee", 'String'>
    readonly age: FieldRef<"Employee", 'String'>
    readonly salary: FieldRef<"Employee", 'String'>
    readonly phone: FieldRef<"Employee", 'String'>
    readonly adhar: FieldRef<"Employee", 'String'>
    readonly email: FieldRef<"Employee", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }


  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }


  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }


  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }


  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }


  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }


  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }


  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
  }


  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }


  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }


  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
  }


  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
  }



  /**
   * Model Checkout
   */

  export type AggregateCheckout = {
    _count: CheckoutCountAggregateOutputType | null
    _avg: CheckoutAvgAggregateOutputType | null
    _sum: CheckoutSumAggregateOutputType | null
    _min: CheckoutMinAggregateOutputType | null
    _max: CheckoutMaxAggregateOutputType | null
  }

  export type CheckoutAvgAggregateOutputType = {
    checkoutId: number | null
    roomNumber: number | null
    customerId: number | null
  }

  export type CheckoutSumAggregateOutputType = {
    checkoutId: number | null
    roomNumber: number | null
    customerId: number | null
  }

  export type CheckoutMinAggregateOutputType = {
    checkoutId: number | null
    checkInTime: Date | null
    checkOutTime: Date | null
    roomNumber: number | null
    customerId: number | null
  }

  export type CheckoutMaxAggregateOutputType = {
    checkoutId: number | null
    checkInTime: Date | null
    checkOutTime: Date | null
    roomNumber: number | null
    customerId: number | null
  }

  export type CheckoutCountAggregateOutputType = {
    checkoutId: number
    checkInTime: number
    checkOutTime: number
    roomNumber: number
    customerId: number
    _all: number
  }


  export type CheckoutAvgAggregateInputType = {
    checkoutId?: true
    roomNumber?: true
    customerId?: true
  }

  export type CheckoutSumAggregateInputType = {
    checkoutId?: true
    roomNumber?: true
    customerId?: true
  }

  export type CheckoutMinAggregateInputType = {
    checkoutId?: true
    checkInTime?: true
    checkOutTime?: true
    roomNumber?: true
    customerId?: true
  }

  export type CheckoutMaxAggregateInputType = {
    checkoutId?: true
    checkInTime?: true
    checkOutTime?: true
    roomNumber?: true
    customerId?: true
  }

  export type CheckoutCountAggregateInputType = {
    checkoutId?: true
    checkInTime?: true
    checkOutTime?: true
    roomNumber?: true
    customerId?: true
    _all?: true
  }

  export type CheckoutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Checkout to aggregate.
     */
    where?: CheckoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkouts to fetch.
     */
    orderBy?: CheckoutOrderByWithRelationInput | CheckoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CheckoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Checkouts
    **/
    _count?: true | CheckoutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CheckoutAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CheckoutSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CheckoutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CheckoutMaxAggregateInputType
  }

  export type GetCheckoutAggregateType<T extends CheckoutAggregateArgs> = {
        [P in keyof T & keyof AggregateCheckout]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCheckout[P]>
      : GetScalarType<T[P], AggregateCheckout[P]>
  }




  export type CheckoutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckoutWhereInput
    orderBy?: CheckoutOrderByWithAggregationInput | CheckoutOrderByWithAggregationInput[]
    by: CheckoutScalarFieldEnum[] | CheckoutScalarFieldEnum
    having?: CheckoutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CheckoutCountAggregateInputType | true
    _avg?: CheckoutAvgAggregateInputType
    _sum?: CheckoutSumAggregateInputType
    _min?: CheckoutMinAggregateInputType
    _max?: CheckoutMaxAggregateInputType
  }

  export type CheckoutGroupByOutputType = {
    checkoutId: number
    checkInTime: Date
    checkOutTime: Date
    roomNumber: number
    customerId: number
    _count: CheckoutCountAggregateOutputType | null
    _avg: CheckoutAvgAggregateOutputType | null
    _sum: CheckoutSumAggregateOutputType | null
    _min: CheckoutMinAggregateOutputType | null
    _max: CheckoutMaxAggregateOutputType | null
  }

  type GetCheckoutGroupByPayload<T extends CheckoutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CheckoutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CheckoutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CheckoutGroupByOutputType[P]>
            : GetScalarType<T[P], CheckoutGroupByOutputType[P]>
        }
      >
    >


  export type CheckoutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    checkoutId?: boolean
    checkInTime?: boolean
    checkOutTime?: boolean
    roomNumber?: boolean
    customerId?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkout"]>

  export type CheckoutSelectScalar = {
    checkoutId?: boolean
    checkInTime?: boolean
    checkOutTime?: boolean
    roomNumber?: boolean
    customerId?: boolean
  }

  export type CheckoutInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }


  export type $CheckoutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Checkout"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      room: Prisma.$RoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      checkoutId: number
      checkInTime: Date
      checkOutTime: Date
      roomNumber: number
      customerId: number
    }, ExtArgs["result"]["checkout"]>
    composites: {}
  }


  type CheckoutGetPayload<S extends boolean | null | undefined | CheckoutDefaultArgs> = $Result.GetResult<Prisma.$CheckoutPayload, S>

  type CheckoutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CheckoutFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CheckoutCountAggregateInputType | true
    }

  export interface CheckoutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Checkout'], meta: { name: 'Checkout' } }
    /**
     * Find zero or one Checkout that matches the filter.
     * @param {CheckoutFindUniqueArgs} args - Arguments to find a Checkout
     * @example
     * // Get one Checkout
     * const checkout = await prisma.checkout.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CheckoutFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CheckoutFindUniqueArgs<ExtArgs>>
    ): Prisma__CheckoutClient<$Result.GetResult<Prisma.$CheckoutPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Checkout that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CheckoutFindUniqueOrThrowArgs} args - Arguments to find a Checkout
     * @example
     * // Get one Checkout
     * const checkout = await prisma.checkout.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CheckoutFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CheckoutFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CheckoutClient<$Result.GetResult<Prisma.$CheckoutPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Checkout that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckoutFindFirstArgs} args - Arguments to find a Checkout
     * @example
     * // Get one Checkout
     * const checkout = await prisma.checkout.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CheckoutFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CheckoutFindFirstArgs<ExtArgs>>
    ): Prisma__CheckoutClient<$Result.GetResult<Prisma.$CheckoutPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Checkout that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckoutFindFirstOrThrowArgs} args - Arguments to find a Checkout
     * @example
     * // Get one Checkout
     * const checkout = await prisma.checkout.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CheckoutFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CheckoutFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CheckoutClient<$Result.GetResult<Prisma.$CheckoutPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Checkouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckoutFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Checkouts
     * const checkouts = await prisma.checkout.findMany()
     * 
     * // Get first 10 Checkouts
     * const checkouts = await prisma.checkout.findMany({ take: 10 })
     * 
     * // Only select the `checkoutId`
     * const checkoutWithCheckoutIdOnly = await prisma.checkout.findMany({ select: { checkoutId: true } })
     * 
    **/
    findMany<T extends CheckoutFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CheckoutFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckoutPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Checkout.
     * @param {CheckoutCreateArgs} args - Arguments to create a Checkout.
     * @example
     * // Create one Checkout
     * const Checkout = await prisma.checkout.create({
     *   data: {
     *     // ... data to create a Checkout
     *   }
     * })
     * 
    **/
    create<T extends CheckoutCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CheckoutCreateArgs<ExtArgs>>
    ): Prisma__CheckoutClient<$Result.GetResult<Prisma.$CheckoutPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Checkouts.
     *     @param {CheckoutCreateManyArgs} args - Arguments to create many Checkouts.
     *     @example
     *     // Create many Checkouts
     *     const checkout = await prisma.checkout.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CheckoutCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CheckoutCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Checkout.
     * @param {CheckoutDeleteArgs} args - Arguments to delete one Checkout.
     * @example
     * // Delete one Checkout
     * const Checkout = await prisma.checkout.delete({
     *   where: {
     *     // ... filter to delete one Checkout
     *   }
     * })
     * 
    **/
    delete<T extends CheckoutDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CheckoutDeleteArgs<ExtArgs>>
    ): Prisma__CheckoutClient<$Result.GetResult<Prisma.$CheckoutPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Checkout.
     * @param {CheckoutUpdateArgs} args - Arguments to update one Checkout.
     * @example
     * // Update one Checkout
     * const checkout = await prisma.checkout.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CheckoutUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CheckoutUpdateArgs<ExtArgs>>
    ): Prisma__CheckoutClient<$Result.GetResult<Prisma.$CheckoutPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Checkouts.
     * @param {CheckoutDeleteManyArgs} args - Arguments to filter Checkouts to delete.
     * @example
     * // Delete a few Checkouts
     * const { count } = await prisma.checkout.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CheckoutDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CheckoutDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Checkouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckoutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Checkouts
     * const checkout = await prisma.checkout.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CheckoutUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CheckoutUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Checkout.
     * @param {CheckoutUpsertArgs} args - Arguments to update or create a Checkout.
     * @example
     * // Update or create a Checkout
     * const checkout = await prisma.checkout.upsert({
     *   create: {
     *     // ... data to create a Checkout
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Checkout we want to update
     *   }
     * })
    **/
    upsert<T extends CheckoutUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CheckoutUpsertArgs<ExtArgs>>
    ): Prisma__CheckoutClient<$Result.GetResult<Prisma.$CheckoutPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Checkouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckoutCountArgs} args - Arguments to filter Checkouts to count.
     * @example
     * // Count the number of Checkouts
     * const count = await prisma.checkout.count({
     *   where: {
     *     // ... the filter for the Checkouts we want to count
     *   }
     * })
    **/
    count<T extends CheckoutCountArgs>(
      args?: Subset<T, CheckoutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CheckoutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Checkout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckoutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CheckoutAggregateArgs>(args: Subset<T, CheckoutAggregateArgs>): Prisma.PrismaPromise<GetCheckoutAggregateType<T>>

    /**
     * Group by Checkout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckoutGroupByArgs} args - Group by arguments.
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
      T extends CheckoutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CheckoutGroupByArgs['orderBy'] }
        : { orderBy?: CheckoutGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CheckoutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheckoutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Checkout model
   */
  readonly fields: CheckoutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Checkout.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CheckoutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Checkout model
   */ 
  interface CheckoutFieldRefs {
    readonly checkoutId: FieldRef<"Checkout", 'Int'>
    readonly checkInTime: FieldRef<"Checkout", 'DateTime'>
    readonly checkOutTime: FieldRef<"Checkout", 'DateTime'>
    readonly roomNumber: FieldRef<"Checkout", 'Int'>
    readonly customerId: FieldRef<"Checkout", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Checkout findUnique
   */
  export type CheckoutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkout
     */
    select?: CheckoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CheckoutInclude<ExtArgs> | null
    /**
     * Filter, which Checkout to fetch.
     */
    where: CheckoutWhereUniqueInput
  }


  /**
   * Checkout findUniqueOrThrow
   */
  export type CheckoutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkout
     */
    select?: CheckoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CheckoutInclude<ExtArgs> | null
    /**
     * Filter, which Checkout to fetch.
     */
    where: CheckoutWhereUniqueInput
  }


  /**
   * Checkout findFirst
   */
  export type CheckoutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkout
     */
    select?: CheckoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CheckoutInclude<ExtArgs> | null
    /**
     * Filter, which Checkout to fetch.
     */
    where?: CheckoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkouts to fetch.
     */
    orderBy?: CheckoutOrderByWithRelationInput | CheckoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Checkouts.
     */
    cursor?: CheckoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Checkouts.
     */
    distinct?: CheckoutScalarFieldEnum | CheckoutScalarFieldEnum[]
  }


  /**
   * Checkout findFirstOrThrow
   */
  export type CheckoutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkout
     */
    select?: CheckoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CheckoutInclude<ExtArgs> | null
    /**
     * Filter, which Checkout to fetch.
     */
    where?: CheckoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkouts to fetch.
     */
    orderBy?: CheckoutOrderByWithRelationInput | CheckoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Checkouts.
     */
    cursor?: CheckoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Checkouts.
     */
    distinct?: CheckoutScalarFieldEnum | CheckoutScalarFieldEnum[]
  }


  /**
   * Checkout findMany
   */
  export type CheckoutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkout
     */
    select?: CheckoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CheckoutInclude<ExtArgs> | null
    /**
     * Filter, which Checkouts to fetch.
     */
    where?: CheckoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkouts to fetch.
     */
    orderBy?: CheckoutOrderByWithRelationInput | CheckoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Checkouts.
     */
    cursor?: CheckoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkouts.
     */
    skip?: number
    distinct?: CheckoutScalarFieldEnum | CheckoutScalarFieldEnum[]
  }


  /**
   * Checkout create
   */
  export type CheckoutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkout
     */
    select?: CheckoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CheckoutInclude<ExtArgs> | null
    /**
     * The data needed to create a Checkout.
     */
    data: XOR<CheckoutCreateInput, CheckoutUncheckedCreateInput>
  }


  /**
   * Checkout createMany
   */
  export type CheckoutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Checkouts.
     */
    data: CheckoutCreateManyInput | CheckoutCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Checkout update
   */
  export type CheckoutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkout
     */
    select?: CheckoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CheckoutInclude<ExtArgs> | null
    /**
     * The data needed to update a Checkout.
     */
    data: XOR<CheckoutUpdateInput, CheckoutUncheckedUpdateInput>
    /**
     * Choose, which Checkout to update.
     */
    where: CheckoutWhereUniqueInput
  }


  /**
   * Checkout updateMany
   */
  export type CheckoutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Checkouts.
     */
    data: XOR<CheckoutUpdateManyMutationInput, CheckoutUncheckedUpdateManyInput>
    /**
     * Filter which Checkouts to update
     */
    where?: CheckoutWhereInput
  }


  /**
   * Checkout upsert
   */
  export type CheckoutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkout
     */
    select?: CheckoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CheckoutInclude<ExtArgs> | null
    /**
     * The filter to search for the Checkout to update in case it exists.
     */
    where: CheckoutWhereUniqueInput
    /**
     * In case the Checkout found by the `where` argument doesn't exist, create a new Checkout with this data.
     */
    create: XOR<CheckoutCreateInput, CheckoutUncheckedCreateInput>
    /**
     * In case the Checkout was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CheckoutUpdateInput, CheckoutUncheckedUpdateInput>
  }


  /**
   * Checkout delete
   */
  export type CheckoutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkout
     */
    select?: CheckoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CheckoutInclude<ExtArgs> | null
    /**
     * Filter which Checkout to delete.
     */
    where: CheckoutWhereUniqueInput
  }


  /**
   * Checkout deleteMany
   */
  export type CheckoutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Checkouts to delete
     */
    where?: CheckoutWhereInput
  }


  /**
   * Checkout without action
   */
  export type CheckoutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkout
     */
    select?: CheckoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CheckoutInclude<ExtArgs> | null
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


  export const CustomerScalarFieldEnum: {
    customerId: 'customerId',
    phone: 'phone',
    fullName: 'fullName',
    gender: 'gender',
    country: 'country',
    roomNumber: 'roomNumber',
    deposit: 'deposit',
    checkInTime: 'checkInTime'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    roomNumber: 'roomNumber',
    availability: 'availability',
    cleaningStatus: 'cleaningStatus',
    price: 'price',
    bedType: 'bedType'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    employeeId: 'employeeId',
    fullName: 'fullName',
    job: 'job',
    gender: 'gender',
    age: 'age',
    salary: 'salary',
    phone: 'phone',
    adhar: 'adhar',
    email: 'email'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const CheckoutScalarFieldEnum: {
    checkoutId: 'checkoutId',
    checkInTime: 'checkInTime',
    checkOutTime: 'checkOutTime',
    roomNumber: 'roomNumber',
    customerId: 'customerId'
  };

  export type CheckoutScalarFieldEnum = (typeof CheckoutScalarFieldEnum)[keyof typeof CheckoutScalarFieldEnum]


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


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    customerId?: IntFilter<"Customer"> | number
    phone?: StringFilter<"Customer"> | string
    fullName?: StringFilter<"Customer"> | string
    gender?: StringFilter<"Customer"> | string
    country?: StringFilter<"Customer"> | string
    roomNumber?: IntFilter<"Customer"> | number
    deposit?: StringFilter<"Customer"> | string
    checkInTime?: DateTimeFilter<"Customer"> | Date | string
    checkout?: XOR<CheckoutNullableRelationFilter, CheckoutWhereInput> | null
    room?: XOR<RoomRelationFilter, RoomWhereInput>
  }

  export type CustomerOrderByWithRelationInput = {
    customerId?: SortOrder
    phone?: SortOrder
    fullName?: SortOrder
    gender?: SortOrder
    country?: SortOrder
    roomNumber?: SortOrder
    deposit?: SortOrder
    checkInTime?: SortOrder
    checkout?: CheckoutOrderByWithRelationInput
    room?: RoomOrderByWithRelationInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    customerId?: number
    roomNumber?: number
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    phone?: StringFilter<"Customer"> | string
    fullName?: StringFilter<"Customer"> | string
    gender?: StringFilter<"Customer"> | string
    country?: StringFilter<"Customer"> | string
    deposit?: StringFilter<"Customer"> | string
    checkInTime?: DateTimeFilter<"Customer"> | Date | string
    checkout?: XOR<CheckoutNullableRelationFilter, CheckoutWhereInput> | null
    room?: XOR<RoomRelationFilter, RoomWhereInput>
  }, "customerId" | "roomNumber">

  export type CustomerOrderByWithAggregationInput = {
    customerId?: SortOrder
    phone?: SortOrder
    fullName?: SortOrder
    gender?: SortOrder
    country?: SortOrder
    roomNumber?: SortOrder
    deposit?: SortOrder
    checkInTime?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    customerId?: IntWithAggregatesFilter<"Customer"> | number
    phone?: StringWithAggregatesFilter<"Customer"> | string
    fullName?: StringWithAggregatesFilter<"Customer"> | string
    gender?: StringWithAggregatesFilter<"Customer"> | string
    country?: StringWithAggregatesFilter<"Customer"> | string
    roomNumber?: IntWithAggregatesFilter<"Customer"> | number
    deposit?: StringWithAggregatesFilter<"Customer"> | string
    checkInTime?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    roomNumber?: IntFilter<"Room"> | number
    availability?: StringFilter<"Room"> | string
    cleaningStatus?: StringFilter<"Room"> | string
    price?: StringFilter<"Room"> | string
    bedType?: StringFilter<"Room"> | string
    customers?: XOR<CustomerNullableRelationFilter, CustomerWhereInput> | null
    checkout?: XOR<CheckoutNullableRelationFilter, CheckoutWhereInput> | null
  }

  export type RoomOrderByWithRelationInput = {
    roomNumber?: SortOrder
    availability?: SortOrder
    cleaningStatus?: SortOrder
    price?: SortOrder
    bedType?: SortOrder
    customers?: CustomerOrderByWithRelationInput
    checkout?: CheckoutOrderByWithRelationInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    roomNumber?: number
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    availability?: StringFilter<"Room"> | string
    cleaningStatus?: StringFilter<"Room"> | string
    price?: StringFilter<"Room"> | string
    bedType?: StringFilter<"Room"> | string
    customers?: XOR<CustomerNullableRelationFilter, CustomerWhereInput> | null
    checkout?: XOR<CheckoutNullableRelationFilter, CheckoutWhereInput> | null
  }, "roomNumber">

  export type RoomOrderByWithAggregationInput = {
    roomNumber?: SortOrder
    availability?: SortOrder
    cleaningStatus?: SortOrder
    price?: SortOrder
    bedType?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    roomNumber?: IntWithAggregatesFilter<"Room"> | number
    availability?: StringWithAggregatesFilter<"Room"> | string
    cleaningStatus?: StringWithAggregatesFilter<"Room"> | string
    price?: StringWithAggregatesFilter<"Room"> | string
    bedType?: StringWithAggregatesFilter<"Room"> | string
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    employeeId?: IntFilter<"Employee"> | number
    fullName?: StringFilter<"Employee"> | string
    job?: StringFilter<"Employee"> | string
    gender?: StringFilter<"Employee"> | string
    age?: StringFilter<"Employee"> | string
    salary?: StringFilter<"Employee"> | string
    phone?: StringFilter<"Employee"> | string
    adhar?: StringFilter<"Employee"> | string
    email?: StringFilter<"Employee"> | string
  }

  export type EmployeeOrderByWithRelationInput = {
    employeeId?: SortOrder
    fullName?: SortOrder
    job?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    salary?: SortOrder
    phone?: SortOrder
    adhar?: SortOrder
    email?: SortOrder
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    employeeId?: number
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    fullName?: StringFilter<"Employee"> | string
    job?: StringFilter<"Employee"> | string
    gender?: StringFilter<"Employee"> | string
    age?: StringFilter<"Employee"> | string
    salary?: StringFilter<"Employee"> | string
    phone?: StringFilter<"Employee"> | string
    adhar?: StringFilter<"Employee"> | string
    email?: StringFilter<"Employee"> | string
  }, "employeeId">

  export type EmployeeOrderByWithAggregationInput = {
    employeeId?: SortOrder
    fullName?: SortOrder
    job?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    salary?: SortOrder
    phone?: SortOrder
    adhar?: SortOrder
    email?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    employeeId?: IntWithAggregatesFilter<"Employee"> | number
    fullName?: StringWithAggregatesFilter<"Employee"> | string
    job?: StringWithAggregatesFilter<"Employee"> | string
    gender?: StringWithAggregatesFilter<"Employee"> | string
    age?: StringWithAggregatesFilter<"Employee"> | string
    salary?: StringWithAggregatesFilter<"Employee"> | string
    phone?: StringWithAggregatesFilter<"Employee"> | string
    adhar?: StringWithAggregatesFilter<"Employee"> | string
    email?: StringWithAggregatesFilter<"Employee"> | string
  }

  export type CheckoutWhereInput = {
    AND?: CheckoutWhereInput | CheckoutWhereInput[]
    OR?: CheckoutWhereInput[]
    NOT?: CheckoutWhereInput | CheckoutWhereInput[]
    checkoutId?: IntFilter<"Checkout"> | number
    checkInTime?: DateTimeFilter<"Checkout"> | Date | string
    checkOutTime?: DateTimeFilter<"Checkout"> | Date | string
    roomNumber?: IntFilter<"Checkout"> | number
    customerId?: IntFilter<"Checkout"> | number
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    room?: XOR<RoomRelationFilter, RoomWhereInput>
  }

  export type CheckoutOrderByWithRelationInput = {
    checkoutId?: SortOrder
    checkInTime?: SortOrder
    checkOutTime?: SortOrder
    roomNumber?: SortOrder
    customerId?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    room?: RoomOrderByWithRelationInput
  }

  export type CheckoutWhereUniqueInput = Prisma.AtLeast<{
    checkoutId?: number
    roomNumber?: number
    customerId?: number
    AND?: CheckoutWhereInput | CheckoutWhereInput[]
    OR?: CheckoutWhereInput[]
    NOT?: CheckoutWhereInput | CheckoutWhereInput[]
    checkInTime?: DateTimeFilter<"Checkout"> | Date | string
    checkOutTime?: DateTimeFilter<"Checkout"> | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    room?: XOR<RoomRelationFilter, RoomWhereInput>
  }, "checkoutId" | "roomNumber" | "customerId">

  export type CheckoutOrderByWithAggregationInput = {
    checkoutId?: SortOrder
    checkInTime?: SortOrder
    checkOutTime?: SortOrder
    roomNumber?: SortOrder
    customerId?: SortOrder
    _count?: CheckoutCountOrderByAggregateInput
    _avg?: CheckoutAvgOrderByAggregateInput
    _max?: CheckoutMaxOrderByAggregateInput
    _min?: CheckoutMinOrderByAggregateInput
    _sum?: CheckoutSumOrderByAggregateInput
  }

  export type CheckoutScalarWhereWithAggregatesInput = {
    AND?: CheckoutScalarWhereWithAggregatesInput | CheckoutScalarWhereWithAggregatesInput[]
    OR?: CheckoutScalarWhereWithAggregatesInput[]
    NOT?: CheckoutScalarWhereWithAggregatesInput | CheckoutScalarWhereWithAggregatesInput[]
    checkoutId?: IntWithAggregatesFilter<"Checkout"> | number
    checkInTime?: DateTimeWithAggregatesFilter<"Checkout"> | Date | string
    checkOutTime?: DateTimeWithAggregatesFilter<"Checkout"> | Date | string
    roomNumber?: IntWithAggregatesFilter<"Checkout"> | number
    customerId?: IntWithAggregatesFilter<"Checkout"> | number
  }

  export type CustomerCreateInput = {
    phone: string
    fullName: string
    gender: string
    country: string
    deposit: string
    checkInTime: Date | string
    checkout?: CheckoutCreateNestedOneWithoutCustomerInput
    room: RoomCreateNestedOneWithoutCustomersInput
  }

  export type CustomerUncheckedCreateInput = {
    customerId?: number
    phone: string
    fullName: string
    gender: string
    country: string
    roomNumber: number
    deposit: string
    checkInTime: Date | string
    checkout?: CheckoutUncheckedCreateNestedOneWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    phone?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    deposit?: StringFieldUpdateOperationsInput | string
    checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkout?: CheckoutUpdateOneWithoutCustomerNestedInput
    room?: RoomUpdateOneRequiredWithoutCustomersNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    customerId?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    roomNumber?: IntFieldUpdateOperationsInput | number
    deposit?: StringFieldUpdateOperationsInput | string
    checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkout?: CheckoutUncheckedUpdateOneWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    customerId?: number
    phone: string
    fullName: string
    gender: string
    country: string
    roomNumber: number
    deposit: string
    checkInTime: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    phone?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    deposit?: StringFieldUpdateOperationsInput | string
    checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    customerId?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    roomNumber?: IntFieldUpdateOperationsInput | number
    deposit?: StringFieldUpdateOperationsInput | string
    checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateInput = {
    availability: string
    cleaningStatus: string
    price: string
    bedType: string
    customers?: CustomerCreateNestedOneWithoutRoomInput
    checkout?: CheckoutCreateNestedOneWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    roomNumber?: number
    availability: string
    cleaningStatus: string
    price: string
    bedType: string
    customers?: CustomerUncheckedCreateNestedOneWithoutRoomInput
    checkout?: CheckoutUncheckedCreateNestedOneWithoutRoomInput
  }

  export type RoomUpdateInput = {
    availability?: StringFieldUpdateOperationsInput | string
    cleaningStatus?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    bedType?: StringFieldUpdateOperationsInput | string
    customers?: CustomerUpdateOneWithoutRoomNestedInput
    checkout?: CheckoutUpdateOneWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    roomNumber?: IntFieldUpdateOperationsInput | number
    availability?: StringFieldUpdateOperationsInput | string
    cleaningStatus?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    bedType?: StringFieldUpdateOperationsInput | string
    customers?: CustomerUncheckedUpdateOneWithoutRoomNestedInput
    checkout?: CheckoutUncheckedUpdateOneWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    roomNumber?: number
    availability: string
    cleaningStatus: string
    price: string
    bedType: string
  }

  export type RoomUpdateManyMutationInput = {
    availability?: StringFieldUpdateOperationsInput | string
    cleaningStatus?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    bedType?: StringFieldUpdateOperationsInput | string
  }

  export type RoomUncheckedUpdateManyInput = {
    roomNumber?: IntFieldUpdateOperationsInput | number
    availability?: StringFieldUpdateOperationsInput | string
    cleaningStatus?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    bedType?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeCreateInput = {
    fullName: string
    job: string
    gender: string
    age: string
    salary: string
    phone: string
    adhar: string
    email: string
  }

  export type EmployeeUncheckedCreateInput = {
    employeeId?: number
    fullName: string
    job: string
    gender: string
    age: string
    salary: string
    phone: string
    adhar: string
    email: string
  }

  export type EmployeeUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    job?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    adhar?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeUncheckedUpdateInput = {
    employeeId?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    job?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    adhar?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeCreateManyInput = {
    employeeId?: number
    fullName: string
    job: string
    gender: string
    age: string
    salary: string
    phone: string
    adhar: string
    email: string
  }

  export type EmployeeUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    job?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    adhar?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    employeeId?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    job?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    adhar?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type CheckoutCreateInput = {
    checkInTime: Date | string
    checkOutTime: Date | string
    customer: CustomerCreateNestedOneWithoutCheckoutInput
    room: RoomCreateNestedOneWithoutCheckoutInput
  }

  export type CheckoutUncheckedCreateInput = {
    checkoutId?: number
    checkInTime: Date | string
    checkOutTime: Date | string
    roomNumber: number
    customerId: number
  }

  export type CheckoutUpdateInput = {
    checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutTime?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutCheckoutNestedInput
    room?: RoomUpdateOneRequiredWithoutCheckoutNestedInput
  }

  export type CheckoutUncheckedUpdateInput = {
    checkoutId?: IntFieldUpdateOperationsInput | number
    checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutTime?: DateTimeFieldUpdateOperationsInput | Date | string
    roomNumber?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
  }

  export type CheckoutCreateManyInput = {
    checkoutId?: number
    checkInTime: Date | string
    checkOutTime: Date | string
    roomNumber: number
    customerId: number
  }

  export type CheckoutUpdateManyMutationInput = {
    checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckoutUncheckedUpdateManyInput = {
    checkoutId?: IntFieldUpdateOperationsInput | number
    checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutTime?: DateTimeFieldUpdateOperationsInput | Date | string
    roomNumber?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
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

  export type CheckoutNullableRelationFilter = {
    is?: CheckoutWhereInput | null
    isNot?: CheckoutWhereInput | null
  }

  export type RoomRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type CustomerCountOrderByAggregateInput = {
    customerId?: SortOrder
    phone?: SortOrder
    fullName?: SortOrder
    gender?: SortOrder
    country?: SortOrder
    roomNumber?: SortOrder
    deposit?: SortOrder
    checkInTime?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    customerId?: SortOrder
    roomNumber?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    customerId?: SortOrder
    phone?: SortOrder
    fullName?: SortOrder
    gender?: SortOrder
    country?: SortOrder
    roomNumber?: SortOrder
    deposit?: SortOrder
    checkInTime?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    customerId?: SortOrder
    phone?: SortOrder
    fullName?: SortOrder
    gender?: SortOrder
    country?: SortOrder
    roomNumber?: SortOrder
    deposit?: SortOrder
    checkInTime?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    customerId?: SortOrder
    roomNumber?: SortOrder
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

  export type CustomerNullableRelationFilter = {
    is?: CustomerWhereInput | null
    isNot?: CustomerWhereInput | null
  }

  export type RoomCountOrderByAggregateInput = {
    roomNumber?: SortOrder
    availability?: SortOrder
    cleaningStatus?: SortOrder
    price?: SortOrder
    bedType?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    roomNumber?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    roomNumber?: SortOrder
    availability?: SortOrder
    cleaningStatus?: SortOrder
    price?: SortOrder
    bedType?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    roomNumber?: SortOrder
    availability?: SortOrder
    cleaningStatus?: SortOrder
    price?: SortOrder
    bedType?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    roomNumber?: SortOrder
  }

  export type EmployeeCountOrderByAggregateInput = {
    employeeId?: SortOrder
    fullName?: SortOrder
    job?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    salary?: SortOrder
    phone?: SortOrder
    adhar?: SortOrder
    email?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    employeeId?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    employeeId?: SortOrder
    fullName?: SortOrder
    job?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    salary?: SortOrder
    phone?: SortOrder
    adhar?: SortOrder
    email?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    employeeId?: SortOrder
    fullName?: SortOrder
    job?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    salary?: SortOrder
    phone?: SortOrder
    adhar?: SortOrder
    email?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    employeeId?: SortOrder
  }

  export type CustomerRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type CheckoutCountOrderByAggregateInput = {
    checkoutId?: SortOrder
    checkInTime?: SortOrder
    checkOutTime?: SortOrder
    roomNumber?: SortOrder
    customerId?: SortOrder
  }

  export type CheckoutAvgOrderByAggregateInput = {
    checkoutId?: SortOrder
    roomNumber?: SortOrder
    customerId?: SortOrder
  }

  export type CheckoutMaxOrderByAggregateInput = {
    checkoutId?: SortOrder
    checkInTime?: SortOrder
    checkOutTime?: SortOrder
    roomNumber?: SortOrder
    customerId?: SortOrder
  }

  export type CheckoutMinOrderByAggregateInput = {
    checkoutId?: SortOrder
    checkInTime?: SortOrder
    checkOutTime?: SortOrder
    roomNumber?: SortOrder
    customerId?: SortOrder
  }

  export type CheckoutSumOrderByAggregateInput = {
    checkoutId?: SortOrder
    roomNumber?: SortOrder
    customerId?: SortOrder
  }

  export type CheckoutCreateNestedOneWithoutCustomerInput = {
    create?: XOR<CheckoutCreateWithoutCustomerInput, CheckoutUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: CheckoutCreateOrConnectWithoutCustomerInput
    connect?: CheckoutWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutCustomersInput = {
    create?: XOR<RoomCreateWithoutCustomersInput, RoomUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: RoomCreateOrConnectWithoutCustomersInput
    connect?: RoomWhereUniqueInput
  }

  export type CheckoutUncheckedCreateNestedOneWithoutCustomerInput = {
    create?: XOR<CheckoutCreateWithoutCustomerInput, CheckoutUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: CheckoutCreateOrConnectWithoutCustomerInput
    connect?: CheckoutWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CheckoutUpdateOneWithoutCustomerNestedInput = {
    create?: XOR<CheckoutCreateWithoutCustomerInput, CheckoutUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: CheckoutCreateOrConnectWithoutCustomerInput
    upsert?: CheckoutUpsertWithoutCustomerInput
    disconnect?: CheckoutWhereInput | boolean
    delete?: CheckoutWhereInput | boolean
    connect?: CheckoutWhereUniqueInput
    update?: XOR<XOR<CheckoutUpdateToOneWithWhereWithoutCustomerInput, CheckoutUpdateWithoutCustomerInput>, CheckoutUncheckedUpdateWithoutCustomerInput>
  }

  export type RoomUpdateOneRequiredWithoutCustomersNestedInput = {
    create?: XOR<RoomCreateWithoutCustomersInput, RoomUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: RoomCreateOrConnectWithoutCustomersInput
    upsert?: RoomUpsertWithoutCustomersInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutCustomersInput, RoomUpdateWithoutCustomersInput>, RoomUncheckedUpdateWithoutCustomersInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CheckoutUncheckedUpdateOneWithoutCustomerNestedInput = {
    create?: XOR<CheckoutCreateWithoutCustomerInput, CheckoutUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: CheckoutCreateOrConnectWithoutCustomerInput
    upsert?: CheckoutUpsertWithoutCustomerInput
    disconnect?: CheckoutWhereInput | boolean
    delete?: CheckoutWhereInput | boolean
    connect?: CheckoutWhereUniqueInput
    update?: XOR<XOR<CheckoutUpdateToOneWithWhereWithoutCustomerInput, CheckoutUpdateWithoutCustomerInput>, CheckoutUncheckedUpdateWithoutCustomerInput>
  }

  export type CustomerCreateNestedOneWithoutRoomInput = {
    create?: XOR<CustomerCreateWithoutRoomInput, CustomerUncheckedCreateWithoutRoomInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutRoomInput
    connect?: CustomerWhereUniqueInput
  }

  export type CheckoutCreateNestedOneWithoutRoomInput = {
    create?: XOR<CheckoutCreateWithoutRoomInput, CheckoutUncheckedCreateWithoutRoomInput>
    connectOrCreate?: CheckoutCreateOrConnectWithoutRoomInput
    connect?: CheckoutWhereUniqueInput
  }

  export type CustomerUncheckedCreateNestedOneWithoutRoomInput = {
    create?: XOR<CustomerCreateWithoutRoomInput, CustomerUncheckedCreateWithoutRoomInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutRoomInput
    connect?: CustomerWhereUniqueInput
  }

  export type CheckoutUncheckedCreateNestedOneWithoutRoomInput = {
    create?: XOR<CheckoutCreateWithoutRoomInput, CheckoutUncheckedCreateWithoutRoomInput>
    connectOrCreate?: CheckoutCreateOrConnectWithoutRoomInput
    connect?: CheckoutWhereUniqueInput
  }

  export type CustomerUpdateOneWithoutRoomNestedInput = {
    create?: XOR<CustomerCreateWithoutRoomInput, CustomerUncheckedCreateWithoutRoomInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutRoomInput
    upsert?: CustomerUpsertWithoutRoomInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutRoomInput, CustomerUpdateWithoutRoomInput>, CustomerUncheckedUpdateWithoutRoomInput>
  }

  export type CheckoutUpdateOneWithoutRoomNestedInput = {
    create?: XOR<CheckoutCreateWithoutRoomInput, CheckoutUncheckedCreateWithoutRoomInput>
    connectOrCreate?: CheckoutCreateOrConnectWithoutRoomInput
    upsert?: CheckoutUpsertWithoutRoomInput
    disconnect?: CheckoutWhereInput | boolean
    delete?: CheckoutWhereInput | boolean
    connect?: CheckoutWhereUniqueInput
    update?: XOR<XOR<CheckoutUpdateToOneWithWhereWithoutRoomInput, CheckoutUpdateWithoutRoomInput>, CheckoutUncheckedUpdateWithoutRoomInput>
  }

  export type CustomerUncheckedUpdateOneWithoutRoomNestedInput = {
    create?: XOR<CustomerCreateWithoutRoomInput, CustomerUncheckedCreateWithoutRoomInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutRoomInput
    upsert?: CustomerUpsertWithoutRoomInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutRoomInput, CustomerUpdateWithoutRoomInput>, CustomerUncheckedUpdateWithoutRoomInput>
  }

  export type CheckoutUncheckedUpdateOneWithoutRoomNestedInput = {
    create?: XOR<CheckoutCreateWithoutRoomInput, CheckoutUncheckedCreateWithoutRoomInput>
    connectOrCreate?: CheckoutCreateOrConnectWithoutRoomInput
    upsert?: CheckoutUpsertWithoutRoomInput
    disconnect?: CheckoutWhereInput | boolean
    delete?: CheckoutWhereInput | boolean
    connect?: CheckoutWhereUniqueInput
    update?: XOR<XOR<CheckoutUpdateToOneWithWhereWithoutRoomInput, CheckoutUpdateWithoutRoomInput>, CheckoutUncheckedUpdateWithoutRoomInput>
  }

  export type CustomerCreateNestedOneWithoutCheckoutInput = {
    create?: XOR<CustomerCreateWithoutCheckoutInput, CustomerUncheckedCreateWithoutCheckoutInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutCheckoutInput
    connect?: CustomerWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutCheckoutInput = {
    create?: XOR<RoomCreateWithoutCheckoutInput, RoomUncheckedCreateWithoutCheckoutInput>
    connectOrCreate?: RoomCreateOrConnectWithoutCheckoutInput
    connect?: RoomWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutCheckoutNestedInput = {
    create?: XOR<CustomerCreateWithoutCheckoutInput, CustomerUncheckedCreateWithoutCheckoutInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutCheckoutInput
    upsert?: CustomerUpsertWithoutCheckoutInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutCheckoutInput, CustomerUpdateWithoutCheckoutInput>, CustomerUncheckedUpdateWithoutCheckoutInput>
  }

  export type RoomUpdateOneRequiredWithoutCheckoutNestedInput = {
    create?: XOR<RoomCreateWithoutCheckoutInput, RoomUncheckedCreateWithoutCheckoutInput>
    connectOrCreate?: RoomCreateOrConnectWithoutCheckoutInput
    upsert?: RoomUpsertWithoutCheckoutInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutCheckoutInput, RoomUpdateWithoutCheckoutInput>, RoomUncheckedUpdateWithoutCheckoutInput>
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

  export type CheckoutCreateWithoutCustomerInput = {
    checkInTime: Date | string
    checkOutTime: Date | string
    room: RoomCreateNestedOneWithoutCheckoutInput
  }

  export type CheckoutUncheckedCreateWithoutCustomerInput = {
    checkoutId?: number
    checkInTime: Date | string
    checkOutTime: Date | string
    roomNumber: number
  }

  export type CheckoutCreateOrConnectWithoutCustomerInput = {
    where: CheckoutWhereUniqueInput
    create: XOR<CheckoutCreateWithoutCustomerInput, CheckoutUncheckedCreateWithoutCustomerInput>
  }

  export type RoomCreateWithoutCustomersInput = {
    availability: string
    cleaningStatus: string
    price: string
    bedType: string
    checkout?: CheckoutCreateNestedOneWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutCustomersInput = {
    roomNumber?: number
    availability: string
    cleaningStatus: string
    price: string
    bedType: string
    checkout?: CheckoutUncheckedCreateNestedOneWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutCustomersInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutCustomersInput, RoomUncheckedCreateWithoutCustomersInput>
  }

  export type CheckoutUpsertWithoutCustomerInput = {
    update: XOR<CheckoutUpdateWithoutCustomerInput, CheckoutUncheckedUpdateWithoutCustomerInput>
    create: XOR<CheckoutCreateWithoutCustomerInput, CheckoutUncheckedCreateWithoutCustomerInput>
    where?: CheckoutWhereInput
  }

  export type CheckoutUpdateToOneWithWhereWithoutCustomerInput = {
    where?: CheckoutWhereInput
    data: XOR<CheckoutUpdateWithoutCustomerInput, CheckoutUncheckedUpdateWithoutCustomerInput>
  }

  export type CheckoutUpdateWithoutCustomerInput = {
    checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutTime?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutCheckoutNestedInput
  }

  export type CheckoutUncheckedUpdateWithoutCustomerInput = {
    checkoutId?: IntFieldUpdateOperationsInput | number
    checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutTime?: DateTimeFieldUpdateOperationsInput | Date | string
    roomNumber?: IntFieldUpdateOperationsInput | number
  }

  export type RoomUpsertWithoutCustomersInput = {
    update: XOR<RoomUpdateWithoutCustomersInput, RoomUncheckedUpdateWithoutCustomersInput>
    create: XOR<RoomCreateWithoutCustomersInput, RoomUncheckedCreateWithoutCustomersInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutCustomersInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutCustomersInput, RoomUncheckedUpdateWithoutCustomersInput>
  }

  export type RoomUpdateWithoutCustomersInput = {
    availability?: StringFieldUpdateOperationsInput | string
    cleaningStatus?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    bedType?: StringFieldUpdateOperationsInput | string
    checkout?: CheckoutUpdateOneWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutCustomersInput = {
    roomNumber?: IntFieldUpdateOperationsInput | number
    availability?: StringFieldUpdateOperationsInput | string
    cleaningStatus?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    bedType?: StringFieldUpdateOperationsInput | string
    checkout?: CheckoutUncheckedUpdateOneWithoutRoomNestedInput
  }

  export type CustomerCreateWithoutRoomInput = {
    phone: string
    fullName: string
    gender: string
    country: string
    deposit: string
    checkInTime: Date | string
    checkout?: CheckoutCreateNestedOneWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutRoomInput = {
    customerId?: number
    phone: string
    fullName: string
    gender: string
    country: string
    deposit: string
    checkInTime: Date | string
    checkout?: CheckoutUncheckedCreateNestedOneWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutRoomInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutRoomInput, CustomerUncheckedCreateWithoutRoomInput>
  }

  export type CheckoutCreateWithoutRoomInput = {
    checkInTime: Date | string
    checkOutTime: Date | string
    customer: CustomerCreateNestedOneWithoutCheckoutInput
  }

  export type CheckoutUncheckedCreateWithoutRoomInput = {
    checkoutId?: number
    checkInTime: Date | string
    checkOutTime: Date | string
    customerId: number
  }

  export type CheckoutCreateOrConnectWithoutRoomInput = {
    where: CheckoutWhereUniqueInput
    create: XOR<CheckoutCreateWithoutRoomInput, CheckoutUncheckedCreateWithoutRoomInput>
  }

  export type CustomerUpsertWithoutRoomInput = {
    update: XOR<CustomerUpdateWithoutRoomInput, CustomerUncheckedUpdateWithoutRoomInput>
    create: XOR<CustomerCreateWithoutRoomInput, CustomerUncheckedCreateWithoutRoomInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutRoomInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutRoomInput, CustomerUncheckedUpdateWithoutRoomInput>
  }

  export type CustomerUpdateWithoutRoomInput = {
    phone?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    deposit?: StringFieldUpdateOperationsInput | string
    checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkout?: CheckoutUpdateOneWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutRoomInput = {
    customerId?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    deposit?: StringFieldUpdateOperationsInput | string
    checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkout?: CheckoutUncheckedUpdateOneWithoutCustomerNestedInput
  }

  export type CheckoutUpsertWithoutRoomInput = {
    update: XOR<CheckoutUpdateWithoutRoomInput, CheckoutUncheckedUpdateWithoutRoomInput>
    create: XOR<CheckoutCreateWithoutRoomInput, CheckoutUncheckedCreateWithoutRoomInput>
    where?: CheckoutWhereInput
  }

  export type CheckoutUpdateToOneWithWhereWithoutRoomInput = {
    where?: CheckoutWhereInput
    data: XOR<CheckoutUpdateWithoutRoomInput, CheckoutUncheckedUpdateWithoutRoomInput>
  }

  export type CheckoutUpdateWithoutRoomInput = {
    checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutTime?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutCheckoutNestedInput
  }

  export type CheckoutUncheckedUpdateWithoutRoomInput = {
    checkoutId?: IntFieldUpdateOperationsInput | number
    checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutTime?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: IntFieldUpdateOperationsInput | number
  }

  export type CustomerCreateWithoutCheckoutInput = {
    phone: string
    fullName: string
    gender: string
    country: string
    deposit: string
    checkInTime: Date | string
    room: RoomCreateNestedOneWithoutCustomersInput
  }

  export type CustomerUncheckedCreateWithoutCheckoutInput = {
    customerId?: number
    phone: string
    fullName: string
    gender: string
    country: string
    roomNumber: number
    deposit: string
    checkInTime: Date | string
  }

  export type CustomerCreateOrConnectWithoutCheckoutInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutCheckoutInput, CustomerUncheckedCreateWithoutCheckoutInput>
  }

  export type RoomCreateWithoutCheckoutInput = {
    availability: string
    cleaningStatus: string
    price: string
    bedType: string
    customers?: CustomerCreateNestedOneWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutCheckoutInput = {
    roomNumber?: number
    availability: string
    cleaningStatus: string
    price: string
    bedType: string
    customers?: CustomerUncheckedCreateNestedOneWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutCheckoutInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutCheckoutInput, RoomUncheckedCreateWithoutCheckoutInput>
  }

  export type CustomerUpsertWithoutCheckoutInput = {
    update: XOR<CustomerUpdateWithoutCheckoutInput, CustomerUncheckedUpdateWithoutCheckoutInput>
    create: XOR<CustomerCreateWithoutCheckoutInput, CustomerUncheckedCreateWithoutCheckoutInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutCheckoutInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutCheckoutInput, CustomerUncheckedUpdateWithoutCheckoutInput>
  }

  export type CustomerUpdateWithoutCheckoutInput = {
    phone?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    deposit?: StringFieldUpdateOperationsInput | string
    checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutCustomersNestedInput
  }

  export type CustomerUncheckedUpdateWithoutCheckoutInput = {
    customerId?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    roomNumber?: IntFieldUpdateOperationsInput | number
    deposit?: StringFieldUpdateOperationsInput | string
    checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUpsertWithoutCheckoutInput = {
    update: XOR<RoomUpdateWithoutCheckoutInput, RoomUncheckedUpdateWithoutCheckoutInput>
    create: XOR<RoomCreateWithoutCheckoutInput, RoomUncheckedCreateWithoutCheckoutInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutCheckoutInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutCheckoutInput, RoomUncheckedUpdateWithoutCheckoutInput>
  }

  export type RoomUpdateWithoutCheckoutInput = {
    availability?: StringFieldUpdateOperationsInput | string
    cleaningStatus?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    bedType?: StringFieldUpdateOperationsInput | string
    customers?: CustomerUpdateOneWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutCheckoutInput = {
    roomNumber?: IntFieldUpdateOperationsInput | number
    availability?: StringFieldUpdateOperationsInput | string
    cleaningStatus?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    bedType?: StringFieldUpdateOperationsInput | string
    customers?: CustomerUncheckedUpdateOneWithoutRoomNestedInput
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CustomerDefaultArgs instead
     */
    export type CustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoomDefaultArgs instead
     */
    export type RoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoomDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmployeeDefaultArgs instead
     */
    export type EmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmployeeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CheckoutDefaultArgs instead
     */
    export type CheckoutArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CheckoutDefaultArgs<ExtArgs>

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