import React from 'react';
import MissionShadowing from './projects/MissionShadowing';
import ChildMortality from './projects/ChildMortality';
import KuzaWellness from './projects/KuzaWellness';

interface ProjectDetailProps {
  id: string;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ id, onBack }) => {
  if (id === '1') {
    return <KuzaWellness onBack={onBack} />;
  }
  if (id === '2') {
    return <MissionShadowing onBack={onBack} />;
  }
  if (id === '3') {
    return <ChildMortality onBack={onBack} />;
  }
  
  // Default or 404
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Project Not Found</h2>
            <button onClick={onBack} className="text-teal-600 hover:underline">Back to Portfolio</button>
        </div>
    </div>
  );
};

export default ProjectDetail;
