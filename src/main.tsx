import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import '@/global.css'
import { router } from '@/router/router'

const div = document.getElementById('root')!
const app = ReactDOM.createRoot(div)

app.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

