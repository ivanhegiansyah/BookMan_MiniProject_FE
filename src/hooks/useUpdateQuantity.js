import { useMutation } from "@apollo/client";
import { UpdateQuantity } from "../graphql/mutation";

export default function useUpdateQuantity() {
  const [updateQuantity] = useMutation(UpdateQuantity);

  const updateQuantityBook = (idx, quan) => {
    updateQuantity({
      variables: {
        id: idx,
        quantity: quan,
      },
    });
  };

  return {
    updateQuantityBook,
  };
}
