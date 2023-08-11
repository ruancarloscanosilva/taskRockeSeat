import styles from '../components/Createtask.module.css' 
import checkmark from '../assets/checkmark.svg'
import checkbox from '../assets/checkbox.svg';
import trash from '../assets/trash.svg'
import trashred from '../assets/trashred.svg'
import { useState } from 'react';

export function CreateTask({ content, isChecked, onCheck, onDelete }) {

    const toggleCheckbox = () => {
      onCheck(); // Chame a função para atualizar o estado das tarefas concluídas
    };

    return (
      <div className={styles.container}>
        <header className={styles.grid}>
          <div className={styles.box}>
            <div></div>
            <div className={styles.checkbox}>
              <label className={styles.checkboxContainer}>
                <input type="checkbox" checked={isChecked} onChange={toggleCheckbox}/>    
                <span className={styles.checkmark1}>
                  <img className={styles.checkboxImage} src={checkbox} alt="Checkbox" />
                  <img className={styles.checkmarkImage} src={checkmark} alt="Checkmark" />
                </span>
              </label>
            </div>
            <div>
              <div className={styles.septextandtrash}>
                <div className={isChecked ? styles.strikethroughText : ''}>
                  <p className={styles.alinhatexto}>
                    {content}
                  </p>
                </div>
              </div>
              <div className={styles.lixao}>
                <button onClick={onDelete}> {/* Adicione onClick para chamar a função de exclusão */}
                  <img src={trash} alt="trash" />
                  <img className={styles.trashred}src={trashred} alt="trasred"></img>
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
}
