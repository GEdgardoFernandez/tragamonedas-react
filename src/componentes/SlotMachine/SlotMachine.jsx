import styles from './SlotMachine.module.css';
import SlotReel from '../SlotReel/SlotReel';
import PayTable from '../PayTable/PayTable';
import Palanca from '../Palanca/Palanca';
import { useState } from 'react';

const SYMBOLS = ["🍒", "🍋", "⭐", "🍉", "🔔", "7️⃣"];

const PAYTABLE = {
    "🍒": 1.5,
    "⭐": 2.5,
    "7️⃣": 30,
    "🍋": 0.5,
    "🍉": 1,
    "🔔": 5,
};

const COST_PER_SPIN = 1;

const SlotMachine = () => {
    const [reels, setReels] = useState(["🍒", "🍋", "⭐"]);
    const [message, setMessage] = useState("");
    const [credits, setCredits] = useState(50);
    const [spinning, setSpinning] = useState(false);

    const Spin = () => {
        if (spinning) return;
        if (credits < COST_PER_SPIN) {
            setMessage("❌ No tienes créditos");
            return;
        }

        setCredits(prev => prev - COST_PER_SPIN);
        setMessage("");
        setSpinning(true);

        const rollTimes = [800, 1100, 1400];

        const finalSymbols = [];

        rollTimes.forEach((time, i) => {
            setTimeout(() => {
                const symbol = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
                finalSymbols[i] = symbol;

                if (i === 2) {
                    setSpinning(false);
                    setReels([...finalSymbols]);
                    checkWin(finalSymbols);
                }
            }, time);
        });
    };

    const checkWin = (final) => {
        if (final[0] === final[1] && final[1] === final[2]) {
            const symbol = final[0];
            const multiplier = PAYTABLE[symbol] ?? 0;
            const prize = COST_PER_SPIN * multiplier;

            setCredits(prev => prev + prize);
            setMessage(`🎉 ¡Ganaste! +${prize} créditos`);
        } else {
            setMessage("Sigue intentando...");
        }
    };

    return (
        <div className={styles.slotMachine}>
            <h2 className={styles.title}>🎰 Traga-Dora</h2>
            <div className={styles.creditsContainer}>
                <p className={styles.credits}>Créditos: {credits}</p>
            </div>
            <div className={styles.container}>
                {reels.map((symbol, index) => (
                    <SlotReel
                        key={index}
                        symbol={symbol}
                        spinning={spinning}
                        delay={700 + index * 300}
                        className={styles.reels}
                    />
                ))}
            </div>
            <div className={styles.palancaContainer}>
                <Palanca onClick={Spin} />
            </div>
            <div className={styles.messageContainer}>
                <p className={styles.message}>{message}</p>
            </div>
            <PayTable />
        </div>
    );
};

export default SlotMachine;