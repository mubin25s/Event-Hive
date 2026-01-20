# Event-Hive Platform Architecture Summary

## 🎯 Platform Overview
Event-Hive is a **marketplace platform** connecting event service providers with clients, similar to how FoodPanda connects restaurants with customers.

---

## 👥 Stakeholder Portals

### 1. **Landing Page** (`index.html`)
**Purpose**: Public-facing homepage for all visitors
**Features**:
- Hero section with platform introduction
- Feature highlights (6 key capabilities)
- Navigation to all stakeholder portals
- Call-to-action buttons:
  - "Browse Venues" → Marketplace
  - "Become a Vendor" → Vendor Dashboard
  - "Get Started" → Client Dashboard

---

### 2. **Marketplace** (`marketplace.html`)
**Who**: Event organizers/clients browsing for venues
**Features**:
- **Advanced Filtering**:
  - Event Type (Wedding, Corporate, Birthday, Conference)
  - Budget Range (Under $5k, $5k-$10k, $10k-$25k, $25k+)
  - Date selection
- **Category Tabs**:
  - All Venues
  - Community Centers (all-inclusive packages)
  - Resorts (venue-only, bring your own services)
  - Catering
  - Photography
- **Venue Cards Display**:
  - Venue image with capacity
  - Location
  - Pricing per day
  - Included services (tags)
  - Real-time availability status
  - "View Details & Book" button

**Example Listings**:
1. **Grand Community Hall** - $3,500/day
   - Type: Community Center
   - Capacity: 500
   - Includes: Catering, Decoration, AV Setup
   
2. **Lakeside Paradise Resort** - $8,000/day
   - Type: Resort
   - Capacity: 300
   - Bring Your Own: Catering, Decoration
   
3. **Riverside Event Center** - $2,200/day
   - Type: Community Center
   - Capacity: 200
   - Includes: Full Package, Parking

---

### 3. **Vendor Dashboard** (`vendor-dashboard.html`)
**Who**: Community centers, resorts, caterers, decorators
**Features**:

#### **Stats Overview**:
- Total Bookings: 24
- Total Revenue: $52k
- Average Rating: 4.8 ⭐

#### **Interactive Availability Calendar**:
- Monthly view (January 2026 shown)
- **Color-coded days**:
  - 🟢 Green = Available
  - 🔴 Red = Booked
  - ⚪ Gray = Unavailable
- **Click to toggle** availability status
- Legend for easy understanding
- Month navigation (previous/next)

#### **Recent Bookings List**:
- Corporate Annual Meeting - Jan 2, 2026 - $3,500
- Wedding Reception - Jan 7, 2026 - $5,200

#### **Sidebar Navigation**:
- Dashboard
- Availability Calendar
- My Services
- Bookings
- Reviews
- Analytics
- Settings

---

### 4. **Client Dashboard** (`dashboard.html`)
**Who**: Event organizers managing their events
**Features**:

#### **Stats Overview**:
- Active Events: 12
- Total Budget Used: $45k (85% progress bar)
- Pending Tasks: 340

#### **Upcoming Events**:
- Tech Summit 2024 - Oct 24 - Convention Center, NY
- Charity Gala Dinner - Nov 2 - Grand Hotel, London

#### **Priority Tasks**:
- ☐ Finalize Catering Menu
- ☐ Send Speaker Invites
- ☑ Book AV Equipment (completed)

#### **Sidebar Navigation**:
- Dashboard
- Browse Venues (→ marketplace)
- My Bookings
- Guest Lists
- Budget Tracker
- Tasks
- Preview Guest View (→ guest portal)
- Analytics

---

### 5. **Guest View** (`guest-view.html`)
**Who**: Event attendees (read-only access)
**Features**:

#### **Event Header**:
- Event name: "Sarah & Michael's Wedding"
- Date: February 14, 2026
- Time: 5:00 PM - 11:00 PM
- Location: Grand Community Hall, NY

#### **Welcome Message**:
Personal message from hosts to guests

#### **Event Details**:
- **Theme & Dress Code**:
  - Theme: Romantic Garden
  - Dress Code: Formal / Black Tie Optional
  - Color Palette: Blush Pink, Gold, Ivory

- **Guest Count**:
  - Total Invited: 250
  - Confirmed: 187
  - Pending: 63

#### **Event Schedule** (Timeline View):
- 5:00 PM - Guest Arrival (welcome drinks, photo booth)
- 5:30 PM - Ceremony
- 6:30 PM - Cocktail Hour
- 7:30 PM - Dinner Service
- 9:00 PM - First Dance & Dancing
- 11:00 PM - Event Ends

#### **Dinner Menu**:
**Appetizers**:
- Caprese Salad (Vegetarian)
- Shrimp Cocktail

**Main Course** (choose one):
- Grilled Salmon
- Filet Mignon
- Vegetarian Risotto

**Dessert**:
- Wedding Cake (3-tier vanilla & chocolate)

#### **Important Information**:
- Parking: Complimentary valet
- Photography: Unplugged ceremony requested
- Dietary Restrictions: Contact email provided
- RSVP: Deadline January 30, 2026

#### **RSVP Button**:
Large "Confirm Your Attendance" button

---

## 🔄 User Flow Examples

### **Flow 1: Client Books a Venue**
1. Client visits `index.html`
2. Clicks "Browse Venues" → `marketplace.html`
3. Filters by budget ($5k-$10k) and date (Feb 14)
4. Views "Grand Community Hall" details
5. Checks availability calendar
6. Books venue → Goes to `dashboard.html`
7. Manages guest list and tasks
8. Generates guest view link → `guest-view.html`
9. Shares link with 250 guests

### **Flow 2: Vendor Manages Availability**
1. Vendor logs into `vendor-dashboard.html`
2. Views availability calendar (January 2026)
3. Clicks on Jan 15 to mark as "Available"
4. Clicks on Jan 20 to mark as "Unavailable"
5. Views new booking notification
6. Confirms booking for $3,500
7. Checks revenue stats ($52k total)

### **Flow 3: Guest Views Event Details**
1. Guest receives link to `guest-view.html`
2. Reads welcome message
3. Checks event schedule (5:30 PM ceremony)
4. Reviews menu options (chooses Grilled Salmon)
5. Notes dress code (Formal)
6. Clicks "Confirm Your Attendance"
7. RSVP submitted

---

## 🎨 Design System

### **Color Palette**:
- Background: Deep Navy (#0f172a)
- Primary: Indigo (#6366f1)
- Accent: Pink (#ec4899)
- Success: Green (#10b981)
- Warning: Orange (#f59e0b)

### **Key Design Elements**:
- **Glassmorphism**: Frosted glass cards with backdrop blur
- **Gradients**: Smooth color transitions
- **Micro-animations**: Hover effects, entry animations
- **Typography**: 'Outfit' font family
- **Icons**: FontAwesome 6.4.0

---

## 📁 File Structure
```
Event Coordinator/
├── index.html              # Landing page
├── marketplace.html        # Browse venues
├── vendor-dashboard.html   # Vendor portal
├── dashboard.html          # Client portal
├── guest-view.html         # Guest view
├── style.css              # Design system
├── script.js              # Interactions
└── README.md              # Documentation
```

---

## 🚀 Key Differentiators

### **Marketplace Model**:
Unlike traditional event management systems, Event-Hive works as a **two-sided marketplace**:
- Vendors list services (supply side)
- Clients browse and book (demand side)
- Platform facilitates transactions

### **Real-Time Availability**:
- Vendors mark dates as available/booked
- Clients see live availability
- No double-booking conflicts

### **Multi-Stakeholder Access**:
- **Vendors**: Full control over listings and calendar
- **Clients**: Browse, book, manage events
- **Guests**: Read-only event details
- **Admin**: Platform oversight (to be implemented)

### **Venue Types**:
1. **Community Centers**: All-inclusive (venue + catering + decoration)
2. **Resorts**: Venue-only (client brings services)

---

## 🎯 Next Steps for Full Implementation

### **Backend Requirements**:
1. User authentication (login/signup)
2. Database for venues, bookings, users
3. Payment gateway integration
4. Email/SMS notification system
5. Real-time calendar sync
6. Search and filtering logic
7. Booking confirmation workflow

### **Additional Features**:
1. Vendor verification system
2. Review and rating system
3. Chat/messaging between clients and vendors
4. Advanced analytics dashboard
5. Mobile responsive optimization
6. PDF report generation
7. QR code check-in system
8. Budget tracking tools

---

## ✅ Current Status
**Completed**: Frontend UI/UX for all stakeholder portals
**Technology**: Pure HTML, CSS, JavaScript (no frameworks)
**Status**: Ready for backend integration
