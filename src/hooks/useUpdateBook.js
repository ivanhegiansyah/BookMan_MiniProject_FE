import { useMutation } from "@apollo/client";
import { UpdateBook } from "../graphql/mutation";

export default function useUpdateBook() {
  const [updateBook, { loading: loadingUpdate }] = useMutation(UpdateBook);

  const editBook = (idx, Title, Author, Publisher, Quantity, Price, Images) => {
    updateBook({
      variables: {
        id: idx,
        title: Title,
        author: Author,
        publisher: Publisher,
        quantity: Quantity,
        price: Price,
        images: Images,
      },
    });
  };

  return {
    editBook,
    loadingUpdate,
  };
}
