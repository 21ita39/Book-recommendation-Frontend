

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import './Booklist.css';

// const BookList = (props) => {
//     const { filter, setFilter } = props;
//     const [books, setBooks] = useState([]);

//     useEffect(() => {
//         const fetchBooks = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3001/api/');
//                 setBooks(response.data);
//             } catch (error) {
//                 console.error("Error fetching books:", error);
//             }
//         };

//         fetchBooks();
//     }, []);

//     // Function to handle changes in the selected category
//     const handleCategoryChange = (event) => {
//         setFilter(event.target.value);
//     };

//     // Filter books based on the provided filter
//     const filteredBooks = filter && filter !== "All Categories" ? books.filter(book => book.genre === filter) : books;

//     return (
//         <div className="books-list-container">
//             <h2 className="books-list-title">Books List</h2>

//             {/* Add the dropdown menu for selecting a category */}
//             <div className='category-dropdown'>
//                 <select
//                     className='category-select'
//                     value={filter}
//                     onChange={handleCategoryChange}
//                 >
//                     {/* Render categories in the dropdown menu */}
//                     <option value="All Categories">All Categories</option>
//                     <option value="Fiction">Fiction</option>
//                     <option value="Non-fiction">Non-fiction</option>
//                     <option value="Science">Science</option>
//                     <option value="Fantasy">Fantasy</option>
//                     <option value="Biography">Biography</option>
//                     <option value="Mystery">Mystery</option>
//                     <option value="Romance">Romance</option>
//                     <option value="History">History</option>
//                     <option value="Poetry">Poetry</option>
//                     {/* Add more categories as needed */}
//                 </select>
//             </div>

//             <div className="cards-container">
//                 {/* Map through filtered books and render each as a card */}
//                 {filteredBooks.map((book) => (
//                     <div key={book._id} className="card">
//                         <h3 className="card-title"><Link to={`/api/${book._id}`}>{book.title}</Link></h3>
//                         {/* Additional book information can be added here */}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default BookList;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import './Booklist.css';

// const BookList = (props) => {
//     const { filter, setFilter } = props;
//     const [books, setBooks] = useState([]);

//     useEffect(() => {
//         const fetchBooks = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3001/api/'); // Assume '/books' endpoint returns book data with image URLs
//                 setBooks(response.data);
//             } catch (error) {
//                 console.error("Error fetching books:", error);
//             }
//         };

//         fetchBooks();
//     }, []);

//     // Function to handle changes in the selected category
//     const handleCategoryChange = (event) => {
//         setFilter(event.target.value);
//     };

//     // Filter books based on the provided filter
//     const filteredBooks = filter && filter !== "All Categories" ? books.filter(book => book.genre === filter) : books;
//     return (
//         <div className="books-list-container">
//             <h2 className="books-list-title">Books List</h2>

//             {/* Add the dropdown menu for selecting a category */}
//             <div className='category-dropdown'>
//                 <select
//                     className='category-select'
//                     value={filter}
//                     onChange={handleCategoryChange}
//                 >
//                     {/* Render categories in the dropdown menu */}
//                     <option value="All Categories">All Categories</option>
//                     <option value="Fiction">Fiction</option>
//                     <option value="Non-fiction">Non-fiction</option>
//                     <option value="Science">Science</option>
//                     <option value="Fantasy">Fantasy</option>
//                     <option value="Biography">Biography</option>
//                     <option value="Mystery">Mystery</option>
//                     <option value="Romance">Romance</option>
//                     <option value="History">History</option>
//                     <option value="Poetry">Poetry</option>
//                     {/* Add more categories as needed */}
//                 </select>
//             </div>
//             <button >Back to home</button>
//             <div className="cards-container">
//                 {/* Map through filtered books and render each as a card */}
//                 {filteredBooks.map((book) => (
//                     <div key={book._id} className="card">
//                         <img src={book.imageUrl} alt={book.title} className="card-image" />
//                         <h3 className="card-title"><Link to={`/api/${book._id}`}>{book.title}</Link></h3>
//                         {/* Additional book information can be added here */}
//                     </div>
//                 ))}
//             </div>
            
//         </div>
//     );
// };

// export default BookList;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import './Booklist.css';

// const BookList = (props) => {
//     const { filter, setFilter } = props;
//     const [books, setBooks] = useState([]);
//     const navigate = useNavigate(); // Get the navigate function

//     useEffect(() => {
//         const fetchBooks = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3001/api/'); // Assume '/books' endpoint returns book data with image URLs
//                 setBooks(response.data);
//             } catch (error) {
//                 console.error("Error fetching books:", error);
//             }
//         };

//         fetchBooks();
//     }, []);

//     // Function to handle changes in the selected category
//     const handleCategoryChange = (event) => {
//         setFilter(event.target.value);
//     };

//     // Filter books based on the provided filter
//     const filteredBooks = filter && filter !== "All Categories" ? books.filter(book => book.genre === filter) : books;

//     // Function to handle navigation back to the home page
//     const handleBackToHome = () => {
//         console.log('Back to home button clicked'); // Add a console log for debugging
//         navigate('/'); // Navigate to the home page
//     };

//     return (
//         <div className="books-list-container">
//             <h2 className="books-list-title">Books Store </h2>

//             {/* Add the dropdown menu for selecting a category */}
//             <div className='category-dropdown'>
//                 <select
//                     className='category-select'
//                     value={filter}
//                     onChange={handleCategoryChange}
//                 >
//                     {/* Render categories in the dropdown menu */}
//                     <option value="All Categories">All Categories</option>
//                     <option value="Fiction">Fiction</option>
//                     <option value="Non-fiction">Non-fiction</option>
//                     <option value="Science">Science</option>
//                     <option value="Fantasy">Fantasy</option>
//                     <option value="Biography">Biography</option>
//                     <option value="Mystery">Mystery</option>
//                     <option value="Romance">Romance</option>
//                     <option value="History">History</option>
//                     <option value="Poetry">Poetry</option>
//                     {/* Add more categories as needed */}
//                 </select>
//             </div>
//             <button onClick={handleBackToHome}>Back to home</button> {/* Add onClick handler */}
//             <div className="cards-container">
//                 {/* Map through filtered books and render each as a card */}
//                 {filteredBooks.map((book) => (
//                     <div key={book._id} className="card">
//                         <img src={book.imageUrl} alt={book.title} className="card-image" />
//                         <h3 className="card-title"><Link to={`/api/${book._id}`}>{book.title}</Link></h3>
//                         {/* Additional book information can be added here */}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default BookList;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Booklist.css';

const BookList = (props) => {
    const { filter, setFilter } = props;
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/'); // Assume '/books' endpoint returns book data with image URLs
                setBooks(response.data);
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };

        fetchBooks();
    }, []);

    const handleCategoryChange = (event) => {
        setFilter(event.target.value);
    };

    const filteredBooks = filter && filter !== "All Categories" ? books.filter(book => book.genre === filter) : books;

    const handleBackToHome = () => {
        console.log('Back to home button clicked');
        navigate('/');
    };

    return (
        <div className="books-list-container">
            <h2 className="books-list-title">Books Store</h2>

            <div className='category-dropdown'>
                <select
                    className='category-select'
                    value={filter}
                    onChange={handleCategoryChange}
                >
                    <option value="All Categories">All Categories</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Non-fiction">Non-fiction</option>
                    <option value="Science">Science</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Biography">Biography</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Romance">Romance</option>
                    <option value="History">History</option>
                    <option value="Poetry">Poetry</option>
                </select>
            </div>
            <button onClick={handleBackToHome}>Back to home</button>
            <div className="cards-container">
                {filteredBooks.map((book) => (
                    <div key={book._id} className="card">
                        <img src={book.imageUrl} alt={book.title} className="card-image" />
                        <h3 className="card-title"><Link to={`/api/${book._id}`}>{book.title}</Link></h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookList;
