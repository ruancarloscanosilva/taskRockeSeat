import styles from './Header.module.css';

import rocket from '../assets/rocket.svg'

export function Header() {
    return (
        
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.image} src={rocket} alt="image" />
            </div>
            <div>
                <strong className={styles.blue}>to</strong>
                <strong className={styles.purple}>do</strong>     
            </div>
        </header>
    )
} 


