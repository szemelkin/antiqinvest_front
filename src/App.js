import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Headline from "./components/Headline/Headline";
import Investment from "./components/Investment/Investment";
import Transaction from "./components/Transaction/Transaction";
import Calm from "./components/Сlaim/Calm";

function App() {
  return (
    <div className="App">
      <div className="image">
        <Header />
        <Headline />
      </div>
      <Investment />
      <Transaction />
      <Calm />
      <Footer />
    </div>
  );
}

export default App;
