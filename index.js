console.log('External JS file linked');

// // Function to generate a random alphanumeric string of specified length
// function generateRandomString(length) {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let result = '';
//     for (let i = 0; i < length; i++) {
//         result += characters.charAt(Math.floor(Math.random() * characters.length));
//     }
//     return result;
// }

// // Function to generate a random numeric string of specified length
// function generateRandomNumericString(length) {
//     const digits = '0123456789';
//     let result = '';
//     for (let i = 0; i < length; i++) {
//         result += digits.charAt(Math.floor(Math.random() * digits.length));
//     }
//     return result;
// }

// // Generate random strings
// const randomName = generateRandomString(3);
// const randomIdentity = generateRandomNumericString(8); // Numeric string of length 8
// const randomEmail = `${randomName}@gmail.com`; // Combine random string with "@gmail.com"


// // call this when a user login form is submitted.
// clevertap.onUserLogin.push({
//     "Site": {
//         "Identity": "989197402610",    // Random numeric string of length 8
//         "Phone":"+918691951130",
//         "MSG-email": true,            // Disable email notifications
//         "MSG-push": true,              // Enable push notifications
//         "MSG-sms": true,               // Enable sms notifications
//         "MSG-whatsapp": false           // Enable WhatsApp notifications
//     }
// });

// console.log(`The emailId is ${randomEmail}`);
// console.log(`The Identity is ${randomIdentity}`);

// for web push notification.
document.getElementById('pushNotifBtn').addEventListener('click', function () {
    console.log('tapped');
    clevertap.notifications.push({
        "titleText": 'Would you like to receive Push Notifications?',
        "bodyText": 'We promise to only send you relevant content and give you updates on your transactions',
        "okButtonText": 'Sign me up!',
        "rejectButtonText": 'No thanks',
        "okButtonColor": '#f28046'
    });
})

document.getElementById('productviewed').addEventListener('click', function(){
    console.log('prod viewed');
    clevertap.event.push("Store_Page");
});


