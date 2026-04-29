
import { Architecture } from "./components/Architecture";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { GenAIProject } from "./components/GenAIProject";
import { EcommerceProject } from "./components/EcommerceProject";
import { HeroV2 } from "./components/HeroV2";
import { CaseStudyCSTE } from "./components/CaseStudyCSTE";


export default function App() {
  return (
    <main className="bg-black text-white min-h-screen">
          <HeroV2 />
      <Architecture />
       <CaseStudyCSTE />  
      <GenAIProject />
      <Experience />
      <EcommerceProject />
      <Contact />
   

    </main>
  );
}