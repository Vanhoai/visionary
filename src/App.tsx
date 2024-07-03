import * as React from "react";
import {
  About,
  BackgroundCanvas,
  Container,
  Experience,
  NavBar,
  Projects,
  Skills,
} from "./components";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <BackgroundCanvas />
      <NavBar />
      <Container />
      <About />
      <Skills />
      <Projects />
      <Experience />
    </div>
  );
};

export default App;
