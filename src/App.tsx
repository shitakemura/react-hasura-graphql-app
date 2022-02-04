import { Stack, Text } from "@chakra-ui/react";
import Login from "./components/Auth/Login";
import useAccessToken from "./hooks/useAccessToken";

function App() {
  const idToken = useAccessToken();

  if (!idToken) return <Login />;

  return (
    <Stack>
      <Text>Todo App</Text>
    </Stack>
  );
}

export default App;
