import styles from './SlotReel.module.css';

const SlotReel = ({ symbol, spinning }) => {
    return (
        <div className={styles.reel}>
            <div className={spinning ? styles.spin : styles.symbol}>{symbol}</div>
        </div>
    );
};

export default SlotReel;