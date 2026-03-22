import './index.css'

import { RouterProvider } from '@tanstack/react-router'
import { router } from './routes'

import React from "react"
import ReactDOM from "react-dom/client"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
)