import { useAuth0 } from "@auth0/auth0-react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

type HeaderContainerProps = {
  children: React.ReactNode;
};

const HeaderContainer = ({ children }: HeaderContainerProps) => {
  return (
    <Flex
      align='center'
      justify='space-between'
      wrap='wrap'
      w='100%'
      p={8}
      bg='blue.400'
      color='white'>
      {children}
    </Flex>
  );
};

const MenuLinks = () => {
  const { isAuthenticated, logout } = useAuth0();

  return (
    <Box>
      {isAuthenticated ? (
        <Text
          fontWeight='bold'
          _hover={{ textDecoration: "underline" }}
          onClick={() => logout()}>
          Logout
        </Text>
      ) : null}
    </Box>
  );
};

export const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Text
        _hover={{ textDecoration: "underline" }}
        fontSize={24}
        fontWeight='bold'
        onClick={() => navigate("/")}>
        Todo App
      </Text>
      <MenuLinks />
    </HeaderContainer>
  );
};

export default Header;
