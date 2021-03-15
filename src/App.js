import Cassette from "./components/Cassette";
import Player from "./components/Player";
import Footer from "./components/Footer";
import Bars from "./components/Bars/Bars";
import "./App.css";

function App() {
  return (
    <div className="App__container">
      <Cassette></Cassette>
      <Player></Player>
      <Footer></Footer>
      <Bars></Bars>
    </div>
  );
}

export default App;
