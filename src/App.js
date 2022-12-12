import "./App.css";
import About from "./Componrnts/about/About";
import Contact from "./Componrnts/contact/Contact";

import Header from "./Componrnts/header/Header";
import Mnav from "./Componrnts/mainnav/Mnav";
import Nav from "./Componrnts/navbar/Nav";

import Projects from "./Componrnts/projects/Projects";

import Skills from "./Componrnts/skills/Skills";

import Statistics from "./Componrnts/statistics/Statistics";

function App() {
  return (
    <div className="App">
      <Nav />
      <Mnav />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Statistics />
      <Contact />
    </div>
  );
}

export default App;
