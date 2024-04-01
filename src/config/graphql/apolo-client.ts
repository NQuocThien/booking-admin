import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

const wsUrl = "ws://localhost:4000/graphql";
const httpUrl = "http://localhost:4000/graphql";

const httpLink = new HttpLink({
  uri: httpUrl,
});

const wsLink = new WebSocketLink({
  uri: wsUrl,
  options: {
    reconnect: true,
  },
});

const link = split(
  // Chia các hoạt động dựa trên loại
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  // Sử dụng WebSocket link cho subscription
  wsLink,
  // Sử dụng HTTP link cho query và mutation
  httpLink
);

const client = new ApolloClient({
  //   uri: "http://localhost:4000/graphql",
  link,
  cache: new InMemoryCache(),
});
export default client;
