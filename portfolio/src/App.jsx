import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Experience from "./components/Experience/Experience";
import { Header } from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects";
import SideNav from "./components/SideNav";

function App() {
  return (
    <div className="h-full relative">
      <Header />
      <SideNav /> {/* ← our new scroll-spy nav */}
      <div className="flex-1 ml-24 mr-4">
        
        {/* leave room for the sidebar */}
        <main className="max-w-[1100px] mx-auto">
          <section id="about" className="pt-16">
            <Hero />
          </section>
          <section id="skills" className="pt-16">
            <Skills />
          </section>
          <section id="projects" className="pt-16">
            <Projects />
          </section>
          <section id="experience" className="pt-16">
            <Experience />
          </section>
          <section id="contact" className="pt-16">
            <Contact />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
