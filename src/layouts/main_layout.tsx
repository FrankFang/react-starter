import { Link, Outlet } from 'react-router-dom'

export const MainLayout: React.FC = () => {
  return (
    <div>
      <nav>
        <ul className="flex flex-nowrap gap-x-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/2">Page 2</Link>
          </li>
          <li>
            <Link to="/3">Page 3</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />

    </div>
  )
}
