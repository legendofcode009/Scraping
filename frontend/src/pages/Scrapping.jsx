import { useEffect, useState, useCallback } from "react";
import toast from "react-hot-toast";

// Components
import Search from "../components/Search";
import SortRepos from "../components/SortRepos";
import Spinner from "../components/Spinner";

const Scrapping = () => {
  const [books, setBooks] = useState([]); // stores all books
  const [filteredBooks, setFilteredBooks] = useState([]); // stores filtered books based on search
  const [loading, setLoading] = useState(false);

  // Fetch the books from the backend scraping endpoint
  const getBooks = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/scrape-books");
      if (!res.ok) throw new Error("Failed to fetch books");

      const booksData = await res.json();
      setBooks(booksData); // Save all fetched books in `books`
      setFilteredBooks(booksData); // Initially display all books
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  const onSearch = async (e, query) => {
    e.preventDefault();

    setLoading(true);

    // Filter books based on the search query
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );

    // Update the filteredBooks state
    setFilteredBooks(filteredBooks);
    setLoading(false);
  };

  return (
    <div className="m-4">
      <Search onSearch={onSearch} />
      <SortRepos />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredBooks.length > 0 && !loading ? (
          filteredBooks.map((book, index) => (
            <div
              key={index}
              className="border p-4 rounded shadow hover:shadow-lg transition"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3
                className="text-lg h-12 justify-content-center font-semibold truncate"
                data-tooltip={book.title}
              >
                {book.title}
              </h3>
              <p className="text-green-600">{book.price}</p>
              <p className="text-gray-500">{book.availability}</p>
              <p className="mt-2 text-yellow-500">
                {"★".repeat(
                  ["One", "Two", "Three", "Four", "Five"].indexOf(book.rating) +
                    1
                )}
              </p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded  hover:bg-blue-600">
                Add to Basket
              </button>
            </div>
          ))
        ) : loading ? (
          <Spinner />
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
};

export default Scrapping;
