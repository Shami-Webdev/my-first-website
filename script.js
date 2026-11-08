
// Automatically update the copyright year
document.getElementById("year").textContent =
    new Date().getFullYear();


// Prevent users from selecting a past booking date
const bookingDate = document.getElementById("bookingDate");

const today = new Date();
const localDate = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
).toISOString().split("T")[0];

bookingDate.min = localDate;


// Handle the booking form
const bookingForm = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    formMessage.textContent =
        "Thank you! Your booking request has been received.";

    bookingForm.reset();

    bookingDate.min = localDate;

});

