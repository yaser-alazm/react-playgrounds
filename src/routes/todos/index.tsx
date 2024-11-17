import {FormEvent, useEffect, useRef, useState} from 'react'

type Todo = {
  id: number
  text: string
  completed: boolean
}
const Todos = () => {
  const [todos, setTodos] = useState<Array<Todo>>([])
  const [toAddTodoText, setToAddTodoText] = useState<string>('')

  const initialFetch = useRef(false)

  const handleTodoSubmit = (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      const newTodo = {
        id: Math.ceil(Math.random() * 100),
        text: toAddTodoText,
        completed: false,
      }
      setLocalStorage(JSON.stringify([...todos, newTodo]))
      setTodos((prev) => [...prev, newTodo])
      setToAddTodoText('')
    } catch (error) {
      console.error('Unexpected error: ', error)
    }
  }

  const handleSetTodoCompleted = (todo: Todo) => {
    const newTodos = todos.map((td) => {
      if (td.id === todo.id) {
        td.completed = true
      }
      return td
    })
    setTodos(newTodos)
    setLocalStorage(JSON.stringify(newTodos))
  }

  const handledeleteTodo = (todo: Todo) => {
    const newTodos = todos.filter((td) => td.id !== todo.id)
    setTodos(newTodos)
    setLocalStorage(JSON.stringify(newTodos))
  }

  const setLocalStorage = (todos: string) => {
    localStorage.setItem('todos', todos)
  }

  useEffect(() => {
    if (!initialFetch.current) {
      const savedTodos = localStorage.getItem('todos')
      if (savedTodos?.length) {
        const parsedSavedTodos = JSON.parse(savedTodos)
        setTodos(parsedSavedTodos)
      }
      initialFetch.current = true
    }
  }, [])

  return (
    <>
      <div>
        <h4>Add a task</h4>
        <form action='submit' onSubmit={handleTodoSubmit}>
          <input
            type='text'
            placeholder='add here'
            value={toAddTodoText}
            onChange={(e) => setToAddTodoText(e.target.value)}
          />
          <button type='submit'>Add</button>
        </form>
      </div>
      <div>
        <h4>Not completed tasks</h4>
        {todos
          .filter((todo) => !todo.completed)
          .map((todo) => (
            <div>
              {todo.text}
              <button onClick={() => handleSetTodoCompleted(todo)}>
                completed
              </button>
            </div>
          ))}
      </div>
      <div>
        <h4>Completed tasks</h4>
        {todos
          .filter((todo) => todo.completed)
          .map((todo) => (
            <div>
              {todo.text}
              <button onClick={() => handledeleteTodo(todo)}>delete</button>
            </div>
          ))}
      </div>
    </>
  )
}

export default Todos
