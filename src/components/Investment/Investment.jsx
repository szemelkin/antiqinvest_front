import "./investment.css";
import Card from './Card/Card'



function Investment() {
  return (
    <div className="Investment padding">
        <h3>Коротко о подходе к инвестициям</h3>
        <div className="Cards">
        <Card />
        <Card />
        <Card />
        <Card />

        </div>
      
    </div>
  );
}

export default Investment;
