import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserLIst/UserList";
import ErrorPopup from "./components/ErrorPopup/ErrorPopup";
import {useState} from "react";

function App() {
  const [userData, setUserData] = useState([]);
  const formSubmitHandler = (data) => {
    setUserData((prev) => {
      return [...prev, data];
    });
  };
  return (
    <>
      <UserForm
        onSubmitHandler={(data) => {
          formSubmitHandler(data);
        }}
      />
      <UserList userData={userData} />
      <ErrorPopup />
    </>
  );
}

export default App;
