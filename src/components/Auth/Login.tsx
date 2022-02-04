import { useAuth0 } from "@auth0/auth0-react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

const Login = () => {
  const { isLoading, loginWithRedirect } = useAuth0();
  const { onClose } = useDisclosure();

  if (isLoading) return null;

  return (
    <>
      <Modal onClose={onClose} isOpen={true} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Welcome to the Todo app</ModalHeader>
          <ModalBody>
            <Text fontWeight='bold' mb='1rem'>
              Please login to continue
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => loginWithRedirect({})}>Login</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login;
