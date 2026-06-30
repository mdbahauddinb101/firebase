import { useState, useEffect } from 'react'
import { ref, set, push, onValue, remove } from "firebase/database";
import { db } from './firebase.config';


const App = () => {
  const [todo, setTodo] = useState('')
  const [todolist, setTodolist] = useState([])

  const handleTask = (e) => {
    setTodo(e.target.value)
  }

  const handleSubmit = () => {
  set(push(ref(db, 'todolist/')), {
    todo: todo,
  });
    setTodo('');
  };


  useEffect(() => {
    const todolistRef = ref(db, "todolist/");
 onValue(todolistRef, (snapshot) => {
  let arr = []
 snapshot.forEach((item) => {
   arr.push({...item.val(), id: item.key})
  setTodolist(arr)
 })
});


  }, [])



  const handleDelete = (item) => {
remove(ref(db, "todolist/" + item.id))
 setTodolist(todolist.filter((todo) => todo.id !== item.id));
  };

return (
    <>
    <div className='flex flex-col justify-center items-center h-screen'>
    <div  style={{ display: 'flex', gap: '8px', padding: '20px' }}>

      <input onChange={handleTask}
        value={todo}
        type="text"
        placeholder="Type something..." 
        style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <button className='bg-blue-500 text-[white] p-2 rounded-lg' onClick={handleSubmit}>
        Submit
      </button>
        </div>
      <ul>
      {
        todolist.map((item) => {
          return (
           
              <li className='list-disc'>{item.todo} <button onClick={() =>handleDelete(item)} className='bg-blue-500 text-[white] p-2 rounded-lg m-4'>Delete </button></li>
          
          )
        })
      }
     </ul>
     </div>
  </>

)
}

export default App