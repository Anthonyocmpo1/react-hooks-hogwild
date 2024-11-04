import React from 'react';

const FilterSort = ({ greased, toggleGreased, handleSortChange }) => {
    const handleSelectChange = (e) => {
        handleSortChange(e.target.value);
    };

    return (
        <div>
            <div>
                <label>
                    <input 
                        type="checkbox" 
                        checked={greased}
                        onChange={toggleGreased} 
                    />
                    Show Greased
                </label>
            </div>
            <div>
                <label htmlFor="sortSelect">Sort By:</label>
                <select id="sortSelect" onChange={handleSelectChange}>
                    <option value="">Select Sorting</option>
                    <option value="name">Sort by Name</option>
                    <option value="weight">Sort by Weight</option>
                </select>
            </div>
        </div>
    );
};

export default FilterSort;
