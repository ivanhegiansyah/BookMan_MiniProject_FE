import { useSubscription } from "@apollo/client";
import { SubscribeBook } from "../graphql/subscribe";

export default function useSubscribeBook() {
  const { data, loading } = useSubscription(SubscribeBook);

  return {
    data,
    loading,
  };
}
