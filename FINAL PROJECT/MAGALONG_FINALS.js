document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#contactForm').addEventListener('submit', function(event) {
      event.preventDefault();
      sendMail();
    });
  });
  
  function sendMail() {
    var fullName = encodeURIComponent(document.getElementById('fullName').value);
    var emailAddress = encodeURIComponent(document.getElementById('emailAddress').value);
    var mobileNumber = encodeURIComponent(document.getElementById('mobileNumber').value);
    var emailSubject = encodeURIComponent(document.getElementById('emailSubject').value);
    var messageText = encodeURIComponent(document.getElementById('messageText').value);
  
    var bodyText = "Full Name: " + fullName + "%0A"
                 + "Email Address: " + emailAddress + "%0A"
                 + "Mobile Number: " + mobileNumber + "%0A"
                 + "Message: " + messageText;
  
    var link = "mailto:202312094@fit.edu.ph"
             + "?subject=" + emailSubject
             + "&body=" + bodyText;
  
    window.location.href = link;
  }

  



  