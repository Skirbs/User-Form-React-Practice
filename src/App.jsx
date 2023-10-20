import UserForm from "./components/userForm/UserForm";
import UserList from "./components/UserLIst/UserList";
import ErrorPopup from "./components/ErrorPopup/ErrorPopup";

function App() {
  return (
    <>
      <UserForm />
      <UserList />
      <ErrorPopup />
    </>
  );
}

export default App;
