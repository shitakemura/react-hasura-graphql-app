import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "todos" */
  delete_todos?: Maybe<Todos_Mutation_Response>;
  /** delete single row from the table: "todos" */
  delete_todos_by_pk?: Maybe<Todos>;
  /** insert data into the table: "todos" */
  insert_todos?: Maybe<Todos_Mutation_Response>;
  /** insert a single row into the table: "todos" */
  insert_todos_one?: Maybe<Todos>;
  /** update data of the table: "todos" */
  update_todos?: Maybe<Todos_Mutation_Response>;
  /** update single row of the table: "todos" */
  update_todos_by_pk?: Maybe<Todos>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_TodosArgs = {
  where: Todos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Todos_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_TodosArgs = {
  objects: Array<Todos_Insert_Input>;
  on_conflict?: InputMaybe<Todos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Todos_OneArgs = {
  object: Todos_Insert_Input;
  on_conflict?: InputMaybe<Todos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_TodosArgs = {
  _set?: InputMaybe<Todos_Set_Input>;
  where: Todos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Todos_By_PkArgs = {
  _set?: InputMaybe<Todos_Set_Input>;
  pk_columns: Todos_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "todos" */
  todos: Array<Todos>;
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk?: Maybe<Todos>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootTodosArgs = {
  distinct_on?: InputMaybe<Array<Todos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Todos_Order_By>>;
  where?: InputMaybe<Todos_Bool_Exp>;
};


export type Query_RootTodos_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "todos" */
  todos: Array<Todos>;
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk?: Maybe<Todos>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootTodosArgs = {
  distinct_on?: InputMaybe<Array<Todos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Todos_Order_By>>;
  where?: InputMaybe<Todos_Bool_Exp>;
};


export type Subscription_RootTodos_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "todos" */
export type Todos = {
  __typename?: 'todos';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  is_completed: Scalars['Boolean'];
  title: Scalars['String'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};

/** Boolean expression to filter rows from the table "todos". All fields are combined with a logical 'AND'. */
export type Todos_Bool_Exp = {
  _and?: InputMaybe<Array<Todos_Bool_Exp>>;
  _not?: InputMaybe<Todos_Bool_Exp>;
  _or?: InputMaybe<Array<Todos_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_completed?: InputMaybe<Boolean_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "todos" */
export enum Todos_Constraint {
  /** unique or primary key constraint */
  TodosPkey = 'todos_pkey'
}

/** input type for inserting data into table "todos" */
export type Todos_Insert_Input = {
  title?: InputMaybe<Scalars['String']>;
};

/** response of any mutation on the table "todos" */
export type Todos_Mutation_Response = {
  __typename?: 'todos_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Todos>;
};

/** on conflict condition type for table "todos" */
export type Todos_On_Conflict = {
  constraint: Todos_Constraint;
  update_columns?: Array<Todos_Update_Column>;
  where?: InputMaybe<Todos_Bool_Exp>;
};

/** Ordering options when selecting data from "todos". */
export type Todos_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_completed?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: todos */
export type Todos_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "todos" */
export enum Todos_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsCompleted = 'is_completed',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "todos" */
export type Todos_Set_Input = {
  is_completed?: InputMaybe<Scalars['Boolean']>;
};

/** update columns of table "todos" */
export enum Todos_Update_Column {
  /** column name */
  IsCompleted = 'is_completed'
}

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  id: Scalars['String'];
  name: Scalars['String'];
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  last_seen?: InputMaybe<Scalars['timestamptz']>;
};

export type ClearCompletedMutationVariables = Exact<{ [key: string]: never; }>;


export type ClearCompletedMutation = { __typename?: 'mutation_root', delete_todos?: { __typename?: 'todos_mutation_response', affected_rows: number } | null };

export type GetMyTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyTodosQuery = { __typename?: 'query_root', todos: Array<{ __typename?: 'todos', id: number, title: string, is_completed: boolean, created_at: any }> };

export type Unnamed_1_MutationVariables = Exact<{
  title: Scalars['String'];
}>;


export type Unnamed_1_Mutation = { __typename?: 'mutation_root', insert_todos?: { __typename?: 'todos_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'todos', id: number, title: string, is_completed: boolean, created_at: any }> } | null };

export type ToggleTodoMutationVariables = Exact<{
  id: Scalars['Int'];
  isCompleted: Scalars['Boolean'];
}>;


export type ToggleTodoMutation = { __typename?: 'mutation_root', update_todos?: { __typename?: 'todos_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'todos', id: number, title: string, is_completed: boolean, created_at: any }> } | null };

export type RemoveTodoMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type RemoveTodoMutation = { __typename?: 'mutation_root', delete_todos?: { __typename?: 'todos_mutation_response', affected_rows: number } | null };


export const ClearCompletedDocument = gql`
    mutation clearCompleted {
  delete_todos(where: {is_completed: {_eq: true}}) {
    affected_rows
  }
}
    `;
export type ClearCompletedMutationFn = Apollo.MutationFunction<ClearCompletedMutation, ClearCompletedMutationVariables>;

/**
 * __useClearCompletedMutation__
 *
 * To run a mutation, you first call `useClearCompletedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClearCompletedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clearCompletedMutation, { data, loading, error }] = useClearCompletedMutation({
 *   variables: {
 *   },
 * });
 */
export function useClearCompletedMutation(baseOptions?: Apollo.MutationHookOptions<ClearCompletedMutation, ClearCompletedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ClearCompletedMutation, ClearCompletedMutationVariables>(ClearCompletedDocument, options);
      }
export type ClearCompletedMutationHookResult = ReturnType<typeof useClearCompletedMutation>;
export type ClearCompletedMutationResult = Apollo.MutationResult<ClearCompletedMutation>;
export type ClearCompletedMutationOptions = Apollo.BaseMutationOptions<ClearCompletedMutation, ClearCompletedMutationVariables>;
export const GetMyTodosDocument = gql`
    query getMyTodos {
  todos(order_by: {created_at: desc}) {
    id
    title
    is_completed
    created_at
  }
}
    `;

/**
 * __useGetMyTodosQuery__
 *
 * To run a query within a React component, call `useGetMyTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyTodosQuery(baseOptions?: Apollo.QueryHookOptions<GetMyTodosQuery, GetMyTodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyTodosQuery, GetMyTodosQueryVariables>(GetMyTodosDocument, options);
      }
export function useGetMyTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyTodosQuery, GetMyTodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyTodosQuery, GetMyTodosQueryVariables>(GetMyTodosDocument, options);
        }
export type GetMyTodosQueryHookResult = ReturnType<typeof useGetMyTodosQuery>;
export type GetMyTodosLazyQueryHookResult = ReturnType<typeof useGetMyTodosLazyQuery>;
export type GetMyTodosQueryResult = Apollo.QueryResult<GetMyTodosQuery, GetMyTodosQueryVariables>;
export const Document = gql`
    mutation ($title: String!) {
  insert_todos(objects: {title: $title}) {
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
export type MutationFn = Apollo.MutationFunction<Mutation, MutationVariables>;

/**
 * __useMutation__
 *
 * To run a mutation, you first call `useMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mutation, { data, loading, error }] = useMutation({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useMutation(baseOptions?: Apollo.MutationHookOptions<Mutation, MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Mutation, MutationVariables>(Document, options);
      }
export type MutationHookResult = ReturnType<typeof useMutation>;
export type MutationResult = Apollo.MutationResult<Mutation>;
export type MutationOptions = Apollo.BaseMutationOptions<Mutation, MutationVariables>;
export const ToggleTodoDocument = gql`
    mutation toggleTodo($id: Int!, $isCompleted: Boolean!) {
  update_todos(where: {id: {_eq: $id}}, _set: {is_completed: $isCompleted}) {
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
export type ToggleTodoMutationFn = Apollo.MutationFunction<ToggleTodoMutation, ToggleTodoMutationVariables>;

/**
 * __useToggleTodoMutation__
 *
 * To run a mutation, you first call `useToggleTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleTodoMutation, { data, loading, error }] = useToggleTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      isCompleted: // value for 'isCompleted'
 *   },
 * });
 */
export function useToggleTodoMutation(baseOptions?: Apollo.MutationHookOptions<ToggleTodoMutation, ToggleTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleTodoMutation, ToggleTodoMutationVariables>(ToggleTodoDocument, options);
      }
export type ToggleTodoMutationHookResult = ReturnType<typeof useToggleTodoMutation>;
export type ToggleTodoMutationResult = Apollo.MutationResult<ToggleTodoMutation>;
export type ToggleTodoMutationOptions = Apollo.BaseMutationOptions<ToggleTodoMutation, ToggleTodoMutationVariables>;
export const RemoveTodoDocument = gql`
    mutation removeTodo($id: Int!) {
  delete_todos(where: {id: {_eq: $id}}) {
    affected_rows
  }
}
    `;
export type RemoveTodoMutationFn = Apollo.MutationFunction<RemoveTodoMutation, RemoveTodoMutationVariables>;

/**
 * __useRemoveTodoMutation__
 *
 * To run a mutation, you first call `useRemoveTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeTodoMutation, { data, loading, error }] = useRemoveTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveTodoMutation(baseOptions?: Apollo.MutationHookOptions<RemoveTodoMutation, RemoveTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveTodoMutation, RemoveTodoMutationVariables>(RemoveTodoDocument, options);
      }
export type RemoveTodoMutationHookResult = ReturnType<typeof useRemoveTodoMutation>;
export type RemoveTodoMutationResult = Apollo.MutationResult<RemoveTodoMutation>;
export type RemoveTodoMutationOptions = Apollo.BaseMutationOptions<RemoveTodoMutation, RemoveTodoMutationVariables>;