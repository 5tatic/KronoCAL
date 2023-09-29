// tokenCredential is one of the credential classes from azure-identity
// scopes is a list of permission scope strings
final TokenCredentialAuthProvider authProvider = new TokenCredentialAuthProvider(
    scopes, credential);

final String proxyHost = "localhost";
final int proxyPort = 8888;
final InetSocketAddress proxyAddress = new InetSocketAddress(proxyHost,
    proxyPort);

final Proxy proxy = new Proxy(Proxy.Type.HTTP, proxyAddress);

// This object is only needed if the proxy requires authentication
final Authenticator proxyAuthenticator = new Authenticator() {
    @Override
    public Request authenticate(Route route, Response response)
        throws IOException {
        String credential = Credentials.basic("username", "password");
        return response.request().newBuilder()
            .header("Proxy-Authorization", credential).build();
    }
};

// Omit proxyAuthenticator if no authentication required
final OkHttpClient httpClient = HttpClients.createDefault(authProvider)
    .newBuilder().proxy(proxy).proxyAuthenticator(proxyAuthenticator).build();
if (null == httpClient) {
    throw new Exception("Could not create HTTP client.");
}

final GraphServiceClient<Request> graphClient = GraphServiceClient.builder()
    .httpClient(httpClient).buildClient();