let makeApollo = _ => {
  // InMemoryCache
  let inMemoryCache = ApolloInMemoryCache.createInMemoryCache();

  let webSocketLink =
    ApolloLinks.webSocketLink(
      ~uri="ws://localhost:8080/v1/graphql",
      ~reconnect=true,
      (),
    );

  let httpLink =
    ApolloLinks.createHttpLink(~uri="ws://localhost:8080/v1/graphql", ());

  let link =
    ApolloLinks.split(
      operation => {
        let operationDefinition =
          ApolloUtilities.getMainDefinition(operation##query);
        operationDefinition##kind == "OperationDefinition"
        &&
        operationDefinition##operation == "subscription";
      },
      webSocketLink,
      httpLink,
    );

  // apollo client instance
  ReasonApollo.createApolloClient(~link, ~cache=inMemoryCache, ());
};