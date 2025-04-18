import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import { Header } from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="h-full relative">
      <Header />
      <main className="max-w-[1100px] ml-auto mr-auto">
        <div className="w-5/6 mr-auto ml-auto">
          <Hero />
          <About />
          <Projects />
          <Experience />

          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
