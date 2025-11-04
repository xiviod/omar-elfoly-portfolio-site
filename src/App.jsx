import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Portfolio() {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  };

  const projects = [
    {
      title: 'Topic Analysis of Clothing Reviews',
      desc: 'Analyze clothing reviews on an e-commerce platform to explore different topics and similarities among them.',
      tags: ['Python', 'Embeddings', 'OpenAI']
    },
    {
      title: 'Planning Trips with OpenAI API',
      desc: 'Use OpenAI’s API to answer questions about tourist attractions and plan optimized trips.',
      tags: ['API', 'JavaScript', 'AI']
    },
    {
      title: 'Organizing Medical Transcripts',
      desc: 'Extract structured data from unstructured medical transcriptions using the OpenAI API.',
      tags: ['Python', 'NLP', 'Healthcare AI']
    }
  ];

  return (
    <div className="font-mono bg-[#0A0A0A] text-white min-h-screen">
      {/* NAVBAR */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${navBg ? 'bg-[#0A0A0A]/95 border-b border-[#1E1E1E]' : 'bg-transparent'}`}>
        <div className="max-w-[1300px] mx-auto flex justify-between items-center h-[72px] px-8">
          <div className="text-xl tracking-widest text-[#0071FF] font-bold cursor-pointer" onClick={() => scrollToSection('home')}>OMAR ELFOLY</div>
          <ul className="hidden md:flex gap-10 text-sm uppercase tracking-wide text-[#E5E5E5]">
            <li onClick={() => scrollToSection('home')} className="cursor-pointer hover:text-[#0071FF] transition-colors">Home</li>
            <li onClick={() => scrollToSection('projects')} className="cursor-pointer hover:text-[#0071FF] transition-colors">Projects</li>
            <li onClick={() => scrollToSection('about')} className="cursor-pointer hover:text-[#0071FF] transition-colors">About</li>
            <li onClick={() => scrollToSection('contact')} className="cursor-pointer hover:text-[#0071FF] transition-colors">Contact</li>
          </ul>
          <button onClick={() => scrollToSection('contact')} className="border border-[#0071FF] text-[#0071FF] px-5 py-2 text-sm tracking-wide hover:bg-[#0071FF] hover:text-black transition-colors">
            Contact
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="pt-[140px] pb-[120px] px-6 md:px-16 border-b border-[#1E1E1E]">
        <div className="max-w-[1300px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              The AI Engineer <br /> Building Intelligent Systems for <span className="text-[#0071FF]">Scale</span>
            </h1>
            <p className="text-[#A1A1A1] text-lg mb-8 max-w-[550px]">
              I’m Omar Elfoly — Mechatronics & AI Engineer passionate about designing production-ready AI systems that merge intelligence, precision, and creativity.
            </p>
            <div className="flex gap-4">
              <a href="#projects" onClick={() => scrollToSection('projects')} className="bg-[#0071FF] text-black px-6 py-3 font-medium hover:bg-[#0095FF] transition">View Projects</a>
              <a href="/Omar-Elfoly-AI-Engineer-Resume.pdf" download className="border border-[#0071FF] px-6 py-3 font-medium text-[#0071FF] hover:bg-[#0071FF] hover:text-black transition">Download CV</a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="border border-[#1E1E1E] bg-[#0D0D0D] p-8 text-[#0071FF] tracking-tight text-sm shadow-[0_0_30px_rgba(0,113,255,0.1)]"
          >
            <pre>
{`> pinecone connect --init
> npm install openai
> Running ai_portfolio.js ... ✅
> Deployment ready on vector grid ⚡`}
            </pre>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="px-6 md:px-16 py-[120px] border-b border-[#1E1E1E]">
        <div className="max-w-[1300px] mx-auto">
          <h2 className="text-3xl font-semibold mb-16 text-center uppercase tracking-widest text-[#E5E5E5]">Projects</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {projects.map((p) => (
              <div key={p.title} className="bg-[#0F0F0F] border border-[#1E1E1E] p-6 hover:border-[#0071FF] transition-colors">
                <h3 className="text-[#0071FF] text-lg font-semibold mb-3 uppercase">{p.title}</h3>
                <p className="text-[#C7C7C7] text-sm mb-4 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-xs border border-[#1E1E1E] px-3 py-1 text-[#9E9E9E]">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="px-6 md:px-16 py-[120px] border-b border-[#1E1E1E]">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8 uppercase tracking-widest">About Me</h2>
          <p className="text-[#A1A1A1] leading-relaxed text-lg">
            I’m a Mechatronics & AI Engineer with a strong foundation in automation, control systems, and applied AI. My experience covers OpenAI integrations, vector embeddings, and intelligent data extraction. My goal is to craft scalable, production-level AI products that deliver real impact.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="px-6 md:px-16 py-[120px] text-center">
        <h2 className="text-3xl font-semibold mb-6 uppercase tracking-widest">Contact</h2>
        <p className="text-[#A1A1A1] mb-8 text-lg">Let’s collaborate or discuss AI-driven automation projects. Reach me anytime at:</p>
        <a href="mailto:omarlfoly@gmail.com" className="text-[#0071FF] text-lg hover:underline">omarlfoly@gmail.com</a>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#1E1E1E] text-[#6B6B6B] text-center py-6 text-sm">
        © {new Date().getFullYear()} Omar Elfoly. All rights reserved.
      </footer>
    </div>
  );
}
