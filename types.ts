import React from 'react';

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
  isComingSoon?: boolean;
}

export interface SocialLink {
  platform: string;
  username?: string;
  description: string;
  url: string;
  imageUrl?: string;
  icon?: React.ReactNode;
}

export interface ProfileData {
  name: string;
  occupation: string;
  environment: string;
  introduction: string;
}