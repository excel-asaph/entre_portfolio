import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { ChevronDown, ChevronUp, Quote } from 'lucide-react';

const Reflection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="reflection" className="py-24 bg-white relative overflow-hidden">
       {/* Decorative Background */}
       <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-slate-50 to-white"></div>
       <div className="absolute right-0 top-1/4 w-64 h-64 bg-teal-50 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6 max-w-4xl">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">Leadership Reflection</h2>
            <div className="h-1 w-20 bg-teal-600 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-4">
              The intersection of theory, practice, and personal growth.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm relative">
            <Quote className="absolute top-8 left-8 text-teal-200 w-12 h-12 -z-0 opacity-50" />
            
            <div className={`prose prose-slate prose-lg max-w-none text-slate-700 transition-all duration-700 ease-in-out ${isExpanded ? '' : 'max-h-[400px] overflow-hidden relative'}`}>
              
              <h3 className="text-teal-700 font-heading font-semibold text-xl mt-0">Transformative Learning Experiences</h3>
              <p>
                My journey at African Leadership University has been defined by a shift from passive observation to active intervention. The genesis of my mission began not in a classroom, but during my initial research into healthcare disparities in Yobe State. Realizing that technology could bridge the physical distance between rural patients and urban specialists was a pivotal moment. The KuzaWellness campaign was not just a project; it was a proof of concept that simple tools like WhatsApp could dismantle complex barriers to information.
              </p>

              <h3 className="text-teal-700 font-heading font-semibold text-xl mt-8">Application of Leadership Theories</h3>
              <p>
                <strong>Ecosystem Thinking:</strong> I adopted an ecosystem approach when analyzing child mortality. Instead of viewing it as a purely medical issue, I mapped the stakeholders: government funding bodies, local clinics, and community trust networks. My research (r = 0.52 correlation) demonstrated that the system fails not due to lack of medical knowledge, but due to resource allocation inefficiencies.
              </p>
              <p>
                <strong>Servant Leadership:</strong> During my shadowing at Medilabs, I practiced servant leadership by prioritizing the needs of the frontline workers. By listening to their operational bottlenecks before proposing solutions, I built trust. True leadership in healthcare is about empowering the practitioner to serve the patient better.
              </p>

              <h3 className="text-teal-700 font-heading font-semibold text-xl mt-8">Evaluating Growth in Knowledge and Mindsets</h3>
              <p>
                Initially, I believed technology was a silver bullet. My growth has involved developing a nuanced "Tech-Enabled, Human-Centric" mindset. Technology is the vehicle, but empathy and policy are the fuel. I have grown from a tech enthusiast to a healthcare strategist, understanding that an app cannot fix a broken supply chain without advocacy.
              </p>

              <h3 className="text-teal-700 font-heading font-semibold text-xl mt-8">Connection to Post-Graduation Mission</h3>
              <p>
                As I look toward 2026, these reflections form the bedrock of my scaling phase. My mission to implement integrated health platforms is directly informed by the data gaps I found in 2025 and the community trust I built in 2024. I am not just graduating with a degree; I am graduating with a blueprint for systemic change in Sub-Saharan African healthcare.
              </p>

              {!isExpanded && (
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent flex items-end justify-center pb-4">
                  {/* Fade out effect */}
                </div>
              )}
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-teal-600 text-teal-600 font-medium hover:bg-teal-600 hover:text-white transition-all duration-300"
              >
                {isExpanded ? (
                  <>Read Less <ChevronUp size={18} /></>
                ) : (
                  <>Read Full Essay <ChevronDown size={18} /></>
                )}
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Reflection;