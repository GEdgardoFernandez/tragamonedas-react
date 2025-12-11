import styles from "./PayTable.module.css";

const PayTable = () => {
    return (
        <div className={styles.paytable}>
            <h2 className={styles.title}>Tabla de Premios</h2>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Combinación</th>
                        <th>Multiplicador</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>🍋 x3</td>
                        <td>1 crédito × 0.5</td>
                    </tr>
                    <tr>
                        <td>🍉 x3</td>
                        <td>1 crédito × 1</td>
                    </tr>
                    <tr>
                        <td>🍒 x3</td>
                        <td>1 crédito × 1.5</td>
                    </tr>
                    <tr>
                        <td>⭐ x3</td>
                        <td>1 crédito × 2.5</td>
                    </tr>
                    <tr>
                        <td>🔔 x3</td>
                        <td>1 crédito × 5</td>
                    </tr>
                    <tr>
                        <td>7️⃣ x3</td>
                        <td className={styles.maxPrize}>
                            1 crédito × 30 (Premio Máximo)
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PayTable;
