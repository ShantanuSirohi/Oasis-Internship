function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const timeString = `${hours}:${minutes}`;
    const timeElement = document.querySelector('.time');
    if (timeElement) {
      timeElement.textContent = timeString;
    }
  }
  
  // Update time initially
  updateTime();
  
  // Update time every second
  setInterval(updateTime, 1000);
  