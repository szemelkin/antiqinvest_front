import "./AboutProducts.css";
import adimprod from "../../assets/images/adimprod.png";

function AboutProducts() {
  return (
    <>
      <div className="AboutProducts">
        <div className="AboutProducts__headline">
          <h3 className="Headline">О продукте</h3>
        </div>

        <div className="AboutProducts__description">
          <img className="img" src={adimprod} />
          <div className="AboutProducts__description-left">
            <div className="AboutProducts-block">
              <div className="AboutProducts-about">
                <h4>Название продукта</h4>
                <h3>Классический</h3>
                <hr className="AboutProducts-hr" />
              </div>
              <div className="AboutProducts-about">
                <h4>ID продукта</h4>
                <h3>id_8985421</h3>
                <hr className="AboutProducts-hr" />
              </div>
              <div className="AboutProducts-about">
                <h4>Доходность</h4>
                <h3>2% в месяц</h3>
                <hr className="AboutProducts-hr" />
              </div>
              <div className="AboutProducts-about">
                <h4>Срок</h4>
                <h3>Бессрочно</h3>
              </div>
     
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutProducts;
