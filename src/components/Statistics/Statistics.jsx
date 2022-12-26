import propTypes from 'prop-types';
import styles from './Statistics.module.css';

export const Statistics = ({title, stats}) => {
    return (
    <section className={styles.statistics}>
        <h2 className={styles.title}>{title}</h2>
        <ul className={styles.statList}>
            {stats.map(stat => (
                <li className={styles.item} key={stat.id}>
                    <span className={styles.label}>{stat.label}</span>
                    <span className={styles.percentage}>{stat.percentage}%</span>
                </li>
            ))}
        </ul>
    </section>)
}

Statistics.propTypes = {
    title: propTypes.string,
    stats: propTypes.arrayOf (
        propTypes.shape({
            id: propTypes.string,
            label: propTypes.string,
            percentage: propTypes.number
        })
    )
}