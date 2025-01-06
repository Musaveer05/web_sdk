console.log('External JS file linked');

// Check if the CleverTap SDK is loaded
clevertap.onUserLogin.push({
    "Site": {
        "Name": "clever5",            // String
        "Identity": 61225905,           // String or number
        "Email": "clever5@gmail.com",      // Email address of the user
        "Phone": "+14155551234",        // Phone (with the country code)
        "DOB": new Date(),              // Date of Birth. Date object
        "MSG-email": false,             // Disable email notifications
        "MSG-push": true,               // Enable push notifications
        "MSG-sms": true,                // Enable sms notifications
        "MSG-whatsapp": true            // Enable WhatsApp notifications
    }
});

// this method also work for adding but is usually used for update
// more info about this in README file

clevertap.profile.push({
    "Site":{
        "Gender": "M",
    }
});
