import { useDispatch } from "react-redux"
import React,{ useState } from "react"
import { TodoType } from "../Type/Types"
import { CreateTodo } from "../Redux/todoSlice"

function TodoCreate ()  {
  const dispatch=useDispatch()
  const [newTodo, setnewTodo] = useState<string>('')  
  const handleClick= () => {
    if(newTodo.trim().length==0){
      alert('Todo Giriniz')
      return
    }
   
      const payload:TodoType={
        id:Math.floor(Math.random()*999999999),
        content:newTodo
      }
      dispatch(CreateTodo(payload))
      setnewTodo('')
    
    
  }
  return (
    <div className='TodoCreate'>
        <input
        value={newTodo} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setnewTodo(e.target.value)}
        placeholder="Todo Giriniz" className="TodoInput" type="text" />
        <button onClick={handleClick} className="CreateButton">Oluştur</button>
    </div>
  )
}

export default TodoCreate