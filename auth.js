/**
 * Event-Hive Authentication System
 * Handles multi-role authentication: Admin, Customer, Vendor, and Guest
 */

// Authentication state management
const AUTH_CONFIG = {
    SESSION_KEY: 'eventhive_session',
    ROLES: {
        ADMIN: 'admin',
        ORGANIZER: 'organizer',
        VENDOR: 'vendor',
        STAFF: 'staff',
        SPONSOR: 'sponsor',
        ATTENDEE: 'attendee'
    }
};

/**
 * Demo Credentials - Replace with actual API authentication
 */
const DEMO_USERS = {
    admin: {
        username: 'admin',
        password: 'admin123',
        pin: '123456',
        role: 'admin',
        name: 'System Administrator'
    },
    organizers: [
        {
            email: 'user@example.com',
            password: 'user123',
            role: 'organizer',
            name: 'John Doe',
            customerId: 'CUST001',
            guestCode: '123456' // This customer's unique code for guests
        }
    ],
    vendors: [
        {
            vendorId: 'vendor123',
            password: 'vendor123',
            role: 'vendor',
            name: 'Elite Catering Services',
            businessName: 'Elite Catering',
            category: 'Catering'
        }
    ],
    staff: [
        {
            staffId: 'staff001',
            password: 'staff123',
            role: 'staff',
            name: 'Alice Waiter',
            type: 'Waitstaff',
            shift: 'Evening'
        }
    ],
    sponsors: [
        {
            sponsorId: 'sponsor001',
            password: 'sponsor123',
            role: 'sponsor',
            name: 'TechCorp Inc.',
            tier: 'Platinum'
        }
    ],
    guestCodes: {
        '123456': {
            eventId: 'wedding-001',
            eventName: "Sarah & Michael's Wedding",
            customerId: 'CUST001',
            validUntil: '2026-02-15'
        }
    }
};

/**
 * Session Management
 */
class SessionManager {
    static createSession(userData) {
        const session = {
            ...userData,
            loginTime: new Date().toISOString(),
            expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // 24 hours
        };
        
        sessionStorage.setItem(AUTH_CONFIG.SESSION_KEY, JSON.stringify(session));
        return session;
    }
    
    static getSession() {
        const sessionData = sessionStorage.getItem(AUTH_CONFIG.SESSION_KEY);
        if (!sessionData) return null;
        
        const session = JSON.parse(sessionData);
        
        // Check if session expired
        if (new Date(session.expiresAt) < new Date()) {
            this.clearSession();
            return null;
        }
        
        return session;
    }
    
    static clearSession() {
        sessionStorage.removeItem(AUTH_CONFIG.SESSION_KEY);
        sessionStorage.clear();
    }
    
    static isAuthenticated() {
        return this.getSession() !== null;
    }
    
    static getRole() {
        const session = this.getSession();
        return session ? session.role : null;
    }
}

/**
 * Authentication Functions
 */
function authenticateAdmin(username, password, pin) {
    const admin = DEMO_USERS.admin;
    
    if (username === admin.username && 
        password === admin.password && 
        pin === admin.pin) {
        return {
            success: true,
            user: {
                role: admin.role,
                username: admin.username,
                name: admin.name
            }
        };
    }
    
    return {
        success: false,
        error: 'Invalid admin credentials'
    };
}

function authenticateCustomer(email, password) {
    const customer = DEMO_USERS.customers.find(
        c => c.email === email && c.password === password
    );
    
    if (customer) {
        return {
            success: true,
            user: {
                role: customer.role,
                email: customer.email,
                name: customer.name,
                customerId: customer.customerId,
                guestCode: customer.guestCode
            }
        };
    }
    
    return {
        success: false,
        error: 'Invalid email or password'
    };
}

function authenticateVendor(vendorId, password) {
    const vendor = DEMO_USERS.vendors.find(
        v => v.vendorId === vendorId && v.password === password
    );
    
    if (vendor) {
        return {
            success: true,
            user: {
                role: vendor.role,
                vendorId: vendor.vendorId,
                name: vendor.name,
                businessName: vendor.businessName,
                category: vendor.category
            }
        };
    }
    
    return {
        success: false,
        error: 'Invalid vendor ID or password'
    };
}

function authenticateGuest(code) {
    const eventData = DEMO_USERS.guestCodes[code];
    
    if (eventData) {
        // Check if code is still valid
        if (new Date(eventData.validUntil) >= new Date()) {
            return {
                success: true,
                user: {
                    role: AUTH_CONFIG.ROLES.GUEST,
                    guestCode: code,
                    eventId: eventData.eventId,
                    eventName: eventData.eventName,
                    customerId: eventData.customerId
                }
            };
        } else {
            return {
                success: false,
                error: 'This guest code has expired'
            };
        }
    }
    
    return {
        success: false,
        error: 'Invalid guest code'
    };
}

/**
 * Page Protection
 */
function requireAuth(allowedRoles = []) {
    const session = SessionManager.getSession();
    
    if (!session) {
        // Not authenticated, redirect to login
        window.location.href = 'login.html';
        return false;
    }
    
    if (allowedRoles.length > 0 && !allowedRoles.includes(session.role)) {
        // Wrong role, redirect to appropriate dashboard
        redirectToDashboard(session.role);
        return false;
    }
    
    return true;
}

function redirectToDashboard(role) {
    const dashboards = {
        admin: 'dashboard.html',
        customer: 'dashboard.html',
        vendor: 'vendor-dashboard.html',
        guest: 'guest-view.html'
    };
    
    window.location.href = dashboards[role] || 'login.html';
}

/**
 * Logout Function
 */
function logout() {
    SessionManager.clearSession();
    localStorage.removeItem('rememberedEmail');
    localStorage.removeItem('rememberedVendorId');
    window.location.href = 'login.html';
}

/**
 * Generate Unique Guest Code (for customers)
 */
function generateGuestCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

/**
 * Utility Functions
 */
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fa-solid fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add to body
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

/**
 * Export for use in other files
 */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SessionManager,
        authenticateAdmin,
        authenticateCustomer,
        authenticateVendor,
        authenticateGuest,
        requireAuth,
        logout,
        generateGuestCode,
        DEMO_USERS
    };
}
