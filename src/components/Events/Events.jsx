import "./Events.css";
import "../../index.css";
import EventsCard from "./EventsCard";
import clock from "../../assets/images/clock.png";

function Events() {
  const event = [
    {
      img: clock,
      lot: "Антикварные часы",
      product: "Классический",
      status: "Завершён",
      capital: "75 000",
      payment: "75 000",
      profit: "10 000",
    },
    {
      img: clock,
      lot: "Антикварные часы",
      product: "Трейдерский",
      status: "В работе",
      capital: "75 000",
      payment: "75 000",
      profit: "10 000",
    },
    {
      img: clock,
      lot: "Антикварные часы",
      product: "Ва-банк",
      status: "В работе",
      capital: "75 000",
      payment: "75 000",
      profit: "10 000",
    },
    {
      img: clock,
      lot: "Антикварные часы",
      product: "Классический",
      status: "В работе",
      capital: "75 000",
      payment: "75 000",
      profit: "10 000",
    },
  ];

  return (
    <div className="Events">
      <h3>События</h3>
      {event.map((item, index) => {
        return (
          <EventsCard
            key={index}
            img={item.img}
            lot={item.lot}
            product={item.product}
            status={item.status}
            capital={item.capital}
            payment={item.payment}
            profit={item.profit}
          />
        );
      })}
    </div>
  );
}

export default Events;
