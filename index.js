console.log('External JS file linked');

// Check if the CleverTap SDK is loaded
clevertap.onUserLogin.push({
    "Site": {
        "Name": "anonymous",            // String
        "Identity": 61026030,           // String or number
        "Email": "demo@gmail.com",      // Email address of the user
        "Phone": "+14155551234",        // Phone (with the country code)
        "Gender": "M",                  // Can be either M or F
        "DOB": new Date(),              // Date of Birth. Date object
        "MSG-email": false,             // Disable email notifications
        "MSG-push": true,               // Enable push notifications
        "MSG-sms": true,                // Enable sms notifications
        "MSG-whatsapp": true            // Enable WhatsApp notifications
    }
});
