import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserLIst/UserList";
import ErrorPopup from "./components/ErrorPopup/ErrorPopup";
import {useState} from "react";

function App() {
  const [userData, setUserData] = useState([]);
  const [formError, setFormError] = useState(false);

  const formSubmitHandler = (data) => {
    setUserData((prev) => {
      return [...prev, data];
    });
  };

  const setFormErrorHandler = (isOpen) => {
    setFormError(isOpen);
  };

  return (
    <>
      <UserForm
        onSubmitHandler={(data) => {
          formSubmitHandler(data);
        }}
      />
      <UserList userData={userData} />
      <ErrorPopup
        formError={formError}
        setFormErrorHandler={(isOpen) => {
          setFormErrorHandler(isOpen);
        }}
      />
    </>
  );
}

export default App;
