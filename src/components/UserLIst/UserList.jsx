import style from "./UserList.module.css";
import UserItem from "./UserItem";

const UserList = () => {
  return (
    <ul className={`${style["user-list"]} flex-column`}>
      <UserItem />
    </ul>
  );
};

export default UserList;
