import { gql } from "@apollo/client";

export const AddBook = gql`
  mutation MyMutation(
    $title: String!
    $author: String!
    $publisher: String!
    $quantity: Int!
    $price: Int!
    $images: String!
  ) {
    insert_bookman_books_one(
      object: {
        title: $title
        author: $author
        publisher: $publisher
        quantity: $quantity
        price: $price
        images: $images
      }
    ) {
      id
    }
  }
`;

export const DeleteBook = gql`
  mutation MyMutation($id: Int!) {
    delete_bookman_books_by_pk(id: $id) {
      id
    }
  }
`;

export const UpdateBook = gql`
  mutation MyMutation(
    $id: Int!
    $title: String!
    $author: String!
    $publisher: String!
    $quantity: Int!
    $price: Int!
    $images: String!
  ) {
    update_bookman_books_by_pk(
      pk_columns: { id: $id }
      _set: {
        title: $title
        author: $author
        publisher: $publisher
        quantity: $quantity
        price: $price
        images: $images
      }
    ) {
      id
    }
  }
`;

export const UpdateQuantity = gql`
  mutation MyMutation($id: Int!, $quantity: Int!) {
    update_bookman_books_by_pk(
      pk_columns: { id: $id }
      _set: { quantity: $quantity }
    ) {
      id
    }
  }
`;
