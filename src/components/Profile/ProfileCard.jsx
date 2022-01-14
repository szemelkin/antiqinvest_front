import "./ProfileCard.css";
import "../../index.css";
import graph from "../../assets/images/graph.png";

function ProfleCard({ title, data }) {
  return (
    <>
      <div className="Profile__card">
        <div className="Profile__card-wrapper">
          <img src={graph} alt="graph" />
          <div className="Profile__card-secondBlock">
            <h6>{title}</h6>
            <h3>{data}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfleCard;
