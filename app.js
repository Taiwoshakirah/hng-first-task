// Function to get the current UTC time
function getCurrentUTCTime() {
    const now = new Date();
    const utcHours = now.getUTCHours();
    const utcMinutes = now.getUTCMinutes();
    const utcSeconds = now.getUTCSeconds();
    return `${utcHours.toString().padStart(2, '0')}:${utcMinutes.toString().padStart(2, '0')}:${utcSeconds.toString().padStart(2, '0')}`;
}

// Function to get current day
function getCurrentDay(){
    const now = new Date();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const currentDay = now.getDay()
    return daysOfWeek[currentDay]
    // return `${currentDay.toString().padStart(2,0)}`
}

// Function to update the UTC time in the HTML
function updateUTCTime() {
    const utcTimeElement = document.getElementById('utc-time-display');
    utcTimeElement.textContent = `Current UTC Time: ${getCurrentUTCTime()}`;
}
function updateDay() {
    const dayElement = document.getElementById('day-display');
    dayElement.textContent = `Current Day: ${getCurrentDay()}`;
}

// Update the UTC time every second
setInterval(updateUTCTime, 1000);

// Initial call to display the time immediately
updateUTCTime();
updateDay()