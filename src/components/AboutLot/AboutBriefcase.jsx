import "./AboutProducts.css";

function AboutBriefcase() {
  return (
    <>
      <div className="AboutProducts">
        <div className="AboutProducts__headline">
          <h3 className="Headline">О портфеле</h3>
        </div>

        <div className="AboutProducts__description">
          <div className="AboutProducts-block">
            <div className="AboutProducts-about">
              <h4>Инвестор</h4>
              <h3>Иванов Иван Иванович</h3>
              <hr className="AboutProducts-hr" />
            </div>
            <div className="AboutProducts-about">
              <h4>ID пользователя</h4>
              <h3>id_8985421</h3>
              <hr className="AboutProducts-hr" />
            </div>
            <div className="AboutProducts-about">
              <h4>ID портфеля</h4>
              <h3>id_8985421</h3>
              <hr className="AboutProducts-hr" />
            </div>
            <div className="AboutProducts-about">
              <h4>Свободные деньги</h4>
              <h3>75 000 ₽</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutBriefcase;
