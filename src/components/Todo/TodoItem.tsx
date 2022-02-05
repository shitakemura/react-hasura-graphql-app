import { gql, useMutation } from "@apollo/client";
import { DeleteIcon } from "@chakra-ui/icons";
import { Checkbox, HStack, Spinner, Text } from "@chakra-ui/react";
import { Todo } from "../../models/todo";
import { GET_MY_TODOS } from "./TodoList";

type TodoItemProps = {
  todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
  const { is_completed } = todo;

  const TOGGLE_TODO = gql`
    mutation toggleTodo($id: Int!, $isCompleted: Boolean!) {
      update_todos(
        where: { id: { _eq: $id } }
        _set: { is_completed: $isCompleted }
      ) {
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

  const [todoUpdate] = useMutation(TOGGLE_TODO, {
    update: (cache, { data }) => {
      const getExistingTodos: { todos: Todo[] } | null = cache.readQuery({
        query: GET_MY_TODOS,
      });
      const existingTodos = getExistingTodos?.todos ?? [];
      const newTodos = existingTodos.map((t) => {
        if (t.id === todo.id) {
          return { ...t, ...data.update_todos.returning[0] };
        } else {
          return t;
        }
      });
      cache.writeQuery({
        query: GET_MY_TODOS,
        data: { todos: newTodos },
      });
    },
  });

  const toggleTodo = () => {
    todoUpdate({
      variables: { id: todo.id, isCompleted: !todo.is_completed },
      optimisticResponse: {
        __typename: "mutation_root",
        update_todos: {
          __typename: "todos_mutation_response",
          affected_rows: 1,
          returning: [
            {
              __typename: "todos",
              id: todo.id,
              title: todo.title,
              is_completed: !todo.is_completed,
              created_at: todo.created_at,
            },
          ],
        },
      },
    });
  };

  const REMOVE_TODO = gql`
    mutation removeTodo($id: Int!) {
      delete_todos(where: { id: { _eq: $id } }) {
        affected_rows
      }
    }
  `;

  const [todoRemove, { loading }] = useMutation(REMOVE_TODO, {
    update(cache) {
      const getExistingTodos: { todos: Todo[] } | null = cache.readQuery({
        query: GET_MY_TODOS,
      });
      const existingTodos = getExistingTodos?.todos ?? [];
      const newTodos = existingTodos.filter((t) => t.id !== todo.id);
      cache.writeQuery({
        query: GET_MY_TODOS,
        data: { todos: newTodos },
      });
    },
  });

  const removeTodo = () => {
    todoRemove({
      variables: { id: todo.id },
    });
  };

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
        <Checkbox size='lg' isChecked={is_completed} onChange={toggleTodo} />
        <Text
          textDecoration={is_completed ? "line-through" : undefined}
          color={is_completed ? "gray.500" : "black"}>
          {todo.title}
        </Text>
      </HStack>
      {loading ? (
        <Spinner
          thickness='4px'
          emptyColor='gray.200'
          color='blue.500'
          size='md'
        />
      ) : (
        <DeleteIcon
          color='blue.500'
          boxSize={5}
          _hover={{ boxSize: 6 }}
          onClick={removeTodo}
        />
      )}
    </HStack>
  );
};

export default TodoItem;
