import "./InputMoney.css";
import "./InputMoney.css";
import InputMoneyBlocks2 from "./inputMoneyBlock2";

function OutputMoney() {
  const data = [
    {
      account: "4514 56** **** **14",
      data: "30.01.2022",
      sum: "1 000",
    },
    {
      account: "4514 56** **** **15",
      data: "10.02.2022",
      sum: "1 000",
    },
    {
      account: "4514 56** **** **16",
      data: "11.02.2022",
      sum: "12 000",
    },
    {
      account: "4514 56** **** **17",
      data: "30.02.2022",
      sum: "1 000",
    },
  ];

  return (
    <div className="InputMoney">
      <h3>Вывод средств</h3>
      {data.map((item, index) => {
        return (
          <InputMoneyBlocks2
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

export default OutputMoney;
