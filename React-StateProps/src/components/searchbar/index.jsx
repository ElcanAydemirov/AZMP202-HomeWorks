import React from 'react';
import './index.css';

const SearchBar = ({ searchQuery, setSearchQuery, data, setFilteredData }) => {
    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase().trim(); 
        setSearchQuery(query);

        if (query) {
            const filtered = data.filter((task) =>
                task.value.toLowerCase().includes(query)
            );

            setFilteredData(filtered);
        } else {
            setFilteredData([]); 
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search tasks..."
                className="search-input"
            />
        </div>
    );
};

export default SearchBar;
