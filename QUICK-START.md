# 🚀 Event-Hive Quick Start Guide

## Access the System

**Main Entry:** Open `login.html` to see all 6 user roles

---

## 🔑 Login Credentials

### Admin (3 Fixed Accounts)
```
mubin@gmail.com  | Password: 1111
tonmoy@gmail.com | Password: 2222
rohan@gmail.com  | Password: 3333
```
**Note:** Admins cannot register. Only these 3 accounts exist.

---

## 📋 User Types Quick Reference

### 1️⃣ **Admin** 🛡️
- **Page:** `admin-login.html`
- **Login:** Email + Password
- **Registration:** ❌ NO (3 fixed accounts)
- **Dashboard:** `admin.html`
- **Color:** Red

### 2️⃣ **Client/Organizer** 👔
- **Page:** `auth.html?role=user`
- **Login:** Email + Password
- **Registration:** ✅ YES
- **Dashboard:** `dashboard.html`
- **Color:** Blue
- **Special:** Generates event codes for attendees

### 3️⃣ **Vendor** 🏪
- **Login:** `vendor-login.html`
- **Register:** `vendor-register.html`
- **Login:** Email + Password
- **Registration:** ✅ YES - "Be a Vendor" form
- **Dashboard:** `vendor-dashboard.html`
- **Color:** Green
- **Required:** Email, Vendor Type, Location, Phone, Password

### 4️⃣ **Employee** 👷
- **Page:** `employee-login.html`
- **Login:** Email + Password
- **Registration:** ✅ YES - "Apply for Employee"
- **Dashboard:** `staff-dashboard.html`
- **Color:** Purple
- **Required:** Name, Email, Phone, Position, Experience, Cover Letter, Password

### 5️⃣ **Sponsor** 🤝
- **Page:** `sponsor-login.html`
- **Login:** Email + Password
- **Registration:** ✅ YES - "Be a Sponsor"
- **Dashboard:** `sponsor-dashboard.html`
- **Color:** Pink
- **Required:** Name, Company, Email, Phone, Industry, Sponsorship Level, Password

### 6️⃣ **Guest/Attendee** 🎫
- **Page:** `guest-login.html`
- **Access:** 6-Digit Code ONLY
- **Registration:** ❌ NO
- **Dashboard:** `guest-view.html`
- **Color:** Orange
- **How:** Client generates code → Attendee enters code

---

## 🔄 Registration Flows

### Vendor Registration:
1. Click "Vendor" on login portal
2. Click "Register your business"
3. Fill form: Business Name, Email, Vendor Type, Location, Phone, Password
4. Submit → Auto-login → Vendor Dashboard

### Employee Application:
1. Click "Employee" on login portal
2. Click "Apply" tab
3. Fill form: Name, Email, Phone, Position, Experience, Cover Letter, Password
4. Submit → Auto-login → Staff Dashboard

### Sponsor Registration:
1. Click "Sponsor" on login portal
2. Click "Become a Sponsor" tab
3. Fill form: Name, Company, Email, Phone, Industry, Sponsorship Level, Password
4. Submit → Auto-login → Sponsor Dashboard

---

## 🎫 Attendee Code System

### How it works:
1. **Client** books/creates an event
2. System **auto-generates** a 6-digit code
3. Code is **visible on client's dashboard**
4. Client **shares code** with attendees
5. Attendees **enter code** at `guest-login.html`
6. Attendees get access to **event details only**

**Important:** 
- ❌ NO login required
- ❌ NO registration required
- ✅ Code-based access only
- ✅ Code is always visible on client dashboard

---

## 📁 File Navigation

### Login Pages:
- `login.html` - Main role selection (all 6 roles)
- `admin-login.html` - Admin login
- `vendor-login.html` - Vendor login
- `employee-login.html` - Employee login/application
- `sponsor-login.html` - Sponsor login/registration
- `guest-login.html` - Guest code entry
- `auth.html` - Organizer login/registration

### Registration Pages:
- `vendor-register.html` - Be a Vendor
- (Employee & Sponsor registration built into their login pages)

### Dashboards:
- `admin.html` - Admin dashboard
- `dashboard.html` - Client/Organizer dashboard
- `vendor-dashboard.html` - Vendor dashboard
- `staff-dashboard.html` - Employee dashboard
- `sponsor-dashboard.html` - Sponsor dashboard
- `guest-view.html` - Guest event view

---

## 💾 Data Storage

### LocalStorage:
```javascript
localStorage.getItem('vendors')    // Array of vendors
localStorage.getItem('employees')  // Array of employees
localStorage.getItem('sponsors')   // Array of sponsors
```

### SessionStorage:
```javascript
sessionStorage.getItem('userRole')      // Current user role
sessionStorage.getItem('adminEmail')    // Admin email
sessionStorage.getItem('vendorId')      // Vendor ID
sessionStorage.getItem('employeeEmail') // Employee email
sessionStorage.getItem('sponsorEmail')  // Sponsor email
```

---

## 🎨 Color Themes

| Role | Color | Hex |
|------|-------|-----|
| Admin | Red | #ef4444 |
| Organizer | Blue | #3b82f6 |
| Vendor | Green | #10b981 |
| Employee | Purple | #8b5cf6 |
| Sponsor | Pink | #ec4899 |
| Guest | Orange | #f59e0b |

---

## 🔧 Quick Testing

### Test Admin:
```
1. Open login.html
2. Click "Admin"
3. Email: mubin@gmail.com
4. Password: 1111
5. Login → admin.html
```

### Test Vendor Registration:
```
1. Open login.html
2. Click "Vendor"
3. Click "Register your business"
4. Fill all required fields
5. Submit → vendor-dashboard.html
```

### Test Employee Application:
```
1. Open login.html
2. Click "Employee"
3. Click "Apply" tab
4. Fill application form
5. Submit → staff-dashboard.html
```

---

## 📚 Documentation

- **Full System Docs:** `LOGIN-SYSTEM.md`
- **Implementation Summary:** `IMPLEMENTATION-SUMMARY.md`
- **Quick Reference:** This file!

---

## ✅ Key Features

✔️ **6 Distinct User Types**
✔️ **Admin:** 3 fixed accounts, no registration
✔️ **Vendor:** Comprehensive registration with all required fields
✔️ **Employee:** Professional application process
✔️ **Sponsor:** Sponsorship level selection
✔️ **Attendee:** Code-only access, no login/registration
✔️ **Organizer:** Full event management with code generation

---

**System Status:** ✅ Fully Implemented & Ready to Use!

**Last Updated:** January 23, 2026
