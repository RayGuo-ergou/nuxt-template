import process from 'node:process'
import { PrismaClient } from '@prisma/client'

export const prisma
  = globalThis.prisma
  || new PrismaClient({
    log:
      process.env.NODE_ENV === 'development'
        ? ['query', 'error', 'warn']
        : ['error'],
  })

if (process.env.NODE_ENV !== 'production')
  globalThis.prisma = prisma
