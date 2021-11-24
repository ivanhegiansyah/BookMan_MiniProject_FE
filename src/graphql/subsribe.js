import { gql } from "@apollo/client";

export const SubscriptionBook = gql`
  subscription MySubscription {
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
