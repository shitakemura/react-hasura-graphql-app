import { HStack, Text } from "@chakra-ui/react";
import { Todo } from "../../models/todo";

type TodoItemProps = {
  todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <HStack
      borderColor='blue.300'
      borderWidth={1}
      p={8}
      w='full'
      height='16'
      justify='space-between'
      spacing={8}>
      <Text>{todo.title}</Text>
    </HStack>
  );
};

export default TodoItem;
