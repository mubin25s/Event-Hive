# Event-Hive Multi-Role Authentication System

## Overview
Event-Hive features a comprehensive multi-role authentication system designed to provide secure, role-specific access to different user types. Each role has unique login requirements and access permissions.

---

## User Roles

### 1. **Admin** 🛡️
- **Purpose**: System administrator with full platform access
- **Login Method**: Email + Password (NO registration - fixed admins)
- **Access Level**: Complete system control
- **Dashboard**: `admin.html`
- **Theme Color**: Red (#ef4444)

**Fixed Admin Credentials:**
- mubin@gmail.com / Password: 1111
- tonmoy@gmail.com / Password: 2222
- rohan@gmail.com / Password: 3333

**Features:**
- Manage all users, vendors, and events
- System configuration and settings
- Analytics and reporting
- User role management
- **NO REGISTRATION** - Limited to 3 fixed accounts only

---

### 2. **Client/Organizer** (Event Organizer) 👔
- **Purpose**: Event organizers who plan and coordinate events
- **Login Method**: Email + Password
- **Registration**: Available
- **Access Level**: Personal event management
- **Dashboard**: `dashboard.html`
- **Theme Color**: Blue (#3b82f6)

**Features:**
- Create and manage events
- Book venues and vendors
- **Generate unique guest codes** for event attendees
- Track event budgets and schedules
- View analytics for their events
- Guest code management visible on dashboard

**Additional Features:**
- Remember me functionality
- Password recovery option
- Account registration

---

### 3. **Vendor** (Service Provider) 🏪
- **Purpose**: Service providers (venues, caterers, photographers, etc.)
- **Login Method**: Email + Password
- **Registration**: "Be a Vendor" registration form
- **Access Level**: Vendor-specific dashboard
- **Dashboard**: `vendor-dashboard.html`
- **Theme Color**: Green (#10b981)

**Registration Requirements:**
- **Email** (required)
- **Vendor Type/Service** (required): Resort, Convention Center, Hotel, Catering, Photography, Decoration, etc.
- **Location/City** (required)
- **Phone Number** (required)
- **Full Address** (optional)
- **Capacity** (optional)
- **Price Range** (optional)
- **Service Description** (optional)
- **Password** (required)

**Features:**
- Manage service listings
- Update availability calendar
- Accept/decline booking requests
- Track earnings and payments
- Manage business profile
- Automatic vendor dashboard creation upon registration

**Additional Features:**
- Remember me functionality
- Business registration creates instant dashboard
- Password recovery

---

### 4. **Employee** (Staff Member) 👷
- **Purpose**: Company employees and staff members
- **Login Method**: Email + Password
- **Registration**: "Apply for Employee" application form
- **Access Level**: Employee dashboard
- **Dashboard**: `staff-dashboard.html`
- **Theme Color**: Purple (#8b5cf6)

**Application Requirements:**
- **First Name** (required)
- **Last Name** (required)
- **Email** (required)
- **Phone Number** (required)
- **Position Applied For** (required): Event Coordinator, Event Manager, Logistics, Customer Service, Technical Support, Sales, Marketing
- **Years of Experience** (required)
- **Cover Letter/Why Join** (required)
- **Password** (required)

**Features:**
- Submit employment applications
- Access staff dashboard after approval
- Manage assigned tasks
- View event assignments
- Track work schedule

---

### 5. **Guest/Attendee** (Event Attendee) 🎫
- **Purpose**: Event attendees with view-only access
- **Login Method**: **Unique 6-digit Code ONLY (NO email/password)**
- **Registration**: NONE - Code-based access only
- **Access Level**: Read-only event information
- **Dashboard**: `guest-view.html`
- **Theme Color**: Orange/Amber (#f59e0b)

**How It Works:**
1. Client books an event
2. System **auto-generates a unique 6-digit code**
3. Code is **visible on client's dashboard**
4. Client shares code with attendees
5. Attendees use code to access event details

**Features:**
- View event schedule and timeline
- See menu and catering options
- Access venue information
- View dress code and theme
- Important event information
- RSVP confirmation
- **NO registration or login required**

**Special Features:**
- Code-based instant access
- Auto-focus input navigation
- Paste support for codes
- Code expiration validation

---

### 6. **Sponsor** (Event Sponsor) 🤝
- **Purpose**: Companies or individuals sponsoring events
- **Login Method**: Email + Password
- **Registration**: "Be a Sponsor" registration form
- **Access Level**: Sponsor dashboard
- **Dashboard**: `sponsor-dashboard.html`
- **Theme Color**: Pink (#ec4899)

**Registration Requirements:**
- **Contact First Name** (required)
- **Contact Last Name** (required)
- **Company/Organization Name** (required)
- **Email** (required)
- **Phone Number** (required)
- **Industry** (required): Technology, Finance, Healthcare, Retail, Food & Beverage, etc.
- **Sponsorship Interest Level** (required): Platinum ($10k+), Gold ($5k-10k), Silver ($2.5k-5k), Bronze ($1k-2.5k), Custom
- **Sponsorship Goals** (required)
- **Password** (required)

**Features:**
- Browse sponsorship opportunities
- Manage active sponsorships
- Track sponsorship investments
- View event metrics and ROI
- Company profile management

---

## File Structure

```
Event Coordinator/
├── login.html              # Main login portal (role selection) - ALL 6 ROLES
├── admin-login.html        # Admin authentication (3 fixed admins)
├── auth.html              # Organizer/Client auth (redirects others)
├── vendor-login.html       # Vendor login
├── vendor-register.html    # Vendor registration (Be a Vendor)
├── employee-login.html     # Employee login & application
├── sponsor-login.html      # Sponsor login & registration
├── guest-login.html        # Guest code entry
├── auth.js                 # Authentication logic & session management
├── admin.html             # Admin dashboard
├── dashboard.html          # Client/Organizer dashboard
├── vendor-dashboard.html   # Vendor dashboard
├── staff-dashboard.html    # Employee dashboard
├── sponsor-dashboard.html  # Sponsor dashboard
└── guest-view.html         # Guest view page
```

---

## Authentication Flow

### 1. **Entry Point**
Users start at `login.html` where they select their role:
- Admin
- Client/Organizer
- Vendor
- Employee
- Sponsor
- Guest

### 2. **Role-Specific Routing**
- **Admin** → `admin-login.html` (Login only, NO registration)
- **Organizer** → `auth.html` (Login + Registration)
- **Vendor** → `vendor-login.html` → `vendor-register.html` (Login + Be a Vendor)
- **Employee** → `employee-login.html` (Login + Apply for Employee)
- **Sponsor** → `sponsor-login.html` (Login + Be a Sponsor)
- **Guest** → `guest-login.html` (Code entry only)

### 3. **Session Creation**
Upon successful authentication:
- Session data stored in `sessionStorage`
- Session expires after 24 hours
- Role-based redirection to appropriate dashboard

### 4. **Session Management**
- `SessionManager` class handles all session operations
- Automatic session expiration checking
- Secure logout functionality

---

## Security Features

### Admin Security
- **Email + Password ONLY** (removed PIN requirement)
- **3 fixed admin accounts** - NO registration allowed
- Enhanced security notices
- Login attempt monitoring (UI notification)
- Special visual indicators for admin access

### Client/Organizer Security
- Email + password authentication
- Remember me functionality (localStorage)
- Password visibility toggle
- Forgot password links
- Session timeout protection
- **Unique event code generation** for guests

### Vendor Security
- Email + password authentication
- **Complete vendor registration form**
- Business profile validation
- Remember me functionality
- Auto-creates vendor dashboard upon registration

### Employee Security
- Email + password authentication
- Application review process
- Employee verification
- Auto-login after application submission

### Sponsor Security
- Email + password authentication
- Company verification
- Sponsorship level validation
- Auto-creates sponsor dashboard

### Guest Security
- **Code-based access ONLY**
- Time-limited unique codes
- Code expiration validation
- Event-specific access control
- **NO personal data or registration required**

---

## Guest Code System

### How It Works
1. **Client generates code**: When a client creates/books an event, system auto-generates a unique 6-digit code
2. **Code visibility**: Code is **always visible on client's dashboard**
3. **Code distribution**: Client shares code with event attendees
4. **Guest access**: Guests enter code to view event details
5. **Code validation**: System checks code validity and expiration

### Code Generation
```javascript
generateGuestCode()  // Returns 6-digit numeric code
```

### Code Display
- **Visible on client dashboard**
- Copy-to-clipboard functionality
- QR code generation (future)

---

## Registration Flows Summary

| Role | Registration | Login |
|------|-------------|--------|
| **Admin** | ❌ NO (3 fixed admins) | ✅ Email + Password |
| **Client/Organizer** | ✅ YES | ✅ Email + Password |
| **Vendor** | ✅ YES (Be a Vendor) | ✅ Email + Password |
| **Employee** | ✅ YES (Apply for Employee) | ✅ Email + Password |
| **Sponsor** | ✅ YES (Be a Sponsor) | ✅ Email + Password |
| **Guest/Attendee** | ❌ NO | ✅ Code Only |

---

## UI/UX Features

### Visual Differentiation
Each login type has a unique color scheme:
- **Admin**: Red theme (#ef4444) with shield icon
- **Client**: Blue theme (#3b82f6) with user-tie icon
- **Vendor**: Green theme (#10b981) with store icon
- **Employee**: Purple theme (#8b5cf6) with id-card icon
- **Sponsor**: Pink theme (#ec4899) with handshake icon
- **Guest**: Orange theme (#f59e0b) with ticket icon

### Interactive Elements
- Smooth hover animations
- Password visibility toggle
- Auto-focus on inputs
- Error shake animations
- Success notifications
- Loading states

### Accessibility
- Keyboard navigation support
- Clear error messages
- Helpful hints and tooltips
- Responsive design
- High contrast colors

---

## Data Storage

### LocalStorage
- **vendors**: Array of registered vendors
- **employees**: Array of employee applications
- **sponsors**: Array of registered sponsors
- **guestCodes**: Object mapping codes to event data
- Remember me preferences

### SessionStorage
- Current user session data
- Role information
- Login timestamp
- User-specific details

---

## Key Differences from Previous Version

### ✅ Admin Changes
- Removed security PIN requirement
- Changed from username to email
- 3 fixed admin accounts (no registration)

### ✅ Vendor Changes
- Comprehensive registration form with all required fields
- Email-based login (not vendor ID)
- Auto-generates vendor ID internally
- Creates dashboard immediately upon registration

### ✅ New Roles Added
- **Employee**: With application process
- **Sponsor**: With sponsorship levels

### ✅ Guest/Attendee System
- Code-based access only
- NO login/registration
- Code auto-generated by client
- Code always visible on client dashboard

---

## Integration Guide

### Protecting Pages
Add to any page that requires authentication:

```javascript
// Require any authenticated user
requireAuth();

// Require specific role(s)
requireAuth(['admin']);
requireAuth(['client', 'admin']);
```

### Getting Current User
```javascript
const session = SessionManager.getSession();
if (session) {
    console.log('User role:', session.role);
    console.log('User name:', session.name);
}
```

### Logout
```javascript
logout();  // Clears session and redirects to login
```

---

## Best Practices

### For Developers
1. Always validate input on both client and server
2. Never store passwords in plain text
3. Use HTTPS in production
4. Implement rate limiting
5. Log authentication attempts
6. Regular security audits

### For Users
1. Use strong, unique passwords
2. Don't share admin credentials
3. Regularly update passwords
4. Log out on shared devices
5. Keep guest codes confidential

---

**Last Updated**: January 23, 2026  
**Version**: 2.0.0  
**Author**: Event-Hive Development Team
