/* c21da32f1da74c6b5bb754b8f5943192113d8b7d
 * This file is automatically generated by graphql-let. */

import * as Types from "graphql-let/__generated__/__types__";
import * as Apollo from '@apollo/client';
export type CurrentUserQueryVariables = Types.Exact<{
  [key: string]: never;
}>;
export type CurrentUserQuery = {
  __typename?: 'Query';
  currentUser?: {
    __typename?: 'User';
    _id: any;
    email: string;
  } | null;
};
export declare const CurrentUserDocument: Apollo.DocumentNode;
/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>): Apollo.QueryResult<CurrentUserQuery, Types.Exact<{
  [key: string]: never;
}>>;
export declare function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>): Apollo.LazyQueryResultTuple<CurrentUserQuery, Types.Exact<{
  [key: string]: never;
}>>;
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;