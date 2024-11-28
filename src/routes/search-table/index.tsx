import {useEffect, useState} from 'react'
import {fetchData, LIMIT, TOTAL, User} from './api'

const SearchTable = () => {
  const [data, setData] = useState<User[]>([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    try {
      ;(async () => {
        setLoading(true)
        const result = await fetchData(page)
        setData(result.data)
        setLoading(false)
      })()
    } catch (error) {
      setLoading(false)
      console.error('error occured while fetching data: ', error)
    }
  }, [page])

  return (
    <div>
      <div>
        Search by name:{' '}
        <input
          type='text'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      {loading ? (
        'data is loading'
      ) : data.length ? (
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>age</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((user) => user.name.toLowerCase().includes(searchInput))
              .map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        'No data to display'
      )}
      <div style={{marginTop: '2rem'}}>
        {data.length && !loading
          ? Array(Math.ceil(TOTAL / LIMIT))
              .fill(0)
              .map((_, i) => (
                <span
                  style={{
                    padding: '.7rem',
                    border: '1px solid',
                    marginLeft: '.5rem',
                    cursor: 'pointer',
                  }}
                  onClick={() => setPage(i + 1)}
                  key={i}
                >
                  {i + 1}
                </span>
              ))
          : null}
      </div>
    </div>
  )
}

export default SearchTable
