import { ApolloClient, HttpLink, ApolloProvider } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/cache";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./components/Auth/Login";
import TodoContainer from "./components/Todo/TodoContainer";
import useAccessToken from "./hooks/useAccessToken";

const createApolloClient = (authToken: string) => {
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.REACT_APP_GRAPHQL_API_ENDPOINT,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }) as any,
    cache: new InMemoryCache(),
  });
};

function App() {
  const idToken = useAccessToken();
  const { isLoading } = useAuth0();

  if (isLoading) return null;
  if (!idToken) return <Login />;

  console.log(`idToken: ${idToken}`);
  const client = createApolloClient(idToken);

  return (
    <ApolloProvider client={client}>
      <TodoContainer />
    </ApolloProvider>
  );
}

export default App;
