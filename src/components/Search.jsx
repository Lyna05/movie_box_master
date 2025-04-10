import searchIcon from '../assets/Search.svg';

const Search = ({ handleSearch, handleSearchChange }) => {
  // const [search, setSearch] = useState('');

  // const handleSearch = async (e) => {
  //   e.preventDefault();
  //   setSearch('');

  //   try {
  //     const data = await fetchService.getSearch(search);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="w-[60%] relative text-white ml-2">
      <form onSubmit={handleSearch}>
        <input
          placeholder="What do you want to watch?"
          className="flex items-center justify-center bg-transparent placeholder:text-[0.7rem] md:placeholder:text-sm font-normal border rounded-lg w-[90%] md:w-full md:py-[7px] py-[5px] px-2 focus:text-[0.7rem] md:focus:text-sm text-[0.7rem] md:text-sm outline-none"
          onChange={handleSearchChange}
        />
      </form>
      <img
        alt="search"
        src={searchIcon}
        className="h-[0.8rem] w-[0.8rem] md:h-[1rem] md:w-[1rem] absolute top-[28%] md:right-3 right-10 cursor-pointer hover:opacity-90"
        onClick={handleSearch}
      />
    </div>
  );
};

export default Search;
