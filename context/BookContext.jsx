import { createContext, useEffect, useState } from "react";

import { tablesDB, ID, Query } from "../lib/appwrite";
import useAuth from "../hooks/useAuth";

import { DATABASE_ID, BOOKS_TABLE_ID } from "../constants/appwrite";

export const BookContext = createContext(null);

const BookProvider = ({ children }) => {
  const { user, authCheck } = useAuth();

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch logged-in user's books
  const fetchBooks = async () => {
    if (!user) {
      setBooks([]);
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await tablesDB.listRows({
        databaseId: DATABASE_ID,
        tableId: BOOKS_TABLE_ID,

        queries: [Query.equal("userId", user.$id)],
      });

      setBooks(response.rows);
    } catch (error) {
      console.log("Fetch Books Error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Create a new book
  const createBook = async (title, author, description, rating) => {
    if (!user) {
      throw new Error("User is not logged in.");
    }

    try {
      setLoading(true);
      setError("");

      const newBook = await tablesDB.createRow({
        databaseId: DATABASE_ID,
        tableId: BOOKS_TABLE_ID,
        rowId: ID.unique(),

        data: {
          title,
          author,
          description,
          rating,
          userId: user.$id,
        },
      });

      setBooks((prevBooks) => [newBook, ...prevBooks]);

      return newBook;
    } catch (error) {
      console.log("Create Book Error:", error);
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Update an existing book
  const updateBook = async (bookId, title, author, description, rating) => {
    try {
      setLoading(true);
      setError("");

      const updatedBook = await tablesDB.updateRow({
        databaseId: DATABASE_ID,
        tableId: BOOKS_TABLE_ID,
        rowId: bookId,

        data: {
          title,
          author,
          description,
          rating,
        },
      });

      setBooks((prevBooks) =>
        prevBooks.map((book) => (book.$id === bookId ? updatedBook : book)),
      );

      return updatedBook;
    } catch (error) {
      console.log("Update Book Error:", error);
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Delete a book
  const deleteBook = async (bookId) => {
    try {
      setLoading(true);
      setError("");

      await tablesDB.deleteRow({
        databaseId: DATABASE_ID,
        tableId: BOOKS_TABLE_ID,
        rowId: bookId,
      });

      setBooks((prevBooks) => prevBooks.filter((book) => book.$id !== bookId));
    } catch (error) {
      console.log("Delete Book Error:", error);
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Fetch books after authentication is checked
  useEffect(() => {
    if (authCheck) {
      fetchBooks();
    }
  }, [authCheck, user]);

  const value = {
    books,
    loading,
    error,

    fetchBooks,
    createBook,
    updateBook,
    deleteBook,
  };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};

export default BookProvider;
