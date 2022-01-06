import "./Profile.css";
import profile from "../../assets/images/profile.png";
import pencel from "../../assets/images/pencel.png";
import graph from "../../assets/images/graph.png";

function Profile() {
  return (
    <>
      <div className="Profile">
        <div className="Profile__block">
          <div className="Profile__block-main">
            <img src={profile} alt="profile" />
            <div className="Profile__block-include">
              <div className="Profile__block-big">
                <h3>Ivan Ivanov &nbsp;</h3>
                <img src={pencel} alt="pencel" />
              </div>
              <h5>Инвестор</h5>
            </div>

            <div className="Profile__block-include">
              <h4>Номер телефона</h4>
              <div className="Profile__block-big">
                <h6>+7 950 281 94 31 &nbsp;</h6>
                <img src={pencel} alt="pencel" />
              </div>
            </div>

            <div className="Profile__block-include">
              <h4>E-mail</h4>
              <div className="Profile__block-big">
                <h6>ivan@ivanov.ru &nbsp;</h6>
                <img src={pencel} alt="pencel" />{" "}
              </div>
            </div>
          </div>
          <button>Сменить пароль</button>
        </div>
      </div>

      <div className="Profile2 ProfileMargin">
        <div className="Profile__block2">
          <div className="Profile__card">
            <div className="Profile__card-wrapper">
              <img src={graph} alt="graph"/>
              <div className="Profile__card-secondBlock">
                <h6>Актиные лоты</h6>
                <h3>25</h3>
              </div>
            </div>
          </div>

          <div className="Profile__card">
          <div className="Profile__card-wrapper">
              <img src={graph} alt="graph"/>
              <div className="Profile__card-secondBlock">
                <h6>Количество вложений</h6>
                <h3>25</h3>
              </div>
            </div>
          </div>
          <div className="Profile__card">
          <div className="Profile__card-wrapper">
              <img src={graph} alt="graph"/>
              <div className="Profile__card-secondBlock">
                <h6>Инвестировано</h6>
                <h3>250 000 ₽</h3>
              </div>
            </div>
          </div>
          <div className="Profile__card">
          <div className="Profile__card-wrapper">
              <img src={graph} alt="graph"/>
              <div className="Profile__card-secondBlock">
                <h6>Общая доходность</h6>
                <h3>375 000 ₽</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
