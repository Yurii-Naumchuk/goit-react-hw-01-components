import PropTypes from "prop-types"
import css from "./FriendList.module.css"
import { FriendListItem } from "./FriendListItem/FriendListItem"

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          id={friend.id}
        />
      ))}
    </ul>
  )
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
}
