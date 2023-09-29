
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
