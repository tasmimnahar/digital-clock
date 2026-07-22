// Get HTML Elements

const timeDisplay = document.getElementById("timeDisplay");
const dateDisplay = document.getElementById("date");

// Update Clock

const updateClock = () => {

    // Get current date and time
    const now = new Date();

    // Get Time

    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    // AM / PM

    let period = "AM";

    if (hour >= 12) {
        period = "PM";
    }


    // Convert 24 Hour → 12 Hour

    if (hour > 12) {
        hour = hour % 12;
    }

    if (hour === 0) {
        hour = 12;
    }

    // Add Leading Zero


    hour = hour.toString().padStart(2, "0");
    minute = minute.toString().padStart(2, "0");
    second = second.toString().padStart(2, "0");

    // Display Time

    timeDisplay.textContent = `${hour}:${minute}:${second} ${period}`;
};

// Update Date

const updateDate = () => {

    const now = new Date();

    const date = now.getDate();
    const year = now.getFullYear();

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    const monthName = months[now.getMonth()];
    const dayName = days[now.getDay()];

    dateDisplay.textContent =
        `${dayName}, ${monthName} ${date}, ${year}`;

};


// Run Functions

updateClock();
updateDate();

// Refresh Every Second

setInterval(() => {

    updateClock();
    updateDate();

}, 1000);