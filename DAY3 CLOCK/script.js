// Select elements
const clock = document.getElementById('clock');
const timeFormatToggle = document.getElementById('timeFormatToggle');
const clockContainer = document.querySelector('.clock-container');

// Create and add date element below clock
const dateElement = document.createElement('div');
dateElement.id = 'date';
clockContainer.insertBefore(dateElement, clock.nextSibling);

let is24HourFormat = false; // default 12-hour

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Format date
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateElement.textContent = now.toLocaleDateString(undefined, dateOptions);

  // Theme based on time
  if (hours >= 18 || hours < 6) {
    document.body.style.background = 'linear-gradient(135deg, #1a1a2e, #16213e)';
    document.body.style.color = '#fff';
  } else {
    document.body.style.background = 'linear-gradient(135deg, #e0c3fc, #8ec5fc)';
    document.body.style.color = '#000';
  }

  let ampm = '';
  if (!is24HourFormat) {
    ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
  }

  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${!is24HourFormat ? ampm : ''}`;

  clock.textContent = formattedTime;
}

// Toggle 12H/24H format
timeFormatToggle.addEventListener('change', () => {
  is24HourFormat = timeFormatToggle.checked;
  updateClock();
});

// Update every second
setInterval(updateClock, 1000);
updateClock();
