import './App.css';
import {useEffect, useState} from 'react'
import ToDoList from './components/ToDoList'
import {addDoc, collection, getDocs, deleteDoc, doc, updateDoc} from 'firebase/firestore'
import {db} from './firebase-config'

function App() {
  const [tasks, setTasks] = useState([])
  const [done, setDone] = useState(0)

  const list = collection(db, 'tasks');
  useEffect(() => {
    setDone(tasks.filter(a => a.done).length)
  }, [tasks])

  useEffect(() => {
    loadTasks()
  }, [])


  const doneTask = async task => {
    task.done = true;
    task.timeCompleted = Date.now();
    let item = await doc(db, "tasks", task.id);
    await updateDoc(item, task);
    setTasks([...tasks])
  }

  const cancelTask = async task => {
    task.done = false;
    task.timeCompleted = null;
    let item = await doc(db, "tasks", task.id);
    await updateDoc(item, task);
    setTasks([...tasks])
  }

  const loadTasks = async ()=>{

    let data = await getDocs(list);
    setTasks(data.docs.map(el => ({...el.data(), id: el.id})))

  }
  
  const addTask = async task => {
    await addDoc(list, task);
    setTasks([task,...tasks])
  }

  const Delete = async (task)=>{
    let item = await doc(db, "tasks", task.id);
    await deleteDoc(item);
    loadTasks();
  }

  return (
    <ToDoList
      data={tasks}
      done = {done}
      onComplete = {doneTask}
      onAdd = {addTask}
      onCancel = {cancelTask}
      onDelete = {Delete}
    />
  );
}

export default App;
