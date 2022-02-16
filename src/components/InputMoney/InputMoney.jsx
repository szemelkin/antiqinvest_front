import "./InputMoney.css";
import "./InputMoney.css";
import InputMoneyBlocks from "./InputMoneyBlocks";

function InputMoney() {
  const data = [
    {
      account: "4514 56** **** **14",
      data: "30.01.2022",
      sum: "75 000",
    },
    {
      account: "4514 56** **** **15",
      data: "10.02.2022",
      sum: "5 000",
    },
    {
      account: "4514 56** **** **16",
      data: "11.02.2022",
      sum: "7 000",
    },
    {
      account: "4514 56** **** **17",
      data: "30.02.2022",
      sum: "10 000",
    },
  ];

  return (
    <div className="InputMoney">
      <h3>Внесение средств</h3>
      {data.map((item, index) => {
        return (
          <InputMoneyBlocks
            key={index}
            account={item.account}
            data={item.data}
            sum={item.sum}
          />
        );
      })}
    </div>
  );
}

export default InputMoney;
