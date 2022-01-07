import "./BringMoney.css";
import "../../index.css"
import cross from '../../assets/images/x.png'


function BringMoney() {
  return (
    <div className="BringMoney">
        <button><img src={cross} alt="cross"/> </button>
        <h3>Внести сумму</h3>
        <h5>Вы действительно хотите внести данную сумму?</h5>

        <div className="buttonsBlock marginButton">
            <button>Внести</button>
            <button>Отмена</button>
          </div>

        
    </div>
  );
}

export default BringMoney;
