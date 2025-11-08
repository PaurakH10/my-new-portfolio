# My Portfolio Website

## Overview
A personal portfolio website built with React (Create React App). The site showcases a professional portfolio with a hero section, header navigation, and contact functionality using EmailJS for form submissions.

## Project Details
- **Framework**: React 19.1.1
- **Build Tool**: Create React App (react-scripts 5.0.1)
- **UI Libraries**: FontAwesome for icons
- **Contact Form**: EmailJS integration for sending emails
- **Styling**: Custom CSS with responsive design

## Project Structure
```
/public          - Static assets and index.html
/src
  /components    - React components (Header, Hero, About, Contact, Gallery, Footer, Projects)
  App.jsx        - Main application component
  index.js       - Application entry point
```

## Recent Changes (November 8, 2025)
- Imported from GitHub repository
- Configured for Replit environment:
  - Set up to run on port 5000 with host 0.0.0.0
  - Configured host verification bypass for Replit proxy (DANGEROUSLY_DISABLE_HOST_CHECK=true)
  - Set up WebSocket port configuration (WDS_SOCKET_PORT=0)
  - Created workflow for React development server
  - Installed all npm dependencies
- Implemented scroll-based active navigation highlighting:
  - Navigation links now automatically highlight based on the current section in view
  - Uses IntersectionObserver API to track scroll position
  - Active state updates smoothly as user scrolls through sections

## Running the Project
The project runs automatically via the configured workflow:
- Development server: `npm start` (runs on port 5000)
- Build for production: `npm run build`
- Run tests: `npm test`

## Features
- Responsive header with navigation
- Hero section with call-to-action buttons
- Portfolio gallery
- Contact form with EmailJS integration
- Professional footer
- Loading screen animation
- FontAwesome icons integration

## EmailJS Configuration
The site uses EmailJS for contact form functionality:
- Service ID: service_i2j775k
- Template ID: template_k6xrhpa
- Public Key: DgINRXvhqKiVs2RVX

## Known Issues
- Some ESLint warnings for unused imports in About.js and redundant alt attributes in Gallery.js (non-critical)
