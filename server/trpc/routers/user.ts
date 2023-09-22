import { z } from 'zod'
import { publicProcedure, router } from '../trpc'

export const userRouter = router({
  addUser: publicProcedure
    .input(
      z.object({
        name: z.string().nullable(),
        email: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.user.create({
        data: {
          name: input.name,
          email: input.email,
        },
      })
    }),
  user: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany()
  }),
})

// export type definition of API
export type AppRouter = typeof userRouter
