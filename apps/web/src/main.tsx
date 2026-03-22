import './index.css'

import { RouterProvider } from '@tanstack/react-router'
import { router } from './routes'
import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "./provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <Provider>
        <RouterProvider router={router}/>
    </Provider>
    </React.StrictMode>
)