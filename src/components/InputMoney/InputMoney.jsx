import "./InputMoney.css";
import "./InputMoney.css";
import InputMoneyBlocks from "./InputMoneyBlocks";

function InputMoney({color, data, headline}) {

  return (
    <div className="InputMoney">
      <h3>{headline}</h3>
      {data.map((item, index) => {
        return (
          <InputMoneyBlocks
            key={index}
            account={item.account}
            data={item.data}
            sum={item.sum}
            color={color}
          />
        );
      })}
    </div>
  );
}

export default InputMoney;
