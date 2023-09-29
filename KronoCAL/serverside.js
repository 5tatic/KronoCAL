# Sample refactor of serverside.js to incorporate suggested improvements

sample_refactor_code = '''
// Check for required environment variables
if (!process.env.CLIENT_ID || !process.env.CLIENT_SECRET || !process.env.REFRESH_TOKEN) {
  console.error("Missing required environment variables.");
  process.exit(1);
}

const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const refreshToken = process.env.REFRESH_TOKEN;

// Function to create request parameters
function createRequestParams(clientID, clientSecret, refreshToken) {
  const params = new URLSearchParams();
  params.append("client_id", clientID);
  params.append("scope", "https://graph.microsoft.com/.default");
  params.append("client_secret", clientSecret);
  params.append("grant_type", "refresh_token");
  return params;
}

// Async function to get access token
async function getAccessToken() {
  try {
    const tokenEndpoint = "https://login.microsoftonline.com/common/oauth2/v2.0/token";
    const params = createRequestParams(clientID, clientSecret, refreshToken);
    
    // Implement your async HTTP request logic here
    
  } catch (error) {
    console.error("An error occurred while fetching the access token:", error);
  }
}
'''

# Displaying the sample refactor code with syntax highlighting
display_code_snippet(sample_refactor_code, JavascriptLexer())
