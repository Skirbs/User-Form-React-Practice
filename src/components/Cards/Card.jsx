import style from "./Card.module.css";

const Card = (props) => {
  return <div className={`${style.card} ${props.className} shadow-outline`}>{props.children}</div>;
};

export default Card;
