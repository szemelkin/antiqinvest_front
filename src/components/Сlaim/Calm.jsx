import "./Calm.css";
import "../../index.css"


function Calm() {
  return (
    <div className="Calm">
      <div className="Calm__wrapper">
        <h3>Хочу тоже инвестировать в антиквариат</h3>

        <form>
          <input type="tel"  placeholder="+7 (___) ___-__-__"></input>
          <button>Отправить</button>
        </form>
      </div>
    </div>
  );
}

export default Calm;
