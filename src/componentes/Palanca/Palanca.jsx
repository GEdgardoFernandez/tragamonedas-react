import styles from './Palanca.module.css';


const Palanca = ({onClick}) => {
    return (
        <div className={styles.palanca}>
            <button onClick={onClick} className={styles.button}>Girar</button>
        </div>
    );
};

export default Palanca;