
import { useSelector, useDispatch } from 'react-redux'
import { addTodo,deleteTodo } from './features/counter/counterSlice'
import { useState } from 'react'

export function Counter() {
  const Todo = useSelector((state) => state.todo.value)
  const dispatch = useDispatch()
  const[input, setInput] = useState("")
 
  function handleChange(event){
    setInput(event.target.value)
  }

  return (
    <>
    
      <div className='border-4 border-red-500 p-4 '>
      <h1>Todo</h1>
      <input type="text" className='p-1 border-2 rounded-md' placeholder='Enter Todos'
      value={input}
        onChange={handleChange}
      />
      <button className='m-2' onClick={() => dispatch(addTodo(input))}>Add Todo</button>
      {Todo.map((e)=>(
       <div className="flex" key={e.id}>
        <input className=" m-3 p-1 rounded-lg" defaultValue={e.text} />
        <button className="m-3 w-20 p-1" onClick={() => dispatch(deleteTodo(e.id))} >Delete</button>
        <button className="m-3 w-20 p-1" onClick={()=> {handleEdit(e.id,prompt("Enter value"))}} >Edit</button>
      </div>
      ))}
    </div>
    </>
  )
}