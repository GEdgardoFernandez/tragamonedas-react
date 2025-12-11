import { useEffect, useState } from "react";
import styles from "./SlotReel.module.css";

const SlotReel = ({ symbol, spinning, delay }) => {
  const [currentSymbol, setCurrentSymbol] = useState(symbol);

  useEffect(() => {
    if (spinning) {
      const interval = setInterval(() => {
        const ALL = ["🍒", "🍋", "⭐", "🍉", "🔔", "7️⃣"];
        setCurrentSymbol(ALL[Math.floor(Math.random() * ALL.length)]);
      }, 100);

      setTimeout(() => clearInterval(interval), delay);
    } else {
      setCurrentSymbol(symbol);
    }
  }, [spinning, symbol, delay]);

  return (
    <div className={styles.reel}>
      <div className={spinning ? styles.spin : styles.stop}>
        {currentSymbol}
      </div>
    </div>
  );
};

export default SlotReel;
