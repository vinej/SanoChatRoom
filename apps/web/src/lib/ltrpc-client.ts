// apps/web/lib/ltrpc-client.ts
import type { AppRouter } from "@ltrpc/router/router";
import superjson from "superjson";
import { createTRPCClient, httpBatchLink,TRPCClient } from '@trpc/client';

export const ltrpc: TRPCClient<AppRouter> = createTRPCClient<AppRouter>({
  links: [httpBatchLink({ 
    url: 'http://localhost:3000/trpc',
    transformer: superjson,
  })],
});

