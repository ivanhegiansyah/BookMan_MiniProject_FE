import { gql } from "@apollo/client";

export const AddBook = gql`
  mutation MyMutation(
    $title: String!
    $author: String!
    $publisher: String!
    $quantity: Int!
    $price: Int!
  ) {
    insert_bookman_books_one(
      object: {
        title: $title
        author: $author
        publisher: $publisher
        quantity: $quantity
        price: $price
      }
    ) {
      id
    }
  }
`;
