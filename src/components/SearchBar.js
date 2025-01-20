import React, { useState } from 'react';
import "../css/SearchBar.css";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div>
            <input 
                type="text" 
                value={query} 
                onChange={(e) => {
                    handleInputChange(e);
                    handleSearch();
                }} 
                placeholder="Search..." 
                className='search-bar'
            />
        </div>
    );
};

export default SearchBar;