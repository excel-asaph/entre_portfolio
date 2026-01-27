import React, { useEffect } from 'react';
import FadeIn from './FadeIn';
import { ArrowLeft, Heart, Globe, Lightbulb, TrendingUp, Users, Target, ShieldCheck, Smartphone } from 'lucide-react';

interface MissionProps {
  onBack: () => void;
}

const Mission: React.FC<MissionProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans text-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 z-50 h-20 flex items-center shadow-sm">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <button 
            onClick={onBack}
            className="group flex items-center text-slate-600 hover:text-navy-900 transition-colors font-medium"
          >
            <div className="p-2 bg-slate-100 rounded-full group-hover:bg-teal-50 group-hover:text-teal-600 mr-3 transition-colors">
              <ArrowLeft size={20} />
            </div>
            Back to Home
          </button>
          <span className="hidden md:block text-sm font-semibold text-teal-600 tracking-wider uppercase">
            Faith William's Mission
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative py-32 bg-navy-900 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-900/20 rounded-l-full blur-3xl transform translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl -z-0"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <span className="inline-block py-1 px-3 rounded-full bg-teal-800/50 text-teal-300 text-xs font-semibold tracking-wider uppercase border border-teal-700/50 mb-6">
              Vision 2030
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              A Future Where Healthcare <br />
              <span className="text-teal-400">Has No Barriers</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              My mission is to expand healthcare access in underserved Sub-Saharan African communities by leveraging technology, strategic partnerships, and community engagement to reduce child mortality.
            </p>
          </FadeIn>
        </div>
      </header>

      <main className="container mx-auto px-6 py-24 space-y-32">
        
        {/* The "Why" - Problem Statement */}
        <section className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
             <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                   <img 
                     src="/images/interview_session.jpg" 
                     alt="Field work interaction in Medilabs" 
                     className="w-full h-full object-cover opacity-90"
                   />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border-l-4 border-teal-600 max-w-xs hidden md:block">
                   <p className="font-bold text-navy-900 text-lg mb-1">The Reality</p>
                   <p className="text-slate-600 text-sm">Millions of children die from preventable causes due to distance, cost, and lack of information.</p>
                </div>
             </div>
          </FadeIn>
          
          <FadeIn delay={200}>
            <h2 className="text-3xl font-heading font-bold text-navy-900 mb-6">The Challenge</h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                In many parts of Sub-Saharan Africa, the difference between life and death is often a matter of distance. Rural communities are disconnected from urban medical centers, and where facilities exist, they often lack resources or staff.
              </p>
              <p>
                Through my research in <strong>Child Mortality</strong> and field work at <strong>Medilabs Clinic</strong>, I've seen that funding alone isn't the solution. The gap is systemic: it's about information flow, trust, and the efficient allocation of resources.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                 <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <TrendingUp className="text-red-500 mb-2" size={24} />
                    <h4 className="font-bold text-navy-900">High Mortality</h4>
                    <p className="text-sm text-slate-500">Preventable diseases claim too many young lives.</p>
                 </div>
                 <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <ShieldCheck className="text-orange-500 mb-2" size={24} />
                    <h4 className="font-bold text-navy-900">Access Gap</h4>
                    <p className="text-sm text-slate-500">68% of women in some regions lack basic access.</p>
                 </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* The "How" - Strategic Pillars */}
        <section>
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-heading font-bold text-navy-900 mb-4">Strategic Pillars</h2>
              <div className="h-1 w-20 bg-teal-600 mx-auto rounded-full"></div>
              <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                My approach combines innovation with deep community integration.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={100}>
              <div className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100 h-full group">
                <div className="bg-teal-100 w-14 h-14 rounded-full flex items-center justify-center text-teal-700 mb-6 group-hover:scale-110 transition-transform">
                  <Smartphone size={28} />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Tech-Enabled Health</h3>
                <p className="text-slate-600 leading-relaxed">
                  Utilizing low-bandwidth digital tools like WhatsApp and SMS to disseminate critical health information to mothers in remote areas, as demonstrated in the <strong>KuzaWellness</strong> campaign.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100 h-full group">
                <div className="bg-indigo-100 w-14 h-14 rounded-full flex items-center justify-center text-indigo-700 mb-6 group-hover:scale-110 transition-transform">
                  <Users size={28} />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Community Advocacy</h3>
                <p className="text-slate-600 leading-relaxed">
                  Building trust through local partnerships. Healthcare isn't just about medicine; it's about cultural competence and empowering local leaders to champion health initiatives.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100 h-full group">
                <div className="bg-rose-100 w-14 h-14 rounded-full flex items-center justify-center text-rose-700 mb-6 group-hover:scale-110 transition-transform">
                  <Target size={28} />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Data-Driven Policy</h3>
                <p className="text-slate-600 leading-relaxed">
                  Conducting quantitative research to identify bottlenecks in funding and resource allocation, ensuring that every dollar spent translates to saved lives.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* The "Future" - 2030 Goals */}
        <section className="bg-navy-900 text-white rounded-3xl p-8 md:p-16 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
           
           <FadeIn>
             <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
               <div>
                 <h2 className="text-3xl font-heading font-bold mb-6">The Road to 2030</h2>
                 <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                   I am not just studying leadership; I am preparing to lead a transformation. By 2030, my goal is to have established a network of tech-integrated health partnerships that serves over 50,000 families in rural Nigeria.
                 </p>
                 <div className="space-y-4">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                          <Globe size={20} className="text-teal-400" />
                       </div>
                       <div>
                          <h4 className="font-bold">Scalable Models</h4>
                          <p className="text-sm text-slate-400">Replicating successful pilots across states.</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                          <Heart size={20} className="text-teal-400" />
                       </div>
                       <div>
                          <h4 className="font-bold">Holistic Care</h4>
                          <p className="text-sm text-slate-400">Integrating maternal, child, and mental health.</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                          <Lightbulb size={20} className="text-teal-400" />
                       </div>
                       <div>
                          <h4 className="font-bold">Innovation Hubs</h4>
                          <p className="text-sm text-slate-400">Training local youth in health-tech solutions.</p>
                       </div>
                    </div>
                 </div>
               </div>
               <div className="relative">
                  <img 
                    src="/images/faith_profile.jpg" 
                    alt="Faith William looking towards future" 
                    className="rounded-2xl shadow-2xl transform md:rotate-3 hover:rotate-0 transition-transform duration-700"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-teal-600 p-6 rounded-xl shadow-xl hidden md:block">
                     <p className="font-heading font-bold text-2xl">50,000+</p>
                     <p className="text-teal-100 text-sm">Families Impacted</p>
                  </div>
               </div>
             </div>
           </FadeIn>
        </section>

        {/* CTA */}
        <section className="text-center max-w-3xl mx-auto">
           <FadeIn>
             <h2 className="text-3xl font-bold text-navy-900 mb-6">Join Me in This Mission</h2>
             <p className="text-slate-600 mb-8">
               Whether you are a healthcare provider, a technologist, or a policymaker, there is a role for you in building a healthier Africa.
             </p>
             <button onClick={onBack} className="px-8 py-3 bg-navy-900 text-white rounded-full font-medium hover:bg-teal-600 transition-colors shadow-lg">
                Return to Portfolio
             </button>
           </FadeIn>
        </section>

      </main>
    </div>
  );
};

export default Mission;
