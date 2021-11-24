import { gql } from "@apollo/client";

export const GetBook = gql`
  query MyQuery {
    bookman_books {
      id
      title
      author
      publisher
      quantity
      price
    }
  }
`;
