const mockData = [
  {id: 1, name: 'Alice', age: 25},
  {id: 2, name: 'Bob', age: 30},
  {id: 3, name: 'Charlie', age: 22},
  {id: 4, name: 'David', age: 35},
  {id: 5, name: 'Eve', age: 28},
  {id: 6, name: 'Frank', age: 24},
  {id: 7, name: 'Grace', age: 29},
  {id: 8, name: 'Hannah', age: 27},
  {id: 9, name: 'Isaac', age: 31},
  {id: 10, name: 'Jack', age: 26},
]

export type User = typeof mockData extends (infer U)[] ? U : never[]

export const LIMIT = 3 as const
export const TOTAL = mockData.length

export const fetchData = (page: number): Promise<{data: User[]}> => {
  const start = (page - 1) * LIMIT
  const end = start + LIMIT
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve({
        data: mockData.slice(start, end),
      })
    }, 2000)
  })
}
