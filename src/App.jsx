import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';
import { CreateTask } from './components/Createtask';

export function App() {
  return (
    <div className={styles.container}>
      <Header />  
      <main>
      <div className={styles.ajustcontent}>

        <div className={styles.textarea}>
          <Tasks />
        </div>  
               
          
      </div>
      </main>
    </div>
  )
}

export default App