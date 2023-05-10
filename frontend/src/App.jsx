import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Residences from "./components/Residences/Residences";
import Value from "./components/Value/value";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";

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
      <Contact></Contact>
      <GetStarted></GetStarted>
    </div>
  );
}

export default App;
