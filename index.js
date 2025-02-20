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

// Check if the CleverTap SDK is loaded
clevertap.onUserLogin.push({
    "Site": {
        "Name": randomName,            // Random string of length 3
        "Identity": randomIdentity,    // Random numeric string of length 8
        "Email": randomEmail,          // Email address with random string,       // Phone (with the country code)
        "DOB": new Date(),             // Date of Birth. Date object
        "MSG-email": true,            // Disable email notifications
        "MSG-push": true,              // Enable push notifications
        "MSG-sms": true,               // Enable sms notifications
        "MSG-whatsapp": true           // Enable WhatsApp notifications
    }
});

console.log(`The emailId is ${randomEmail}`);
console.log(`The Identity is ${randomIdentity}`);

// This method works for updating.
// More info about this in README file
// clevertap.profile.push({
//     "Site": {
//         "Gender": "M"
//     }
// });

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

function handlePopup() {
    console.log('inside handle pop up');
    var wrapper = window.parent.document.getElementById('wizParDiv0');
    var iframe = wrapper.querySelector('iframe')

    var doc = iframe.contentDocument;
    var contentDiv = doc.getElementById('contentDiv');

    // var targetDiv = contentDiv.querySelector('#targetDiv');
    var targetBtn = contentDiv.querySelector('#targetBtn');

    if (targetBtn) {
        // Attach an event listener to the targetDiv
        console.log('target Div is clicked');
        targetBtn.addEventListener('click', closePopUp);

    }

    // // Close popup function
    function closePopUp() {
        console.log("Modal clicked. Closing popup...");
        setTimeout(() => {
            wrapper.remove(); 
            // wrapper.remove();
          }, 0); 
    }
}

// Add event listener to trigger button
document.getElementById('triggerEventBtn').addEventListener('click', function () {
    // Push CleverTap event
    clevertap.event.push("Product Viewed");
    console.log("CleverTap Event: Product Viewed triggered");

    setTimeout(() => {
        handlePopup();
    }, 1000); // Adjust timeout as needed based on modal load time
});
