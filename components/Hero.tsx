import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import FadeIn from './FadeIn';

interface HeroProps {
  onExploreMission: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExploreMission }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-50">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-teal-600/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-navy-900/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <FadeIn delay={100}>
            <span className="inline-block py-1 px-3 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold tracking-wider uppercase border border-teal-100 mb-4">
              Future Health Innovator
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy-900 leading-tight">
              Bridging the <br/>
              <span className="text-teal-600 relative">
                Healthcare Gap
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-teal-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span> <br/>
              Through Tech.
            </h1>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-xl text-slate-600 font-medium">
              Faith William
            </p>
            <p className="text-slate-500 mt-2">
              Bachelor of Entrepreneurial Leadership | African Leadership University
            </p>
          </FadeIn>

          <FadeIn delay={500}>
            <div className="p-6 bg-white rounded-2xl shadow-lg border-l-4 border-teal-600 my-6">
              <p className="text-slate-700 italic leading-relaxed">
                "To expand healthcare access in underserved Sub-Saharan African communities by leveraging technology, strategic partnerships, and community engagement."
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={700}>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/pdfs/Faith William Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-teal-600 text-white rounded-lg font-medium shadow-lg shadow-teal-600/20 hover:bg-teal-700 transition-all flex items-center gap-2"
              >
                Download CV <Download size={18} />
              </a>
              <button onClick={onExploreMission} className="px-8 py-3 bg-white text-navy-900 border border-slate-200 rounded-lg font-medium hover:border-teal-600 hover:text-teal-600 transition-all flex items-center gap-2">
                Explore My Mission <ArrowRight size={18} />
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Hero Image / Abstract Representation */}
        <FadeIn delay={400} className="relative hidden md:block h-full min-h-[500px]">
           <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
              {/* Placeholder for Faith's Photo */}
              <img 
                src="/images/faith_profile.jpg" 
                alt="Faith William - Healthcare Leadership" 
                className="object-cover w-full h-full opacity-90 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="font-heading font-bold text-lg">Advocating for Equity</p>
                  <p className="text-teal-100 text-sm">Tech-driven solutions for rural health</p>
                </div>
              </div>
           </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;