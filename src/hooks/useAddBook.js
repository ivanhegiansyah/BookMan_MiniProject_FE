import { useMutation } from "@apollo/client";
import { GetBook } from "../graphql/query";
import { AddBook } from "../graphql/mutation";

export default function useAddBook() {
  const [addBook, { loading: loadingAdd }] = useMutation(AddBook, {
    refetchQueries: [GetBook],
  });

  return {
    addBook,
    loadingAdd,
  };
}
