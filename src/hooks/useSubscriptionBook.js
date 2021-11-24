import { useSubscription } from "@apollo/client";
import { SubscriptionBook } from "../graphql/subscribe";

export default function useSubscriptionBook() {
  const { data, loading } = useSubscription(SubscriptionBook);

  return {
    data,
    loading,
  };
}
