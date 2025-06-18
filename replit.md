# Replit Project Guide

## Overview

This project is a professional landing page for a web development service offering high-quality websites at a fixed price of $1,500. The landing page is built using vanilla HTML, CSS, and JavaScript with a focus on modern design, performance, and user experience. It features an animated mascot, dynamic content, and accessibility features.

## System Architecture

### Frontend Architecture
- **Technology Stack**: Pure HTML5, CSS3, and vanilla JavaScript
- **Design System**: Custom CSS with CSS custom properties (variables) for consistent theming
- **Typography**: Inter font family from Google Fonts
- **Animation**: CSS animations and transitions with JavaScript triggers
- **Responsive Design**: Mobile-first approach with fluid layouts

### Server Architecture
- **Development Server**: Python HTTP server (port 5000)
- **Production Deployment**: Static file serving
- **Domain**: Custom domain (offer.artivicolab.com)

## Key Components

### 1. Landing Page Structure
- **Hero Section**: Main headline, subheadline, and primary CTA
- **Problem/Solution Section**: Addresses common website pain points
- **USP Section**: Unique selling propositions with visual elements
- **Price Comparison**: Feature comparison table
- **Social Proof**: Testimonials and trust builders

### 2. Interactive Elements
- **Animated Mascot**: Custom CSS-animated character with speech bubbles
- **Progress Bar**: Scroll-based progress indicator
- **Back to Top Button**: Smooth scrolling navigation aid
- **Mobile Navigation**: Responsive hamburger menu

### 3. Accessibility Features
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Compatibility**: ARIA labels and semantic HTML
- **High Contrast Mode**: Optional high contrast theme
- **Font Size Controls**: Adjustable text sizing
- **Animation Controls**: Option to disable animations
- **Focus Indicators**: Enhanced focus visibility

## Data Flow

### Client-Side Interactions
1. **Page Load**: Initialize JavaScript components and event listeners
2. **Scroll Events**: Update progress bar and trigger animations
3. **User Interactions**: Handle navigation, form submissions, and accessibility toggles
4. **State Management**: Track navigation state, scroll position, and user preferences

### Performance Optimizations
- **Throttled Scroll Events**: Prevent excessive scroll event firing
- **Debounced Resize Events**: Optimize window resize handling
- **Lazy Loading**: Progressive enhancement for images and animations
- **Static Asset Optimization**: Minified CSS and JavaScript

## External Dependencies

### Third-Party Services
- **Google Fonts**: Inter font family hosting
- **Font Preloading**: Optimized font loading strategy

### Development Dependencies
- **Python HTTP Server**: Local development server
- **Replit Deployment**: Integrated hosting platform

## Deployment Strategy

### Development Environment
- **Local Server**: Python HTTP server on port 5000
- **Hot Reload**: Manual refresh for development
- **Environment**: Replit with Node.js 20 and Python 3.11 modules

### Production Deployment
- **Static Hosting**: Simple HTTP server deployment
- **Domain Configuration**: Custom domain with CNAME record
- **Port Mapping**: Internal port 5000 mapped to external port 80
- **Build Process**: No build step required (vanilla assets)

### Continuous Integration
- **Deployment Command**: `python -m http.server 5000`
- **Workflow**: Parallel task execution with automatic port detection
- **Monitoring**: Built-in Replit monitoring and logging

## Changelog

```
Changelog:
- June 18, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```

## Technical Considerations

### Performance Goals
- **Page Load Speed**: Target under 2 seconds
- **Google PageSpeed Score**: Aim for 90+ score
- **Mobile Performance**: Optimized for mobile-first experience
- **SEO Optimization**: Clean HTML structure and fast loading

### Browser Compatibility
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Progressive Enhancement**: Graceful degradation for older browsers
- **Mobile Support**: iOS Safari and Android Chrome optimization

### Security Considerations
- **Static Content**: No server-side vulnerabilities
- **HTTPS Ready**: Prepared for SSL certificate installation
- **Content Security**: No external script dependencies beyond fonts