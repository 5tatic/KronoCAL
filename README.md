<!-- Kronos-0 --><!-- awaiting test stage -->
# KronoCal !!! The Zip needs to be tested.
<!-- so far there's an HTML page for the main interface which allows for calendar theme selection -->
## Overview

KronoCal is a secure, customizable meeting management platform designed for businesses. It provides admins and attendees with various functionalities to schedule meetings, manage agendas, and much more.

## Features

### Admin Features
- Creation and management of user accounts (Still needs a db)
- including assigning roles. (backend function)
- Ability to schedule, reschedule, and cancel meetings. (done)
- Creation, editing, and management of meeting agendas.
- Management of meeting materials.(adding important documents to the meetings calendar like financial reports

### Attendee Features
- Viewing of upcoming meetings and agendas.
- Receiving notifications about meetings, tasks, and changes.
- Accessing meeting materials. (read only)
- Taking and sharing notes during meetings.
- Creating and managing tasks related to meetings.(ms Graph Api)

## Security
- Encrypted DB,
- Cli side encryption of passwords and usernames, 
- 2FA requirements,
- Authentication support
- Reputation based trust
- Role-based access control.(Admin/user accounts)
- Regular security audits. (bi-weekly checks to ensure safe code)
- Strict email security,
  1, Unable to open attachments
  2, no scripts should run from emails,
  3, NO external email addresses emails will be opened. (quaranteen and remove)

Please see the attached documents for detailed requirements and features.
<!-- Keep in mind i have no idea what I'm doing so ask if you want to know something -->

## Contact

For more information about KronoCal, please reach out to:
  info@5tatic.dev
=======
let calendar = ('eventCalendar');

const calendarEvent {
    event = newEvent,
    date = eventDate,
    time = eventTime,
};

calendar-integration
