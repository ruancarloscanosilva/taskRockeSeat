import styles from '../components/Tasks.module.css';
import plus from '../assets/plus.svg';
import { CreateTask } from './Createtask';
import { useState } from 'react';
import { Post } from './Post';

export function Tasks() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [completedTasks, setCompletedTasks] = useState([]);
  const completedTasksCount = completedTasks.filter(task => task).length;

  function handleDeleteTask(index) {
    const updatedTasks = [...task];
    updatedTasks.splice(index, 1); // Remove a tarefa do array
    setTask(updatedTasks);
  }
  
  function handleCreatenewTask(event) {
    event.preventDefault();
    const newTaskContent = event.target.comment.value;
    setTask([...task, newTaskContent]);
    setCompletedTasks([...completedTasks, false]); // Inicialize como false
    setNewTask('');
  }
    
    function markTaskAsCompleted(index) {
        const updatedCompletedTasks = [...completedTasks];
        updatedCompletedTasks[index] = !updatedCompletedTasks[index];
        setCompletedTasks(updatedCompletedTasks);
        
        console.log(updatedCompletedTasks)
    }

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  return (
    <div className={styles.container}>
      <div className={styles.boxtask}>
        <form onSubmit={handleCreatenewTask} className={styles.box}>
          <input
            name="comment"
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={newTask}
            onChange={handleInputChange}
          />
          <div className={styles.ajustline}>
            <button className={styles.button}>
              Criar
              <img src={plus} alt="Icon" className={styles.icon} />
            </button>
          </div>
        </form>
      </div>
      <div className={styles.post}>
        <div className={styles.grid}>
          <strong className={styles.create}>
            Tarefas criadas
            <div className={styles.grid1}>
              <h2 className={styles.createh2}>
                {task.length}
              </h2>
            </div>
          </strong>
          <strong className={styles.conclud}>
            Concluídas
            <div className={styles.grid2}>
              <h2 className={styles.createconclud}>
                    {task.length === 0 ? task.length : `${completedTasks.filter(task => task).length} de ${task.length}`}
              </h2>
            </div>
          </strong>
        </div>
      </div>
      <div className={styles.tasks}>
        {task.length === 0 ? (
          <Post />
        ) : (
          task.map((content, index) => (
            <CreateTask
              key={index}
              content={content}
              isChecked={completedTasks[index]}
              onCheck={() => markTaskAsCompleted(index)}
              onDelete={() => handleDeleteTask(index)} // Passa a função de exclusão como propriedade
            />
          ))
        )}
      </div>
    </div>
  );
}
