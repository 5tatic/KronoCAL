
const fs = require("fs");

function logError(error) {
  const timestamp = new Date().toISOString();
  const errorMessage = `${timestamp} - ${error}\n`;
  fs.appendFileSync("error.log", errorMessage);
}
    const clientID = process.env.CLIENT_ID;
    const clientSecret = process.env.CLIENT_SECRET;
    const refreshToken = process.env.REFRESH_TOKEN;

async function getAccessToken() {
  try {
      const tokenEndpoint = "https://login.microsoftonline.com/common/oauth2/v2.0/token";
      const params = new URLSearchParams();
      params.append("client_id", clientID);
      params.append("scope", "https://graph.microsoft.com/.default");
      params.append("client_secret", clientSecret);
      params.append("grant_type", "refresh_token");
      params.append("refresh_token", refreshToken);

      const requestOptions = {
        method: 'POST',
  } catch (error) {
    logError(error);
  }
}        body: params.toString()
  } catch (error) {
    logError(error);
  }
}
      try {
        const response = await fetch(tokenEndpoint, requestOptions);
        if (response.ok) {
          const data = await response.json();
          return data.access_token;
  } catch (error) {
    logError(error);
  }
}          const errorData = await response.json();
  } catch (error) {
    logError(error);
  }
}  } catch (error) {
    logError(error);
  }
}  } catch (error) {
    logError(error);
  }
}        console.error("An error occurred:", error);
        return null;
  } catch (error) {
    logError(error);
  }
}  } catch (error) {
    logError(error);
  }
}
const { Client } = require('pg');  // PostgreSQL client
const crypto = require('crypto');  // For generating secure tokens

// PostgreSQL client setup
const pgClient = new Client({
    kronocal  
});
pgClient.connect();

// Function to generate a secure token
function generateResetToken() {
  return crypto.randomBytes(20).toString('hex');
}

// Endpoint to handle password reset requests
async function handlePasswordResetRequest(email) {
  // Generate a secure token
  const token = generateResetToken();

  // Save the email and token in the database, along with an expiration time
  try {
    await pgClient.query(
      'INSERT INTO password_resets (email, token, expires_at) VALUES ($1, $2, NOW() + INTERVAL \'1 hour\')',
      [email, token]
    );
  } catch (err) {
    console.error('Database error:', err);
    return;
  }

  // TODO: Send an email to the user with the reset link containing the token
}

// Example usage
// handlePasswordResetRequest('user@example.com');


const { Client } = require('pg');  // PostgreSQL client
const crypto = require('crypto');  // For generating secure tokens

// PostgreSQL client setup (replace with your actual connection details)
const pgClient = new Client({
  // your PostgreSQL connection details here
});
pgClient.connect();

// Function to generate a secure token
function generateResetToken() {
  return crypto.randomBytes(20).toString('hex');
}

// Endpoint to handle password reset requests
async function handlePasswordResetRequest(email) {
  // Generate a secure token
  const token = generateResetToken();

  // Save the email and token in the database, along with an expiration time
  try {
    await pgClient.query(
      'INSERT INTO password_resets (email, token, expires_at) VALUES ($1, $2, NOW() + INTERVAL \'1 hour\')',
      [email, token]
    );
  } catch (err) {
    console.error('Database error:', err);
    return;
  }

  // TODO: Send an email to the user with the reset link containing the token
}

const winston = require('winston');
const morgan = require('morgan');

// Winston setup
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

// Morgan setup (for use with Express.js)
// Uncomment the following line in your Express app setup
// app.use(morgan('combined'));

// To log info or errors using Winston
// logger.info('This is an info message');
// logger.error('This is an error message');
