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
//         "Identity": "testxyz11",           // Phone (with the country code)
//         "MSG-email": true,            // Disable email notifications
//         "MSG-push": true,              // Enable push notifications
//         "MSG-whatsapp": false           // Enable WhatsApp notifications
//     }
// });

// console.log(`The emailId is ${randomEmail}`);
// console.log(`The Identity is ${randomIdentity}`);

// for web push notification.
// document.getElementById('pushNotifBtn').addEventListener('click', function () {
//     console.log('tapped');
//     clevertap.notifications.push({
//         "titleText": 'Would you like to receive Push Notifications?',
//         "bodyText": 'We promise to only send you relevant content and give you updates on your transactions',
//         "okButtonText": 'Sign me up!',
//         "rejectButtonText": 'No thanks',
//         "okButtonColor": '#f28046'
//     });
// });

document.getElementById('pushNotifBtn').addEventListener('click', function () {
    console.log("asking");
  clevertap.notifications.push({
    titleText: "Exclusive Access To Fine Timepieces",
    bodyText: "Be the first to know about new arrivals, special offers, and personalised recommendations.",
    okButtonText: "Notify Me",
    rejectButtonText: "Not Now",
    okButtonColor: "#F28046",
    askAgainTimeInSeconds: 60
  });
});

document.getElementById("loginBtn").addEventListener("click", function () {
    const identity = document.getElementById("identity").value;

    if (!identity) {
        alert("Please enter Identity");
        return;
    }

    clevertap.onUserLogin.push({
        "Site": {
            "Identity": identity,     // Unique user identity
            "MSG-email": true,        // Enable Email
            "MSG-push": true,         // Enable Push
            "MSG-whatsapp": false     // Disable WhatsApp
        }
    });

    console.log("CleverTap onUserLogin triggered for:", identity);
});


document.getElementById('productviewed').addEventListener('click', function(){
    console.log('Store Page raised');
    clevertap.event.push("Charged", {});

  //   fetch('https://api.clevertap.com/1/upload', {
  //   method: 'POST',
  //   headers: {
  //     'X-CleverTap-Account-Id': 'TEST-8WW-745-K67Z',
  //     'X-CleverTap-Passcode': 'SCW-BAZ-GEEL',
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     d: [
  //       {
  //         identity: 'testxyz11',
  //         type: 'event',
  //         evtName: 'test_event_01',
  //         evtData: {
  //           "date": "$D_1765955400"
  //         }
  //       }
  //     ]
  //   })
  // })
  // .then(res => res.json())
  // .then(data => {
  //   console.log('CleverTap response:', data);
  // })
  // .catch(err => {
  //   console.error('CleverTap API error:', err);
  // });

    
});


