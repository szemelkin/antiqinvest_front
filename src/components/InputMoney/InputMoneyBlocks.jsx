import "./InputMoney.css";
import "./InputMoney.css";
import yey from "../../assets/images/yey.png";

function InputMoneyBlocks({color, account, data, sum }) {


  return (
    <div className="InputMoney__blocks">
      <div className="InputMoney__block">
        <h6>Счёт для внесения</h6>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h3 className="InputMoney__block-account">{account}</h3>
          <img className="InputMoney__block-img" src={yey} />
        </div>
      </div>

      <div className="InputMoney__block">
        <h6>Дата внесения</h6>
        <h3 className="InputMoney__block-account">{data}</h3>
      </div>

      <div className="InputMoney__block">
        <h6>Сумма зачисления</h6>
        <h3 className="InputMoney__block-account" style={color}>- {sum} ₽</h3>
      </div>
    </div>
  );
}

export default InputMoneyBlocks;
