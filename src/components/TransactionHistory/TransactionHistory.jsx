import propTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

export const TransactionHistory = ({items}) => {

    return (
        <table className={styles.transactionHistory}>
            <thead className={styles.head}>
                <tr className={styles.trHead}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody className={styles.body}>
                {items.map((item) => (
                    <tr key={item.id} className={styles.trBody}>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    items: propTypes.arrayOf (
        propTypes.shape ({
            id: propTypes.string,
            type: propTypes.string,
            amount: propTypes.string,
            currency: propTypes.string
        })
    )
}

