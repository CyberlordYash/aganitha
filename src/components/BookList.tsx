import React, { useState } from "react";
import BookCard from "./BookCard";


const BookList = ({ books }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter books based on the search query
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="book-list">
      <input
        type="text"
        placeholder="Search for books..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />
      {filteredBooks.length > 0 ? (
        <div className="books-grid">
          {filteredBooks.map((book) => (
            <BookCard key={book.key} book={book} />
          ))}
        </div>
      ) : (
        <p>No books found.</p>
      )}
    </div>
  );
};

export default BookList;
