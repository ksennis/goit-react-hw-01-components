import propTypes from 'prop-types';
import styles from './FriendList.module.css';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({friends}) => {
    return (
        <ul className={styles.friendList}>
            {friends.map(friend => (
                <FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}/>
            ))}
        </ul>
    )
}

FriendList.propTypes = {
    friends: propTypes.arrayOf(
        propTypes.shape({
            avatar: propTypes.string,
            name: propTypes.string.isRequired,
            isOnline: propTypes.bool,
            id: propTypes.number
        })
    )
}