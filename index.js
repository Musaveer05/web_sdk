console.log('External JS file linked');

document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const identity = document.getElementById('identity').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Log input data
    console.log(`The emailId is ${email}`);
    console.log(`The Identity is ${identity}`);

    // Call onUserLogin with user input
    clevertap.onUserLogin.push({
        "Site": {
            "Name": name,
            // "Identity": identity,
            "Email": email,
            "Phone": phone,
            "DOB": new Date(),
            "MSG-email": true,
            "MSG-push": true,
            "MSG-sms": true,
            "MSG-whatsapp": true,
            "msg-dndWhatsApp": true
        }
    });

    // Push some events
    clevertap.event.push("Product Delivered", {
        "Product name": "Casio Chronograph",
        "Category": "Mens Accessories",
        "Price": 59.99,
        "Date": new Date()
    });

    clevertap.event.push("Product Delivered", {
        "Product name": "Casio Chronograph watch 1",
        "Category": "Mens Accessories",
        "Price": 59.99,
        "Date": new Date()
    });
});

// Push Notification Button
document.getElementById('pushNotifBtn').addEventListener('click', function () {
    console.log('tapped');
    clevertap.notifications.push({
        "titleText": 'Would you like to receive Push Notifications?',
        "bodyText": 'We promise to only send you relevant content and give you updates on your transactions',
        "okButtonText": 'Sign me up!',
        "rejectButtonText": 'No thanks',
        "okButtonColor": '#f28046'
    });
});
