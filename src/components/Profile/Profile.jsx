import "./Profile.css";
import "../../index.css";
import profile from "../../assets/images/profile.png";
import pencel from "../../assets/images/pencel.png";
import graph from "../../assets/images/graph.png";
import ProfleCard from "./ProfileCard";

import { useState } from "react";
import ChangePassword from "../Modal/ChangePassword";

function Profile() {
  const [PasswordActive, SetPasswordActive] = useState(false);

  const pk = [
    {
      title: "Актиные лоты",
      data: 25,
    },
    {
      title: "Количество вложений",
      data: 25,
    },
    {
      title: "Инвестировано",
      data: "250 000 ₽",
    },
    {
      title: "Общая доходность",
      data: "375 000 ₽",
    },
  ];

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
          <button onClick={() => SetPasswordActive(true)}>
            Сменить пароль
          </button>
        </div>
      </div>

      <div className="Profile2 ProfileMargin">
        <div className="Profile__block2">
          {pk.map((item, index) => {
            return (
              <ProfleCard key={index} title={item.title} data={item.data} />
            );
          })}
        </div>
      </div>
      <ChangePassword

        PasswordActive={PasswordActive}
        SetPasswordActive={SetPasswordActive}
      />
    </>
  );
}

export default Profile;
/*        passwordForm={setPasswordFrom}
        newPasswordForm={setnewPasswordForm}
        sendForm={sendForm}*/