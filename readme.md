# Explanation of the CleverTap SDK Initialization Script

## CleverTap Object Initialization
- Defines a `clevertap` object with placeholders for events, profiles, accounts, user logins, notifications, and privacy settings.
- These placeholders temporarily store data until the CleverTap SDK fully loads.

## Account Configuration
- Specifies the CleverTap Account ID (`"TEST"` in this example) to connect the integration to the correct CleverTap account.
- If no region is provided, it defaults to the Europe region.

## Privacy Settings
- `optOut: false`: Indicates the user has not opted out of data sharing.
- `useIP: false`: Ensures the user's IP address is not shared.

## Dynamic Loading of the SDK Script
- Creates and inserts a `<script>` element dynamically into the webpage.
- The script is loaded asynchronously to avoid blocking the webpage.
- The source URL (`src`) depends on the current webpage protocol:
  - For `https`: Uses a secure CDN.
  - For `http`: Uses a non-secure URL.

## Default Region Handling
- Logs to the console that no region is specified, and the default is set to Europe.

## Completion Log
- Logs a message indicating the final step of the SDK integration process.

## Purpose of the Script
- Integrates CleverTap functionalities like user profiling, event tracking, and notifications into a webpage.
- Ensures compliance with user privacy preferences and regulations (e.g., GDPR).

## Customization Required
- Replace `"TEST"` with the actual CleverTap Account ID.
- Adjust privacy flags (`optOut`, `useIP`) based on user consent.


# CleverTap SDK Integration Overview

## What is `/js/clevertap.min.js`?
- `clevertap.min.js` is the CleverTap JavaScript SDK.
- It provides core functionality to enable CleverTap integration with your website, such as:
  - Tracking user events (e.g., clicks, page views).
  - Managing user profiles.
  - Handling notifications (push, in-app, or web).
  - Sending and receiving data from CleverTap servers.

---

## How is `/js/clevertap.min.js` Used?

### 1. **Initialization in the Script**
- The initialization code dynamically loads the `clevertap.min.js` file into your webpage using a `<script>` tag.
- This ensures that the CleverTap SDK is included automatically without manual imports.

### 2. **Dynamic Script Loading**
- The script determines the page protocol (`https` or `http`) and loads the SDK file from the appropriate URL:
  - **For `https`:** Uses `https://d2r1yp2w7bby2u.cloudfront.net/js/clevertap.min.js`.
  - **For `http`:** Uses `http://static.clevertap.com/js/clevertap.min.js`.

### 3. **SDK Functions Become Available**
- After loading, the CleverTap object (`clevertap`) is fully initialized.
- Core functionalities are activated, such as:
  - Event tracking via `clevertap.event.push()`.
  - User profile updates via `clevertap.profile.push()`.
  - Notification handling via `clevertap.notifications.push()`.

### 4. **Connection to CleverTap Servers**
- The SDK establishes a connection to CleverTap servers using your **Account ID**.
- Ensures all user data, events, and notifications are linked to your CleverTap account.

### 5. **Data Transmission and User Interaction**
- Tracks user actions (e.g., button clicks, page views) and sends data to CleverTap servers in real time.
- Displays notifications (e.g., in-app messages or push notifications) based on user behavior or configured triggers.

### 6. **Real-Time Engagement**
- Enables real-time responses, such as:
  - Sending analytics data to your CleverTap dashboard.
  - Displaying relevant notifications or messages to users.

---

## Why Dynamically Load `clevertap.min.js`?

### Performance Optimization
- Ensures the SDK is loaded asynchronously without delaying webpage rendering.

### Protocol Matching
- Automatically selects a secure (`https`) or non-secure (`http`) URL based on the page's protocol.

### Centralized Updates
- CleverTap can update the SDK (`clevertap.min.js`) on their servers without requiring changes to your code.

---

## Full Process Overview

1. The initialization script adds a `<script>` tag to dynamically load `/js/clevertap.min.js`.
2. The CleverTap SDK file is downloaded from CleverTap’s servers.
3. The `clevertap` object is initialized and configured with account and privacy details.
4. The SDK starts tracking user events and handling notifications.
5. Data is sent to CleverTap servers for analytics and engagement.
6. Real-time notifications and user interactions are processed on the website.

---

## Key Notes
- Replace the placeholder Account ID (`"TEST"`) in the initialization script with your actual CleverTap Account ID.
- Configure privacy settings (`optOut`, `useIP`) as per your requirements and compliance needs.
- The `clevertap.min.js` file is the core of CleverTap integration and enables all tracking, profiling, and engagement features.



## CleverTap SDK: Understanding the WZRK_G Cookie/Session Key

## Overview

The WZRK_G cookie or session key is a unique identifier used by the CleverTap SDK to track users on your web application. This identifier is crucial for identifying anonymous users and ensuring accurate user profiling. Below is a detailed explanation of how the WZRK_G behaves in various scenarios and its relationship with devices, browsers, and sessions.

## Behavior of the WZRK_G Cookie/Session Key

1. Device-Specific (Browser-Specific) Identifier

The WZRK_G value is unique to a specific browser and device.

If you access your web app on localhost using the same browser, the WZRK_G value will remain the same for that session.

If you open the app in a different browser (e.g., Chrome vs. Firefox), a new WZRK_G value will be generated.

2. Different Browsers Generate Different WZRK_G

Each browser maintains its own cookies and session storage, so:

When you open the app in Chrome, a specific WZRK_G is created.

When you open the app in Edge, Firefox, or Safari, a new WZRK_G is created for each browser.

3. Behavior on the Same Browser

Same Tab or Window: The WZRK_G remains the same across tabs or windows within the same browser.

Clearing Cookies or Session Storage: If cookies or session storage are cleared, the CleverTap SDK generates a new WZRK_G value.

Incognito Mode: Opening the app in an Incognito or Private window creates a new WZRK_G for that session, as cookies and session storage are not shared with the normal browsing session.

4. Behavior Across Devices

The CleverTap SDK generates a new WZRK_G for each unique device.

Accessing the app from a desktop and then from a mobile device results in different WZRK_G values.

Scenarios and WZRK_G Behavior

## Scenario

## WZRK_G Behavior
- Same browser, same session
- Same WZRK_G

- Same browser, cleared cookies
- New WZRK_G generated

- Different browsers (Chrome vs Edge)
- Different WZRK_G values

## Incognito mode

- New WZRK_G for each Incognito session

- Different devices

- New WZRK_G generated per device

## Why is WZRK_G Browser-Specific?

CleverTap relies on cookies or session storage to store the WZRK_G identifier.

Since cookies and session storage are isolated per browser and per device:

The identifier is not shared between browsers (e.g., Chrome and Firefox).

It is not shared between devices (e.g., a laptop and a smartphone).

Conclusion

## The WZRK_G identifier is consistent within the same browser and device unless cookies/session storage are cleared.

## Using a different browser or device generates a new WZRK_G value.

## This behavior ensures user tracking is specific to the browser and device, maintaining data integrity and user privacy.

## and very Important is that profile.push will first check whether that user exist if it exist it will be update it else will insert a new,
- identification of user profile if exists
1) Email
2) Identity Number
3) Cookie Value stored in browser generated by clevertap (V.Imp)
## and cookie value is the one stored as a clevertap id so if the user has already logged in before because of which there's already that same cookie value exist in the dashboard and the same cookie stored in browser is stored only then this push method will work



