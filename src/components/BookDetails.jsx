

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './BookDetails.css'; // Import the CSS file

const BookDetails = () => {
    const { id } = useParams(); // Get the book ID from the URL parameters
    const [books, setBooks] = useState(null);
    

    // Fetch book details when the component mounts
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/${id}`);
                setBooks(response.data);
            } catch (error) {
                console.error("Error fetching book details:", error);
            }
        };

        fetchBooks();
    }, [id]);

    
    if (!books) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="book-details-container">
            <div className="book-details">
                <h2>{books.title}</h2>
                {books.imageUrl && (
                    <img 
                        src = {books.imageUrl}
                        alt = {`${books.title} Poster`}
                        className = "books-poster"
                    />
                )}
                <p>Author: {books.author}</p>
                <p>Description: {books.description}</p>
                <p>Genre: {books.genre}</p>
            </div>
        </div>
    );
};
export default BookDetails;
