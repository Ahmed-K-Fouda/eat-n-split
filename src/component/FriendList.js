import { Friend } from "./Friend";

export function FriendList({ friends, onSelection, selectedFriend, onDel }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
          onDel={onDel}
        />
      ))}
    </ul>
  );
}
