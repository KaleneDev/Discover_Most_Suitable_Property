import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Residences from "./components/Residences/Residences";
import Value from "./components/Value/value";

import "./style/app.scss";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header></Header>
        <Hero></Hero>
      </div>
      <Companies></Companies>
      <Residences></Residences>
      <Value></Value>
    </div>
  );
}

export default App;
