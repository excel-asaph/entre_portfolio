import React, { useEffect } from 'react';
import FadeIn from '../FadeIn';
import { ArrowLeft, Clock, MapPin, Target, Brain, Activity, BookOpen, Lightbulb, Users, Video } from 'lucide-react';

interface ProjectDetailProps {
  onBack: () => void;
}

const MissionShadowing: React.FC<ProjectDetailProps> = ({ onBack }) => {
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
            Mission Shadowing Portfolio
          </span>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="pt-32 pb-16 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-teal-600/5 -skew-x-12 transform translate-x-20"></div>
        <div className="container mx-auto px-6 relative">
          <FadeIn>
            <div className="flex flex-col md:flex-row gap-4 mb-6 text-sm font-semibold text-teal-600 uppercase tracking-wide">
                <span className="flex items-center gap-2"><Clock size={16} /> Nov 9, 2025</span>
                <span className="flex items-center gap-2"><MapPin size={16} /> Medilabs Clinic</span>
                <span className="flex items-center gap-2 border-l border-teal-200 pl-4 ml-2"><BookOpen size={16} /> Self-Directed Development Tools Of Trade 1</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy-900 mb-6 leading-tight">
              Mission Shadowing Portfolio
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
              <strong>Mission Pathway:</strong> Healthcare Access through Technology<br/>
              <strong>Institution:</strong> African Leadership University
            </p>
          </FadeIn>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16 space-y-24">
        
        {/* 1. Cover Page Artifact & Introduction */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100">
               {/* 1. Cover Page Artifact Space */}
               <div className="bg-slate-200 aspect-video flex items-center justify-center text-slate-400 relative group">
                  <img 
                    src="/images/medilabs_sign.jpg" 
                    alt="Entrance logo of Medilabs Clinic" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 text-sm backdrop-blur-sm">
                    1. Cover Page Artifact Space: Entrance logo of Medilabs Clinic
                  </div>
               </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={100}>
            <h2 className="text-3xl font-heading font-bold text-navy-900 mb-6">Introduction</h2>
            <div className="prose prose-lg text-slate-600">
              <p>
                My mission pathway focuses on expanding access to healthcare in underserved communities across sub-Saharan Africa by supporting technology, partnerships, and community engagement.
              </p>
              <p>
                The mission shadowing experience offered me an opportunity to engage with real practitioners to understand how clinics and pharmacies operate, the barriers they face, and the role technology plays in improving healthcare delivery.
              </p>
              <p className="font-medium text-navy-900 mt-4">
                I selected <strong>Medilabs Clinic</strong>, where I conducted two in-person interviews: one with <strong>Dr. Alice</strong>, a dentist, and another with <strong>Dr. Fredinard</strong>, a general practitioner.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* 3. Identifying Learning Opportunities */}
        <section>
          <FadeIn>
            <h2 className="text-3xl font-heading font-bold text-navy-900 mb-8 border-b border-slate-200 pb-4">3. Identifying Learning Opportunities</h2>
            
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Learning Table */}
              <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 text-navy-900 font-semibold border-b border-slate-200">
                      <tr>
                        <th className="p-4">Learning Focus</th>
                        <th className="p-4">Description</th>
                        <th className="p-4">Connection to Mission</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-4 font-medium text-teal-700">Skill 1: Professional Communication</td>
                        <td className="p-4">Conducting outreach, scheduling, and thanking participants</td>
                        <td className="p-4">Strengthened networking and professionalism</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-teal-700">Skill 2: Active Listening & Interviewing</td>
                        <td className="p-4">Learning to ask structured, open-ended questions</td>
                        <td className="p-4">Helped me gather meaningful data from experts</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-teal-700">Skill 3: Reflection & Synthesis</td>
                        <td className="p-4">Turning interview notes into insights</td>
                        <td className="p-4">Deepened understanding of healthcare gaps</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-teal-700">Skill 4: Contextual Application</td>
                        <td className="p-4">Observing real-life use of technology</td>
                        <td className="p-4">Linked classroom concepts to real systems</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Call Invite Screenshot Artifact */}
              <div className="lg:col-span-2 bg-slate-100 rounded-2xl p-4 flex flex-col items-center justify-center border border-slate-200">
                 <div className="w-full aspect-[4/3] bg-white rounded-xl shadow-md overflow-hidden relative mb-2">
                    <img 
                        src="/images/call_screenshot.jpg" 
                        alt="Screenshot of call invitation with Medilabs Clinics" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 pointer-events-none border-4 border-slate-800/10 rounded-xl"></div>
                 </div>
                 <p className="text-xs text-center font-medium text-slate-500 italic mt-2">
                   Screenshot of call invitation with Medilabs Clinics
                 </p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* 4. Experiential Learning Summary - Interview 1 */}
        <section className="bg-slate-50 -mx-6 px-6 py-16 rounded-3xl">
          <FadeIn>
            <div className="flex items-center gap-4 mb-8">
               <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-bold uppercase">Interview 1</span>
               <h2 className="text-3xl font-heading font-bold text-navy-900">Dr. Alice (Dentist)</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
               <div className="space-y-6">
                  {/* Images for Dr. Alice - Adjusted Aspect Ratios */}
                  <div className="grid grid-cols-2 gap-4">
                     {/* Dr Alice Desk - Looks roughly 4:3 or landscape in the provided photo */}
                     <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-md relative group">
                        <img src="/images/dr_alice_desk.jpg" alt="Dr. Alice sitting at her desk" className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 inset-x-0 bg-black/50 text-white text-xs p-2 truncate">Dr. Alice at her desk</div>
                     </div>
                     {/* Dental Chair - Portrait/Vertical */}
                     <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-md relative group">
                        <img src="/images/dental_office.jpg" alt="Dr. Alice and her office dental chair" className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 inset-x-0 bg-black/50 text-white text-xs p-2 truncate">Dr. Alice's Office</div>
                     </div>
                  </div>
               </div>

               <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-3 flex items-center gap-2">
                        <Activity size={20} className="text-teal-600" /> Key Takeaways
                    </h3>
                    <ul className="space-y-3 list-disc pl-5 text-slate-700">
                        <li><strong>Motivation:</strong> Rooted in early passion for medicine.</li>
                        <li><strong>Common Issues:</strong> Tooth decay, cavities, and gingivitis; treatments are mostly extraction and root canal.</li>
                        <li><strong>Barriers:</strong> Financial constraints, lack of awareness, and travel distance.</li>
                        <li><strong>Uses of Technology:</strong> Digital patient records and Dental X-ray storage (3–5 years).</li>
                        <li><strong>Partnerships:</strong> Insurance companies expand patient access.</li>
                        <li><strong>Advice:</strong> Build community outreach, bring facilities to rural areas, and conduct oral-health education programs.</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl border-l-4 border-teal-600 shadow-sm">
                    <h4 className="font-bold text-teal-700 mb-2">Reflection</h4>
                    <p className="text-slate-600 italic">
                      "This interview revealed that financial limitations and lack of preventive education are core barriers to dental care. It emphasized how insurance partnerships can make services affordable and sustainable—an insight directly related to my mission of funding and partnerships for healthcare access."
                    </p>
                  </div>
               </div>
            </div>
          </FadeIn>
        </section>

        {/* Interview 2 - Dr. Fredinard */}
        <section>
           <FadeIn>
            <div className="flex items-center gap-4 mb-8">
               <span className="bg-navy-900 text-white px-3 py-1 rounded-full text-sm font-bold uppercase">Interview 2</span>
               <h2 className="text-3xl font-heading font-bold text-navy-900">Dr. Fredinard (General Practitioner)</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
               <div className="space-y-6 order-2 md:order-1">
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-3 flex items-center gap-2">
                        <Activity size={20} className="text-teal-600" /> Key Takeaways
                    </h3>
                    <ul className="space-y-3 list-disc pl-5 text-slate-700">
                        <li><strong>Inspiration:</strong> Inspired by family members in healthcare and childhood curiosity.</li>
                        <li><strong>Common Health Issues:</strong> Non-communicable diseases, poor nutrition, and outbreaks.</li>
                        <li><strong>Challenges:</strong> Limited staff, inadequate technology, and patients’ financial incapacity.</li>
                        <li><strong>Uses of Technology:</strong> Digital patient record system linked with laboratories and the Ministry of Health.</li>
                        <li><strong>Partnerships:</strong> Insurance firms and government technology assistance.</li>
                        <li><strong>Advice:</strong> Youth should focus on technological innovations and awareness of the healthcare system.</li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-navy-900 shadow-sm">
                    <h4 className="font-bold text-navy-900 mb-2">Reflection</h4>
                    <p className="text-slate-600 italic">
                      "Dr. Fredinard’s responses connected the technology gap with health outcomes. He reinforced that digital innovation from youth could bridge the shortage of health workers and improve coordination. This validated my belief that technology is a major lever of change in African healthcare."
                    </p>
                  </div>
               </div>

               <div className="space-y-6 order-1 md:order-2">
                  {/* Images for Dr. Fredinard */}
                  <div className="grid grid-cols-2 gap-4">
                     {/* Interview Session - Portrait/Vertical */}
                     <div className="col-span-2 aspect-[3/4] md:aspect-video rounded-xl overflow-hidden shadow-md relative group">
                        <img src="/images/interview_session.jpg" alt="Dr Ferdinand and Faith interviewing" className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 inset-x-0 bg-black/50 text-white text-xs p-2">Interview Session</div>
                     </div>
                     {/* Clinical Setting (Bed/Poster) - Portrait/Vertical */}
                     <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-md relative group">
                        <img src="/images/clinical_room.jpg" alt="Medical equipment with MPOX poster" className="w-full h-full object-cover" />
                         <div className="absolute bottom-0 inset-x-0 bg-black/50 text-white text-xs p-2">Clinical Setting</div>
                     </div>
                     {/* Dr Ferdinand - Portrait/Vertical */}
                     <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-md relative group">
                        <img src="/images/dr_ferdinand.jpg" alt="Dr Ferdinand at desk with green curtain" className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 inset-x-0 bg-black/50 text-white text-xs p-2">Dr. Fredinard</div>
                     </div>
                  </div>
               </div>
            </div>
           </FadeIn>
        </section>

        {/* 5. Documentation of Activities (Gallery/Videos) */}
        <section className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
               <div>
                 <h2 className="text-2xl font-heading font-bold mb-2">5. Documentation of Activities</h2>
                 <p className="text-slate-400 text-sm">Videos and images were consented to be taken by the clinic and doctors.</p>
               </div>
               <a 
                 href="#" 
                 className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 px-5 py-2.5 rounded-lg transition-colors font-medium text-sm"
               >
                 <Video size={18} /> View Video Archive
               </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {/* Reusing the detail images for the gallery view since they are high quality */}
               <div className="aspect-square bg-slate-800 rounded-xl overflow-hidden cursor-pointer border border-slate-700 hover:border-teal-500 transition-all">
                  <img src="/images/dr_alice_desk.jpg" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" alt="Gallery 1" />
               </div>
               <div className="aspect-square bg-slate-800 rounded-xl overflow-hidden cursor-pointer border border-slate-700 hover:border-teal-500 transition-all">
                  <img src="/images/interview_session.jpg" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" alt="Gallery 2" />
               </div>
               <div className="aspect-square bg-slate-800 rounded-xl overflow-hidden cursor-pointer border border-slate-700 hover:border-teal-500 transition-all">
                  <img src="/images/clinical_room.jpg" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" alt="Gallery 3" />
               </div>
               <div className="aspect-square bg-slate-800 rounded-xl overflow-hidden cursor-pointer border border-slate-700 hover:border-teal-500 transition-all">
                  <img src="/images/dental_office.jpg" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" alt="Gallery 4" />
               </div>
            </div>
          </FadeIn>
        </section>

        {/* 6. Reflective Integration & 7. Conceptual Tools */}
        <section className="grid lg:grid-cols-2 gap-12">
            <FadeIn>
               <h2 className="text-2xl font-heading font-bold text-navy-900 mb-6">6. Reflective Integration</h2>
               <div className="prose text-slate-600">
                  <p>
                    Through this experience, I observed how context defines the use of skills. While both professionals shared similar barriers, their approaches differed: the dentist emphasized insurance collaboration, and the GP highlighted systemic technology gaps.
                  </p>
                  <p>
                    This showed me that effective solutions must combine <strong>policy-level innovation</strong> (government + tech systems) with <strong>community-level engagement</strong> (outreach, education).
                  </p>
                  <div className="mt-6">
                    <h4 className="font-bold text-navy-900 mb-2">Skills Enhanced:</h4>
                    <ul className="space-y-2">
                        <li className="flex items-start gap-2"><span className="text-teal-600 mt-1">•</span> <span><strong>Communication:</strong> Learned to craft polite outreach messages.</span></li>
                        <li className="flex items-start gap-2"><span className="text-teal-600 mt-1">•</span> <span><strong>Confidence:</strong> Conducted in-person interviews professionally.</span></li>
                        <li className="flex items-start gap-2"><span className="text-teal-600 mt-1">•</span> <span><strong>Analytical Thinking:</strong> Synthesized insights from practitioners.</span></li>
                        <li className="flex items-start gap-2"><span className="text-teal-600 mt-1">•</span> <span><strong>Reflection:</strong> Connected practical learning to mission goals.</span></li>
                    </ul>
                  </div>
               </div>
            </FadeIn>

            <FadeIn delay={100}>
               <h2 className="text-2xl font-heading font-bold text-navy-900 mb-6">7. Integration of Conceptual Tools</h2>
               <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                  <div className="divide-y divide-slate-100">
                     <div className="p-4 flex gap-4">
                        <div className="bg-teal-50 p-2 rounded-lg h-fit text-teal-600"><Target size={20} /></div>
                        <div>
                           <h4 className="font-bold text-navy-900 text-sm">Mission Mapping</h4>
                           <p className="text-sm text-slate-600 mt-1">Helped align interviews to my healthcare-access mission.</p>
                        </div>
                     </div>
                     <div className="p-4 flex gap-4">
                        <div className="bg-teal-50 p-2 rounded-lg h-fit text-teal-600"><Users size={20} /></div>
                        <div>
                           <h4 className="font-bold text-navy-900 text-sm">Ecosystem Thinking</h4>
                           <p className="text-sm text-slate-600 mt-1">Recognized interplay between government, insurance, and clinics.</p>
                        </div>
                     </div>
                     <div className="p-4 flex gap-4">
                        <div className="bg-teal-50 p-2 rounded-lg h-fit text-teal-600"><Brain size={20} /></div>
                        <div>
                           <h4 className="font-bold text-navy-900 text-sm">Strengths Identification</h4>
                           <p className="text-sm text-slate-600 mt-1">Used my communication and curiosity strengths during fieldwork.</p>
                        </div>
                     </div>
                     <div className="p-4 flex gap-4">
                        <div className="bg-teal-50 p-2 rounded-lg h-fit text-teal-600"><Lightbulb size={20} /></div>
                        <div>
                           <h4 className="font-bold text-navy-900 text-sm">Social Learning</h4>
                           <p className="text-sm text-slate-600 mt-1">Learned through observation and dialogue with practitioners.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </FadeIn>
        </section>

        {/* Next Steps & Conclusion */}
        <section className="bg-teal-50 rounded-3xl p-8 md:p-12 border border-teal-100">
            <FadeIn>
                <div className="grid md:grid-cols-2 gap-12">
                   <div>
                      <h2 className="text-2xl font-heading font-bold text-navy-900 mb-4">Next Steps</h2>
                      <ol className="list-decimal list-inside space-y-3 text-slate-700 font-medium">
                         <li>Expand interviews to pharmacists once access is granted.</li>
                         <li>Design a short awareness campaign on oral and general health using digital platforms.</li>
                         <li>Explore grants or partnerships that support low-cost health technology in rural areas.</li>
                      </ol>
                   </div>
                   <div>
                      <h2 className="text-2xl font-heading font-bold text-navy-900 mb-4">9. Conclusion</h2>
                      <p className="text-slate-700 leading-relaxed mb-4">
                        The mission shadowing exercise at Medilabs Clinic provided a practical understanding of the gaps and opportunities in African healthcare systems. Both interviews reinforced that financial access, technological integration, and awareness are central to equitable healthcare delivery.
                      </p>
                      <p className="text-teal-800 font-semibold italic">
                        "The experience solidified my motivation to pursue partnerships that supply affordable diagnostic tools and digital health platforms in underserved communities."
                      </p>
                   </div>
                </div>
            </FadeIn>
        </section>

      </main>

      {/* Footer Call to Action */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
            <h3 className="text-2xl font-heading font-bold mb-6">Ready to discuss this research?</h3>
            <div className="flex justify-center gap-4">
                 <button onClick={onBack} className="px-6 py-3 border border-slate-600 rounded-full hover:bg-slate-800 transition-colors">
                    Back to Portfolio
                 </button>
                 <a href="mailto:f.william@alustudent.com" className="px-6 py-3 bg-teal-600 rounded-full font-medium hover:bg-teal-700 transition-colors">
                    Contact Faith
                 </a>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default MissionShadowing;
