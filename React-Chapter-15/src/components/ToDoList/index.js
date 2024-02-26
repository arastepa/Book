import ToDoForm from '../ToDoForm'
import ToDoItem from '../ToDoItem'
import styles from './style.module.css'
import {useEffect, useState} from 'react'

const ToDoList = ({ data, done, ...props }) => {
    const [dis, setDis] = useState('column');

    return <div className={styles.container}>
        <button className={styles.btn} onClick={()=>setDis('row')}>Row</button>
        <button className = {styles.btn} onClick={()=>setDis('column')}>Column</button>
        <ToDoForm onAdd={props.onAdd} data = {data} />
        <div className={`${styles.parent}, ${dis === 'column' ? styles.column : styles.row}`}>
            {
                data.map((item, index) =>
                    <ToDoItem 
                        key={item.id}
                        task={item}
                        onComplete={props.onComplete}
                        onCancel = {props.onCancel}
                        onDelete = {props.onDelete}
                    />
                )
            }
        </div>
        {data.length > 0 && <h3>{done}/{data.length}</h3>}
    </div>
}
export default ToDoList