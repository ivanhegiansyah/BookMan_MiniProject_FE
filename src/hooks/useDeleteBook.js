import { useMutation } from "@apollo/client";
import { DeleteBook } from "../graphql/mutation";

export default function useDeleteBook() {
  const [deleteBook, { loading: loadingDelete }] = useMutation(DeleteBook);

  const delBook = (idx) => {
    deleteBook({
      variables: {
        id: idx,
      },
    });
  };

  return {
    delBook,
    loadingDelete,
  };
}
