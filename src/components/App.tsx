import { ApolloClient, HttpLink, ApolloProvider } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/cache";
import { Routes, Route } from "react-router-dom";
import Login from "./Auth/Login";
import TodoContainer from "./Todo/TodoContainer";
import useAccessToken from "../hooks/useAccessToken";
import Header from "./Header";
import { Spinner, Stack } from "@chakra-ui/react";

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
  const { idToken, isLoading } = useAccessToken();

  if (isLoading) {
    return (
      <Stack w='full' h='100vh' justifyContent='center' alignItems='center'>
        <Spinner
          thickness='4px'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
      </Stack>
    );
  }

  if (!idToken) {
    return <Login />;
  } else {
    const client = createApolloClient(idToken);
    return (
      <ApolloProvider client={client}>
        <Header />
        <Routes>
          <Route path='/' element={<TodoContainer />} />
        </Routes>
      </ApolloProvider>
    );
  }
}

export default App;
