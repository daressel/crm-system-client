import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  split,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { notification } from "antd";
import { createClient } from "graphql-ws";

export const ApolloApp = ({ children }: any) => {
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      const firstError = graphQLErrors[0];
      // notification.open({
      //   message: firstError.message,
      //   type: 'error',
      //   placement: 'top',
      //   duration: 3,
      // });

      graphQLErrors.forEach(({ extensions, message, locations, path }) => {
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(
            locations
          )}, Path: ${path}`
        );

        //@ts-ignore
        //   if (extensions?.exception?.code == '401') {
        //     setPath(router.pathname);
        //     router.push('/login');
        //   }
      });
    }
    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  });

  const wsLink = new GraphQLWsLink(
    createClient({
      url: process.env.REACT_APP_API_WS_URl || "",
      connectionParams: {
        // "content-type": "application/json",
        // "access-token": accessToken,
        "refresh-token": localStorage.getItem("refresh-token"),
      },
      connectionAckWaitTimeout: 1000,
    })
  );

  const httpLink = new HttpLink({
    uri: process.env.REACT_APP_API_URl,
    // credentials: "include",
  });

  const authLink = setContext((_, { headers }) => {
    const accessToken = localStorage.getItem("access-token");
    return {
      headers: {
        ...headers,
        authorization: accessToken,
      } as Headers,
    };
  });

  const middlewareLink = new ApolloLink((operation, forward) => {
    return forward(operation).map((response) => {
      return response;
    });
  });

  const splitLink = split(
    (data) => {
      const definition = getMainDefinition(data.query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    wsLink,
    httpLink
  );

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, authLink, middlewareLink, splitLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
