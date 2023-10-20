import style from "./UserForm.module.css";
import Card from "../cards/card";

const UserForm = () => {
  return (
    <>
      <form>
        <Card className={`${style["form-card"]} flex-column`}>
          <p>User Info Form</p>

          <div className={`${style["form-component"]} flex`}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" />
          </div>

          <div className={`${style["form-component"]} flex`}>
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" />
          </div>

          <button type="submit">Submit</button>
        </Card>
      </form>
    </>
  );
};

export default UserForm;
