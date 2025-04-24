console.log('External JS file linked');

// Function to generate a random alphanumeric string of specified length
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Function to generate a random numeric string of specified length
function generateRandomNumericString(length) {
    const digits = '0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += digits.charAt(Math.floor(Math.random() * digits.length));
    }
    return result;
}

// Generate random strings
const randomName = generateRandomString(3);
const randomIdentity = generateRandomNumericString(8); // Numeric string of length 8
const randomEmail = `${randomName}@gmail.com`; // Combine random string with "@gmail.com"

function getRandomIndianPhoneNumber() {
  const firstDigit = ['7', '8', '9'][Math.floor(Math.random() * 3)];
  const remainingDigits = Math.floor(100000000 + Math.random() * 900000000); // 9 digits
  const phone = `+91${firstDigit}${remainingDigits}`;
  return phone;
}

// Example usage:
const randomPhone = getRandomIndianPhoneNumber();
console.log(randomPhone); // e.g., +919876543210

// call this when a user login form is submitted.
clevertap.onUserLogin.push({
    "Site": {
        "Name": randomName,            // Random string of length 3
        "Identity": randomIdentity,    // Random numeric string of length 8
        "Email": randomEmail,          // Email address with random string,       // Phone (with the country code)
        "DOB": new Date(),             // Date of Birth. Date object
        "MSG-email": true,// Disable email notifications
        "Phone": randomPhone,
        "MSG-push": true,              // Enable push notifications
        "MSG-sms": true,               // Enable sms notifications
        "MSG-whatsapp": true,           // Enable WhatsApp notifications
        "msg-dndWhatsApp": false
    }
});

clevertap.event.push("Product Delivered", {
  "Product ame":"Casio Chronograph Watch",
  "Cateory":"Mens Accessories",
  "Prie":59.99,
  "Dae": new Date()
});

console.log(`The emailId is ${randomEmail}`);
console.log(`The Identity is ${randomIdentity}`);

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
