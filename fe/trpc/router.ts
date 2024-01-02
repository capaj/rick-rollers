import { initTRPC } from '@trpc/server'
import { z } from 'zod'

const t = initTRPC.create()

const postRouter = t.router({
  createLink: t.procedure
    .input(z.object({ title: z.string() }))
    .mutation(({ input }) => {
      return new Date()
    }),
  topLinksThisWeek: t.procedure.query(() => {
    return [
      {
        title: 'hello',
        createdAt: new Date()
      }
    ]
  })
})

export const appRouter = t.router({
  post: postRouter,
  hello: t.procedure.input(z.string().nullish()).query(({ input }) => {
    return `hello ${input ?? 'world'}`
  })
})

export type AppRouter = typeof appRouter
