export type ValueOf<T> = T extends unknown[] ? T[number] : T[keyof T];

export type ArgsType<T> = T extends (...args: infer U) => unknown ? U : never;

export type FirstArgument<T> = T extends (
  arg1: infer U,
  ...args: unknown[]
) => unknown
  ? U
  : unknown;

export type SecondArgument<T> = T extends (
  arg1: FirstArgument<keyof T>,
  arg2: infer U,
  ...args: unknown[]
) => unknown
  ? U
  : unknown;

export const keys = <T>(input: T) => Object.keys(input) as (keyof T)[];
export const values = <T>(input: T) => Object.values(input) as ValueOf<T>[];

export type NonNullableSome<T, K extends keyof T> = T &
  { [key in K]-?: NonNullable<T[K]> };

export function isErrorLike(error: unknown): error is Error {
  return typeof error === "object" && error !== null && "message" in error;
}
