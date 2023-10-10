import type { PrismaClient } from '@prisma/client'

/**
 * @info To declare types for globalThis variables, define with `declare global`
 * @see https://stackoverflow.com/a/64197006
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#type-checking-for-globalthis
 */
declare global{

  // eslint-disable-next-line
  var prisma: PrismaClient | undefined
}
