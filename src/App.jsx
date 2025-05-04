import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
   return (
      <main className="font-sans">
         <Hero />
         <About />
         <Skills />
         <Projects />
         <Contact />
      </main>
   );
}

export default App;
