import { useAuth0 } from "@auth0/auth0-react";
import { Stack, Text } from "@chakra-ui/react";
import Login from "./components/Auth/Login";
import useAccessToken from "./hooks/useAccessToken";

function App() {
  const idToken = useAccessToken();
  const { isLoading, logout } = useAuth0();

  console.log(`idToken: ${idToken}`);

  if (isLoading) return null;
  if (!idToken) return <Login />;

  return (
    <Stack>
      <Text>Todo App</Text>
    </Stack>
  );
}

export default App;
