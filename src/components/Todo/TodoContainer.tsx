import { gql, useQuery } from "@apollo/client";
import { VStack, Text, Stack, Progress } from "@chakra-ui/react";
import { Todo } from "../../models/todo";
import TodoClear from "./TodoClear";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

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

const TodoContainer = () => {
  const { loading, error, data } = useQuery<{ todos: Todo[] }>(GET_MY_TODOS);

  if (loading) {
    return (
      <Stack w='full'>
        <Progress size='sm' colorScheme='gray' isIndeterminate />
      </Stack>
    );
  }

  if (error) {
    console.error(error);
    return <Text>Error</Text>;
  }

  return (
    <VStack w='full' spacing={10} paddingX={48} paddingY={16}>
      <TodoInput />
      <TodoList todos={data?.todos ?? []} />
      <TodoClear />
    </VStack>
  );
};

export default TodoContainer;
