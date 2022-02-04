import { VStack } from "@chakra-ui/react";
import TodoInput from "./TodoInput";
import TodoListQuery from "./TodoList";

const TodoContainer = () => {
  return (
    <VStack w='full' spacing={16} paddingX={48} paddingY={8}>
      <TodoInput />
      <TodoListQuery />
    </VStack>
  );
};

export default TodoContainer;
