import { Button, HStack } from "@chakra-ui/react";
import { Filter, FILTER_VALUES } from "./TodoContainer";

type TodoFilterProps = {
  filter: Filter;
  setFilter: (filter: Filter) => void;
};

const TodoFilter = ({ filter, setFilter }: TodoFilterProps) => {
  return (
    <HStack>
      {FILTER_VALUES.map((filterValue) => (
        <Button
          key={filterValue}
          _hover={{ bgColor: filter === filterValue ? "blue.500" : undefined }}
          bgColor={filter === filterValue ? "blue.500" : undefined}
          color={filter === filterValue ? "white" : undefined}
          onClick={() => setFilter(filterValue)}>
          {filterValue}
        </Button>
      ))}
    </HStack>
  );
};

export default TodoFilter;
