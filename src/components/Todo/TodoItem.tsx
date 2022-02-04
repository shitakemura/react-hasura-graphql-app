import { DeleteIcon } from "@chakra-ui/icons";
import { Checkbox, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Todo } from "../../models/todo";

type TodoItemProps = {
  todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
  const [isChecked, setIsChecked] = useState(todo.is_completed);

  return (
    <HStack
      borderColor='blue.300'
      borderWidth={1}
      p={8}
      w='full'
      height='16'
      justify='space-between'
      spacing={8}>
      <HStack spacing={8}>
        <Checkbox
          size='lg'
          isChecked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <Text
          textDecoration={isChecked ? "line-through" : undefined}
          color={isChecked ? "gray.500" : "black"}>
          {todo.title}
        </Text>
      </HStack>
      <DeleteIcon
        color='blue.500'
        boxSize={5}
        _hover={{ boxSize: 6 }}
        onClick={() => {}}
      />
    </HStack>
  );
};

export default TodoItem;
