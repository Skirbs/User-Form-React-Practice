import Card from "../Cards/Card";
import style from "./ErrorPopup.module.css";

const ErrorPopup = (props) => {
  const backgroundMouseHandler = (e) => {
    e.target.classList.contains(style["background"]) && closeErrorPopup();
  };

  const closeErrorPopup = () => {
    props.setFormErrorHandler(false);
  };

  return (
    <div
      className={`${style["background"]} ${
        !props.formError.isError ? "hidden" : ""
      } flex justify-center align-items-center`}
      onMouseDown={(e) => {
        backgroundMouseHandler(e);
      }}>
      <Card className={`${style["main"]} flex-column align-items-center`}>
        <p>Invalid Input</p>
        <p>{props.formError.message} </p>
        <button onMouseDown={closeErrorPopup}>Close</button>
      </Card>
    </div>
  );
};

export default ErrorPopup;
