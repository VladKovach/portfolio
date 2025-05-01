import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import { Header } from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import SideNav from "./components/SideNav";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="h-full relative">
      <Header />
    <SideNav />
      <div className="flex-1 ml-24 mr-4 max-sm:ml-14">
        <main className="max-w-[1100px] mx-auto pb-20">
          <section id="about" className="pt-16 scroll-mt-10">
            <Hero />
          </section>
          <section id="skills" className="pt-16 max-sm:pt-0 ">
            <Skills />
          </section>
          <section id="projects" className="pt-16 ">
            <Projects />
          </section>
          <section id="experience" className="pt-16 ">
            <Experience />
          </section>
          <section id="contact" className="pt-16 ">
            <Contact />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
