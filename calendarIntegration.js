// Initialize an empty array to store calendar events
let calendarEvents = [];

// Function to add an event
const addEvent = (eventName, eventDate, eventTime, priority = 'normal') => {
  const newEvent = {
    name: eventName,
    date: new Date(eventDate + " " + eventTime),
    priority: priority,
  };
  
  // Adding a simple reminder
  const currentTime = new Date();
  const timeDiff = newEvent.date - currentTime;
  if(timeDiff > 0) {
    setTimeout(() => {
      console.log(`Reminder: Event "${newEvent.name}" is starting now.`);
    }, timeDiff);
  }

  calendarEvents.push(newEvent);
  console.log(`Event "${eventName}" added.`);
};

// Function to delete an event
const deleteEvent = (eventName) => {
  const index = calendarEvents.findIndex((event) => event.name === eventName);
  if (index !== -1) {
    calendarEvents.splice(index, 1);
    console.log(`Event "${eventName}" deleted.`);
  } else {
    console.log(`Event "${eventName}" not found.`);
  }
};

// Function to list all events, sorted by priority
const listEvents = () => {
  console.log("Current Events:");
  const sortedEvents = [...calendarEvents].sort((a, b) => a.priority.localeCompare(b.priority));
  sortedEvents.forEach((event, index) => {
    console.log(`${index + 1}. [${event.priority}] ${event.name} - ${event.date}`);
  });
};

// Sample usage
'addEvent("Meeting", "2023-09-25", "10:00:00", "high");'
'addEvent("Lunch", "2023-09-25", "12:00:00", "low");'
'listEvents();'
'deleteEvent("Meeting");'
'listEvents();'
