const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const refreshToken = process.env.REFRESH_TOKEN;

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

  try {
    const response = await fetch(tokenEndpoint, requestOptions);
    if (response.ok) {
      const data = await response.json();
      return data.access_token;
    } else {
      const errorData = await response.json();
      throw new Error(`Failed to get token: ${errorData.error_description}`);
    }
  } catch (error) {
    console.error("An error occurred:", error);
    return null;
  }
}
