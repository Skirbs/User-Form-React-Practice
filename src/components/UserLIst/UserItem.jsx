import Card from "../Cards/Card";
import style from "./UserList.module.css";

const UserList = (props) => {
  return (
    <li>
      <Card className={`flex justify-between`}>
        <p>{props.userData.name}</p>
        <p>Age: {props.userData.age}</p>
      </Card>
    </li>
  );
};

export default UserList;
