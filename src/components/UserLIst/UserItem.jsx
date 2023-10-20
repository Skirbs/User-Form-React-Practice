import Card from "../cards/card";
import style from "./UserList.module.css";

const UserList = () => {
  return (
    <li>
      <Card className={`flex justify-between`}>
        <p>Name</p>
        <p>100</p>
      </Card>
    </li>
  );
};

export default UserList;
