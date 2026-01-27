import React from 'react';

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  category: 'Education' | 'Project' | 'Research' | 'Future';
}

export interface Artifact {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}