import { VStack } from "@chakra-ui/react";
import TodoListQuery from "./TodoList";

const TodoContainer = () => {
  return (
    <VStack w='full' spacing={16} paddingX={48}>
      <TodoListQuery />
    </VStack>
  );
};

export default TodoContainer;
