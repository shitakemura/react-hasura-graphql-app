import { gql, useMutation } from "@apollo/client";
import { Button, HStack, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Todo } from "../../models/todo";
import { GET_MY_TODOS } from "./TodoList";

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

  const resetTitleInput = () => setTitleInput("");
  const [addTodo] = useMutation<
    { insert_todos: { returning: Todo[] } },
    { title: string }
  >(ADD_TODO, { onCompleted: resetTitleInput });

  const handleAdd = () => {
    addTodo({
      variables: { title: titleInput },
      update(cache, { data }) {
        const getExistingTodos: { todos: Todo[] } | null = cache.readQuery({
          query: GET_MY_TODOS,
        });
        const existingTodos = getExistingTodos?.todos ?? [];
        const newTodo = data?.insert_todos.returning[0];

        cache.writeQuery({
          query: GET_MY_TODOS,
          data: { todos: [newTodo, ...existingTodos] },
        });
      },
    });
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
