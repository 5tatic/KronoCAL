let calendarEvents = [];

function handleAttendanceRequirements(event, requirements) {
  if (!requirements || typeof requirements !== 'object') {
    console.log('Invalid attendance requirements');
    return;
  }

  if (requirements.minAttendees && typeof requirements.minAttendees === 'number') {
    event.minAttendees = requirements.minAttendees;
  }

  if (requirements.maxAttendees && typeof requirements.maxAttendees === 'number') {
    event.maxAttendees = requirements.maxAttendees;
  }

  if (requirements.RSVP && typeof requirements.RSVP === 'boolean') {
    event.RSVP = requirements.RSVP;
  }

  console.log('Attendance requirements set.');
}

const addEvent = (eventName, eventDate, eventTime, attendanceRequirements, priority = 'normal') => {
  const newEvent = {
    name: eventName,
    date: new Date(eventDate + " " + eventTime),
    priority: priority,
  };

  handleAttendanceRequirements(newEvent, attendanceRequirements);

  const currentTime = new Date();
  const timeDiff = newEvent.date - currentTime;
  if (timeDiff > 0) {
    setTimeout(() => {
      console.log(`Reminder: Event "${newEvent.name}" is starting now.`);
    }, timeDiff);
  }

  calendarEvents.push(newEvent);
  console.log(`Event "${eventName}" added.`);
};

// ... rest of your code remains the same
