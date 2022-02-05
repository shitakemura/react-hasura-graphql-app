import { gql } from "@apollo/client";
import { VStack } from "@chakra-ui/react";
import { Todo } from "../../models/todo";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: Todo[];
};

export const GET_MY_TODOS = gql`
  query getMyTodos {
    todos(order_by: { created_at: desc }) {
      id
      title
      is_completed
      created_at
    }
  }
`;

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <VStack w='full' paddingX={8}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </VStack>
  );
};

export default TodoList;
