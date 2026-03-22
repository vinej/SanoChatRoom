import './index.css'

import { RouterProvider } from '@tanstack/react-router'
import { router } from './routes'

import React from "react"
import ReactDOM from "react-dom/client"
import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '@server/appRouter';

//     👆 **type-only** imports are stripped acd ..t build time
 
// Pass AppRouter as a type parameter. 👇 This lets `trpc` know
// what procedures are available on the server and their input/output types.
export const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({ url: 'http://localhost:3000' }),
  ],
}); 

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
)