import { VStack } from "@chakra-ui/react";
import TodoClear from "./TodoClear";
import TodoInput from "./TodoInput";
import TodoListQuery from "./TodoList";

const TodoContainer = () => {
  return (
    <VStack w='full' spacing={10} paddingX={48} paddingY={8}>
      <TodoInput />
      <TodoListQuery />
      <TodoClear />
    </VStack>
  );
};

export default TodoContainer;
