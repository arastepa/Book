import styles from './style.module.css'
import {useState} from 'react'

const ToDoForm = ({onAdd, data}) => {
    const [text, setText] = useState("")
    const [red, setRed] = useState(false)

    return <form onSubmit={(e) => {
            e.preventDefault()
            if(!text.trim()){
                return
            }
            if (data.find(el =>(el.text === text)))
            {
                setRed(true);
                return ;
            }
            onAdd({
                id: Date.now() + "-" + parseInt(Math.random() * 1E9),
                text,
                timeAdded: Date.now(),
                timeCompleted: null,
                done: false
            })
            setText("")
            setRed(false)
        }}>
            <input
                type="text"
                value = {text}
                className = {`${styles.control} ${red && styles.red}`}
                onChange = {e => setText(e.target.value)}
            />
            <button>save</button>
    </form>
}
export default ToDoForm