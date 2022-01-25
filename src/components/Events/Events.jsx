import React, { useContext } from "react";
import Context from "../../Context";
import EventsCard from "./EventsCard";
import "./Events.css";
import "../../index.css";

function Events() {
  const value = useContext(Context);

  return (
    <div className="Events">
      <h3>События</h3>
      {value.event.map((item, index) => {
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
