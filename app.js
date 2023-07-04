const typed = new Typed('#typewriter', {
    strings: ['<span style="color: #ff6150;">RMT</span>',
    '<span style="color: #ff6150;">MD</span>'],
    typeSpeed: 120, // Adjust the typing speed here (in milliseconds)
    backSpeed: 60, // Adjust the backspacing speed here (in milliseconds)
    loop: true,
    loopCount: Infinity,
    smartBackspace: true,
    shuffle: false,
    contentType: 'html',
  });

  function validateInput() {
    var month = document.getElementById("month").value;
    var date = document.getElementById("date").value;
    var year = document.getElementById("year").value;
    var goButton = document.getElementById("goButton");
  
    // Validate input
    if (isValidDate(month, date, year)) {
      goButton.disabled = false;
    } else {
      goButton.disabled = true;
    }
  }
  
  function isValidDate(month, date, year) {
    var monthRegex = /^(0?[1-9]|1[0-2])$/; // Regular expression to validate month (1-12)
    var dateRegex = /^(0?[1-9]|[12][0-9]|3[01])$/; // Regular expression to validate date (1-31)
    var yearRegex = /^\d{4}$/; // Regular expression to validate year (four digits)
  
    return monthRegex.test(month) && dateRegex.test(date) && yearRegex.test(year);
  }
  

    
  var monthVal;
  var dateVal;
  var yearVal;
  var noOfDaysBorn;
    // Helper function to add commas as separators
    function addCommas(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  function calculateDaysSinceBirthdate(event) {
    event.preventDefault(); // Prevent form submission and page reload
    var month = document.getElementById("month").value;
    var date = document.getElementById("date").value;
    var year = document.getElementById("year").value;
    monthVal = month;
    dateVal = date;
    yearVal = year;

    // Perform the calculation and update the result
    var birthdate = new Date(year, month - 1, date);
    var currentDate = new Date();
    var timeDiff = currentDate.getTime() - birthdate.getTime();
    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  
    // Display the result in the second section
    var resultElement = document.getElementById("result");
  
  
    var formattedDays = addCommas(days);
    noOfDaysBorn= days;
    // Scroll to the secondContent section
    document.getElementById("secondContent").scrollIntoView({ behavior: 'smooth' });
  
    // Update the values in the calendar
    var weekdayValue = birthdate.toLocaleDateString(undefined, { weekday: 'long' });
    var dateValue = birthdate.toLocaleDateString(undefined, { day: 'numeric' });
    var yearValue = birthdate.toLocaleDateString(undefined, { month: 'short' }) + ', ' + birthdate.getFullYear();
  
    document.querySelector('.calendar .header').innerText = weekdayValue;
    document.querySelector('.calendar .body').innerText = dateValue;
    document.querySelector('.calendar .footer').innerText = yearValue;
  
    const typed = new Typed('#typewriter1', {
      strings: ['A lot has happened in the <span style="color:#028432;font-weight:300">' + formattedDays + '</span> days since you were born.'],
      typeSpeed: 120,
      backSpeed: 60,
      loop: false,
      loopCount: 1,
      smartBackspace: true,
      shuffle: false,
      contentType: 'html',
      onComplete: function() {
        document.querySelector('#firstButton').style.display = 'block';
        calculateRedBloodCellsProduced();
        calculateHeartbeatsAndBloodPumped();
        calculateBreathsTaken();
        calculateBlinks();
        calculateDaysAsleep(); 
      
      }
    });
  }
  

  function calculateHeartbeatsAndBloodPumped() {
    var month = monthVal;
    var date = dateVal;
    var year = yearVal;
  
    var birthdate = new Date(year, month - 1, date);
    var currentDate = new Date();
    var timeDiff = currentDate.getTime() - birthdate.getTime();
    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  
    var heartRatePerMinute = 70;
    var bloodFlowRatePerMinute = 5;
  
    var heartbeats = days * 24 * 60 * heartRatePerMinute;
    var bloodPumped = days * 24 * 60 * bloodFlowRatePerMinute;
  
    var formattedHeartbeats = addCommas(heartbeats);
    var formattedBloodPumped = addCommas(bloodPumped);
  
    document.querySelector('.mainbody1').style.display = 'block';
    document.querySelector('#heartBeat').innerText = formattedHeartbeats;
    document.querySelector('#boodPump').innerText = formattedBloodPumped;
  
    setInterval(function () {
      heartbeats += 1;
      formattedHeartbeats = addCommas(heartbeats);
      document.querySelector('#heartBeat').innerText = formattedHeartbeats;
    }, 1000); // increment the heartbeats every second
  }
  
  
  function calculateRedBloodCellsProduced() {
    var month = monthVal;
    var date = dateVal;
    var year = yearVal;
  
    var birthdate = new Date(year, month - 1, date);
    var currentDate = new Date();
    var timeDiff = currentDate.getTime() - birthdate.getTime();
    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  
    var redBloodCellsPerDay = 2.5 * Math.pow(10, 11); // Assuming an average production rate of 2.5 trillion per day
  
    var redBloodCellsProduced = days * redBloodCellsPerDay;
  
    var additionalRedBloodCellsPerMicrosecond = 3_981; // 3,981 per microsecond
  
    setInterval(function() {
      redBloodCellsProduced += additionalRedBloodCellsPerMicrosecond;
      var formattedRedBloodCellsProduced = addCommas(redBloodCellsProduced);
      document.querySelector('#bloodCells').innerText = formattedRedBloodCellsProduced;
    }, 1); // Update every microsecond (1 microsecond = 0.001 milliseconds)
  }
  
  

  function calculateBreathsTaken() {
    var month = monthVal;
    var date = dateVal;
    var year = yearVal;
  
    var birthdate = new Date(year, month - 1, date);
    var currentDate = new Date();
    var timeDiff = currentDate.getTime() - birthdate.getTime();
    var minutes = Math.floor(timeDiff / (1000 * 60));
  
    var breathingRatePerMinute = 15; // Assuming an average breathing rate of 15 breaths per minute
  
    var breathsTaken = minutes * breathingRatePerMinute;
   // Add 0.33 breaths per second
    var additionalBreathsTaken =1;


    setInterval(function() {
      breathsTaken += additionalBreathsTaken;
      var formattedBreathsTaken = addCommas(breathsTaken);
      document.querySelector('#breathsCount').innerText = formattedBreathsTaken;
    }, 2500); 

  }
  


  function calculateBlinks() {
    var month = monthVal;
    var date = dateVal;
    var year = yearVal;
  
    var birthdate = new Date(year, month - 1, date);
    var currentDate = new Date();
    var timeDiff = currentDate.getTime() - birthdate.getTime();
    var seconds = Math.floor(timeDiff / 1000);
  
    var averageBlinkRatePerMinuteMax = 20; // Maximum average blink rate per minute
    var blinksPerSecondMax = averageBlinkRatePerMinuteMax / 60; // Calculate the maximum blinks per second
  
    var blinksMax = Math.round(seconds * blinksPerSecondMax);
  
    var formattedBlinksMax = addCommas(blinksMax);
  

    setInterval(function() {
       blinksMax +=blinksPerSecondMax;
      var formattedBlinksMax = addCommas(Math.round(blinksMax));  
      document.querySelector('#blinksCount').innerText = formattedBlinksMax;
    }, 1000); 

  }
  function calculateDaysAsleep() {
   

     daysAsleep = Math.floor(noOfDaysBorn/3);
     var formattedDaysAsleep = addCommas(daysAsleep);
    
  
      document.querySelector('#daysAsleepCount').innerText = formattedDaysAsleep;

  }


  const typer = new Typed('#wRiterHead', {
    strings: [
      'Splendid',
      'Sorrowful',
      'Stressful',
      'Stressful',


    ],
    typeSpeed: 120, // Adjust the typing speed here (in milliseconds)
    backSpeed: 60, // Adjust the backspacing speed here (in milliseconds)
    loop: true,
    loopCount: Infinity,
    smartBackspace: true,
    shuffle: false,
    contentType: 'html',
  });
  

// Calculate initial days asleep count
  













   // Function to handle scrolling event
function handleScroll(event) {
  // Get the direction of the scroll
  const direction = event.deltaY > 0 ? 1 : -1;

  // Calculate the next index
  const nextIndex = currentIndex + direction;

  // Check if the next index is within the valid range
  if (nextIndex >= 0 && nextIndex < secContainers.length) {
    // Scroll to the next .secContainer element
    if (direction === -1) {
      // If scrolling up, scroll to the top of the current section
      secContainers[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // If scrolling down, scroll to the top of the next section
      secContainers[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    currentIndex = nextIndex;
  }
}


