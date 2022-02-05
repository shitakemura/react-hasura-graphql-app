import { gql, useMutation } from "@apollo/client";
import { Button } from "@chakra-ui/react";
import { Todo } from "../../models/todo";
import { GET_MY_TODOS } from "./TodoList";

const TodoClear = () => {
  const CLEAR_COMPLETED = gql`
    mutation clearCompleted {
      delete_todos(where: { is_completed: { _eq: true } }) {
        affected_rows
      }
    }
  `;

  const [clearTodos, { loading }] = useMutation(CLEAR_COMPLETED, {
    update(cache) {
      const getExistingTodos: { todos: Todo[] } | null = cache.readQuery({
        query: GET_MY_TODOS,
      });
      const existingTodos = getExistingTodos?.todos ?? [];
      const newTodos = existingTodos.filter((t) => !t.is_completed);
      cache.writeQuery({ query: GET_MY_TODOS, data: { todos: newTodos } });
    },
  });

  const clearCompleted = () => {
    clearTodos();
  };

  return (
    <Button
      paddingX={8}
      borderColor='pink.500'
      borderWidth={1}
      bgColor='white'
      color='pink.500'
      isLoading={loading}
      onClick={clearCompleted}>
      Clear checked todos
    </Button>
  );
};

export default TodoClear;
