import './index.css'

import { RouterProvider } from '@tanstack/react-router'
import { router } from './routes'

import React from "react"
import ReactDOM from "react-dom/client"

import { createTRPCClient, httpBatchLink,TRPCClient } from '@trpc/client';
import { AppRouter } from '@ltrpc/router/router';
import superjson from 'superjson';

export const ltrpc: TRPCClient<AppRouter> = createTRPCClient<AppRouter>({
  links: [httpBatchLink({ 
    url: 'http://localhost:3000/trpc',
    transformer: superjson,
  })],
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
)