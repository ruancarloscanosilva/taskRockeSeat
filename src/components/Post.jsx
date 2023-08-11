import styles from '../components/Post.module.css';

import Clipboard from '../assets/Clipboard.png'

export function Post() {

    return (               
            <div className={styles.alinhaimagemetexto}>
                <div className={styles.image}>
                    <img src={Clipboard} alt="Imagem" />
                </div>
                <div className={styles.textalin}>
                    <form>
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </form>
                </div>
            </div>
                
     
    )
}



