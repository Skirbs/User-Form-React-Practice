import Card from "../cards/card";
import style from "./ErrorPopup.module.css";

const ErrorPopup = () => {
  return (
    <div className={`${style["background"]} hidden flex justify-center align-items-center`}>
      <Card className={`${style["main"]} flex-column align-items-center`}>
        <p>Invalid Input</p>
        <p>Lorem ipsum dolor sit amet. </p>
        <button>Close</button>
      </Card>
    </div>
  );
};

export default ErrorPopup;
