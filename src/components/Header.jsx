// import React, { useState } from 'react';
// import './Header.css';
// import logo from '../assets/logo.jpg';
// import { FaSearch } from 'react-icons/fa';
// import { useLocation, Link } from 'react-router-dom'; // Import useLocation hook and Link component

// function Header(props) {
//     const { setFilter, filter } = props;
//     const [searchQuery, setSearchQuery] = useState('');
//     const location = useLocation(); // Get the current location using useLocation hook

//     const categories = [
//         'All Categories',
//         'Fiction',
//         'Non-fiction',
//         'Science',
//         'Fantasy',
//         'Biography',
//         'Mystery',
//         'Romance',
//         'History',
//         'Poetry',
//         // Add more categories as needed
//     ];

//     const handleSearchChange = (event) => {
//         setSearchQuery(event.target.value);
//     };

//     const handleCategoryChange = (event) => {
//         setFilter(event.target.value);
//     };

//     return (
//         <header className='header-container'>
//             <div className='header-content'>
//                 <img src={logo} alt='App Logo' className='app-logo' />
//                 <nav className='navigation'>
//                     <ul className='nav-list'>
//                         <li><a href='#' className='nav-link'>Home</a></li>
//                         {/* Replace anchor tag with Link */}
//                         <li><Link to="/booklist" className='nav-link'>Categories</Link></li>
//                     </ul>
//                 </nav>
                
//                 {/* Render search input and icon always, but exclude category dropdown only on the homepage */}
//                 <div className='search-container'>
//                     <input
//                         type='text'
//                         placeholder='Search...'
//                         className='search-input'
//                         value={searchQuery}
//                         onChange={handleSearchChange}
//                     />
//                     <FaSearch className='search-icon' />
//                 </div>
//                 {location.pathname !== '/' && (
//                     <div className='category-dropdown'>
//                         <select
//                             className='category-select'
//                             value={filter}
//                             onChange={handleCategoryChange}
//                         >
//                             {categories.map((category, index) => (
//                                 <option key={index} value={category}>
//                                     {category}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>
//                 )}
//             </div>
//         </header>
//     );
// }

// export default Header;

// import React, { useState, useEffect } from 'react';
// import './Header.css';
// import logo from '../assets/logo.jpg';
// import { FaSearch } from 'react-icons/fa';
// import { useLocation, Link } from 'react-router-dom'; // Import useLocation hook and Link component

// function Header(props) {
//     const { setFilter } = props;
//     const [searchQuery, setSearchQuery] = useState('');
//     const [selectedCategory, setSelectedCategory] = useState('All Categories');
//     const location = useLocation();

//     useEffect(() => {
//         applyFilters();
//     }, [searchQuery, selectedCategory]);

//     const applyFilters = () => {
//         const filtered = {
//             query: searchQuery.toLowerCase(),
//             category: selectedCategory.toLowerCase()
//         };
//         setFilter(filtered);
//     };

//     const handleSearchChange = (event) => {
//         setSearchQuery(event.target.value);
//     };

//     const handleCategoryChange = (event) => {
//         setSelectedCategory(event.target.value);
//     };

//     return (
//         <header className='header-container'>
//             <div className='header-content'>
//                 <img src={logo} alt='App Logo' className='app-logo' />
//                 <nav className='navigation'>
//                     <ul className='nav-list'>
//                         <li><a href='#' className='nav-link'>Home</a></li>
//                         <li><Link to="/booklist" className='nav-link'>Categories</Link></li>
//                     </ul>
//                 </nav>
                
//                 <div className='search-container'>
//                     <input
//                         type='text'
//                         placeholder='Search...'
//                         className='search-input'
//                         value={searchQuery}
//                         onChange={handleSearchChange}
//                     />
//                     <FaSearch className='search-icon' />
//                 </div>
//                 {location.pathname !== '/' && (
//                     <div className='category-dropdown'>
//                         <select
//                             className='category-select'
//                             value={selectedCategory}
//                             onChange={handleCategoryChange}
//                         >
//                             <option value='All Categories'>All Categories</option>
//                             {/* Render category options here */}
//                         </select>
//                     </div>
//                 )}
//             </div>
//         </header>
//     );
// }

// export default Header;


import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Header.css';
import { FaSearch } from 'react-icons/fa';
import logo from '../assets/logo.jpg';

const Header = (props) => {
  const { setFilter } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track authentication status
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  useEffect(() => {
    // Check if the user has a token in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true); // Set isLoggedIn to true if token exists
    } else {
      setIsLoggedIn(false); // Set isLoggedIn to false if token does not exist
    }
  }, []);

  useEffect(() => {
    applyFilters();
  }, [searchQuery, selectedCategory]);

  const applyFilters = () => {
    const filtered = {
      query: searchQuery.toLowerCase(),
      category: selectedCategory.toLowerCase()
    };
    setFilter(filtered);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false); // Update isLoggedIn to false when logging out
    navigate('/');
  };

  return (
    <div className='header'>
    <header className='header-container'>
      <div className='header-content'>
        <img src={logo} alt='App Logo' className='app-logo' />
        <nav className='navigation'>
          <ul className='nav-list'>
            
            {/* <li><Link to="/booklist" className='nav-link'>Categories</Link></li> */}
            {!isLoggedIn && ( // Display Login and Signup links if not logged in
              <>
                <li><Link to="/login" className='nav-link'>Login</Link></li>
                <li><Link to="/signup" className='nav-link'>Signup</Link></li>
              </>
            )}
            {isLoggedIn && ( // Display Logout button if logged in
              <li><button onClick={handleLogout} className='nav-link'>Logout</button></li>
            )}
          </ul>
        </nav>

        <div className='search-container'>
          <input
            type='text'
            placeholder='Search...'
            className='search-input'
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <FaSearch className='search-icon' />
        </div>

        
      </div>
    </header>
    </div>
  );
};

export default Header;
