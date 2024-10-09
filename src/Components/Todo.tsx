import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { TodoType } from "../Type/Types";
import { useDispatch } from "react-redux";
import {removeTodo, updateTodo} from '../Redux/todoSlice'
import { useState } from "react";

interface TodoProps{
  todoProps:TodoType
}
const Todo = ({todoProps}:TodoProps) => {
  const {id,content}=todoProps;
  const dispatch=useDispatch()
  const [edit, setEdit] = useState<Boolean>(false)
  const [newTodo, setnewTodo] = useState(content)
  const HandleRemove=() => {
    dispatch(removeTodo(id))
  }
const Handleupdate=() => {
  const payload:TodoType={
    id:id,
    content:newTodo
  }
  dispatch(updateTodo(payload))
  setEdit(false);
}
  
  return (
    <div className="listİcons">
        {edit ?  <input type="text" style={{width:'400px',border:'none',borderBottom:'1px solid lightgrey',outline:'none' }}
         value={newTodo} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setnewTodo(e.target.value)}/> : <div>{content}</div>}
        <div>
            <IoMdRemoveCircleOutline onClick={HandleRemove} className="İcons" style={{marginRight:'10px'}}/>
            {edit ? <FaCheck className="İcons" onClick={Handleupdate}/> :  <FaRegEdit onClick={()=>setEdit(true)} className="İcons"/> }
           
        </div>
    </div>
  )
}

export default Todo