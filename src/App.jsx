import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
   return (
      <main className="font-sans">
         <Hero />
         <About />
         <Projects />
         <Contact />
      </main>
   );
}

export default App;
