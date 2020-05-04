import React, { useState } from 'react';

const Navbar = ({ searchVideos }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    searchVideos(searchTerm);
  };
  return (
    <form
      className='w-10/12 md:w-full max-w-sm mt-4 mb-6 mx-auto'
      onSubmit={handleSubmit}
    >
      <div className='flex items-center border-b border-b-2 border-teal-500 py-2'>
        <input
          className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight text-lg md:text-2xl focus:outline-none'
          type='text'
          placeholder='Search for videos....'
          onChange={handleChange}
          required
        />
        <button className='focus:outline-none' type='submit'>
          <i className='fas fa-search py-1 px-2 flex-shrink-0 text-xl md:text-2xl text-blue-400 hover:text-blue-600' />
        </button>
      </div>
    </form>
  );
};

export default Navbar;
