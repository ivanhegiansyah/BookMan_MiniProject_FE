import { useMutation } from "@apollo/client";
import { AddBook } from "../graphql/mutation";

export default function useAddBook() {
  const [addBook, { loading: loadingAdd }] = useMutation(AddBook);

  return {
    addBook,
    loadingAdd,
  };
}
