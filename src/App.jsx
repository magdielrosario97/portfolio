import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

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
         <Analytics />
         <SpeedInsights />
      </main>
   );
}

export default App;
