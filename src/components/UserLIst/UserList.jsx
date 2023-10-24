import style from "./UserList.module.css";
import UserItem from "./UserItem";

const UserList = (props) => {
  return (
    <ul className={`${style["user-list"]} flex-column align-items-center`}>
      {props.userData.map((data) => {
        return <UserItem key={data.key} userData={data} />;
      })}
    </ul>
  );
};

export default UserList;
