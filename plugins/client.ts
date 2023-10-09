import process from 'node:process'
import { loggerLink } from '@trpc/client'
import superjson from 'superjson'
import { createTRPCNuxtClient, httpBatchLink } from 'trpc-nuxt/client'
import type { AppRouter } from '~~/server/trpc/routers'

function getBaseUrl() {
  if (typeof window !== 'undefined')
    return '' // browser should use relative url
  if (process.env.VERCEL_URL)
    return `https://${process.env.VERCEL_URL}` // SSR should use vercel url
  return `http://localhost:${process.env.PORT ?? 3000}` // dev SSR should use localhost
}

export default defineNuxtPlugin(() => {
  const client = createTRPCNuxtClient<AppRouter>({
    transformer: superjson,
    links: [
      // adds pretty logs to your console in development and logs errors in production
      loggerLink({
        enabled: opts =>
          process.env.NODE_ENV === 'development'
          || (opts.direction === 'down' && opts.result instanceof Error),
      }),
      httpBatchLink({ url: `${getBaseUrl()}/api/trpc` }),
    ],
  })

  return {
    provide: {
      client,
    },
  }
})
