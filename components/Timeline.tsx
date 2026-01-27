import React from 'react';
import FadeIn from './FadeIn';
import { TimelineEvent } from '../types';
import { Calendar, Briefcase, GraduationCap, TrendingUp, Users } from 'lucide-react';

const events: TimelineEvent[] = [
  {
    date: 'Aug 2024',
    title: 'Mission Genesis',
    description: "Enrollment at ALU; formalizing the 'Healthcare Access through Technology' mission statement and aligning academic goals with real-world health equity challenges.",
    category: 'Education',
  },
  {
    date: 'May 2025',
    title: 'KuzaWellness Launch',
    description: 'Developed and launched a digital wellness campaign targeting rural women in Gashua, Yobe State, utilizing WhatsApp for low-bandwidth accessibility.',
    category: 'Project',
  },
  {
    date: 'Nov 2025',
    title: 'Field Shadowing',
    description: 'Conducted intensive practitioner interviews and shadowing at Medilabs Clinic to gain firsthand insight into frontline health barriers and operational inefficiencies.',
    category: 'Research',
  },
  {
    date: 'Dec 2025',
    title: 'Data Advocacy',
    description: 'Published critical research on the correlation between government funding allocation and child mortality rates, identifying key areas for policy intervention.',
    category: 'Research',
  },
  {
    date: '2026 & Beyond',
    title: 'The Scaling Phase',
    description: 'Post-graduation strategic plan to implement integrated health platforms across Africa, moving from pilot programs to scalable technological infrastructure.',
    category: 'Future',
  },
];

const getIcon = (category: string) => {
  switch (category) {
    case 'Education': return <GraduationCap size={20} />;
    case 'Project': return <Users size={20} />;
    case 'Research': return <Briefcase size={20} />;
    case 'Future': return <TrendingUp size={20} />;
    default: return <Calendar size={20} />;
  }
};

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">Leadership Journey</h2>
            <div className="h-1 w-20 bg-teal-600 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              A chronological progression of academic growth, practical application, and future vision.
            </p>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {events.map((event, index) => (
              <FadeIn key={index} delay={index * 150}>
                <div className={`relative flex items-center md:justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Empty space for the other side */}
                  <div className="hidden md:block w-5/12"></div>

                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-teal-50 border-4 border-teal-600 flex items-center justify-center text-teal-600 z-10 shadow-md">
                    {getIcon(event.category)}
                  </div>

                  {/* Content Card */}
                  <div className="ml-12 md:ml-0 w-full md:w-5/12 bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl hover:border-teal-200 transition-all duration-300">
                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full mb-2">
                      {event.date}
                    </span>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">{event.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {event.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;