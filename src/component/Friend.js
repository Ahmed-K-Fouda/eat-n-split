import { Button } from "./Button";

export function Friend({ friend, onSelection, selectedFriend, onDel }) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)} $
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {friend.balance} $
        </p>
      )}
      {friend.balance === 0 && <p> You and {friend.name} are even</p>}
      <div className="btn-group">
        <Button onClick={() => onSelection(friend)}>
          {isSelected ? "Close" : "Select"}
        </Button>
        <Button onClick={() => onDel(friend.id)}>del</Button>
      </div>
    </li>
  );
}
