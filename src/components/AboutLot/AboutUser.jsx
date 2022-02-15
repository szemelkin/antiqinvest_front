import "./AboutUser.css";
import pencel from "../../assets/images/pencel.png";
import profile from "../../assets/images/profile.png";

function AboutUser() {
  return (
    <>
      <div className="AboutUser">
        <div className="AboutUser__headline">
          <h3 className="Headline">О пользователе</h3>
        </div>

        <div className="AboutUser__description">
          <img src={profile} />
          <div className="AboutUser__description-left">
            <div className="AboutUser-block">
              <div className="AboutUser-about">
                <h4>ФИО</h4>
                <h3>Иванов Иван Иванович</h3>
                <hr className="about-hr" />
              </div>
              <div className="AboutUser-about">
                <h4>ID пользователя</h4>
                <h3>id_8985421</h3>
                <hr className="about-hr" />
              </div>
              <div className="AboutUser-about">
                <h4>Логин</h4>
                <h3>Инвестор</h3>
                <hr className="about-hr" />
              </div>
              <div className="AboutUser-about">
                <h4>Роль</h4>
                <h3>Инвестор</h3>
              </div>
              <div className="AboutUser-about">
                <h4>Пароль</h4>
                <h3>.........</h3>
                <hr className="about-hr" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUser;
