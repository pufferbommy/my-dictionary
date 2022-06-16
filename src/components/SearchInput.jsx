// Icons
import { CgSearch } from 'react-icons/cg'

const SearchInput = ({ searchValue, setSearchValue }) => {
  const handleChange = (e) => setSearchValue(e.target.value)

  return (
    <div className="border rounded border-gray-600">
      <div className="flex items-center text-2xl">
        <input
          onChange={handleChange}
          value={searchValue}
          placeholder="Type to search..."
          type="text"
          className="p-3 text-white w-full placeholder:text-gray-300 bg-transparent outline-none tracking-wide"
        />
        <button type="submit" className="p-3 text-gray-300">
          <CgSearch />
        </button>
      </div>
    </div>
  )
}

export default SearchInput
