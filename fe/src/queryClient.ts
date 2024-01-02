import { httpBatchLink, createTRPCProxyClient } from '@trpc/client'

import { AppRouter } from '../trpc/router'

export const trpcClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `/trpc`
    })
  ]
})
