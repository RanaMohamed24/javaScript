 let clockInterval;

    const startButton = document.getElementById('startClock');
    const clockDiv = document.getElementById('clock');

  
    startButton.addEventListener('click', () => {
        alert("Clock Started");

      
        if (clockInterval) clearInterval(clockInterval);

       
        clockInterval = setInterval(() => {
            const now = new Date();
            const timeString = now.toLocaleTimeString(); 
            clockDiv.textContent = timeString;
        }, 1000);
    });

  
    document.addEventListener('keydown', (event) => {
        if (event.altKey && event.key.toLowerCase() === 'w') {
            if (clockInterval) {
                clearInterval(clockInterval);
                clockInterval = null;
                alert("Clock stopped");
            }
        }
    });