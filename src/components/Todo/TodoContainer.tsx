import { gql, useQuery } from "@apollo/client";
import { VStack, Text, Stack, Progress } from "@chakra-ui/react";
import { useState } from "react";
import { Todo } from "../../models/todo";
import TodoClear from "./TodoClear";
import TodoFilter from "./TodoFilter";
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

export const FILTER_VALUES = ["ALL", "COMPLETED", "NOT COMPLETED"] as const;
type FilterTuple = typeof FILTER_VALUES;
export type Filter = FilterTuple[number];

const TodoContainer = () => {
  const { loading, error, data } = useQuery<{ todos: Todo[] }>(GET_MY_TODOS);
  const [filter, setFilter] = useState<Filter>("ALL");

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
      <TodoFilter filter={filter} setFilter={setFilter} />
      <TodoList
        todos={
          filter === "ALL"
            ? data?.todos ?? []
            : filter === "COMPLETED"
            ? data?.todos.filter((todo) => todo.is_completed) ?? []
            : data?.todos.filter((todo) => !todo.is_completed) ?? []
        }
      />
      {filter !== "NOT COMPLETED" ? <TodoClear /> : null}
    </VStack>
  );
};

export default TodoContainer;
