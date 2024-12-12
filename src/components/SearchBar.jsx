import PropTypes from "prop-types"; // Import PropTypes for validation

const SearchBar = ({ onSearch }) => {
  const handleSearch = (event) => {
    event.preventDefault();

    // Safely get the query from the input field
    const query = event.target.query.value.trim();
    if (!query) return; // Prevent empty searches

    // Call the onSearch function passed as a prop
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="mb-4">
      <input
        name="query"
        type="text"
        placeholder="Search recipes..."
        className="p-2 border border-gray-300 rounded w-full"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded mt-2">
        Search
      </button>
    </form>
  );
};

// Add PropTypes validation
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired, // Ensure onSearch is passed and is a function
};

export default SearchBar;
