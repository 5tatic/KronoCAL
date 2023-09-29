// Initialize an empty array to store calendar events
let calendarEvents = [];
// Function to add an event
const addEvent = (eventName, eventDate, eventTime, attendenceRequrements, priority = 'normal') => {
    const newEvent = {
        name: eventName,
        date: new Date(eventDate + " " + eventTime),
        priority: priority,
    };

    // Adding a simple reminder
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
// Function to check for admin permissions
function checkPermission(role) {
    is (role === 'admin') {
        return true;
    } else {
        return false;
    }
};

function createUser(email) {
  // Validate email format
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return 'Invalid email format';
  }

  // Create user object (this would usually be saved in a database)
  const newUser = {
    id: new Date().getTime(), // Just a placeholder for a unique ID
    email: email,
    role: 'user' // Default role
  };

  // Here you'd usually call an API to save the user to a database
  console.log('User created:', newUser);

  return newUser;
}

// Usage
const email = 'example@email.com';
const user = createUser(email);


// Function to require admin permissions before deleting an Event
function canDeleteEvent(userRole, eventOwnerId) {
    return userRole === 'admin' || userRole === eventOwnerId;
}

const userRole = 'user'; // From user session or DB
const eventOwnerId = 'ownerId'; // From the evend data

if (canDeleteEvent(userRole, eventOwnerId)) {
    // Call the API to del the event. 
    console.log('Event Deleted');
} else {
    console.log('You must be an admin to do that');
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
