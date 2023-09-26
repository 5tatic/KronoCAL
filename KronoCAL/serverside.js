// Replace these with your own values
const clientID = "YOUR_CLIENT_ID";
const clientSecret = "YOUR_CLIENT_SECRET";
const refreshToken = "YOUR_REFRESH_TOKEN"; // You get this after the initial OAuth flow

async function getAccessToken() {
  const tokenEndpoint = "https://login.microsoftonline.com/common/oauth2/v2.0/token";
  const params = new URLSearchParams();
  params.append("client_id", clientID);
  params.append("scope", "https://graph.microsoft.com/.default");
  params.append("client_secret", clientSecret);
  params.append("grant_type", "refresh_token");
  params.append("refresh_token", refreshToken);

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString()
  };

  const response = await fetch(tokenEndpoint, requestOptions);
  const data = await response.json();
  return data.access_token;
}

