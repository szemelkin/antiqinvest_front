import "./Products.css";
import CabinetHeadline from "../CabinetHeadline/CabinetHeadline";
import classic from "../../assets/images/classic.png";
import trade from "../../assets/images/trade.png";
import vabank from "../../assets/images/vabank.png";
import i from "../../assets/images/i.png";

function Products() {
  return (
    <div className="Products">
      <div className="Products__left MarginBottom18">
        <div className="Products__left-card">
          <div className="Products__left-card-content">
            <div className="Products__left-card-imageBlock">
              <img src={classic} />
            </div>
            <div className="Products__left-card-blocks">
              <div className="Products__left-card-block">
                <h4>Продукт</h4>
                <h5>
                  Классический <img src={i} />
                </h5>
              </div>
              <div className="Products__left-card-block">
                <h4>Сумма</h4>
                <h5>75 000 Р</h5>
              </div>
              <div className="Products__left-card-block">
                <h4>Доходность</h4>
                <h5>10 000 Р</h5>
              </div>
              <div className="Products__left-card-block">
                <h4>Внесено</h4>
                <h5>2 000 Р</h5>
              </div>
              <div className="Products__left-card-buttonsBlock">
                <button>Вывести</button>
                <button>Внести</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Products__left MarginBottom18">
        <div className="Products__left-card">
          <div className="Products__left-card-content">
            <div className="Products__left-card-imageBlock">
              <img src={classic} />
            </div>
            <div className="Products__left-card-blocks">
              <div className="Products__left-card-block">
                <h4>Продукт</h4>
                <h5>
                  Классический <img src={i} />
                </h5>
              </div>
              <div className="Products__left-card-block">
                <h4>Сумма</h4>
                <h5>75 000 Р</h5>
              </div>
              <div className="Products__left-card-block">
                <h4>Доходность</h4>
                <h5>10 000 Р</h5>
              </div>
              <div className="Products__left-card-block">
                <h4>Внесено</h4>
                <h5>2 000 Р</h5>
              </div>
              <div className="Products__left-card-buttonsBlock">
                <button>Вывести</button>
                <button>Внести</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Products__left MarginBottom18">
        <div className="Products__left-card">
          <div className="Products__left-card-content">
            <div className="Products__left-card-imageBlock">
              <img src={classic} />
            </div>
            <div className="Products__left-card-blocks">
              <div className="Products__left-card-block">
                <h4>Продукт</h4>
                <h5>
                  Классический <img src={i} />
                </h5>
              </div>
              <div className="Products__left-card-block">
                <h4>Сумма</h4>
                <h5>75 000 Р</h5>
              </div>
              <div className="Products__left-card-block">
                <h4>Доходность</h4>
                <h5>10 000 Р</h5>
              </div>
              <div className="Products__left-card-block">
                <h4>Внесено</h4>
                <h5>2 000 Р</h5>
              </div>
              <div className="Products__left-card-buttonsBlock">
                <button>Вывести</button>
                <button>Внести</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Products__left MarginBottom18">
        <div className="Products__left-card">
          <div className="Products__left-card-content">
            <div className="Products__left-card-imageBlock">
              <img src={classic} />
            </div>
            <div className="Products__left-card-blocks">
              <div className="Products__left-card-block">
                <h4>Продукт</h4>
                <h5>
                  Классический <img src={i} />
                </h5>
              </div>
              <div className="Products__left-card-block">
                <h4>Сумма</h4>
                <h5>75 000 Р</h5>
              </div>
              <div className="Products__left-card-block">
                <h4>Доходность</h4>
                <h5>10 000 Р</h5>
              </div>
              <div className="Products__left-card-block">
                <h4>Внесено</h4>
                <h5>2 000 Р</h5>
              </div>
              <div className="Products__left-card-buttonsBlock">
                <button>Вывести</button>
                <button>Внести</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
