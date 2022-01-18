import "./Card.css";
import "../../../index.css";
import computer from "../../../assets/images/comp.png";

function Card({ service, description }) {
  return (
    <>
      <div className="Card">
        <img src={computer} />
        <h4>{service}</h4>
        <span>{description}</span>
      </div>
    </>
  );
}

export default Card;
