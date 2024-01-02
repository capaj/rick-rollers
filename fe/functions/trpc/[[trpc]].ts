import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { appRouter } from '../../trpc/router'
import { drizzle } from 'drizzle-orm/d1'

export interface Env {
  DB: D1Database
}

export const onRequest: PagesFunction<Env> = (context) => {
  const db = drizzle(context.env.DB)

  return fetchRequestHandler({
    endpoint: '/trpc',
    req: context.request,
    router: appRouter,
    createContext: () => ({
      db
    })
  })
}
