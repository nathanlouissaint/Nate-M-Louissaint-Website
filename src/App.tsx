
import { Projects } from "./components/Projects";
import { Architecture } from "./components/Architecture";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { GenAIProject } from "./components/GenAIProject";
import { EcommerceProject } from "./components/EcommerceProject";
import { HeroV2 } from "./components/HeroV2";

export default function App() {
  return (
    <main className="bg-black text-white min-h-screen">
          <HeroV2 />
      <Projects />
      <Architecture />
      <GenAIProject />
      <Experience />
      <EcommerceProject />
      <Contact />
   

    </main>
  );
}