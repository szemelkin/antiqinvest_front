import "../index.css";
import "../App.css";
import "./EditAdminBriefcase.css";
import Header from "./Header/Header";
import MainCabinetAdmin from "./MainCabinet/MainCabinetAdmin";
import EditLotAdmin from "./EditLot/EditLotAdmin";
import Footer from "./Footer/Footer";
import AboutBriefcase from "./AboutLot/AboutBriefcase";
import EditAdminCards from "./EditLot/EditAdminCard/EditAdminCards";
import InputMoney from "./InputMoney/InputMoney";
import EditIvestCards from "./EditLot/EditInvestCards";

function EditAdminBriefcase() {
  const headline = "Внесение средств";
  const headline2 = "Вывод средств";

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

  const data2 = [
    {
      account: "4514 56** **** **14",
      data: "30.01.2022",
      sum: "12",
    },
    {
      account: "4514 56** **** **15",
      data: "10.02.2022",
      sum: "0",
    },
    {
      account: "4514 56** **** **16",
      data: "26.02.2022",
      sum: "70",
    },
    {
      account: "4514 56** **** **17",
      data: "30.02.2023",
      sum: "10",
    },
  ];

  const red = {
    color: "red",
  };

  const green = {
    color: "green",
  };


  const mb40 = {
    marginBottom: '40px',
  }
  
  return (
    <div className="Background-wrapper">
      <Header />
      <div className="wrapper">
        <div className="ww">
          <div className="marginTop70">
            <MainCabinetAdmin />
          </div>
          <div className="MarginTop80">
            <EditLotAdmin />
          </div>
          <div className="MarginTop80">
            <AboutBriefcase />
          </div>

          <div className="MarginTop80">
            <EditAdminCards />
          </div>

          <div className="MarginTop80">
            <div className="inputMoneyBlocks">
              <InputMoney color={green} data={data} headline={headline} />
              <InputMoney color={red} data={data2} headline={headline2} />
            </div>
          </div>

          <div className="MarginTop70" style={mb40}>
            <EditIvestCards />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EditAdminBriefcase;
