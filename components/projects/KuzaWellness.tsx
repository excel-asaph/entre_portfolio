import React, { useEffect } from 'react';
import FadeIn from '../FadeIn';
import { ArrowLeft, Clock, Target, Users, Heart, CheckCircle, BookOpen, Globe, MessageCircle, Instagram } from 'lucide-react';

interface KuzaWellnessProps {
  onBack: () => void;
}

const KuzaWellness: React.FC<KuzaWellnessProps> = ({ onBack }) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans text-slate-800">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 z-50 h-20 flex items-center shadow-sm">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <button 
            onClick={onBack}
            className="group flex items-center text-slate-600 hover:text-navy-900 transition-colors font-medium"
          >
            <div className="p-2 bg-slate-100 rounded-full group-hover:bg-teal-50 group-hover:text-teal-600 mr-3 transition-colors">
              <ArrowLeft size={20} />
            </div>
            Back to Portfolio
          </button>
          <span className="hidden md:block text-sm font-semibold text-teal-600 tracking-wider uppercase">
            Virtual Internship Simulation
          </span>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="pt-32 pb-16 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-teal-600/5 -skew-x-12 transform translate-x-20"></div>
        <div className="container mx-auto px-6 relative">
          <FadeIn>
            <div className="flex flex-col md:flex-row gap-4 mb-6 text-sm font-semibold text-teal-600 uppercase tracking-wide">
                <span className="flex items-center gap-2"><Clock size={16} /> 11 Weeks Duration</span>
                <span className="flex items-center gap-2"><Globe size={16} /> Gashua, Yobe State</span>
                <span className="flex items-center gap-2 border-l border-teal-200 pl-4 ml-2"><Heart size={16} /> Wellness Awareness</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy-900 mb-6 leading-tight">
              KuzaWellness: <br/>
              <span className="text-teal-600">Virtual Wellness Campaign</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
              Bridging the wellness information gap for rural mothers and women in Northern Nigeria using accessible digital tools like WhatsApp and Instagram.
            </p>
          </FadeIn>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16 space-y-24">
        
        {/* 1. Introduction & Context */}
        <section className="grid md:grid-cols-2 gap-12 items-start">
          <FadeIn>
            <h2 className="text-3xl font-heading font-bold text-navy-900 mb-6">Introduction & Context</h2>
            <div className="prose prose-lg text-slate-600 space-y-4">
              <p>
                <strong>KuzaWellness</strong> is an initiative designed to address the critical issue of limited healthcare education among rural women in Northern Nigeria, specifically in Gashua, Yobe State.
              </p>
              <p>
                Many women in this region rely on traditional practices due to geographic isolation, low literacy, and inadequate infrastructure. This information gap contributes to poor health outcomes, including high maternal mortality rates.
              </p>
              <p>
                This campaign leverages platforms rural women already use—<strong>WhatsApp and Instagram</strong>—to deliver culturally relevant, practical, and empathetic health education.
              </p>
            </div>
            
            <div className="mt-8">
               <h2 className="text-2xl font-heading font-bold text-navy-900 mb-4">Mission Alignment</h2>
               <div className="p-6 bg-teal-50 rounded-xl border border-teal-100">
                  <p className="text-slate-700 italic">
                      "By leveraging accessible digital tools... the campaign empowers women to make informed wellness decisions. This aligns with my mission to advocate for equitable healthcare access in underserved communities."
                  </p>
               </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={100}>
             {/* Visual Representation */}
             <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200 shadow-sm h-full flex flex-col justify-center">
                <div className="mb-8">
                    <h3 className="text-lg font-bold text-navy-900 mb-4 flex items-center gap-2">
                        <Target size={20} className="text-teal-600" /> Key Objectives
                    </h3>
                    <ul className="space-y-3 text-slate-700">
                        <li className="flex items-start gap-3">
                            <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center flex-shrink-0 text-xs font-bold">1</span>
                            <span>Host 3 virtual health and wellness workshops.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center flex-shrink-0 text-xs font-bold">2</span>
                            <span>Secure 2 healthcare provider partnerships.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center flex-shrink-0 text-xs font-bold">3</span>
                            <span>Gather participant feedback to assess impact.</span>
                        </li>
                    </ul>
                </div>
                
                <div>
                     <h3 className="text-lg font-bold text-navy-900 mb-4 flex items-center gap-2">
                        <Users size={20} className="text-teal-600" /> User Persona: Amina Yusuf
                    </h3>
                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                        <p className="text-sm text-slate-600">
                            <strong>Profile:</strong> 29-year-old mother of two in Gashua.<br/>
                            <strong>Context:</strong> Rooted in tradition but open to modern wellness.<br/>
                            <strong>Pain Point:</strong> Limited access to healthcare (68% of women in the region).<br/>
                            <strong>Needs:</strong> Simple, visual, and culturally sensitive content.
                        </p>
                    </div>
                </div>
             </div>
          </FadeIn>
        </section>

        {/* Methodology */}
        <section className="bg-navy-900 text-white p-8 md:p-12 rounded-3xl">
           <FadeIn>
              <h2 className="text-2xl font-heading font-bold mb-8">Methodology: Digital-First Approach</h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                 <div className="space-y-8">
                    <div className="flex gap-4">
                        <div className="bg-pink-600 p-3 rounded-lg h-fit">
                            <Instagram size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Instagram (@KuzaWellness)</h3>
                            <p className="text-slate-300 text-sm">
                                Launched in Week 10. Shared educational posts, "Did You Know?" facts, and debunked myths (e.g., maternal nutrition). Emphasized affordable local foods like millet and groundnuts.
                            </p>
                        </div>
                    </div>

                     <div className="flex gap-4">
                        <div className="bg-green-600 p-3 rounded-lg h-fit">
                            <MessageCircle size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Virtual Workshops</h3>
                            <p className="text-slate-300 text-sm">
                                Conducted 3 workshops focusing on Mental Health, Physical Wellness, and Holistic Wellness. Designed to be data-light and accessible.
                            </p>
                        </div>
                    </div>

                     <div className="flex gap-4">
                        <div className="bg-slate-700 p-3 rounded-lg h-fit">
                            <BookOpen size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Medium Article</h3>
                            <p className="text-slate-300 text-sm">
                                Published "Bridging the Wellness Gap", blending storytelling with research to advocate for mobile-based health education.
                            </p>
                        </div>
                    </div>
                 </div>

                 <div className="bg-navy-800 rounded-2xl p-6 border border-navy-700">
                    <h3 className="text-lg font-bold mb-4 border-b border-navy-700 pb-2">Research Basis</h3>
                    <ul className="space-y-4 text-sm text-slate-300">
                        <li>
                            <strong>Mobile Adoption:</strong> 70% of Nigerians have mobile access (World Bank, 2020).
                        </li>
                        <li>
                            <strong>Platform Relevance:</strong> 65% of rural Nigerian women use WhatsApp/Instagram daily (Statista, 2023).
                        </li>
                        <li>
                            <strong>Impact Potential:</strong> Digital interventions can increase health literacy by 30% in rural settings (Adeyanju et al., 2021).
                        </li>
                    </ul>
                 </div>
              </div>
           </FadeIn>
        </section>

        {/* Findings & Impact */}
        <section>
           <FadeIn>
              <h2 className="text-3xl font-heading font-bold text-navy-900 mb-12 text-center">Impact & Findings</h2>
           </FadeIn>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FadeIn delay={0}>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center h-full">
                      <div className="bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-600">
                          <CheckCircle size={32} />
                      </div>
                      <h3 className="text-4xl font-bold text-navy-900 mb-2">3</h3>
                      <p className="text-slate-600 font-medium">Workshops Hosted</p>
                  </div>
              </FadeIn>
              <FadeIn delay={100}>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center h-full">
                      <div className="bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-600">
                          <Heart size={32} />
                      </div>
                      <h3 className="text-4xl font-bold text-navy-900 mb-2">90%</h3>
                      <p className="text-slate-600 font-medium">Increased Awareness</p>
                  </div>
              </FadeIn>
              <FadeIn delay={200}>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center h-full">
                      <div className="bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-600">
                          <Users size={32} />
                      </div>
                      <h3 className="text-4xl font-bold text-navy-900 mb-2">150+</h3>
                      <p className="text-slate-600 font-medium">Followers in 2 Weeks</p>
                  </div>
              </FadeIn>
              <FadeIn delay={300}>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center h-full">
                      <div className="bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-600">
                          <BookOpen size={32} />
                      </div>
                      <h3 className="text-4xl font-bold text-navy-900 mb-2">200+</h3>
                      <p className="text-slate-600 font-medium">Article Views</p>
                  </div>
              </FadeIn>
           </div>
           
           <FadeIn delay={400} className="mt-12">
               <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 max-w-4xl mx-auto text-center">
                   <p className="text-lg text-slate-700 italic mb-4">
                       "Feedback from 85% of workshop participants indicated high satisfaction. The campaign empowered women to make informed health decisions, contributing to reduced health inequalities."
                   </p>
               </div>
           </FadeIn>
        </section>

        {/* Lessons & Conclusion */}
        <section className="grid md:grid-cols-2 gap-12">
            <FadeIn>
                <div className="bg-white rounded-2xl border border-slate-200 p-8 h-full shadow-sm">
                    <h2 className="text-2xl font-heading font-bold text-navy-900 mb-6">Lessons Learned</h2>
                    <ul className="space-y-4">
                        <li className="flex gap-3">
                            <span className="bg-teal-100 text-teal-800 font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                            <p className="text-slate-700 text-sm"><strong>Platform Reliability:</strong> Technical challenges taught me to prioritize testing for rural connectivity.</p>
                        </li>
                        <li className="flex gap-3">
                            <span className="bg-teal-100 text-teal-800 font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                            <p className="text-slate-700 text-sm"><strong>Storytelling Power:</strong> Synthesizing research for the Medium article strengthened my ability to blend data with narrative.</p>
                        </li>
                        <li className="flex gap-3">
                            <span className="bg-teal-100 text-teal-800 font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                            <p className="text-slate-700 text-sm"><strong>Future Direction:</strong> Considering SMS-based outreach to reach women without smartphones.</p>
                        </li>
                    </ul>
                </div>
            </FadeIn>

            <FadeIn delay={100}>
                 <div className="bg-teal-600 rounded-2xl p-8 h-full text-white">
                    <h2 className="text-2xl font-heading font-bold mb-6">Conclusion</h2>
                    <div className="prose text-teal-50 text-sm">
                        <p className="mb-4">
                            "The KuzaWellness virtual awareness campaign is more than a creative artifact; it is a research-informed initiative grounded in the real-world needs of rural Nigerian women."
                        </p>
                        <p>
                            By leveraging Instagram and Medium to deliver accessible, empathetic health education, the campaign achieved its OKRs and advanced my mission of equitable healthcare access.
                        </p>
                    </div>
                </div>
            </FadeIn>
        </section>

      </main>
      
      {/* Footer Call to Action */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
            <h3 className="text-2xl font-heading font-bold mb-6">Explore the Campaign</h3>
            <div className="flex justify-center gap-4">
                 <button onClick={onBack} className="px-6 py-3 border border-slate-600 rounded-full hover:bg-slate-800 transition-colors">
                    Back to Portfolio
                 </button>
                 {/* Links could be added here if real URLs existed */}
            </div>
        </div>
      </footer>
    </div>
  );
};

export default KuzaWellness;
