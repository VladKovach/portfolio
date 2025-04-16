import About from "./components/About";
import Contact from "./components/Contact";
import { Header } from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto h-full">
      <Header />
      <main  className="max-w-[1200px] ml-auto mr-auto">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
