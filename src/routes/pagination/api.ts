import {APIResponse} from '.'

export const fetchData = (
  page: number,
  limit: number
): Promise<APIResponse> => {
  let start = (page - 1) * limit
  let end = start + limit

  return new Promise((resolve, _) => {
    setTimeout(() => {
      const data = Array.from({length: 50}, (_, i) => `Item number ${i}`)
      resolve({
        data: data.slice(start, end),
        total: 50,
      })
    }, 2000)
  })
}
