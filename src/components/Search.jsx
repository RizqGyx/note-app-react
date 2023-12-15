// Search.js
import React from 'react';

function Search({ handleSearch, searchQuery }) {
  return (
    <div className='text-center w-11/12 mx-auto pt-6'>
      <input
        type='text'
        placeholder='Search by title'
        value={searchQuery}
        onChange={handleSearch}
        className='border border-gray-300 rounded w-full px-5 py-2'
      />
    </div>
  );
}

export default Search;