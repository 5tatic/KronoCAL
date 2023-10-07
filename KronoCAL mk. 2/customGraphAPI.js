// tokenCredential is one of the credential classes from azure-identity
// scopes is a list of permission scope strings
final TokenCredentialAuthProvider authProvider = new TokenCredentialAuthProvider(
    scopes, credential);

final ChaosHttpHandler chaosHandler = new ChaosHttpHandler();

final OkHttpClient httpClient = HttpClients.createDefault(authProvider)
    .newBuilder().addInterceptor(chaosHandler).build();
if (null == httpClient) {
    throw new Exception("Could not create HTTP client.");
}

final GraphServiceClient<Request> graphClient = GraphServiceClient.builder()
    .httpClient(httpClient).buildClient();