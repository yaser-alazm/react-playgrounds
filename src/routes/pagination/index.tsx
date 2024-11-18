import {useEffect, useState} from 'react'
import {fetchData} from './api'

export type APIResponse = {
  total: number
  data: Array<string>
}

const LIMIT = 10

const Pagination = () => {
  const [data, setData] = useState<Array<string>>([])
  const [page, setPage] = useState<number>(1)
  const [total, setTotal] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    try {
      ;(async () => {
        setLoading(true)
        const result = await fetchData(page, LIMIT)
        setData(result.data)
        setTotal(result.total)
        setLoading(false)
      })()
    } catch (error) {
      console.error('Error while fetching data: ', error)
    }
  }, [page])

  return (
    <div>
      {loading ? (
        <h3>Loading</h3>
      ) : (
        <ul>
          {data.map((d) => (
            <li>{d}</li>
          ))}
        </ul>
      )}
      {!loading && total && (
        <div>
          {Array.from({length: Math.ceil(total / LIMIT)}, (_, i) => i + 1).map(
            (p) => (
              <span
                style={{
                  padding: '1rem',
                  border: 'solid 1px',
                  cursor: 'pointer',
                  marginRight: '.5rem',
                }}
                onClick={() => setPage(p)}
              >
                {p}
              </span>
            )
          )}
        </div>
      )}
    </div>
  )
}

export default Pagination
