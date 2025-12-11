import styles from './SlotMachine.module.css';
import SlotReel from '../SlotReel/SlotReel';
import Palanca from '../Palanca/Palanca';
import { useState } from 'react';

const SYMBOLS = ["🍒", "🍋", "⭐", "🍉", "🔔", "7️⃣"];
const SlotMachine = () => {
    const [reels, setReels] = useState(["🍒", "🍋", "⭐"]);
    const [message, setMessage] = useState("");
    const [isSpinning, setIsSpinning] = useState(false);
    const Spin = () => {
        setIsSpinning(true);
            setTimeout(() => {
        const newReels = [
            SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
            SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
            SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
        ];

        setReels(newReels);
          setIsSpinning(false);
        if (newReels[0] === newReels[1] && newReels[1] === newReels[2]) {
            setMessage("🎉 ¡Ganaste!");
        } else {
            setMessage("Sigue intentando...");
        }
    }, 1000); 
    };

    return (
        <div className={styles.slotMachine}>
            <h2 className={styles.title}>🎰 TragaMonedotas</h2>
            <div className={styles.container}>
                {
                    reels.map((symbol, index) => (
                        <SlotReel key={index} symbol={symbol} spinning={isSpinning}/>
                    ))
                }
            </div>
            <Palanca onClick={Spin} />
            <p className={styles.message}>{message}</p>
        </div>
    );
};

export default SlotMachine;