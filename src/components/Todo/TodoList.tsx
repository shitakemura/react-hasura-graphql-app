import { gql, useQuery } from "@apollo/client";
import { VStack, Text } from "@chakra-ui/react";
import { Todo } from "../../models/todo";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: Todo[];
};

const GET_MY_TODOS = gql`
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
  console.log(`todos: ${JSON.stringify(todos)}`);
  return (
    <VStack w='full' paddingX={8}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </VStack>
  );
};

const TodoListQuery = () => {
  const { loading, error, data } = useQuery(GET_MY_TODOS);

  if (loading) return null;
  if (error) {
    console.error(error);
    return <Text>Error</Text>;
  }

  return <TodoList todos={data.todos} />;
};

export default TodoListQuery;
