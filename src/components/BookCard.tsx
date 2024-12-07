import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  const coverImage = book.cover_id
    ? `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`
    : 'https://via.placeholder.com/150?text=No+Image';

  const str = '/works/OL450063W';
  const key = str.split('/works/')[1];

  return (
    <Link to={`/book/${key}`} className="book-card">
      <img src={coverImage} alt={book.title} className="book-image" />
      <h3>{book.title}</h3>
      <p>
        <strong>Author:</strong>{' '}
        {book.authors?.map((author) => author.name).join(', ') || 'Unknown'}
      </p>
    </Link>
  );
};

export default BookCard;
