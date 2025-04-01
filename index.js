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

// function handlePopup() {
//     console.log('inside handle pop up');
//     var wrapper = window.parent.document.getElementById('wizParDiv0');
//     var iframe = wrapper.querySelector('iframe')

//     var doc = iframe.contentDocument;
//     var contentDiv = doc.getElementById('contentDiv');

//     var targetBtn = contentDiv.querySelector('#targetBtn');

//     if (targetBtn) {
//         console.log('target Div is clicked');
//         targetBtn.addEventListener('click', closePopUp);

//     }

//     // // Close popup function
//     function closePopUp() {
//         console.log("Modal clicked. Closing popup...");
//         setTimeout(() => {
//             wrapper.remove(); 
//             // wrapper.remove();
//           }, 0); 
//     }
// }

// // Add event listener to trigger button
// document.getElementById('triggerEventBtn').addEventListener('click', function () {
//     // Push CleverTap event
//     clevertap.event.push("Product Viewed");
//     console.log("CleverTap Event: Product Viewed triggered");

//     setTimeout(() => {
//         handlePopup();
//     }, 1000); // Adjust timeout as needed based on modal load time
// });


// async function getIpDetails(){
//     const ip = '67.250.186.196';
//     const accessKey = '4c9ec11e-768b-487d-96f7-0551db09258d';
//     const url = 'https://apiip.net/api/check?ip='+ ip +'&accessKey='+ accessKey; 
  
//     // Make a request and store the response
//     const response = await fetch(url);
  
//     // Decode JSON response:
//     const result = await response.json();
  
//     // Output the "code" value inside "currency" object
//     return result;
// }
// const fireCleaverTapEvent = async response => {
//     // const deviceInformation = getDeviceInformation();
//     const ipDetails = await getIpDetails();
//     console.log("ipDetails",ipDetails)
//     clevertap.profile.push({
//       "Site": {
//         "isPasswordCreated":true,
//         latitude: ipDetails?.latitude,
//         longitude: ipDetails?.longitude,
//         country: ipDetails?.countryName,
//         ip: ipDetails?.ip
//       }
//      });
//     // if (ipDetails?.latitude && ipDetails?.longitude) {
//     //   clevertap.getLocation(ipDetails?.latitude, i)
//     // }
//     if (ipDetails?.latitude && ipDetails?.longitude) {
//       clevertap.getLocation(ipDetails?.latitude, ipDetails?.longitude);
//     }

//    clevertap.event.push("test_event1", {
//       "Sign_Up_Completed":true,
//       "Timestamp": new Date().getTime()
//     });


//   };


document.getElementById("leadCaptureForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    // Capture form values
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const city = document.getElementById("city").value.trim();
    const message = document.getElementById("message").value.trim();

    // CleverTap event tracking
    clevertap.event.push("Lead Captured", {
        "First Name": firstName,
        "Last Name": lastName,
        "Email Address": email,
        "Phone No.": phone,
        "City": city,
        "Message": message
    });

    // Upload user profile to CleverTap
    const payload = {
        "d": [
            {
                "identity": email, // Using email as a unique identifier
                "type": "profile",
                "profileData": {
                    "Name": `${firstName} ${lastName}`,
                    "Email": email,
                    "Phone": phone,
                    "City": city,
                    "Message": message
                }
            }
        ]
    };

    try {
        const response = await fetch("https://eu1.api.clevertap.com/1/upload", {
            method: "POST",
            headers: {
                "X-CleverTap-Account-Id": "94W-4Z9-8K7Z", // Replace with actual account ID
                "X-CleverTap-Passcode": "QAW-AOV-CLEL", // Replace with actual passcode
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        
        if (data.status === "success") {
            alert("Thank you! Your information has been submitted successfully.");
        } else {
            alert("There was an error submitting your information. Please try again.");
        }
    } catch (error) {
        console.error("Error uploading user profile:", error);
        alert("An error occurred. Please try again later.");
    }
});
