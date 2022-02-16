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
import OutputMoney from "./InputMoney/OutputMoney";

function EditAdminBriefcase() {

  const headline = 'Внесение средств'
  const headline2 = 'Вывод средств'

  return (
    <div className="Background-wrapper">
      <Header />
      <div className="wrapper">
        <div style={{ width: "100%" }}>
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
              <div>
                <InputMoney />
              </div>
              <div>
                <OutputMoney />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EditAdminBriefcase;
