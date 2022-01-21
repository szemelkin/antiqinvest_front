import React, { useState, useRef, useEffect } from "react";
import "./ChangePassword.css";
import "../../index.css";
import cross from "../../assets/images/x.png";

function ChangePassword({
  PasswordActive,
  SetPasswordActive,
}) {
  
  const [passwordForm, setPasswordFrom] = useState("");
  const [newPasswordForm, setnewPasswordForm] = useState("");

  console.log("пароль старый", passwordForm);
  console.log("пароль новый", newPasswordForm);

  function sendForm(e) {
    e.preventDefault();
    if (passwordForm !== newPasswordForm) {
      alert("пароли не совпадают");
    } else {
      SetPasswordActive(false);
      console.log("пароли совпадают");
    }
  }

  return (
    <>
      <div className={PasswordActive ? "ModalActive" : "ModalActiveDeactive"}>
        <div className="Password">
          <button
            className="Password__buttonCross"
            onClick={() => SetPasswordActive(false)}
          >
            <img src={cross} alt="cross" />
          </button>
          <h3>Смена пароля</h3>
          <form className="Password__form" onSubmit={sendForm}>
            <div className="Form__block">
              <h6>Старый пароль</h6>
              <input
                onChange={(e) => setPasswordFrom(e.target.value)}
                type="password"
                name="Password"
                placeholder="******"
              ></input>
            </div>
            <div className="Form__block">
              <h6>Новый пароль</h6>
              <input
                onChange={(e) => setnewPasswordForm(e.target.value)}
                type="password"
                name="newPassword"
                placeholder="******"
              ></input>
            </div>
            <button className="Password__saveButton" type="submit">
              Сохранить пароль
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
