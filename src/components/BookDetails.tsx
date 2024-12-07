import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookDetails = () => {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        // Prepend the missing slash for API call
        const response = await axios.get(
          `https://openlibrary.org/works/${id}.json`
        );
        setBookDetails(response.data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (!bookDetails) {
    return <p>Loading book details...</p>;
  }

  const coverImage = bookDetails.covers
    ? `https://covers.openlibrary.org/b/id/${bookDetails.covers[0]}-L.jpg`
    : 'https://via.placeholder.com/150?text=No+Image';

  return (
    <div className="book-details">
      <img src={coverImage} alt={bookDetails.title} className="book-image" />
      <h2>{bookDetails.title}</h2>
      <p>
        <strong>Description:</strong> {bookDetails.description?.value || 'N/A'}
      </p>
      <p>
        <strong>Subjects:</strong> {bookDetails.subjects?.join(', ') || 'N/A'}
      </p>
      <p>
        <strong>First Published:</strong>{' '}
        {bookDetails.first_publish_date || 'N/A'}
      </p>
    </div>
  );
};

export default BookDetails;
