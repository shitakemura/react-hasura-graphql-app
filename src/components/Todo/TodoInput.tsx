import { gql, useMutation } from "@apollo/client";
import { Button, HStack, Input } from "@chakra-ui/react";
import { useState } from "react";

const ADD_TODO = gql`
  mutation ($title: String!) {
    insert_todos(objects: { title: $title }) {
      affected_rows
      returning {
        id
        title
        is_completed
        created_at
      }
    }
  }
`;

const TodoInput = () => {
  const [titleInput, setTitleInput] = useState("");
  const [addTodo] = useMutation(ADD_TODO);

  const handleAdd = () => {
    addTodo({ variables: { title: titleInput } });
  };

  return (
    <HStack>
      <Input
        borderColor='blue.500'
        borderWidth={2}
        height={12}
        width={400}
        value={titleInput}
        onChange={(e) => setTitleInput(e.target.value)}
      />
      <Button paddingX={8} bgColor='blue.500' color='white' onClick={handleAdd}>
        Add Todo
      </Button>
    </HStack>
  );
};

export default TodoInput;
