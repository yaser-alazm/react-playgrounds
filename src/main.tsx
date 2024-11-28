import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Signup from './routes/signup'
import Root from './routes/root'
import Todos from './routes/todos'
import Pagination from './routes/pagination'
import SearchTable from './routes/search-table'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/todos',
    element: <Todos />,
  },
  {
    path: '/pagination',
    element: <Pagination />,
  },
  {
    path: '/search-table',
    element: <SearchTable />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
