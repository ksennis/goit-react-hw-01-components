import propTypes from 'prop-types';
import styles from './FriendListItem.module.css';
import clsx from 'clsx';

export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <li className={styles.item}>
            <span className={clsx(styles.status, isOnline && styles.online)}></span>
            <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={styles.name}>{name}</p>
        </li>
    ) 
}

FriendListItem.propTypes = {
    avatar: propTypes.string,
    name: propTypes.string.isRequired,
    isOnline: propTypes.bool 
}