import { createHashRouter } from 'react-router-dom'
import { App } from '@/App'
import { MainLayout } from '@/layouts/main_layout'

export const router = createHashRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [{
      path: '/',
      element: <App />,
    }, {
      path: '/2',
      element: <div>2</div>,
    }, {
      path: '/3',
      element: <div>3</div>,
    }],
  },
  {
    path: '/about',
    element: <div>About</div>,
  },
])
