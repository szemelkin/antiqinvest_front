import "./ChangePassword.css";
import "../../index.css";
import cross from "../../assets/images/x.png";

function ChangePassword({ PasswordActive, SetPasswordActive }) {
  return (
    <>
      <div className={PasswordActive ? "ModalActive" : "ModalActiveDeactive"}>
        <div className="Password">
          <button
            className="Password__buttonCross"
            onClick={() => SetPasswordActive(false)}>
            <img src={cross} alt="cross" />
          </button>
          <h3>Смена пароля</h3>
          <form className="Password__form">
            <div className="Form__block">
              <h6>Старый пароль</h6>
              <input
                type="password"
                name="password"
                placeholder="******"
              ></input>
            </div>
            <div className="Form__block">
              <h6>Новый пароль</h6>
              <input
                type="password"
                name="password"
                placeholder="******"
              ></input>
            </div>
          </form>

          <button
            className="Password__saveButton"
            onClick={() => SetPasswordActive(false)}
            type="submit">
            Сохранить пароль
          </button>
        </div>W
      </div>
    </>
  );
}

export default ChangePassword;
