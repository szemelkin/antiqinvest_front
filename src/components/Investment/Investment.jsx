import "./investment.css";
import "../../index.css";
import Card from "./Card/Card";

function Investment() {
  const investmentCard = [
    {
      service: "Онлайн",
      description: "Работа полностью онлайн. Зачисление и вывод денег онлайн. Срок вывода денег 5 дней",
    },
    {
      service: "Инвестирование с высокой доходностью",
      description: "Несколько продуктов позволяют учесть ваш аппетит к риску и доходности. Наши клиенты получают доходность от 2% до 40% в месяц в рублях",
    },
    {
      service: "Систематизация уникальных знаний для роста доходности",
      description: "Мы постоянно наращиваем экспертизу оценки с помощью ИТ-технологий, экспертов антикварного рынка и нашего опыта.",
    },
    {
      service: "Гарантии",
      description: "Личные гарантии учредителей фонда возврата инвестированных средств",
    },
  ];

  return (
    <div className="Investment padding">
      <h3>Коротко о подходе к инвестициям</h3>
      <div className="Cards">
      {investmentCard.map((item, index) => {
        return (
          <Card
          key={index}
          service={item.service}
          description={item.description}
        />
        )
        })}
           </div>
    </div>
  );
}

export default Investment;
