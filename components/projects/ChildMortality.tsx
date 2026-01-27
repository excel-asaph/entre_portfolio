import React, { useEffect } from 'react';
import FadeIn from '../FadeIn';
import { ArrowLeft, Clock, Target, Activity, BookOpen, BarChart2, PieChart, Users, FileText, Globe, TrendingDown, Info } from 'lucide-react';

interface ChildMortalityProps {
  onBack: () => void;
}

const ChildMortality: React.FC<ChildMortalityProps> = ({ onBack }) => {
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
            Quantitative Reasoning Report
          </span>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="pt-32 pb-16 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-teal-600/5 -skew-x-12 transform translate-x-20"></div>
        <div className="container mx-auto px-6 relative">
          <FadeIn>
            <div className="flex flex-col md:flex-row gap-4 mb-6 text-sm font-semibold text-teal-600 uppercase tracking-wide">
                <span className="flex items-center gap-2"><Clock size={16} /> 28th Nov 2025</span>
                <span className="flex items-center gap-2"><Globe size={16} /> Sub-Saharan Africa</span>
                <span className="flex items-center gap-2 border-l border-teal-200 pl-4 ml-2"><BookOpen size={16} /> ID: 833920549</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy-900 mb-6 leading-tight">
              Impact of Healthcare Funding & Partnerships on <br/>
              <span className="text-teal-600">Child Mortality Reduction</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
              An investigation into how healthcare funding and multi-stakeholder partnerships influence child survival rates in underserved communities.
            </p>
          </FadeIn>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16 space-y-24">
        
        {/* 1. Introduction & Mission */}
        <section className="grid md:grid-cols-2 gap-12 items-start">
          <FadeIn>
            <h2 className="text-3xl font-heading font-bold text-navy-900 mb-6">1.0 Introduction</h2>
            <div className="prose prose-lg text-slate-600 space-y-4">
              <p>
                Child mortality remains one of the most pressing public health challenges in Sub-Saharan Africa. Many children under the age of five continue to die from causes that are both preventable and treatable, such as malaria, pneumonia, diarrhoea, and complications at birth.
              </p>
              <p>
                Healthcare funding plays a central role in improving access to essential services. However, funding on its own is not enough. Its effectiveness depends on good governance, targeted spending, and strong partnerships between governments, NGOs, local health providers, and communities.
              </p>
              <p>
                This study uses survey data from 31 respondents to explore how people perceive healthcare access, government funding, and child health service coverage in their communities.
              </p>
            </div>
            
            <div className="mt-8">
               <h2 className="text-2xl font-heading font-bold text-navy-900 mb-4">2.0 Mission Alignment</h2>
               <div className="p-6 bg-teal-50 rounded-xl border border-teal-100">
                  <p className="text-slate-700 italic">
                      "My mission is to secure funding and partnerships to expand healthcare in underserved communities in Sub-Saharan Africa... to contribute to a reduction in child mortality rates by 2030."
                  </p>
               </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={100}>
            {/* Mission/Report Visual */}
             <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-navy-900 mb-4 flex items-center gap-2">
                    <Target size={20} className="text-teal-600" /> Research Objectives
                </h3>
                <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></span>
                        <span>Examine perceived accessibility of healthcare.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></span>
                        <span>Evaluate sufficiency of government funding.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></span>
                        <span>Estimate child healthcare coverage (regular access).</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></span>
                        <span>Test relationship between funding sufficiency and access.</span>
                    </li>
                </ul>
             </div>
          </FadeIn>
        </section>

        {/* 4.0 Population & 5.0 Sample Size */}
        <section className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl">
           <FadeIn>
              <div className="grid md:grid-cols-2 gap-12">
                 <div>
                    <h2 className="text-2xl font-heading font-bold mb-4">4.0 Methodology</h2>
                    <p className="text-slate-300 mb-6">
                        <strong>Population:</strong> Individuals living in Sub-Saharan African communities (parents, students, community leaders).
                    </p>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="bg-teal-600 p-3 rounded-lg">
                            <Users size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-slate-400 uppercase tracking-wider font-semibold">Sample Size</p>
                            <p className="text-2xl font-bold">31 Respondents</p>
                        </div>
                    </div>
                    <p className="text-sm text-slate-400">
                        Convenience sampling via Google Forms questionnaire. While small, the sample is sufficient for introductory quantitative descriptive statistics.
                    </p>
                 </div>
                 <div>
                    <h3 className="text-xl font-bold mb-4">Data Collection Metrics</h3>
                    <ul className="space-y-3 text-slate-300">
                        <li>• 5-point Likert scale for Accessibility (1-5)</li>
                        <li>• 5-point Likert scale for Funding Sufficiency (1-5)</li>
                        <li>• Percentage estimates for Child Healthcare Access</li>
                        <li>• Percentage estimates for Prenatal Care</li>
                    </ul>
                 </div>
              </div>
           </FadeIn>
        </section>

        {/* 7.0 Findings */}
        <section>
           <FadeIn>
              <h2 className="text-3xl font-heading font-bold text-navy-900 mb-12 text-center">7.0 Presentation of Key Findings</h2>
           </FadeIn>

           <div className="space-y-20">
              {/* 7.1 Accessibility */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                 <FadeIn>
                    <h3 className="text-2xl font-bold text-navy-900 mb-4">7.1 Perceived Accessibility</h3>
                    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm mb-6">
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                                <p className="text-xs text-slate-500 uppercase">Mean</p>
                                <p className="text-2xl font-bold text-teal-600">3.42</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase">Median</p>
                                <p className="text-2xl font-bold text-navy-900">3</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase">Std Dev</p>
                                <p className="text-2xl font-bold text-navy-900">1.12</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-slate-600">
                        On average, respondents rated healthcare accessibility as "moderate". The spread indicates unequal access, possibly varying by location.
                    </p>
                 </FadeIn>
                 <FadeIn delay={100}>
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                        <img src="/images/cm_accessibility_chart.png" alt="Accessibility Chart" className="w-full h-auto rounded-lg shadow-sm" />
                    </div>
                 </FadeIn>
              </div>

              {/* 7.2 Funding Sufficiency */}
              <div className="grid lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
                 <FadeIn delay={100} className="order-2 lg:order-1">
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                        <img src="/images/cm_funding_sufficiency_chart.png" alt="Funding Sufficiency Chart" className="w-full h-auto rounded-lg shadow-sm" />
                    </div>
                 </FadeIn>
                 <FadeIn className="order-1 lg:order-2">
                    <h3 className="text-2xl font-bold text-navy-900 mb-4">7.2 Funding Sufficiency</h3>
                    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm mb-6">
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                                <p className="text-xs text-slate-500 uppercase">Mean</p>
                                <p className="text-2xl font-bold text-red-500">2.39</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase">Mode</p>
                                <p className="text-2xl font-bold text-navy-900">1</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase">Range</p>
                                <p className="text-2xl font-bold text-navy-900">1-5</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-slate-600">
                        Respondents generally feel government funding is <strong>inadequate</strong>. The most common response (Mode) was "1 - Not sufficient at all", highlighting a critical gap.
                    </p>
                 </FadeIn>
              </div>

              {/* 7.3 Child Access % */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                 <FadeIn>
                    <h3 className="text-2xl font-bold text-navy-900 mb-4">7.3 Child Healthcare Coverage</h3>
                    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm mb-6">
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                                <p className="text-xs text-slate-500 uppercase">Mean %</p>
                                <p className="text-2xl font-bold text-teal-600">50.7%</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase">Mode</p>
                                <p className="text-2xl font-bold text-navy-900">41-60%</p>
                            </div>
                             <div>
                                <p className="text-xs text-slate-500 uppercase">Std Dev</p>
                                <p className="text-2xl font-bold text-navy-900">23.4%</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-slate-600">
                        Respondents believe roughly <strong>half</strong> of children have regular access to basic services. The high standard deviation suggests significant inequality between communities.
                    </p>
                 </FadeIn>
                 <FadeIn delay={100}>
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                        <img src="/images/cm_access_percentage_chart.png" alt="Child Access Chart" className="w-full h-auto rounded-lg shadow-sm" />
                    </div>
                 </FadeIn>
              </div>

               {/* 7.4 Correlation */}
              <div className="bg-teal-900 text-white rounded-3xl p-8 md:p-12">
                 <FadeIn>
                     <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                             <h3 className="text-2xl font-bold mb-2">7.4 The Correlation</h3>
                             <p className="text-teal-200 mb-6 font-medium">Is there a link between funding sufficiency and child access?</p>
                             
                             <div className="mb-8">
                                <span className="text-6xl font-bold text-white">r = 0.52</span>
                                <p className="text-lg mt-2 font-medium">Moderate Positive Correlation</p>
                             </div>

                             <div className="prose text-slate-300">
                                <p>
                                    Respondents who perceived government funding as more sufficient also estimated higher child healthcare access. This statistically validates that <strong>resources matter</strong>, explaining about 27% of the variance in coverage.
                                </p>
                             </div>
                        </div>
                        <div className="bg-white rounded-xl p-2">
                             <img src="/images/cm_scatter_plot.png" alt="Correlation Scatter Plot" className="w-full h-auto rounded-lg" />
                             <p className="text-slate-500 text-xs text-center mt-2 p-2">Figure 7.4: Scatter plot showing relationship between Perceived Funding and Child Access</p>
                        </div>
                     </div>
                 </FadeIn>
              </div>
           </div>
        </section>

        {/* 8.0 Recommendations & 9.0 Reflection */}
        <section className="grid md:grid-cols-2 gap-12">
            <FadeIn>
                <div className="bg-white rounded-2xl border border-slate-200 p-8 h-full shadow-sm">
                    <h2 className="text-2xl font-heading font-bold text-navy-900 mb-6">8.0 Recommendations</h2>
                    <ul className="space-y-4">
                        <li className="flex gap-3">
                            <span className="bg-teal-100 text-teal-800 font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                            <p className="text-slate-700 text-sm"><strong>Strengthen Funding:</strong> Policymakers must increase allocations for primary healthcare in rural areas.</p>
                        </li>
                        <li className="flex gap-3">
                            <span className="bg-teal-100 text-teal-800 font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                            <p className="text-slate-700 text-sm"><strong>Strategic Partnerships:</strong> Leverage NGOs and private sector for mobile clinics and telemedicine.</p>
                        </li>
                        <li className="flex gap-3">
                            <span className="bg-teal-100 text-teal-800 font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                            <p className="text-slate-700 text-sm"><strong>Community Awareness:</strong> Invest in health education to increase demand for vaccinations and prenatal care.</p>
                        </li>
                    </ul>
                </div>
            </FadeIn>

            <FadeIn delay={100}>
                 <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 h-full">
                    <h2 className="text-2xl font-heading font-bold text-navy-900 mb-6">9.0 Reflection</h2>
                    <div className="prose text-slate-600 text-sm">
                        <p className="mb-4">
                            "This study has given me a concrete, data-driven view of my mission. The results confirm that focusing on funding and partnerships is not just theoretical, but practically relevant."
                        </p>
                        <p>
                            However, the study has limitations (sample size n=31, perception-based). Future studies should use larger, diverse samples and combine surveys with qualitative interviews to deeper understand <em>how</em> funding flows affect frontline delivery.
                        </p>
                    </div>
                </div>
            </FadeIn>
        </section>

      </main>
      
      {/* Footer Call to Action */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
            <h3 className="text-2xl font-heading font-bold mb-6">Read the full report</h3>
            <div className="flex flex-wrap justify-center gap-4">
                 <button onClick={onBack} className="px-6 py-3 border border-slate-600 rounded-full hover:bg-slate-800 transition-colors">
                    Back to Portfolio
                 </button>
                 <a href="https://docs.google.com/spreadsheets/d/1K1ha3VxwgmhecPpRa8Dfi_vW6NWJaUNJZwbaTJ_ob1M/edit?gid=1359918730#gid=1359918730" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-teal-600 text-teal-400 rounded-full font-medium hover:bg-teal-900/50 transition-colors flex items-center gap-2">
                    <BarChart2 size={18} /> View Data Sheet
                 </a>
                 <a href="/pdfs/Faith William_Quantitative Reasoning Summative Asessment Report.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-teal-600 rounded-full font-medium hover:bg-teal-700 transition-colors flex items-center gap-2">
                    <FileText size={18} /> Download PDF
                 </a>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default ChildMortality;
