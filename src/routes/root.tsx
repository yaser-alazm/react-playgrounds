import {Link} from 'react-router-dom'
const root = () => {
  return (
    <ul>
      <li>
        <Link to='/signup'> Signup </Link>
      </li>
      <li>
        <Link to='/todos'> Todos </Link>
      </li>
      <li>
        <Link to='/pagination'> Pagination </Link>
      </li>
    </ul>
  )
}

export default root
