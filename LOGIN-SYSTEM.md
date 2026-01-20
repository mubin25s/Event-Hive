# Event-Hive Multi-Role Login System

## Overview
Event-Hive features a comprehensive multi-role authentication system designed to provide secure, role-specific access to different user types. Each role has unique login requirements and access permissions.

## User Roles

### 1. **Admin** 🛡️
- **Purpose**: System administrator with full platform access
- **Login Method**: Username + Password + 6-digit Security PIN
- **Access Level**: Complete system control
- **Dashboard**: `dashboard.html`
- **Theme Color**: Red (#ef4444)

**Demo Credentials:**
- Username: `admin`
- Password: `admin123`
- PIN: `123456`

**Features:**
- Manage all users, vendors, and events
- System configuration and settings
- Analytics and reporting
- User role management

---

### 2. **Customer (Event Organizer)** 👔
- **Purpose**: Customers who purchase event services
- **Login Method**: Email + Password
- **Access Level**: Personal event management
- **Dashboard**: `dashboard.html`
- **Theme Color**: Blue (#3b82f6)

**Demo Credentials:**
- Email: `user@example.com`
- Password: `user123`

**Features:**
- Create and manage events
- Book venues and vendors
- Generate unique guest codes
- Track event budgets and schedules
- View analytics for their events

**Additional Features:**
- Remember me functionality
- Password recovery option
- Account registration

---

### 3. **Vendor (Service Provider)** 🏪
- **Purpose**: Service providers (venues, caterers, photographers, etc.)
- **Login Method**: Vendor ID + Password
- **Access Level**: Vendor-specific dashboard
- **Dashboard**: `vendor-dashboard.html`
- **Theme Color**: Green (#10b981)

**Demo Credentials:**
- Vendor ID: `vendor123`
- Password: `vendor123`

**Features:**
- Manage service listings
- Update availability calendar
- Accept/decline booking requests
- Track earnings and payments
- Manage business profile

**Additional Features:**
- Remember me functionality
- Business registration option
- Password recovery

---

### 4. **Guest (Event Attendee)** 🎫
- **Purpose**: Event attendees with view-only access
- **Login Method**: 6-digit Unique Code (provided by event organizer)
- **Access Level**: Read-only event information
- **Dashboard**: `guest-view.html`
- **Theme Color**: Orange/Amber (#f59e0b)

**Demo Guest Codes:**
- `123456` - Sarah & Michael's Wedding
- `789012` - John's 50th Birthday
- `456789` - Tech Corp Annual Gala

**Features:**
- View event schedule and timeline
- See menu and catering options
- Access venue information
- View dress code and theme
- Important event information
- RSVP confirmation

**Special Features:**
- No registration required
- Code-based instant access
- Auto-focus input navigation
- Paste support for codes
- Code expiration validation

---

## File Structure

```
Event Coordinator/
├── login.html              # Main login portal (role selection)
├── admin-login.html        # Admin authentication
├── user-login.html         # Customer authentication
├── vendor-login.html       # Vendor authentication
├── guest-login.html        # Guest code entry
├── auth.js                 # Authentication logic & session management
├── dashboard.html          # Admin/Customer dashboard
├── vendor-dashboard.html   # Vendor dashboard
└── guest-view.html         # Guest view page
```

---

## Authentication Flow

### 1. **Entry Point**
Users start at `login.html` where they select their role:
- Admin
- Customer
- Vendor
- Guest

### 2. **Role-Specific Login**
Each role redirects to their specific login page with appropriate authentication requirements.

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
- Three-factor authentication (username, password, PIN)
- Enhanced security notices
- Login attempt monitoring (UI notification)
- Special visual indicators for admin access

### Customer/Vendor Security
- Email/ID + password authentication
- Remember me functionality (localStorage)
- Password visibility toggle
- Forgot password links
- Session timeout protection

### Guest Security
- Time-limited unique codes
- Code expiration validation
- Event-specific access control
- No personal data required

---

## Session Management

### SessionManager Class
Located in `auth.js`, provides:

```javascript
SessionManager.createSession(userData)    // Create new session
SessionManager.getSession()               // Get current session
SessionManager.clearSession()             // Clear session (logout)
SessionManager.isAuthenticated()          // Check auth status
SessionManager.getRole()                  // Get user role
```

### Session Data Structure
```javascript
{
    role: 'admin|customer|vendor|guest',
    username/email/vendorId/guestCode: '...',
    name: 'User Name',
    loginTime: '2026-01-19T...',
    expiresAt: '2026-01-20T...',
    // Role-specific additional data
}
```

---

## Guest Code System

### How It Works
1. **Customer generates code**: When a customer creates an event, they receive a unique 6-digit code
2. **Code distribution**: Customer shares code with event attendees
3. **Guest access**: Guests enter code to view event details
4. **Code validation**: System checks code validity and expiration

### Code Generation
```javascript
generateGuestCode()  // Returns 6-digit numeric code
```

### Code Structure
```javascript
{
    'CODE': {
        eventId: 'unique-event-id',
        eventName: 'Event Name',
        customerId: 'customer-id',
        validUntil: 'YYYY-MM-DD'
    }
}
```

---

## UI/UX Features

### Visual Differentiation
Each login type has a unique color scheme:
- **Admin**: Red theme with shield icon
- **Customer**: Blue theme with user-tie icon
- **Vendor**: Green theme with store icon
- **Guest**: Orange theme with ticket icon

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

## Demo Credentials Summary

### Admin
```
Username: admin
Password: admin123
PIN: 123456
```

### Customer
```
Email: user@example.com
Password: user123
```

### Vendor
```
Vendor ID: vendor123
Password: vendor123
```

### Guest Codes
```
123456 - Sarah & Michael's Wedding
789012 - John's 50th Birthday
456789 - Tech Corp Annual Gala
```

---

## Integration Guide

### Protecting Pages
Add to any page that requires authentication:

```javascript
// Require any authenticated user
requireAuth();

// Require specific role(s)
requireAuth(['admin']);
requireAuth(['customer', 'admin']);
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

## Future Enhancements

### Planned Features
1. **Two-Factor Authentication (2FA)** for admin and vendors
2. **OAuth Integration** (Google, Facebook login)
3. **Biometric Authentication** for mobile apps
4. **Password Strength Meter**
5. **Account Recovery** via email/SMS
6. **Login History** tracking
7. **IP-based Security** alerts
8. **Rate Limiting** for failed attempts
9. **CAPTCHA** for bot prevention
10. **Guest Code QR Codes** for easy sharing

### Backend Integration
Currently using demo credentials. To integrate with a backend:

1. Replace authentication functions in `auth.js`
2. Connect to your API endpoints
3. Implement proper password hashing
4. Add JWT token management
5. Set up refresh token mechanism
6. Implement proper session storage (database)

---

## Troubleshooting

### Common Issues

**Issue**: "Invalid credentials" even with correct login
- **Solution**: Check browser console for errors, clear sessionStorage

**Issue**: Guest code not working
- **Solution**: Verify code hasn't expired, check `validUntil` date

**Issue**: Session expires too quickly
- **Solution**: Adjust expiration time in `SessionManager.createSession()`

**Issue**: Remember me not working
- **Solution**: Check localStorage permissions in browser

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

## Support

For issues or questions about the login system:
1. Check this documentation
2. Review `auth.js` comments
3. Test with demo credentials
4. Check browser console for errors

---

**Last Updated**: January 19, 2026  
**Version**: 1.0.0  
**Author**: Event-Hive Development Team
