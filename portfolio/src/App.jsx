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
      <SideNav />
      <div className="flex-1 ml-24 mr-4 max-sm:ml-14">
        <main className="max-w-[1100px] mx-auto pb-20">
          <section id="about" className="pt-16 scroll-mt-20">
            <Hero />
          </section>
          <section id="skills" className="pt-16 max-sm:pt-0 scroll-mt-20">
            <Skills />
          </section>
          <section id="projects" className="pt-16 scroll-mt-20">
            <Projects />
          </section>
          <section id="experience" className="pt-16 scroll-mt-20">
            <Experience />
          </section>
          <section id="contact" className="pt-16 scroll-mt-20">
            <Contact />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
