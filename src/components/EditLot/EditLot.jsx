//import "../index.css";
//import "../App.css";
import "./EditLot.css";
import back from "../../assets/images/back.png";

function EditLot() {
  return (
    <div className="EditLot">
      <div className="EditLot__block">
        <a href="/cabinet/lots">
          <img src={back} />
          <h6>Назад</h6>
        </a>
        <h4>Редактировать лот</h4>
      </div>
      <button>Сохранить</button>
    </div>
  );
}

export default EditLot;
