import React from 'react';
import FadeIn from './FadeIn';
import { Artifact } from '../types';
import { ExternalLink } from 'lucide-react';

interface ArtifactsProps {
  onViewProject: (id: string) => void;
}

const artifacts: Artifact[] = [
  {
    id: '1',
    title: 'KuzaWellness Campaign',
    description: 'A virtual health education initiative for rural mothers using WhatsApp and Instagram to disseminate vital pre-natal and wellness information.',
    imageUrl: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=800&auto=format&fit=crop',
    tags: ['Community Engagement', 'Social Media', 'Health Education'],
  },
  {
    id: '2',
    title: 'Medilabs Shadowing',
    description: 'Qualitative research portfolio containing practitioner interviews focusing on dental and general medicine barriers in urban clinics.',
    imageUrl: '/images/medilabs_sign.jpg',
    tags: ['Qualitative Research', 'Field Work', 'Operations Analysis'],
  },
  {
    id: '3',
    title: 'Child Mortality Study',
    description: 'A data-driven analysis of 31 respondents exploring the impact of funding on child health access (correlation coefficient r = 0.52).',
    imageUrl: '/images/report_cover.png',
    tags: ['Data Analytics', 'Policy Research', 'Statistics'],
  },
];

const Artifacts: React.FC<ArtifactsProps> = ({ onViewProject }) => {
  return (
    <section id="artifacts" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">The Evidence</h2>
              <div className="h-1 w-20 bg-teal-600 rounded-full"></div>
              <p className="text-slate-600 mt-4 max-w-xl">
                Tangible outcomes demonstrating the application of technology and leadership in healthcare.
              </p>
            </div>
            <button className="text-teal-600 font-semibold hover:text-teal-800 flex items-center transition-colors">
              View All Projects <ExternalLink size={16} className="ml-2" />
            </button>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artifacts.map((artifact, index) => (
            <FadeIn key={artifact.id} delay={index * 200}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-teal-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                  {/* Image Placeholder */}
                  <img 
                    src={artifact.imageUrl} 
                    alt={artifact.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {artifact.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-teal-50 text-teal-700 text-xs font-semibold rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{artifact.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">
                    {artifact.description}
                  </p>
                  
                  <button 
                    onClick={() => ['1', '2', '3'].includes(artifact.id) ? onViewProject(artifact.id) : null}
                    className={`w-full py-3 border font-medium rounded-lg transition-all duration-300 ${['1', '2', '3'].includes(artifact.id) ? 'border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white' : 'border-slate-200 text-slate-700 hover:bg-navy-900 hover:text-white hover:border-navy-900'}`}
                  >
                    {['1', '2', '3'].includes(artifact.id) ? 'View Case Study' : 'View Project'}
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artifacts;