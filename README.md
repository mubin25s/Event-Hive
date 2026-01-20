# Event-Hive: Event Coordinator Platform

## Overview
Event-Hive is a **marketplace-style event coordination platform** (similar to FoodPanda for restaurants) that connects multiple stakeholders in the event planning ecosystem. The platform enables:

- **Vendors** (community centers, resorts, caterers) to list their services and manage availability
- **Event Organizers/Clients** to browse, compare, and book venues and services
- **Guests** to view event details, schedules, and menus
- **Admins** to oversee the entire platform

## Stakeholder Roles

### 1. **Vendors** (Service Providers)
Vendors include community centers, resorts, caterers, decorators, and other event service providers. They can:
- Manage an **interactive availability calendar** (mark dates as available/booked)
- Set pricing and service packages
- View bookings and revenue analytics
- Respond to client inquiries
- **Two vendor types:**
  - **Community Centers**: All-inclusive packages (venue, catering, decoration, AV)
  - **Resorts**: Venue-only (clients bring their own catering, decoration)

### 2. **Event Organizers/Clients**
Users who plan and book events. They can:
- **Browse the marketplace** by budget, date, event type, and location
- Compare venues and services side-by-side
- View real-time availability calendars
- Book venues and manage guest lists
- Track budgets and tasks
- Generate shareable guest view links

### 3. **Guests** (Event Attendees)
Invited attendees who receive read-only access to:
- Event schedule and timeline
- Menu options and dietary information
- Theme and dress code
- Venue location and parking details
- RSVP functionality

### 4. **Admin**
Platform administrators who:
- Manage vendor approvals
- Monitor transactions
- Handle disputes
- Generate platform-wide analytics

## Features Implemented (UI/UX)
- **Modern Glassmorphism Design**: A premium dark-mode aesthetic with varying transparency levels, blurs, and vibrant gradients.
- **Responsive Layouts**: Fully responsive Landing Page and Dashboard.
- **Interactive Elements**: Hover effects, smooth transitions, and entry animations.
- **Dashboard Interface**: A visualized coordinator console showing:
    - Real-time statistics (Budget, Active Events, Tasks).
    - Upcoming event lists.
    - Priority task management.
- **Navigation**:
    - **Header**: Sticky navigation with scroll effects.
    - **Sidebar**: Collapsible-ready sidebar for dashboard modules.

## Project Structure
- `index.html`: Public landing page with feature highlights and navigation to all portals
- `marketplace.html`: Browse and filter venues/services by budget, date, and event type
- `vendor-dashboard.html`: Vendor portal with availability calendar and booking management
- `dashboard.html`: Client/organizer dashboard for managing events and bookings
- `guest-view.html`: Read-only event details page for attendees
- `style.css`: Core design system with CSS variables, utility classes, and component styles
- `script.js`: Handles interactions, scroll events, animations, and calendar functionality

## How to Run
Simply open `index.html` or `dashboard.html` in any modern web browser. No compilation or server is required for this vanilla implementation.

## Tech Stack
- **HTML5**: Semantic structure.
- **CSS3**: Variables, Flexbox/Grid, Backdrop-filter (Glassmorphism).
- **JavaScript**: ES6+ for DOM manipulation.
- **Fonts**: 'Outfit' from Google Fonts.
- **Icons**: FontAwesome 6.4.0 (CDN).
