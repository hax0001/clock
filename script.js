function updateClock(city, clockType) {
  const cityTime = new Date();
  const timeZoneOffsets = {
    morocco: 'Africa/Casablanca',
    newYork: 'America/New_York',
    london: 'Europe/London',
    tokyo: 'Asia/Tokyo'
  };

  const options = { timeZone: timeZoneOffsets[city], hour12: false };
  const timeString = cityTime.toLocaleTimeString('en-US', options);
  
  if (clockType === 'analog') {
    // Placeholder for analog clock update, ideally with clock mechanics here
  } else {
    document.getElementById(`${city}-time`).textContent = timeString;
  }
}

// Update all clocks every second
setInterval(() => {
  updateClock('morocco', 'analog');
  updateClock('new-york', 'digital');
  updateClock('london', 'analog');
  updateClock('tokyo', 'digital');
}, 1000);
