import { ApolloClient, HttpLink, ApolloProvider } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/cache";
import { useAuth0 } from "@auth0/auth0-react";
import { Routes, Route } from "react-router-dom";
import Login from "./Auth/Login";
import TodoContainer from "./Todo/TodoContainer";
import useAccessToken from "../hooks/useAccessToken";
import Header from "./Header";

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
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) return null;
  if (!isAuthenticated) return <Login />;

  if (idToken) {
    console.log(`idToken: ${idToken}`);
    const client = createApolloClient(idToken);

    return (
      <ApolloProvider client={client}>
        <Header />
        <Routes>
          <Route path='/' element={<TodoContainer />} />
        </Routes>
      </ApolloProvider>
    );
  } else {
    return null;
  }
}

export default App;