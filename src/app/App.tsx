import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router';
import { Navigation } from '@/app/components/Navigation';
import { LandingPage } from '@/app/components/LandingPage';
import { ProjectsPage } from '@/app/components/ProjectsPage';
import { ProjectDetail } from '@/app/components/ProjectDetail';
import { ResumePage } from '@/app/components/ResumePage';

function AppRoutes() {
  const routes = useRoutes([
    { path: '/', element: <LandingPage /> },
    { path: '/projects', element: <ProjectsPage /> },
    { path: '/projects/:id', element: <ProjectDetail /> },
    { path: '/resume', element: <ResumePage /> }
  ]);
  
  return routes;
}

export default function App() {
  // Set favicon dynamically
  React.useEffect(() => {
    // Remove existing favicons
    const existingFavicons = document.querySelectorAll("link[rel*='icon']");
    existingFavicons.forEach(favicon => favicon.remove());

    // Create SVG data URI for favicon
    const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%230891b2"/><text x="50" y="70" font-size="45" text-anchor="middle" fill="%23ffffff" font-family="Arial, sans-serif" font-weight="bold">JX</text></svg>`;
    const svgDataUri = `data:image/svg+xml,${svgString}`;

    // Add SVG favicon
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/svg+xml';
    favicon.href = svgDataUri;
    document.head.appendChild(favicon);

    // Add fallback ICO favicon
    const faviconIco = document.createElement('link');
    faviconIco.rel = 'alternate icon';
    faviconIco.type = 'image/x-icon';
    faviconIco.href = svgDataUri;
    document.head.appendChild(faviconIco);

    // Set page title
    document.title = 'Jason Xu - Game Designer Portfolio';
  }, []);

  return (
    <BrowserRouter>
      <div 
        className="min-h-screen" 
        style={{ 
          background: 'linear-gradient(137.423deg, rgb(2, 6, 24) 0%, rgb(22, 36, 86) 50%, rgb(2, 6, 24) 100%)' 
        }}
      >
        <Navigation />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}