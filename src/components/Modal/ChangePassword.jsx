import React, { useState, useRef } from "react";
import "./ChangePassword.css";
import "../../index.css";
import cross from "../../assets/images/x.png";

function ChangePassword({
  PasswordActive,
  SetPasswordActive,
}) {
  
  const [passwordForm, setPasswordFrom] = useState("");
  const [newPasswordForm, setnewPasswordForm] = useState("");

  const passwordRef = useRef()
  const newPasswordRef = useRef()

  function clearForm () {
    passwordRef.current.value = ''
    newPasswordRef.current.value = ''
  }


  function sendForm(e) {
    e.preventDefault();
    if (passwordForm !== newPasswordForm) {
      alert("пароли не совпадают");
      clearForm()
    } else {
      SetPasswordActive(false);
      clearForm()
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
                onChange={(event) => setPasswordFrom(event.target.value)}
                type="password"
                name="Password"
                placeholder="******"
                ref={passwordRef}
              ></input>
            </div>
            <div className="Form__block">
              <h6>Новый пароль</h6>
              <input
                ref={newPasswordRef}
                onChange={(event) => setnewPasswordForm(event.target.value)}
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
