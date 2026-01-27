import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Artifacts from './components/Artifacts';
import Reflection from './components/Reflection';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import Mission from './components/Mission';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'mission'>('home');
  const [currentProjectId, setCurrentProjectId] = useState<string | null>(null);

  const handleViewProject = (id: string) => {
    setCurrentProjectId(id);
  };

  const handleBack = () => {
    setCurrentProjectId(null);
    setCurrentView('home');
  };

  const handleExploreMission = () => {
    setCurrentView('mission');
  }

  if (currentProjectId) {
    return <ProjectDetail id={currentProjectId} onBack={handleBack} />;
  }

  if (currentView === 'mission') {
    return <Mission onBack={handleBack} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Header />
      <main>
        <Hero onExploreMission={handleExploreMission} />
        <Timeline />
        <Artifacts onViewProject={handleViewProject} />
        <Reflection />
      </main>
      <Footer />
    </div>
  );
};

export default App;