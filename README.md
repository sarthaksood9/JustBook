# 🏠 Air BnB Booking App

A React Native mobile application for browsing, wishlisting, and booking unique properties with an integrated admin dashboard for property management. Built with Expo for cross-platform compatibility.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Project Architecture](#project-architecture)
- [Feature Details](#feature-details)
- [Development Setup](#development-setup)
- [Project Status](#project-status)
- [Testing Credentials](#testing-credentials)
- [Code Quality & Conventions](#code-quality--conventions)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Known Limitations](#known-limitations--disclaimers)
- [Troubleshooting](#troubleshooting)
- [Deployment Guide](#deployment-guide)
- [License & Attribution](#license--attribution)

---

## Overview

This project is an Airbnb-like mobile booking application built with React Native and Expo. It allows users to browse and book unique properties (celebrity room experiences and luxury pools), maintain wishlists, track trips, and message hosts. The application includes an admin dashboard for property managers to oversee listings, scheduling, and guest communications.

**Current Stage:** Active Development (Last update: March 2025)

---

## Features

### User Features

- **Phone-Based Authentication** – International country code support with secure session management
- **Property Browsing** – Browse two property categories: Celebrity Room Experiences and Luxury Pools
- **Advanced Search** – Category-based filtering and property discovery
- **Wishlist Management** – Add/remove properties with persistent storage across sessions
- **Interactive Property Details** – View images, ratings, reviews, and host information
- **Booking System** – Date selection, guest count, and booking confirmation
- **Trip History** – Track all past and upcoming bookings
- **User Profile** – Manage profile information and preferences
- **Messaging Interface** – Communication platform (in development)

### Admin Features

- **Dashboard** – View real-time booking statistics and guest management
- **Listing Management** – Add, edit, and manage property listings
- **Calendar-Based Scheduling** – Manage property availability and bookings
- **Message Center** – Host communication and guest notifications
- **Admin Settings** – Configure application settings and preferences

---

## Tech Stack

### Frontend Framework

| Technology | Version | Purpose |
|------------|---------|---------|
| React Native | 0.74.5 | Cross-platform mobile framework |
| Expo | ~51.0.28 | Build platform and development tooling |
| React Navigation | 6.1.18 | Screen navigation and routing |

### State Management

| Technology | Version | Purpose |
|------------|---------|---------|
| Redux | 5.0.1 | Centralized state management |
| Redux-Thunk | – | Async action handling |
| React Context API | – | Authentication and user context |
| React-Redux | 9.1.2 | Redux and React integration |

### Forms & Validation

| Technology | Version | Purpose |
|------------|---------|---------|
| React Hook Form | 7.53.0 | Efficient form handling |
| Zod | 3.23.8 | Type-safe schema validation |

### UI & Date Handling

| Technology | Version | Purpose |
|------------|---------|---------|
| React Native Calendars | 1.1307.0 | Date picker and calendar UI |
| React Native Country Codes Picker | 2.3.5 | International phone number support |
| @expo/vector-icons | 14.0.4 | Icon library |
| React Native Community DateTimePicker | 8.3.0 | Date and time selection |

### Storage & Utilities

| Technology | Version | Purpose |
|------------|---------|---------|
| AsyncStorage | 1.23.1 | Persistent local data storage |
| dayjs | 1.11.13 | Lightweight date manipulation |
| Reactotron | 5.1.9 | Debugging tool (optional) |

---

## Quick Start

### Prerequisites

- **Node.js** 16+ and npm
- **Expo CLI** (`npm install -g expo-cli`)
- **iOS Simulator** (Mac) or **Android Emulator**
- **Git** for version control

### Installation

```bash
# 1. Clone the repository
git clone <repository-url>
cd air-bnb

# 2. Install dependencies
npm install

# 3. Start the development server
npm start

# 4. Run on specific platform
npm run android    # Android emulator/device
npm run ios        # iOS simulator
npm run web        # Web browser
```

### Logging In

For development and testing, use these credentials:

```
Phone: 1234567890
Password: [any value]
```

**Note:** These are temporary test credentials. Real authentication will be implemented before production release.

---

## Project Architecture

### Directory Structure

```
air-bnb/
├── App.js                        # Application entry point
├── SemiApp.jsx                   # Main app logic and navigation controller
├── Routes/
│   ├── UserRoutes.jsx           # User navigation stack
│   └── AdminRoutes.jsx          # Admin navigation stack
├── screens/                      # 13+ main screens
│   ├── ReserveRoomWithHookForm.jsx
│   ├── ProductCard.jsx
│   ├── WishList.jsx, WishView.jsx
│   ├── Trips.jsx, Message.jsx, Profile.jsx
│   └── ...
├── Subscreens/                   # Category-specific subscreens
│   ├── Rooms.jsx
│   └── Pools.jsx
├── AdminScreens/                 # Admin-only screens
│   ├── Today.jsx
│   ├── Listing.jsx
│   ├── Calander.jsx
│   └── ...
├── components/                   # Reusable components
│   ├── LoginDrower.jsx
│   ├── SignUpDrower.jsx
│   ├── BottomNav.jsx
│   ├── RoomCard.jsx, PoolCard.jsx
│   └── ...
├── redux/                        # Redux state slices
│   ├── WishList/
│   ├── Product/
│   ├── User/
│   └── recentVisit/
├── context/                      # React Context
│   └── UserContext.jsx
├── Data/                         # Mock data
│   ├── hotels.js
│   ├── pools.js
│   └── Users.js
├── hooks/                        # Custom React hooks
│   └── useDebounce.js
├── utils/                        # Utility functions
│   └── device.js
├── assets/                       # Images and icons
└── package.json
```

### Navigation Flow

```
App.js
  ├─ UserProvider (Context wrapper)
      ├─ SemiApp.jsx (Role-based logic)
          ├─ NavigationContainer
              ├─ UserContext.user.role === "admin"
              │   ├─ AdminRoutes
              │   └─ AdminBottomNav
              └─ UserContext.user.role === "user"
                  ├─ UserRoutes
                  └─ BottomNav
```

### State Management Architecture

**Redux Store Structure:**
```javascript
{
  wishlist: {
    items: [],      // Array of wishlisted properties
    count: 0        // Total wishlist count
  },
  product: {
    selectedItem: {} // Currently selected property
  },
  user: {
    userData: {}    // User profile data
  },
  recentVisit: {
    recentItems: [] // Recently viewed properties
  }
}
```

**Context API (UserContext):**
- `user` – Current logged-in user profile and role
- `usersList` – All registered users in the system
- `logIn(userData)` – Authenticate user and establish session
- `logOut()` – Clear user session and reset state
- `addToWishlist(item)` – Add property to user's wishlist
- `exist(userData)` – Verify if user exists in the system

**Persistent Storage:**
- AsyncStorage synchronizes Redux state with device storage
- Automatic rehydration on app launch

---

## Feature Details

### Authentication

- **Phone-based Login** – Users authenticate using their phone number with international country code support
- **Session Persistence** – Sessions persist across app restarts via AsyncStorage
- **Role-Based Access** – Users and admins have separate navigation stacks and feature sets
- **Test Credentials** – Phone 1234567890 logs in as admin role (development only)

### Property Browsing

- **Two Categories** – Rooms (Celebrity Experiences) and Pools (Luxury Destinations)
- **Property Cards** – Display property images, ratings, and key features
- **Image Gallery** – High-resolution property images loaded from URLs
- **Host Information** – View host profile, ratings, and reviews
- **Category Filtering** – Search screen provides category-based property filtering

### Wishlist System

- **Add/Remove Properties** – One-tap wishlist management
- **Persistent Storage** – Wishlist synced across Redux, Context, and AsyncStorage
- **Wishlist Screen** – Dedicated view of all wishlisted properties
- **Real-Time Updates** – Changes reflect immediately across the app

### Booking System

- **Date Selection** – React Native Calendars for check-in and check-out date picking
- **Guest Count** – Specify number of guests for the stay
- **Booking Form** – React Hook Form with Zod schema validation
- **Property Confirmation** – Review booking details before proceeding
- **Note:** Payment processing not yet implemented

### Admin Dashboard

- **Statistics Display** – Real-time guest checkout and hosting counts
- **Listing Management** – Interface to manage property listings
- **Calendar Scheduling** – View and manage property availability
- **Message Center** – Communicate with guests (placeholder)

---

## Development Setup

### Prerequisites

- **Node.js** 16 or higher
- **npm** or **yarn**
- **Expo CLI** – Install globally: `npm install -g expo-cli`
- **iOS Simulator** (macOS only) or **Android Emulator**

### Initial Setup

```bash
# Install project dependencies
npm install

# Start Expo development server
npm start

# Choose platform:
# - Press 'i' for iOS
# - Press 'a' for Android
# - Press 'w' for web
```

### Development Mode

- **Hot Reload** – Enabled by default; changes reflect instantly
- **Debugging** – Reactotron debugger available (currently commented out, can be enabled)
- **Redux DevTools** – Compatible with Redux extension tools
- **Development Client** – Use Expo development client for extended capabilities

### Available Commands

```bash
npm start              # Start Expo development server
npm run android        # Launch Android emulator
npm run ios           # Launch iOS simulator
npm run web           # Run in web browser
```

---

## Project Status

### ✅ Completed Features

- User and admin authentication flow
- Property browsing (Rooms and Pools categories)
- Wishlist management with persistent storage
- Booking form with validation (React Hook Form + Zod)
- Redux state management implementation
- Navigation structure (separate user and admin routes)
- Components library (cards, navigation, auth drawers)
- AsyncStorage integration for data persistence

### 🚧 In Progress

- Booking confirmation and payment flow
- Admin dashboard functionality (mostly UI scaffolding)
- Messaging system (placeholder screens)

### 📋 Not Yet Implemented

- Backend API integration (currently using mock data)
- Real payment processing (Stripe/PayPal integration)
- Push notifications
- Email and SMS notifications
- Real database (PostgreSQL, MongoDB, Firebase)
- Advanced search and filtering features
- Review and rating system
- Host earnings dashboard
- Real-time messaging with WebSocket support

---

## Testing Credentials

For development and testing purposes, the following credentials are available:

| Role | Phone Number | Password | Purpose |
|------|--------------|----------|---------|
| Admin | 1234567890 | (any value) | Admin dashboard access |
| User | (any number) | (any value) | User feature testing |

**Important Note:** These credentials are hardcoded for development. Actual production authentication requires integration with a real backend authentication service before deploying to app stores.

---

## Code Quality & Conventions

### Naming Conventions

- **React Components** – PascalCase (e.g., `RoomCard.jsx`, `LoginDrawer.jsx`)
- **Utilities and Hooks** – camelCase (e.g., `useDebounce.js`, `device.js`)
- **Redux Slices** – Descriptive feature names (e.g., `WishList/`, `Product/`)
- **Constants** – UPPER_SNAKE_CASE
- **CSS/Styling** – Follow React Native conventions

### Code Organization

- **One component per file** – Each component in its own file for modularity
- **Redux slices grouped by feature** – Related state logic in feature directories
- **Utility functions** – Centralized in `utils/` or `hooks/` directories
- **Context providers** – Wrapped at root level for global access

### Best Practices

- Use functional components with React Hooks
- Follow Redux Flux patterns for state management
- Use React Hook Form for all form handling
- Implement Zod schema validation for user input
- Add comments only for non-obvious logic or business rules

### Known Issues

- Some commented-out code from experimentation and debugging
- Mixed naming conventions in a few legacy files
- Reactotron debugger currently disabled but available
- Search and filtering features partially disabled

---

## Roadmap

### Phase 1: Current Development

**Status:** In Progress

- ✅ User authentication
- ✅ Property browsing and discovery
- ✅ Wishlist system
- 🚧 Booking system with form validation
- ❌ Payment integration

### Phase 2: Next Iteration

**Expected Timeline:** Q2 2025

- Backend API integration (Node.js, Firebase, or Django)
- Real database implementation (MongoDB, PostgreSQL, or Firebase)
- Payment gateway integration (Stripe or PayPal)
- Push notifications system
- Email and SMS notifications
- Advanced search and filtering features

### Phase 3: Long-Term Enhancements

**Expected Timeline:** Q3 2025+

- Real-time messaging and chat system
- Host earnings dashboard and analytics
- Review and rating system
- Map-based property search
- Geolocation-based recommendations
- Advanced booking management for hosts
- Performance optimization and analytics

---

## Contributing

### How to Contribute

1. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Your Changes**
   - Follow code quality conventions listed above
   - Write descriptive commit messages

3. **Test Your Changes**
   - Test on both Android and iOS simulators
   - Verify wishlist, booking, and admin features work correctly

4. **Commit and Push**
   ```bash
   git commit -m "feat: description of your changes"
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**
   - Include a clear description of your changes
   - Reference any related issues

### Coding Standards

- Use functional components with React Hooks exclusively
- Follow Redux patterns for all state management
- Use React Hook Form for form handling and validation
- Implement Zod schema validation for user input
- Add comments only for non-obvious logic or specific workarounds
- Keep functions focused and single-responsibility
- Test features on both Android and iOS before submitting PR

---

## Known Limitations & Disclaimers

### Development Status

This is a frontend prototype with mock data and is not production-ready. The following limitations apply:

- **Frontend Prototype** – This application is currently frontend-only with mock data
- **No Backend Integration** – All data is simulated locally; no server communication
- **Hardcoded Authentication** – Authentication is mocked for development purposes
- **Mock Property Data** – All properties are dummy data for testing
- **No Payment Processing** – Booking confirmation does not process real payments

### Before Production Deployment

The following must be completed before any production release:

- **Backend API** – Develop and deploy backend services for user management, property listings, and bookings
- **Real Authentication** – Integrate with a secure authentication service (Firebase Auth, Auth0, etc.)
- **Payment Gateway** – Integrate Stripe, PayPal, or similar for processing bookings
- **Real Database** – Implement production database (PostgreSQL, MongoDB, Firebase)
- **Security Audit** – Conduct security review and penetration testing
- **Privacy Policy** – Create and display privacy policy and terms of service
- **Compliance** – Ensure compliance with app store requirements (iOS App Store, Google Play)
- **Performance Optimization** – Profile and optimize app performance
- **Error Handling** – Implement comprehensive error handling and logging
- **Support Infrastructure** – Set up customer support and incident response

---

## Troubleshooting

### Common Issues and Solutions

| Problem | Solution |
|---------|----------|
| **Expo won't start** | Clear cache: `expo start -c` and try again |
| **Module not found error** | Run `npm install` again to ensure all dependencies are installed |
| **Port 19000 in use** | Kill the process using port 19000 or change Expo port |
| **AsyncStorage errors** | Clear app data: Uninstall app and reinstall, or use Expo app fresh start |
| **Redux DevTools not connecting** | Check that Redux DevTools extension is installed; disable if causing issues |
| **Hot reload not working** | Restart the Expo dev server and close/reopen the app |
| **Build failures on Android** | Run `expo prebuild --clean` and try building again |
| **iOS simulator crashes** | Restart simulator or run `xcrun simctl erase all` to reset |

---

## Deployment Guide

### Building for Production

Before deploying to app stores, ensure all development credentials and mock data are removed and replaced with production configurations.

### Prerequisites for App Store Deployment

- **Expo Account** – Create at https://expo.dev and log in
- **EAS CLI** – Install with: `npm install -g eas-cli`
- **Apple Developer Account** – For iOS App Store submission ($99/year)
- **Google Play Developer Account** – For Android Play Store submission ($25 one-time)
- **Production API Backend** – Fully deployed and tested backend services

### Building for iOS App Store

```bash
# Log in to your Expo account
eas login

# Create iOS build
eas build --platform ios

# Submit to Apple App Store
eas submit --platform ios
```

**Requirements:**
- Apple Developer Certificate
- App Store Connect credentials
- App privacy policy (required by App Store)

### Building for Google Play Store

```bash
# Create Android build
eas build --platform android

# Submit to Google Play Store
eas submit --platform android
```

**Requirements:**
- Google Play Developer account
- Signed Android keystore
- App privacy policy (required by Google Play)

### Web Deployment

```bash
# Build for web
npm run web

# Deploy to Vercel or Netlify
# (Follow platform-specific deployment instructions)
```

### Post-Deployment Checklist

- [ ] Real backend API is running and tested
- [ ] Authentication service is configured and secure
- [ ] Payment gateway is integrated and tested
- [ ] Push notifications are set up
- [ ] Error logging and monitoring are enabled
- [ ] Performance metrics are being collected
- [ ] Support contact information is documented
- [ ] Terms of Service and Privacy Policy are published
- [ ] User feedback channels are established

---

## License & Attribution

**License:** [Add license type, e.g., MIT, Apache 2.0]

**Created by:** [Developer/Team name]

**Last Updated:** March 2025

**Project Repository:** [Add repository URL]

---

## Additional Resources

- [React Native Documentation](https://reactnative.dev/)
- [Expo Documentation](https://docs.expo.dev/)
- [Redux Documentation](https://redux.js.org/)
- [React Navigation Guide](https://reactnavigation.org/)
- [React Hook Form Docs](https://react-hook-form.com/)
- [Zod Validation Library](https://zod.dev/)

---

**For issues, feature requests, or questions, please [contact the development team or open an issue in the repository].**
